import { useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { RegionProvider } from "@/hooks/useRegion";
import RegionErrorBoundary from "@/components/RegionErrorBoundary";

const RegionLayout = () => {
  const { region: regionParam } = useParams<{ region: string }>();
  // Default to UK when no region segment is present (e.g. root "/")
  const region = regionParam ?? "uk";
  const navigate = useNavigate();

  // Redirect invalid regions to /uk
  useEffect(() => {
    if (regionParam && regionParam !== "uk" && regionParam !== "us") {
      navigate("/uk", { replace: true });
    }
  }, [regionParam, navigate]);

  // Intercept clicks on internal <a> tags to auto-prefix with region
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external links, anchors, already-prefixed links
      if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) return;
      if (href.startsWith(`/${region}/`) || href === `/${region}`) return;

      // Skip links that already have a region prefix
      if (href.startsWith("/uk/") || href.startsWith("/us/") || href === "/uk" || href === "/us") return;

      // Prefix with current region
      e.preventDefault();
      const prefixed = `/${region}${href.startsWith("/") ? href : `/${href}`}`;
      navigate(prefixed);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [region, navigate]);

  return (
    <RegionProvider>
      <RegionErrorBoundary region={region || "uk"}>
        <Outlet />
      </RegionErrorBoundary>
    </RegionProvider>
  );
};

export default RegionLayout;

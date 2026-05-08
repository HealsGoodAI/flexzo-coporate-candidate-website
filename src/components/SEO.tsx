import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const SITE_NAME = "Flexzo";
const BASE_URL = "https://flexzo.ai";
const DEFAULT_DESCRIPTION =
  "Flexzo – AI-powered healthcare staffing platform. Smarter workforce management for hospitals, primary care, pharmacy and social care.";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | AI-Powered Healthcare Staffing Platform`;
  const canonicalUrl = `${BASE_URL}${path}`;

  // Compute hreflang alternates by swapping /uk and /us prefixes
  const regionMatch = path.match(/^\/(uk|us)(\/.*|$)/);
  const ukAlt = regionMatch ? `${BASE_URL}/uk${regionMatch[2]}` : null;
  const usAlt = regionMatch ? `${BASE_URL}/us${regionMatch[2]}` : null;

  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Hreflang alternates for region-scoped pages */}
      {ukAlt && <link rel="alternate" hrefLang="en-GB" href={ukAlt} />}
      {usAlt && <link rel="alternate" hrefLang="en-US" href={usAlt} />}
      {ukAlt && <link rel="alternate" hrefLang="x-default" href={ukAlt} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || SITE_NAME} />
      <meta property="og:locale" content={regionMatch?.[1] === "us" ? "en_US" : "en_GB"} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FlexzoAi" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

// Reusable JSON-LD schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Flexzo",
  url: "https://flexzo.ai",
  logo: "https://flexzo.ai/Flexzo-Logo.svg",
  description: "AI-powered healthcare staffing platform for NHS Trusts, hospitals, primary care, pharmacy and social care.",
  sameAs: [
    "https://www.linkedin.com/company/flexzo-ai",
    "https://www.instagram.com/flexzoai/",
    "https://www.tiktok.com/@flexzoai",
    "https://x.com/FlexzoAi",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://flexzo.ai/uk/register",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Flexzo",
  url: "https://flexzo.ai",
  description: "AI-powered healthcare staffing platform. Smarter workforce management for hospitals, primary care, pharmacy and social care.",
  publisher: {
    "@type": "Organization",
    name: "Flexzo",
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `https://flexzo.ai${item.url}`,
  })),
});

// JobPosting schema for individual job pages (Google Jobs eligibility)
export const jobPostingSchema = (job: {
  title: string;
  description: string;
  datePosted?: string;
  validThrough?: string;
  employmentType?: string;
  hiringOrganization?: string;
  location?: string;
  region?: "uk" | "us";
  salary?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.description,
  datePosted: job.datePosted,
  validThrough: job.validThrough,
  employmentType: job.employmentType || "CONTRACTOR",
  hiringOrganization: {
    "@type": "Organization",
    name: job.hiringOrganization || "Flexzo",
    sameAs: "https://flexzo.ai",
    logo: "https://flexzo.ai/Flexzo-Logo.svg",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: job.location || (job.region === "us" ? "United States" : "United Kingdom"),
      addressCountry: job.region === "us" ? "US" : "GB",
    },
  },
  directApply: true,
  url: `https://flexzo.ai${job.url}`,
});

export default SEO;

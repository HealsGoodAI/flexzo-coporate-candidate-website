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

// --- JobPosting helpers ---------------------------------------------------

/** Convert dates like "10 February 2026", "2026-03-03", "ASAP" → ISO YYYY-MM-DD or undefined. */
const toIsoDate = (input?: string): string | undefined => {
  if (!input) return undefined;
  const s = input.trim();
  if (!s || /^(open|asap|tbc|tba|n\/a)$/i.test(s)) return undefined;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const d = new Date(s);
  if (!isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  return undefined;
};

/** Map free-text contract/working-pattern strings to Google's employmentType enum. */
const toEmploymentType = (input?: string): string | string[] => {
  if (!input) return "CONTRACTOR";
  const s = input.toLowerCase();
  const types: string[] = [];
  if (/full[\s-]?time|permanent/.test(s)) types.push("FULL_TIME");
  if (/part[\s-]?time/.test(s)) types.push("PART_TIME");
  if (/locum|bank|agency|contract|self[\s-]?employed/.test(s)) types.push("CONTRACTOR");
  if (/temp|fixed[\s-]?term|secondment/.test(s)) types.push("TEMPORARY");
  if (/intern/.test(s)) types.push("INTERN");
  if (/volunteer/.test(s)) types.push("VOLUNTEER");
  if (/per[\s-]?diem|sessional|shift/.test(s)) types.push("PER_DIEM");
  if (!types.length) return "OTHER";
  return types.length === 1 ? types[0] : types;
};

/** Parse "£47,810 – £54,710 a year" into a MonetaryAmount. Returns undefined if not parseable. */
const parseSalary = (
  input: string | undefined,
  region: "uk" | "us",
): Record<string, unknown> | undefined => {
  if (!input) return undefined;
  const currency = /\$/.test(input) ? "USD" : /£/.test(input) ? "GBP" : region === "us" ? "USD" : "GBP";
  const numbers = input.replace(/,/g, "").match(/\d+(?:\.\d+)?/g);
  if (!numbers?.length) return undefined;
  const values = numbers.map(Number);
  const min = Math.min(...values);
  const max = Math.max(...values);
  let unitText = "YEAR";
  if (/hour|\/hr|per hr|hr$/i.test(input)) unitText = "HOUR";
  else if (/day|\/day|per day/i.test(input)) unitText = "DAY";
  else if (/week|\/wk|per week/i.test(input)) unitText = "WEEK";
  else if (/month|\/mo|per month/i.test(input)) unitText = "MONTH";
  return {
    "@type": "MonetaryAmount",
    currency,
    value: {
      "@type": "QuantitativeValue",
      minValue: min,
      maxValue: max,
      unitText,
    },
  };
};

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
  identifier?: string;
  url: string;
}) => {
  const region = job.region ?? "uk";
  const datePosted = toIsoDate(job.datePosted) ?? new Date().toISOString().slice(0, 10);
  const validThrough =
    toIsoDate(job.validThrough) ??
    new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const baseSalary = parseSalary(job.salary, region);
  const orgName = job.hiringOrganization || "Flexzo";

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted,
    validThrough,
    employmentType: toEmploymentType(job.employmentType),
    identifier: {
      "@type": "PropertyValue",
      name: orgName,
      value: job.identifier || job.url.split("/").pop() || job.title,
    },
    hiringOrganization: {
      "@type": "Organization",
      name: orgName,
      sameAs: "https://flexzo.ai",
      logo: "https://flexzo.ai/Flexzo-Logo.svg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location || (region === "us" ? "United States" : "United Kingdom"),
        addressCountry: region === "us" ? "US" : "GB",
      },
    },
    directApply: true,
    url: `https://flexzo.ai${job.url}`,
  };

  if (baseSalary) schema.baseSalary = baseSalary;
  return schema;
};

export default SEO;

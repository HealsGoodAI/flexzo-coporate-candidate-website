// Generates public/sitemap.xml from static routes + articles + jobs.
// Run manually: node scripts/generate-sitemap.mjs
// Wired into build via npm script "prebuild".
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASE = "https://flexzo.ai";
const today = new Date().toISOString().split("T")[0];

const staticPaths = [
  // Top
  "",
  // Products
  "products/ai-sourcing","products/internal-staff-bank","products/collaborative-staff-bank",
  "products/national-staff-bank","products/amplify","products/clinical-services-planner",
  "products/employee-app","products/rostering",
  // Sectors
  "sectors/hospitals","sectors/primary-care","sectors/private-healthcare",
  "sectors/pharmacy","sectors/social-care",
  // Company
  "about","team","investors","news",
  // Info
  "jobs","jobs/search","platform-features","why-join-flexzo","how-to-apply",
  "register","contact",
  // Careers
  "careers/allied-health-professionals","careers/doctors","careers/nursing",
  "careers/pharmacy","careers/psychology","careers/midwifery","careers/estates-and-facilities",
  // Legal
  "terms-and-conditions","privacy-policy","carbon-reduction-plan",
];

// Parse article slugs from src/data/articles.ts (avoid TS imports in Node).
const articlesSrc = fs.readFileSync(path.join(root, "src/data/articles.ts"), "utf8");
const articleSlugs = [...articlesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

// Parse UK + US job ids from JSON (these may change daily — keeping limited per region).
function loadJobIds(file) {
  try {
    const raw = JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
    return raw.map((j) => j.id).filter(Boolean);
  } catch { return []; }
}
const ukJobIds = loadJobIds("src/data/jobs_uk.json");
const usJobIds = loadJobIds("src/data/jobs_us.json");

// Static UK jobs (exported from a TS file – parse via simple regex).
let staticUkIds = [];
try {
  const staticSrc = fs.readFileSync(path.join(root, "src/data/jobs_static_uk.ts"), "utf8");
  staticUkIds = [...staticSrc.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
} catch {}

const urls = [];
function add(loc, priority = 0.7, changefreq = "monthly") {
  urls.push({ loc, priority, changefreq });
}

// Both regions for static paths
for (const p of staticPaths) {
  for (const region of ["uk", "us"]) {
    const path_ = p ? `/${region}/${p}` : `/${region}`;
    const priority = p === "" ? 1.0 : p.startsWith("jobs") ? 0.9 : 0.7;
    const cf = p === "" ? "weekly" : p.startsWith("jobs") ? "daily" : "monthly";
    add(path_, priority, cf);
  }
}

// Articles (UK + US share article slugs)
for (const slug of articleSlugs) {
  for (const region of ["uk", "us"]) add(`/${region}/news/${slug}`, 0.6, "monthly");
}

// Jobs per region
for (const id of [...ukJobIds, ...staticUkIds]) add(`/uk/jobs/${id}`, 0.8, "daily");
for (const id of usJobIds) add(`/us/jobs/${id}`, 0.8, "daily");

// Build XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ loc, priority, changefreq }) => {
  const m = loc.match(/^\/(uk|us)(\/.*|$)/);
  const ukAlt = m ? `${BASE}/uk${m[2]}` : null;
  const usAlt = m ? `${BASE}/us${m[2]}` : null;
  const alt = (ukAlt && usAlt)
    ? `\n    <xhtml:link rel="alternate" hreflang="en-GB" href="${ukAlt}"/>\n    <xhtml:link rel="alternate" hreflang="en-US" href="${usAlt}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${ukAlt}"/>`
    : "";
  return `  <url>\n    <loc>${BASE}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority.toFixed(1)}</priority>${alt}\n  </url>`;
}).join("\n")}
</urlset>
`;

const outPath = path.join(root, "public/sitemap.xml");
fs.writeFileSync(outPath, xml);
console.log(`Wrote ${urls.length} URLs to ${outPath}`);

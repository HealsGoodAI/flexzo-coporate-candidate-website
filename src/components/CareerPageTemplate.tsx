import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRegionText } from "@/lib/regionalize";
import RegionLink from "@/components/RegionLink";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

interface CareerPageProps {
  heroImage: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  overviewTitle: string;
  overviewHighlight: string;
  overviewParagraphs: string[];
  sectionTitle: string;
  sectionHighlight: string;
  sectionDescription: string;
  benefits: string[];
  roles: { title: string; description: string }[];
  ctaTitle?: string;
  ctaDescription?: string;
}

const CareerPageTemplate = ({
  heroImage,
  tagline,
  title,
  titleHighlight,
  subtitle,
  overviewTitle,
  overviewHighlight,
  overviewParagraphs,
  sectionTitle,
  sectionHighlight,
  sectionDescription,
  benefits,
  roles,
  ctaTitle = "Start Your Career",
  ctaDescription = "Ready to take the next step? Register with Flexzo today and discover NHS career opportunities that match your skills and ambitions.",
}: CareerPageProps) => {
  const { t } = useRegionText();

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/80 to-foreground" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-40">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#0CE3FF]">
              {t(tagline)}
            </p>
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-primary-foreground md:text-7xl lg:text-8xl">
              {t(title)}{" "}
              <span className="text-[#0075FF]">{t(titleHighlight)}</span>
            </h1>
            <motion.p initial="hidden" animate="visible" custom={1} variants={fadeUp} className="mt-10 max-w-2xl text-xl leading-relaxed text-primary-foreground/60 md:text-2xl">
              {t(subtitle)}
            </motion.p>
            <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
              <RegionLink href="/register" className="group inline-flex items-center gap-2 rounded-md bg-[#0075FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#0060D0]">
                Register <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </RegionLink>
              <RegionLink href="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/40">
                Contact Us
              </RegionLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0075FF]">Overview</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                {t(overviewTitle)}{" "}
                <span className="text-[#0075FF]">{t(overviewHighlight)}</span>
              </h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={1} variants={fadeUp} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              {overviewParagraphs.map((p, i) => (
                <p key={i}>{t(p)}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-foreground py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#0CE3FF]">Why This Career</p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl">
                {t(sectionTitle)}{" "}
                <span className="text-[#0075FF]">{t(sectionHighlight)}</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/60">
                {t(sectionDescription)}
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={1} variants={fadeUp}>
              <ul className="space-y-5">
                {benefits.map((item, i) => (
                  <motion.li key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 2} variants={fadeUp} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0075FF]" />
                    <span className="text-lg text-primary-foreground">{t(item)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROLES GRID */}
      <section className="border-t border-border bg-muted/30 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Roles & <span className="text-[#0075FF]">Opportunities</span>
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp} className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-[#0075FF]/20 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-foreground">{role.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Sparkles className="mx-auto mb-6 h-10 w-10 text-[#0075FF]" />
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {ctaTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[#0075FF]">{ctaTitle.split(" ").slice(-1)}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t(ctaDescription)}</p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <RegionLink href="/register" className="group inline-flex items-center gap-2 rounded-md bg-[#0075FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#0060D0]">
                Register <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </RegionLink>
              <RegionLink href="/jobs" className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
                Browse Jobs
              </RegionLink>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPageTemplate;

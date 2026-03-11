import { motion } from "framer-motion";
import { Smartphone, Brain, FileCheck, MapPin, Wallet, Rocket } from "lucide-react";
import { useRegionText } from "@/lib/regionalize";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Smartphone,
    title: "Find Shifts Instantly",
    desc: "Browse and book shifts near you in seconds — filter by role, location, and pay rate, all from your phone.",
  },
  {
    icon: Brain,
    title: "AI-Matched Opportunities",
    desc: "Our AI learns your preferences, skills, and availability to recommend shifts that are the perfect fit for you.",
  },
  {
    icon: FileCheck,
    title: "Stress-Free Compliance",
    desc: "Upload your documents once and we handle the rest — automated reminders, verification, and renewal tracking.",
  },
  {
    icon: MapPin,
    title: "Work Where You Want",
    desc: "Access shifts across NHS trusts, private healthcare, and community settings — locally or across the country.",
  },
  {
    icon: Wallet,
    title: "Fair Pay, Fast Payments",
    desc: "See exactly what you'll earn upfront with transparent rates. No hidden deductions, no waiting weeks to get paid.",
  },
  {
    icon: Rocket,
    title: "Build Your Career",
    desc: "Gain diverse clinical experience, grow your professional profile, and take your career in the direction you choose.",
  },
];

const FeaturesSection = () => {
  const { t } = useRegionText();

  return (
    <section id="features" className="relative py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal animation="fade-left" className="mb-16">
           <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground">
             {t("Your Career, Your Way")}
           </span>
           <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
             {t("Flexzo AI puts you")}
             <br />
             <span className="text-[#0075FF]">{t("in control")}</span>
           </h2>
        </ScrollReveal>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-border">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-background p-10 transition-colors hover:bg-surface"
            >
              <div className="mb-6 inline-flex rounded-xl bg-surface p-3 text-foreground transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                <f.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                {t(f.title)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(f.desc)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

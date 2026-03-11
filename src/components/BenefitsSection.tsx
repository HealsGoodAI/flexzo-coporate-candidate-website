import { motion } from "framer-motion";
import employeeAppMockup from "@/assets/employee-app-mockup.jpg";
import { CalendarCheck, Zap, ShieldCheck, Wallet, Heart } from "lucide-react";
import { useRegionText } from "@/lib/regionalize";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: CalendarCheck,
    title: "Flexible Scheduling",
    description:
      "Pick shifts that fit your life — choose when, where, and how often you work with full control over your schedule.",
  },
  {
    icon: Zap,
    title: "Instant Job Matching",
    description:
      "Get matched to roles that suit your skills and preferences instantly through AI-powered recommendations.",
  },
  {
    icon: ShieldCheck,
    title: "Hassle-Free Compliance",
    description:
      "Your credentials, training, and documents are managed in one place — so you're always ready to work.",
  },
  {
    icon: Wallet,
    title: "Competitive Pay",
    description:
      "Access transparent pay rates with no hidden fees, plus fast payments so you're never left waiting.",
  },
  {
    icon: Heart,
    title: "Career Growth",
    description:
      "Gain experience across top healthcare settings, build your professional profile, and advance your career on your terms.",
  },
];

const BenefitsSection = () => {
  const { t } = useRegionText();

  return (
    <section className="pt-24 pb-0">
      <div className="mx-auto max-w-7xl px-6">
         <ScrollReveal animation="split" className="mb-16 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("Why professionals choose")} <span className="text-[#0075FF]">Flexzo</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex gap-4 rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0075FF]/10">
                <benefit.icon className="h-5 w-5 text-[#0075FF]" />
              </div>
              <div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                  {t(benefit.title)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(benefit.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-20 max-w-3xl px-6"
      >
        <img
          src={employeeAppMockup}
          alt="Flexzo employee mobile app"
          className="w-full rounded-2xl object-cover"
        />
      </motion.div>
    </section>
  );
};

export default BenefitsSection;

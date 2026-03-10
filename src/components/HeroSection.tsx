import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRegionText } from "@/lib/regionalize";
import heroNurse from "@/assets/hero-nurse.png";
import RegionLink from "./RegionLink";

const sectors_uk = ["NHS Trusts", "Primary Care", "Community Pharmacy", "Mental Health"];

const HeroSection = () => {
  const { t } = useRegionText();
  const sectors = sectors_uk.map(s => t(s));
  const [sectorIndex, setSectorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSectorIndex((prev) => (prev + 1) % sectors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sectors.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background image – no overlay */}
      <div className="absolute inset-0">
        <img
          src={heroNurse}
          alt="Healthcare professional"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-7xl"
          >
            {t("Healthcare Careers,")}
            <br />
            {t("Re-imagined")}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-primary-foreground/80"
          >
          {t("Join Flexzo today and take control of your healthcare career.")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <RegionLink
              href="/book-demo"
              className="rounded-md bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:bg-[#0075FF] hover:text-white"
            >
              {t("Book a Demo")}
            </RegionLink>
            <a
              href="#features"
              className="rounded-md border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:bg-[#0075FF] hover:text-white hover:border-[#0075FF]"
            >
              {t("Learn More")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

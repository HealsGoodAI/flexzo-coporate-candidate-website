import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRegionText } from "@/lib/regionalize";
import RegionLink from "./RegionLink";

import heroNurse from "@/assets/hero-nurse.png";
import heroSurgery from "@/assets/hero-slide-surgery.jpg";
import heroNurseMask from "@/assets/hero-slide-nurse.jpg";
import heroApp from "@/assets/hero-slide-app.jpg";
import heroDoctor from "@/assets/hero-slide-doctor.jpg";
import heroProfessional from "@/assets/hero-slide-professional.jpg";

const heroImages = [heroNurse, heroSurgery, heroNurseMask, heroApp, heroDoctor, heroProfessional];

const HeroSection = () => {
  const { t } = useRegionText();
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Sliding background images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={imageIndex}
            src={heroImages[imageIndex]}
            alt="Healthcare professional"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl"
          >
            {t("Healthcare Careers,")}
            <br />
            {t("Re-imagined")}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/80"
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
              href="/register"
              className="rounded-md bg-[#0075FF] px-8 py-3.5 font-display text-sm font-semibold text-white transition-all hover:bg-[#0060D0]"
            >
              {t("Register")}
            </RegionLink>
            <a
              href="#features"
              className="rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 font-display text-sm font-semibold text-white transition-all hover:bg-[#0075FF] hover:text-white hover:border-[#0075FF]"
            >
              {t("Learn More")}
            </a>
          </motion.div>

          {/* Image indicators */}
          <div className="mt-12 flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImageIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === imageIndex ? "w-8 bg-[#0075FF]" : "w-4 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

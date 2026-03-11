import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useRegion } from "@/hooks/useRegion";
import careerAhp from "@/assets/career-ahp.png";
import careerDoctors from "@/assets/career-doctors.png";
import careerNursing from "@/assets/career-nursing.png";
import careerPharmacy from "@/assets/career-pharmacy.png";
import careerMidwifery from "@/assets/career-midwifery.png";
import { useRegionText } from "@/lib/regionalize";
import ScrollReveal from "./ScrollReveal";

const sectors = [
  {
    title: "Allied Health Professionals",
    description:
      "15 unique roles from physiotherapy to radiography — helping patients live their lives to the fullest.",
    image: careerAhp,
    href: "/careers/allied-health-professionals",
  },
  {
    title: "Doctors",
    description:
      "Over 50 specialties to choose from with world-class training and the chance to change lives every day.",
    image: careerDoctors,
    href: "/careers/doctors",
  },
  {
    title: "Nursing",
    description:
      "One of the most dynamic and rewarding roles in the NHS — work across hospitals, communities, and beyond.",
    image: careerNursing,
    href: "/careers/nursing",
  },
  {
    title: "Pharmacy",
    description:
      "Expert knowledge of medicines combined with growing clinical responsibility at the heart of communities.",
    image: careerPharmacy,
    href: "/careers/pharmacy",
  },
  {
    title: "Midwifery",
    description:
      "Be at the very start of a family's journey — supporting women through pregnancy, birth, and beyond.",
    image: careerMidwifery,
    href: "/careers/midwifery",
  },
];

const SectorsOverview = () => {
  const { t } = useRegionText();
  const { regionPath } = useRegion();
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 4;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + visibleCount) % sectors.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - visibleCount + sectors.length) % sectors.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [next]);

  const visibleSectors = Array.from({ length: visibleCount }, (_, i) =>
    sectors[(currentIndex + i) % sectors.length]
  );

  return (
    <section className="bg-foreground py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <ScrollReveal animation="fade-right">
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-background/40">
              {t("Explore Careers")}
            </span>
            <h2 className="max-w-xl font-display text-3xl font-bold text-background md:text-4xl">
              {t("Discover your NHS career path")}
            </h2>
          </ScrollReveal>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/60 transition-colors hover:border-background/40 hover:text-background"
              aria-label="Previous sectors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/60 transition-colors hover:border-background/40 hover:text-background"
              aria-label="Next sectors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {visibleSectors.map((sector, i) => (
            <motion.div
              key={`${sector.title}-${currentIndex}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                to={regionPath(sector.href)}
                className="group relative flex flex-col overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[3/5] w-full overflow-hidden">
                  <img
                    src={sector.image}
                    alt={t(sector.title)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
                    {t(sector.title)}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-white/70 line-clamp-2">
                    {t(sector.description)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 transition-colors group-hover:text-white">
                    {t("Explore sector")} <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(sectors.length / visibleCount) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * visibleCount)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i * visibleCount
                  ? "w-6 bg-primary"
                  : "w-2 bg-background/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsOverview;

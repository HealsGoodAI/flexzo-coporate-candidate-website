import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import t1 from "@/assets/testimonial-1.png";
import t2 from "@/assets/testimonial-2.png";
import t3 from "@/assets/testimonial-3.png";
import t4 from "@/assets/testimonial-4.png";
import t5 from "@/assets/testimonial-5.png";
import t6 from "@/assets/testimonial-6.png";
import t7 from "@/assets/testimonial-7.png";
import t8 from "@/assets/testimonial-8.png";
import t9 from "@/assets/testimonial-9.png";
import t10 from "@/assets/testimonial-10.png";
import t11 from "@/assets/testimonial-11.png";
import t12 from "@/assets/testimonial-12.png";
import t13 from "@/assets/testimonial-13.png";
import t14 from "@/assets/testimonial-14.png";
import t15 from "@/assets/testimonial-15.png";

const testimonials = [
  {
    quote: "Flexzo gave me the freedom to pick shifts that work around my family. I've never felt more in control of my career.",
    name: "Amara Johnson",
    role: "Registered Nurse",
    image: t1,
  },
  {
    quote: "As a locum GP, the onboarding was seamless. I was matched to shifts within days — no agency hassle, just straightforward work.",
    name: "Dr Richard Hayes",
    role: "General Practitioner",
    image: t2,
  },
  {
    quote: "The compliance management is brilliant. All my documents are in one place and I get reminded before anything expires.",
    name: "Priya Sharma",
    role: "Pharmacist",
    image: t3,
  },
  {
    quote: "I love being able to browse available shifts on my phone and book instantly. It's transformed how I manage my week.",
    name: "Tom Bradley",
    role: "Physiotherapist",
    image: t4,
  },
  {
    quote: "Flexzo pays fairly and on time, every time. After years of agency work, it's refreshing to feel valued and respected.",
    name: "Marcus Williams",
    role: "Healthcare Assistant",
    image: t5,
  },
  {
    quote: "I joined as a newly qualified midwife and Flexzo helped me gain experience across multiple trusts. Incredible for career development.",
    name: "Sophie Turner",
    role: "Midwife",
    image: t6,
  },
  {
    quote: "The app is so intuitive. I set my availability, get matched, and show up. It's that simple. Wish I'd found this sooner.",
    name: "Daniel Chen",
    role: "Staff Nurse",
    image: t7,
  },
  {
    quote: "Working through Flexzo has given me exposure to different clinical settings while maintaining the flexibility I need for my studies.",
    name: "Dr Anita Patel",
    role: "Junior Doctor",
    image: t8,
  },
  {
    quote: "The team genuinely cares about their workers. Any issue I've had was resolved within hours. Outstanding support.",
    name: "Emma Richardson",
    role: "Occupational Therapist",
    image: t9,
  },
  {
    quote: "Flexzo connected me with shifts I never would have found through traditional agencies. The AI matching is spot on.",
    name: "David Okafor",
    role: "Paramedic",
    image: t10,
  },
  {
    quote: "After 20 years in nursing, Flexzo helped me transition to flexible bank work without losing income. Best decision I've made.",
    name: "Linda Crawford",
    role: "Senior Nurse",
    image: t11,
  },
  {
    quote: "The transparent pay rates mean no surprises. I know exactly what I'll earn before I accept a shift.",
    name: "Ahmed Hassan",
    role: "Pharmacist",
    image: t12,
  },
  {
    quote: "As a healthcare assistant, finding consistent work used to be stressful. Flexzo keeps my calendar full with shifts I actually want.",
    name: "Jade Martinez",
    role: "Healthcare Assistant",
    image: t13,
  },
  {
    quote: "The platform made it easy to work across multiple NHS trusts. My credentials transfer seamlessly — no repeated paperwork.",
    name: "James Cooper",
    role: "Radiographer",
    image: t14,
  },
  {
    quote: "Flexzo treats you like a professional, not a number. The personalised shift recommendations show they understand what I'm looking for.",
    name: "Yuki Tanaka",
    role: "Speech Therapist",
    image: t15,
  },
];

const TestimonialCard = ({
  quote,
  name,
  role,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
}) => (
  <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-background p-6">
    <img
      src={image}
      alt={name}
      className="h-12 w-12 rounded-full object-cover"
    />
    <p className="text-lg leading-relaxed text-foreground">"{quote}"</p>
    <div className="mt-auto">
      <p className="text-sm font-semibold text-[#0075FF]">{name}</p>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const totalPages = Math.ceil(testimonials.length / 2);
  const [page, setPage] = useState(0);

  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);

  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next]);

  const pair = testimonials.slice(page * 2, page * 2 + 2);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <ScrollReveal animation="split">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What our professionals say
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={0.15}>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Trusted by healthcare workers across the UK.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <button
          onClick={prev}
          className="absolute -left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-background p-2 shadow-sm transition-colors hover:bg-muted md:left-0"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute -right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-background p-2 shadow-sm transition-colors hover:bg-muted md:right-0"
          aria-label="Next testimonials"
        >
          <ChevronRight size={20} className="text-foreground" />
        </button>

        <div className="grid gap-5 px-8 md:grid-cols-2 transition-opacity duration-500" key={page}>
          {pair.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page ? "w-6 bg-[#0075FF]" : "w-2 bg-border"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

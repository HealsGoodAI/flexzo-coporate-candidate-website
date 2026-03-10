import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { useRegion } from "@/hooks/useRegion";
import { ArrowRight, UserPlus, CalendarClock, Sparkles, Globe } from "lucide-react";
import heroImage from "@/assets/how-to-apply-hero.jpg";
import employeeAppMockup from "@/assets/employee-app-mockup.png";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign up to the Flexzo AI Collaborative Staff Bank",
    description:
      "You're invited to join our network of the best healthcare professionals in the country. Create your profile quickly and easily using our sign-up system.",
  },
  {
    icon: CalendarClock,
    number: "02",
    title: "Share your shift availability",
    description:
      "Once your account setup is completed, it only takes a few seconds to update your desired shift availability using email, WhatsApp or SMS.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Get assigned to your dream job",
    description:
      "Vacancies are uploaded daily. If your job role and availability match any of the shifts, our smart AI matching system automatically selects you for the shift. You'll be sent a message asking if you accept or decline — giving you full freedom over your workload.",
  },
];

const HowToApply = () => {
  const { regionPath } = useRegion();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How to Apply | Join the UK's Largest Collaborative Staff Bank"
        description="Apply to Flexzo in three simple steps. Sign up, share your availability, and get matched to your dream healthcare job with our AI-powered platform."
      />
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="How to apply" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0075FF]">
              Nation's Premium Collaborative Staff Bank
            </p>
            <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              How to Apply
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Choose when and where you work, access a wider range of opportunities, and leave the administrative hassle behind.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={regionPath("/register")}
                className="inline-flex items-center gap-2 rounded-md bg-[#0075FF] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0060D0]"
              >
                Register Now
                <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0075FF] text-center">
              Built Specifically For Healthcare Professionals
            </p>
            <h2 className="mt-4 text-center text-4xl font-bold text-foreground md:text-5xl">
              Follow our simple application steps
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative rounded-2xl border border-border bg-background p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0075FF]/10">
                    <step.icon className="h-7 w-7 text-[#0075FF]" />
                  </div>
                  <span className="mt-4 block text-4xl font-black text-[#0075FF]/15">{step.number}</span>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* One Profile Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0075FF]/10">
                <Globe className="h-7 w-7 text-[#0075FF]" />
              </div>
              <h2 className="mt-6 text-4xl font-bold text-foreground md:text-5xl">
                One profile, endless possibilities
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                With Flexzo AI, you join the UK's largest collaborative staff bank, opening doors to a wealth of opportunities you won't find anywhere else. Whether you're looking for a day shift, a short-term placement, or a permanent contract, our intelligent job board puts you in the driver's seat.
              </p>
              <p className="mt-4 text-lg font-medium text-foreground">
                No waiting, no placement fees, just seamless hiring.
              </p>
              <a
                href={regionPath("/register")}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0075FF] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0060D0]"
              >
                Register Now
                <ArrowRight size={16} />
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <img
                src={employeeAppMockup}
                alt="Flexzo Employee App"
                className="w-full max-w-md mx-auto"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-primary-foreground md:text-5xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/60">
              Join thousands of healthcare professionals already working smarter with Flexzo. It only takes a few minutes to apply.
            </p>
            <a
              href={regionPath("/register")}
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#0075FF] px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0060D0]"
            >
              Register Now
              <ArrowRight size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToApply;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { useRegion } from "@/hooks/useRegion";
import { ArrowRight, Shield, PoundSterling, MapPin, Smartphone, Clock, Users } from "lucide-react";
import heroImage from "@/assets/why-join-flexzo-hero.jpg";
import employeeAppMockup from "@/assets/employee-app-mockup.png";

const benefits = [
  {
    icon: PoundSterling,
    title: "Better Pay",
    description:
      "Because we cut out the middleman, the shifts on our platform offer highly competitive rates of pay. You earn more, and the NHS saves money – it's a win-win.",
  },
  {
    icon: Shield,
    title: "Easy Compliance",
    description:
      "Upload your documents once, and our system automatically manages your DBS, right-to-work, and professional registration checks. We'll send you reminders about upcoming expirations.",
  },
  {
    icon: MapPin,
    title: "Travel Time Considered",
    description:
      "We consider your location and even real-time travel updates to ensure you're only notified about shifts you can realistically reach. No spam, no irrelevant alerts.",
  },
  {
    icon: Smartphone,
    title: "Quick & Easy Job Matching",
    description:
      "Our AI-powered platform matches you to the right shifts instantly. No waiting, no placement fees, just seamless hiring.",
  },
  {
    icon: Clock,
    title: "You're In Control",
    description:
      "Update your desired shift availability using email, WhatsApp or SMS. Accept or decline shifts with full freedom over your workload.",
  },
  {
    icon: Users,
    title: "One Profile, Endless Possibilities",
    description:
      "Join the UK's largest collaborative staff bank, opening doors to opportunities you won't find anywhere else – day shifts, short-term placements, or permanent contracts.",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign up to the Flexzo AI Collaborative Staff Bank",
    description:
      "You're invited to join our network of the best healthcare professionals in the country. Create your profile quickly and easily using our sign-up system.",
  },
  {
    number: "02",
    title: "Share your shift availability",
    description:
      "Once your account setup is completed, it only takes a few seconds to update your desired shift availability using email, WhatsApp or SMS.",
  },
  {
    number: "03",
    title: "Get assigned to your dream job",
    description:
      "Vacancies are uploaded daily. If your job role and availability match, our smart AI matching system automatically selects you for the shift.",
  },
];

const WhyJoinFlexzo = () => {
  const { regionPath } = useRegion();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Why Join Flexzo? | Better Pay, Easy Compliance & Flexible Shifts"
        description="Join Flexzo – the UK's premium collaborative staff bank. Earn more with no agency fees, easy compliance management, and AI-powered job matching for healthcare professionals."
      />
      <Navbar transparent />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Healthcare professional" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0075FF]">
              Nation's Premium Collaborative Staff Bank
            </p>
            <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Why Join Flexzo?
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              We're more than just a job-matching platform – we're your partner in building a successful and fulfilling healthcare career.
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

      {/* Earn More Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#0075FF]">Welcome to Flexzo AI</p>
              <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
                Earn more, no agency fees
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We believe you should be fairly rewarded for your hard work. By cutting out traditional recruitment agencies, Flexzo allows you to keep more of your earnings with highly competitive pay rates — no hidden fees, no middlemen.
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

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0075FF] text-center">
              Built Specifically For Healthcare Professionals
            </p>
            <h2 className="mt-4 text-center text-4xl font-bold text-foreground md:text-5xl">
              Join the UK's first Collaborative Staff Bank
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative rounded-2xl border border-border bg-background p-8">
                  <span className="text-5xl font-black text-[#0075FF]/15">{step.number}</span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0075FF] text-center">
              Taking The Guesswork Out Of Shift Management
            </p>
            <h2 className="mt-4 text-center text-4xl font-bold text-foreground md:text-5xl">
              With Flexzo AI, you're in control
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-[#0075FF]/30 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0075FF]/10">
                    <benefit.icon className="h-6 w-6 text-[#0075FF]" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-primary-foreground md:text-5xl">
              Ready to take control of your career?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/60">
              Join thousands of healthcare professionals already benefiting from better pay, flexible shifts, and easy compliance management.
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

export default WhyJoinFlexzo;

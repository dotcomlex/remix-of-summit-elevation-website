import { Shield, ClipboardCheck, CalendarCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const teamImage = "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80";

const proofCards = [
  {
    icon: Shield,
    title: "Licensed, Insured & Guaranteed",
    description: "Fully licensed and insured with a satisfaction guarantee on every project. Your home is protected.",
  },
  {
    icon: ClipboardCheck,
    title: "Detailed Prep, Flawless Finish",
    description: "We sand, patch, prime, and protect before a single brushstroke. Proper prep is why our paint lasts 7-10 years.",
  },
  {
    icon: CalendarCheck,
    title: "On Time, On Budget, Zero Mess",
    description: "We show up when we say we will, respect your home, and leave it cleaner than we found it.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Free Color Consultation",
    description: "We visit your home, discuss your vision, assess surfaces, and help you choose the perfect colors.",
  },
  {
    number: "2",
    title: "Detailed Estimate",
    description: "You'll receive a clear, written estimate with no hidden fees — covering prep, materials, and timeline.",
  },
  {
    number: "3",
    title: "Expert Execution",
    description: "Our crew handles prep, painting, and cleanup. You just enjoy the transformation.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative pt-12 pb-20 md:py-20 lg:py-24 bg-sand overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-paper opacity-30" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Desktop: 2-column layout */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            
            {/* Left Column: Header + Proof Cards (on desktop) */}
            <div className="order-1">
              {/* Section Header */}
              <AnimatedSection className="text-center lg:text-left mb-6 lg:mb-8">
                {/* Pill */}
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
                  Why Homeowners Choose Us
                </div>
                
                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-charcoal mb-3 lg:mb-4 leading-tight">
                  Why Colorado Homeowners Trust Emerald Paints
                </h2>
                
                {/* Subheadline */}
                <p className="text-mountain-slate text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                  More than just a fresh coat — we deliver lasting quality through meticulous preparation, premium materials, and a process built around your schedule.
                </p>
              </AnimatedSection>

              {/* Proof Cards - Desktop only in left column */}
              <AnimatedSection delay={0.3} className="hidden lg:block">
                <div className="bg-sand-dark/40 rounded-2xl p-4 space-y-2.5">
                  {proofCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-soft"
                      >
                        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-sand border border-sand-dark/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-charcoal text-base">
                            {card.title}
                          </h3>
                          <p className="text-mountain-slate text-sm">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Image with Badge */}
            <div className="order-2">
              <AnimatedSection delay={0.15} direction="right">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={teamImage}
                      alt="Professional painter at work"
                      className="w-full h-52 sm:h-60 md:h-72 lg:h-[440px] object-cover"
                    />
                    
                    {/* Experience Badge - Inside image top-right */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 lg:w-[88px] lg:h-[88px] rounded-full bg-sand/95 backdrop-blur-sm shadow-lg flex flex-col items-center justify-center border-2 border-white/60">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold text-primary leading-none">8+</span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs text-charcoal font-medium leading-tight text-center mt-0.5">Years<br/>Experience</span>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <p className="text-center text-mountain-slate text-sm italic mt-2.5">
                    Professional finish, every time
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Mobile Only: Proof Cards (after image) */}
            <div className="order-3 lg:hidden">
              <AnimatedSection delay={0.25}>
                <div className="bg-sand-dark/40 rounded-2xl p-3 space-y-2.5">
                  {proofCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-soft"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sand border border-sand-dark/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-charcoal text-[15px]">
                            {card.title}
                          </h3>
                          <p className="text-mountain-slate text-sm">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* How It Works Section */}
          <AnimatedSection delay={0.35} className="mt-8 md:mt-12 lg:mt-14">
            {/* Section Header with Lines */}
            <div className="flex items-center justify-center gap-3 mb-5 md:mb-6">
              <div className="flex-1 h-px bg-charcoal/15 max-w-[60px] sm:max-w-[100px]" />
              <span className="text-xs sm:text-sm font-semibold text-charcoal uppercase tracking-widest">
                How It Works
              </span>
              <div className="flex-1 h-px bg-charcoal/15 max-w-[60px] sm:max-w-[100px]" />
            </div>

            {/* Process Steps */}
            <div className="grid sm:grid-cols-3 gap-2.5 sm:gap-4 md:gap-5 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-soft"
                >
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-sand border border-sand-dark/30 flex items-center justify-center">
                    <span className="text-base sm:text-lg font-bold text-charcoal">{step.number}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-charcoal text-sm sm:text-[15px]">
                      {step.title}
                    </h4>
                    <p className="text-mountain-slate text-xs sm:text-sm leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Wave divider to testimonials */}
      <div className="absolute -bottom-px left-0 right-0 h-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <path
            d="M0,0 C300,100 900,20 1200,80 L1200,120 L0,120 Z"
            fill="hsl(153 30% 8%)"
          />
        </svg>
      </div>
    </section>
  );
}

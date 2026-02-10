import { Phone, Paintbrush, Smile } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Free Consultation",
    description: "We visit your home, discuss your vision, and provide a transparent, no-obligation quote — same day.",
  },
  {
    icon: Paintbrush,
    number: "02",
    title: "Expert Painting",
    description: "Our skilled crew preps every surface, protects your belongings, and applies premium paint with precision.",
  },
  {
    icon: Smile,
    number: "03",
    title: "Love the Result",
    description: "Walk through the finished project with us. We don't leave until you're 100% satisfied with every detail.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-16 md:py-24 bg-mountain-charcoal overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 md:w-24 h-px bg-primary/40" />
            <div className="w-3 h-3 rotate-45 border-2 border-primary" />
            <div className="w-16 md:w-24 h-px bg-primary/40" />
          </div>
          <span className="inline-block text-white/80 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-4">
            Simple as 1-2-3
          </h2>
          <p className="text-base md:text-lg text-snow-white/70 max-w-2xl mx-auto">
            From your first call to the final brushstroke, we make the painting process effortless.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={index}>
                <div className="relative text-center group">
                  {/* Connector line (between cards on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-primary/10" />
                  )}

                  {/* Icon circle */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 mb-6 group-hover:border-primary/60 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-white" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-snow-white mb-3">{step.title}</h3>
                  <p className="text-snow-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

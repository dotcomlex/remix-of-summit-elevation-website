import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import paintingCrewImage from "@/assets/hero-painting-crew.jpg";


const reasons = [
  {
    title: "Colorado Weather Experts",
    description:
      "We know how to prep and paint for Colorado's harsh sun, snow, and temperature swings. Our finishes last 2-3x longer than typical paint jobs.",
  },
  {
    title: "No Surprises, Ever",
    description:
      "Detailed written estimates with zero hidden fees. What we quote is what you pay — and we stick to our timeline.",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Not happy with the color or finish? We'll repaint at no extra cost until you absolutely love it. Your satisfaction is our reputation.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-sand overflow-hidden">
      <div className="absolute inset-0 texture-paper opacity-30" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left: Content */}
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
                  Why Choose Emerald Paints
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal mb-3 leading-tight">
                  More Than Just Paint —{" "}
                  <span className="text-primary">It's Peace of Mind</span>
                </h2>

                <p className="text-mountain-slate text-base sm:text-lg mb-8 max-w-xl">
                  We've painted over 1,000 homes across Colorado. Here's what
                  sets us apart from the rest.
                </p>
              </AnimatedSection>

              {/* Mobile-only image */}
              <div className="block lg:hidden mb-6">
                <div className="relative">
                  <img
                    src={paintingCrewImage}
                    alt="Professional painting crew working on a Colorado home"
                    className="w-full rounded-2xl shadow-elevated object-cover aspect-[4/5] sm:aspect-[3/4]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[280px] bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-aspen-gold text-aspen-gold" />
                      ))}
                    </div>
                    <p className="text-charcoal text-sm italic leading-snug mb-2">
                      "Best painting crew in Colorado. Our exterior looks incredible 2 years later!"
                    </p>
                    <span className="text-mountain-slate text-xs font-medium">— Sarah M., Denver</span>
                  </div>
                </div>
              </div>

              {/* Reasons */}
              <StaggerContainer className="space-y-4 mb-8">
                {reasons.map((reason) => (
                  <StaggerItem key={reason.title}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-charcoal text-base mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-mountain-slate text-sm leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA */}
              <AnimatedSection delay={0.3}>
                <Button asChild size="lg">
                  <Link to="/contact">
                    Get Your Free Estimate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>

            {/* Right: Image + Testimonial */}
            <AnimatedSection delay={0.2} direction="right" className="hidden lg:block">
              <div className="relative">
                <img
                  src={paintingCrewImage}
                  alt="Professional painting crew working on a Colorado home"
                  className="w-full rounded-2xl shadow-elevated object-cover aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
                />

                {/* Floating Testimonial */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[280px] bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-aspen-gold text-aspen-gold"
                      />
                    ))}
                  </div>
                  <p className="text-charcoal text-sm italic leading-snug mb-2">
                    "Best painting crew in Colorado. Our exterior looks
                    incredible 2 years later!"
                  </p>
                  <span className="text-mountain-slate text-xs font-medium">
                    — Sarah M., Denver
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

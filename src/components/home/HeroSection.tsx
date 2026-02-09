import { ArrowRight, Star, Award, Shield, Palette, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home-new.webp";

const trustCards = [
  {
    icon: Shield,
    iconBg: "bg-primary",
    title: "Satisfaction Guarantee",
    description: "Not happy with the color? We'll repaint at no extra cost until you love it.",
  },
  {
    icon: Palette,
    iconBg: "bg-[hsl(var(--aspen-gold))]",
    title: "Free Color Consultation",
    description: "Professional color matching & design advice included with every project.",
  },
  {
    icon: Award,
    iconBg: "bg-[hsl(var(--pine-forest))]",
    title: "Premium Materials Only",
    description: "Sherwin-Williams & Benjamin Moore paints with manufacturer warranty.",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional exterior painting Colorado home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left Column */}
          <div className="lg:w-3/5 text-center lg:text-left">
            {/* Trust Badge */}
            <div
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30 animate-fade-up"
            >
              <Shield className="w-4 h-4" />
              <span>Licensed & Insured</span>
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span>EPA Certified</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-shadow-strong animate-fade-up">
              <span
                className="block text-snow-white font-extrabold tracking-tight leading-[1.05] mb-2"
                style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
              >
                Premium Painting
              </span>
              <span
                className="block text-primary font-extrabold tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
              >
                Done Right
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-snow-white/90 leading-relaxed mt-6 text-shadow-strong animate-fade-up max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)", animationDelay: "100ms" }}
            >
              Transform your Colorado home with expert interior and exterior painting.
              Premium Sherwin-Williams & Benjamin Moore materials, satisfaction guaranteed.
            </p>

            {/* Dual CTAs */}
            <div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <Button
                asChild
                size="lg"
                className="text-base lg:text-lg font-semibold h-14 lg:h-16 px-10 lg:px-12 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <a href="tel:+17204475654">
                  Get Free Color Consultation
                  <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base lg:text-lg font-semibold h-14 lg:h-16 px-10 lg:px-12 border-2 border-snow-white text-snow-white hover:bg-snow-white hover:text-foreground bg-transparent backdrop-blur-sm"
              >
                <Link to="/gallery">View Color Portfolio</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center gap-2 text-snow-white/80">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm font-medium">5.0 · 200+ Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-snow-white/80">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">8+ Years Colorado</span>
              </div>
              <div className="flex items-center gap-2 text-snow-white/80">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">1,000+ Homes Transformed</span>
              </div>
            </div>
          </div>

          {/* Right Column — Trust Cards */}
          <div className="lg:w-2/5 mt-12 lg:mt-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="grid gap-4 max-w-md mx-auto lg:max-w-none">
              {trustCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-snow-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-snow-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <card.icon className="w-6 h-6 text-snow-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">{card.title}</h3>
                      <p className="text-muted-foreground text-sm">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Certifications Bar */}
        <div
          className="mt-16 pt-8 border-t border-snow-white/20 text-center animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <p className="text-snow-white/60 text-sm mb-4">
            Trusted by Colorado homeowners since 2017
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-snow-white/70 text-xs">
            {["Licensed & Insured", "EPA Certified", "Lead-Safe Certified", "BBB Accredited A+"].map((cert) => (
              <span key={cert} className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

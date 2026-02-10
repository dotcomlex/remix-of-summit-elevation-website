import { ArrowRight, Star, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home-premium.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional house painting in Colorado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg animate-fade-up">
          <Shield className="w-4 h-4 text-primary" />
          <span className="font-semibold">Licensed & Insured · Since 2017</span>
        </div>

        {/* Mobile Headlines */}
        <h1 className="font-heading text-shadow-strong animate-fade-up lg:hidden">
          <span
            className="block text-snow-white font-extrabold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.2rem, 8vw, 3.5rem)" }}
          >
            Beautiful Homes
          </span>
          <span
            className="block text-primary font-extrabold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.2rem, 8vw, 3.5rem)" }}
          >
            Start with Paint
          </span>
        </h1>

        {/* Desktop Headline */}
        <h1
          className="hidden lg:block font-heading text-shadow-strong animate-fade-up text-snow-white font-extrabold tracking-tight leading-[1.05]"
          style={{ fontSize: "clamp(3.5rem, 5vw, 5.5rem)" }}
        >
          Beautiful Homes Start with <span className="text-primary">Great Paint</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-snow-white/90 leading-relaxed mt-8 text-shadow-strong animate-fade-up max-w-2xl"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", animationDelay: "100ms" }}
        >
          Transform your home's value and curb appeal with Colorado's most trusted painting professionals.
        </p>

        {/* Single CTA */}
        <div className="mt-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <Button
            asChild
            size="lg"
            className="text-base lg:text-lg font-semibold h-14 lg:h-16 px-10 lg:px-12 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <a href="tel:+17204475654">
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6" />
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/10 backdrop-blur-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-snow-white/90 text-sm font-medium">5.0 Rating</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/20 bg-snow-white/10 backdrop-blur-sm">
            <Award className="w-3 h-3 text-snow-white/70" />
            <span className="text-snow-white/90 text-sm font-medium">1,000+ Homes</span>
          </div>
        </div>

        {/* Bottom Text */}
        <p
          className="mt-6 text-snow-white/70 text-sm animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          8+ years serving Colorado homeowners
        </p>
      </div>
    </section>
  );
}

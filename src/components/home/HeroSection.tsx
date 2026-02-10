import { Link } from "react-router-dom";
import { ArrowRight, Star, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-home-colorado.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-section-dark">
      {/* Mobile: Full-bleed background image */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroImage}
          alt="Beautifully painted Colorado home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))] via-[hsl(var(--section-dark)/0.85)] to-[hsl(var(--section-dark)/0.3)]" />
      </div>

      {/* Desktop: Split grid layout */}
      <div className="hidden lg:grid lg:grid-cols-[58%_42%] min-h-[100dvh]">
        {/* Left Content Panel (Desktop) */}
        <div className="relative flex items-center z-10">
          <div className="w-full max-w-2xl px-16 xl:px-20 py-20">
            <HeroContent />
          </div>
        </div>

        {/* Right Image Panel (Desktop) */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="absolute inset-y-0 left-4 right-0 rounded-l-2xl overflow-hidden">
            <img
              src={heroImage}
              alt="Beautifully painted Colorado home"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay at top for nav readability */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute inset-0 rounded-l-2xl ring-1 ring-inset ring-snow-white/10" />
          </div>
        </motion.div>
      </div>

      {/* Mobile Content (positioned over background image) */}
      <div className="relative z-10 lg:hidden flex items-center min-h-[100dvh]">
        <div className="w-full px-5 pb-8 pt-24">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <>
      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="inline-flex items-center gap-2 bg-snow-white/10 backdrop-blur-sm text-snow-white/90 px-4 py-2 rounded-full text-sm font-medium mb-5 lg:mb-8 border border-snow-white/15">
          <Shield className="w-4 h-4 text-gold" />
          <span>Licensed & Insured · Since 2017</span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="font-heading text-snow-white font-extrabold tracking-tight leading-[1.08]"
        style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Beautiful Homes{" "}
        <br className="hidden sm:block" />
        Start with{" "}
        <span className="text-gold">Great Paint</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-snow-white/75 leading-relaxed mt-4 lg:mt-6 max-w-lg"
        style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        Transform your home's value and curb appeal with Colorado's most trusted painting professionals.
      </motion.p>

      {/* CTA */}
      <motion.div
        className="mt-6 lg:mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <Button
          asChild
          size="lg"
          className="text-base lg:text-lg font-semibold h-12 lg:h-16 px-8 lg:px-12 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          <Link to="/contact">
            Get Free Estimate
            <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6" />
          </Link>
        </Button>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        className="mt-4 lg:mt-8 flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/15 bg-snow-white/5 backdrop-blur-sm">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-snow-white/80 text-sm font-medium">5.0 Rating</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/15 bg-snow-white/5 backdrop-blur-sm">
          <Award className="w-3 h-3 text-snow-white/60" />
          <span className="text-snow-white/80 text-sm font-medium">1,000+ Homes</span>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        className="mt-3 lg:mt-6 text-snow-white/50 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        8+ years serving Colorado homeowners
      </motion.p>
    </>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Star, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-home-colorado.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-section-dark">

      {/* Full-bleed background image — single img for all breakpoints */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautifully painted Colorado home"
          className="w-full h-full object-cover object-[60%_30%] lg:object-center"
        />

        {/* Mobile gradient — light enough to see the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark)/0.92)] via-[hsl(var(--section-dark)/0.65)] to-[hsl(var(--section-dark)/0.3)] lg:hidden" />

        {/* Desktop gradient — left-to-right fade for text readability */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[hsl(var(--section-dark))] via-[hsl(var(--section-dark)/0.8)] to-transparent" />
      </div>

      {/* Content — vertically centered on all breakpoints */}
      <div className="relative z-10 flex items-center lg:justify-center min-h-[100dvh]">
        <div className="w-full max-w-2xl px-5 lg:px-0 py-20 lg:mx-auto lg:text-center">

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-snow-white/10 backdrop-blur-sm text-snow-white/90 px-4 py-2 rounded-full text-sm font-medium mb-5 lg:mb-8 border border-snow-white/15 lg:mx-auto">
              <Shield className="w-4 h-4 text-gold" />
              <span>Licensed & Insured · Since 2017</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-snow-white font-extrabold tracking-tight leading-[1.08] text-shadow-hero"
            style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fall in Love With{" "}
            <br className="hidden sm:block" />
            Your Home{" "}
            <span className="text-gold">Again</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-snow-white/75 leading-relaxed mt-4 lg:mt-6 max-w-lg lg:mx-auto text-shadow-subtle"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            You've been putting this off long enough. One call, one crew, and a home you're finally proud to show off.
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
                Get Your Free Estimate
                <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-4 lg:mt-8 flex flex-wrap gap-3 lg:justify-center"
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
              <span className="text-snow-white/80 text-sm font-medium">
                5.0 on Google
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/15 bg-snow-white/5 backdrop-blur-sm">
              <Award className="w-3 h-3 text-snow-white/60" />
              <span className="text-snow-white/80 text-sm font-medium">
                1,000+ Homes
              </span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

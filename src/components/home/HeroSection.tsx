import { Link } from "react-router-dom";
import { ArrowRight, Star, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-split-right.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-[55%_45%] overflow-hidden bg-section-dark">
      {/* Mobile Image (top) */}
      <div className="relative lg:hidden h-[45vh] min-h-[280px]">
        <img
          src={heroImage}
          alt="Beautifully painted Colorado home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-section-dark" />
      </div>

      {/* Left Content Panel */}
      <div className="relative flex items-center justify-center lg:justify-start z-10">
        <div className="w-full max-w-2xl px-6 lg:px-16 xl:px-20 py-12 lg:py-0">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-snow-white/10 backdrop-blur-sm text-snow-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-snow-white/15">
              <Shield className="w-4 h-4 text-primary" />
              <span>Licensed & Insured · Since 2017</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-snow-white font-extrabold tracking-tight leading-[1.08]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}
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
            className="text-snow-white/75 leading-relaxed mt-6 max-w-lg"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Transform your home's value and curb appeal with Colorado's most trusted painting professionals.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Button
              asChild
              size="lg"
              className="text-base lg:text-lg font-semibold h-14 lg:h-16 px-10 lg:px-12 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link to="/contact">
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/15 bg-snow-white/5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-snow-white/80 text-sm font-medium">5.0 Rating</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-snow-white/15 bg-snow-white/5">
              <Award className="w-3 h-3 text-snow-white/60" />
              <span className="text-snow-white/80 text-sm font-medium">1,000+ Homes</span>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.p
            className="mt-6 text-snow-white/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            8+ years serving Colorado homeowners
          </motion.p>
        </div>
      </div>

      {/* Right Image Panel (Desktop) */}
      <motion.div
        className="hidden lg:block relative"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="absolute inset-4 xl:inset-6 rounded-2xl overflow-hidden">
          <img
            src={heroImage}
            alt="Beautifully painted Colorado home"
            className="w-full h-full object-cover"
          />
          {/* Decorative border accent */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-snow-white/10" />
        </div>
        {/* Subtle green accent line */}
        <div className="absolute left-0 top-[15%] bottom-[15%] w-1 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Paintbrush,
  Home,
  TreePine,
  Layers,
  Building2,
  Wrench,
  Sparkles,
  Palette,
  Shield
} from "lucide-react";

import heroImage from "@/assets/services-hero-bg.jpg";
import paperTexture from "@/assets/paper-texture-light.jpg";
import interiorImage from "@/assets/service-interior-painting.jpg";
import exteriorImage from "@/assets/service-exterior-painting.jpg";
import woodStainImage from "@/assets/service-wood-staining.jpg";
import vinylImage from "@/assets/service-vinyl-painting.jpg";
import commercialImage from "@/assets/service-commercial-painting.jpg";
import touchupsImage from "@/assets/service-touchups.jpg";
import customFinishesImage from "@/assets/service-custom-finishes.jpg";
import colorConsultImage from "@/assets/service-color-consultation.jpg";

const Services = () => {
  const cards = [
    {
      icon: Paintbrush,
      title: "Interior Painting",
      desc: "Transform any room with a flawless, smooth finish. We protect your furniture, prep every surface, and apply premium paints from Sherwin-Williams and Benjamin Moore. From accent walls to full-home interiors.",
      image: interiorImage,
    },
    {
      icon: Home,
      title: "Exterior Painting",
      desc: "Protect your home from Colorado's intense sun, snow, and wind with durable exterior finishes. We scrape, sand, prime, and apply weather-resistant coatings that last 7-10 years.",
      image: exteriorImage,
    },
    {
      icon: TreePine,
      title: "Wood Staining",
      desc: "Restore and protect your decks, fences, pergolas, and trim with expert-grade stains. We prep the wood properly and apply UV-resistant finishes that bring out the natural grain.",
      image: woodStainImage,
    },
    {
      icon: Layers,
      title: "Vinyl & Aluminum Painting",
      desc: "Give your siding, shutters, and trim a brand-new look without replacement. We use specialty bonding primers and flexible paints designed for non-wood surfaces.",
      image: vinylImage,
    },
    {
      icon: Building2,
      title: "Commercial Painting",
      desc: "Offices, retail spaces, and multi-unit buildings — painted on your schedule with minimal disruption. We work evenings and weekends to keep your business running smoothly.",
      image: commercialImage,
    },
    {
      icon: Wrench,
      title: "Touch-Ups & Repairs",
      desc: "Scuffs, nail holes, peeling, or water damage? We patch, prime, and repaint problem areas to match your existing walls perfectly. No full repaint needed.",
      image: touchupsImage,
    },
    {
      icon: Sparkles,
      title: "Custom Finishes & Specialty Coatings",
      desc: "Accent walls, textured finishes, cabinet refinishing, and epoxy garage floors. If it can be coated, we can make it look amazing with the right products and technique.",
      image: customFinishesImage,
    },
    {
      icon: Palette,
      title: "Free Color Consultation",
      desc: "Overwhelmed by 3,000+ paint swatches? Our team helps you narrow down the perfect colors based on your home's lighting, architecture, and style. We bring samples so you can see them in your space before committing.",
      image: colorConsultImage,
    },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional painting services in Colorado"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/70 via-mountain-charcoal/50 to-mountain-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/45" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-16 sm:pb-20 text-center">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            — Our Services —
          </span>

          <h1 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.15] font-bold text-snow-white mb-4 sm:mb-6 max-w-4xl mx-auto text-shadow-strong">
            Professional Painting Services
          </h1>

          <p className="text-snow-white/80 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 text-shadow-strong">
            Serving Denver and the Front Range with craftsmanship, premium materials, and attention to detail.
          </p>

          <Button asChild size="lg" className="text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-300 mb-6 sm:mb-8 md:mb-12">
            <a href="tel:+17204475654">
              Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>

          <div className="flex items-center justify-center text-snow-white/90 text-[11px] sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <img
            src={paperTexture}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
              — What We Do —
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Comprehensive Painting Solutions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              From interior walls to exterior siding, decks to cabinets — we handle every surface with care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-black/5 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent sm:from-black/90 sm:via-black/35" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-white" />
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                        {c.title}
                      </h3>
                    </div>
                    <p className="text-white/85 text-sm sm:text-base drop-shadow-md leading-relaxed line-clamp-3">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/90 via-mountain-charcoal/70 to-mountain-charcoal/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-3 sm:mb-4 text-shadow-strong">
            Ready to Start Your Project?
          </h2>
          <p className="text-snow-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto text-shadow-strong">
            Get your free estimate today — we'll walk through your project, answer every question, and provide a clear quote with no hidden fees.
          </p>
          <Button asChild size="lg" className="text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-300">
            <a href="tel:+17204475654">
              Get Your Free Estimate <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

import { Link } from "react-router-dom";
import { Shield, ArrowRight, Paintbrush, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroAbout from "@/assets/hero-about-page.jpg";
import teamImage from "@/assets/team-work.jpg";

const values = [
  {
    icon: Paintbrush,
    title: "Quality Craftsmanship",
    description: "Proper prep work and premium materials for results that last.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your complete peace of mind.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "On time, on budget, with zero mess left behind.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="Colorado home painting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 pt-28 pb-16 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6 border border-white/10">
            Colorado's Painting Professionals
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Meet the Team Behind
            <br />
            <span className="text-white">1,000+ Beautiful Homes</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Since 2017, we've been Colorado's go-to painting professionals.
          </p>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              We started Emerald Paints in 2017 with one simple goal: provide Colorado homeowners with
              honest, high-quality painting services that actually last. Proper preparation, premium
              paints, and craftsmanship built to withstand Colorado's tough weather.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-[hsl(var(--charcoal))] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6">
              <p className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">1,000+</p>
              <p className="text-white/60 text-sm">Homes Painted</p>
            </div>
            <div className="text-center p-6">
              <p className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">5.0</p>
              <p className="text-white/60 text-sm">Star Rating</p>
            </div>
            <div className="text-center p-6">
              <p className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">8+</p>
              <p className="text-white/60 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Shield, Award, Users, Star, ArrowRight, Paintbrush, Home, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import teamImage from "@/assets/team-work.jpg";
import heroImage from "@/assets/hero-crew-working.jpg";

const journey = [
  {
    year: "2017",
    title: "Founded in Colorado",
    description: "Started with a mission to deliver painting services that actually last through Colorado's tough weather.",
  },
  {
    year: "2019",
    title: "500 Homes Milestone",
    description: "Reached our first major milestone, establishing trust across the Denver metro area.",
  },
  {
    year: "2024",
    title: "1,000+ Homes Transformed",
    description: "Became one of Colorado's most trusted painting contractors with a 5.0-star reputation.",
  },
];

const expertise = [
  {
    icon: Paintbrush,
    title: "Master Craftsmanship",
    description: "Every surface properly prepped, every edge perfectly cut, every finish flawlessly applied.",
  },
  {
    icon: Home,
    title: "Colorado Specialists",
    description: "We understand Colorado's unique weather challenges and use techniques that stand the test of time.",
  },
  {
    icon: Shield,
    title: "Guaranteed Results",
    description: "Not happy with the color or finish? We'll repaint at no extra cost until you absolutely love it.",
  },
];

const stats = [
  { number: "1,000+", label: "Homes Painted", icon: Home },
  { number: "5.0", label: "Star Rating", icon: Star },
  { number: "8+", label: "Years Experience", icon: Clock },
  { number: "100%", label: "Satisfaction Rate", icon: Award },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 py-32 text-center">
          <AnimatedSection>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Colorado's Painting Professionals
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meet the Team Behind{" "}
              <span className="text-primary">1,000+ Beautiful Homes</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Since 2017, we've been Colorado's go-to painting professionals, transforming homes with quality that lasts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Building Trust, One Home at a Time
            </h2>
          </AnimatedSection>

          <StaggerContainer className="max-w-3xl mx-auto space-y-0">
            {journey.map((milestone, index) => (
              <StaggerItem key={milestone.year}>
                <div className="flex gap-6 md:gap-8 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm shrink-0">
                      {milestone.year}
                    </div>
                    {index < journey.length - 1 && (
                      <div className="w-px flex-1 bg-primary/20 mt-3" />
                    )}
                  </div>
                  <div className="pt-3">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three core principles that have earned us 1,000+ satisfied customers and a 5.0-star reputation.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-[hsl(var(--charcoal))] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Results That Speak Volumes
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-6">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <p className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.number}
                    </p>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Join 1,000+
              <br />
              Satisfied Homeowners?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Get your free estimate and discover why Colorado homeowners trust Emerald Paints with their most valuable investment.
            </p>
            <Button asChild size="lg" className="font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <Link to="/contact">
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

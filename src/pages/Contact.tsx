import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Award, MapPin, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-contact.jpg";
import paperTexture from "@/assets/paper-texture-light.jpg";

const serviceAreas = ["Denver", "Boulder", "Lakewood", "Aurora", "Arvada", "Westminster", "Thornton", "Centennial", "Littleton"];

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "BBB Accredited" },
  { icon: Star, label: "1,000+ Homes Painted" },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectType) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and project type are required.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Request sent!",
      description: "We'll be in touch within 24 hours.",
    });
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-charcoal/90 via-mountain-charcoal/75 to-mountain-charcoal/60" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-40 pb-24 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-snow-white mb-6 text-shadow-strong">
            Get Your Free <span className="text-primary">Estimate</span>
          </h1>
          <p className="text-snow-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to transform your home? Tell us about your project.
          </p>
        </div>
      </section>

      {/* Form + Trust Panel Section */}
      <section
        className="relative py-16"
        style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Decorative diamond */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 md:w-24 h-px bg-primary/40" />
            <div className="w-3 h-3 rotate-45 border-2 border-primary" />
            <div className="w-16 md:w-24 h-px bg-primary/40" />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form — left (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg border border-black/5 p-6 sm:p-10">
                <h2 className="font-heading text-xl font-bold text-foreground mb-6">Tell Us About Your Project</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-heading font-medium text-foreground">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-heading font-medium text-foreground">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-heading font-medium text-foreground">
                      Project Type <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="Interior Painting">Interior Painting</option>
                      <option value="Exterior Painting">Exterior Painting</option>
                      <option value="Commercial Painting">Commercial Painting</option>
                      <option value="Deck/Fence Staining">Deck/Fence Staining</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-heading font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send My Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Trust Panel — right (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Trust Badges */}
              <div className="bg-mountain-charcoal rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading text-lg font-bold text-snow-white mb-5">Why Homeowners Trust Us</h3>
                <div className="space-y-4">
                  {trustBadges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div key={badge.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-snow-white font-medium">{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-black/5">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-foreground/80 text-sm leading-relaxed italic mb-3">
                  "Emerald Paints transformed our home beautifully. Professional, clean, and the colors are perfect. Highly recommend!"
                </blockquote>
                <p className="text-sm font-semibold text-foreground">— Sarah M., Denver</p>
              </div>

              {/* Service Areas */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-black/5">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-base font-bold text-foreground">Service Areas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1 text-xs font-medium bg-muted px-3 py-1.5 rounded-full text-foreground/70"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-primary text-xs font-medium mt-3">+ 50-mile radius from Denver</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

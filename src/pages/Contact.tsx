import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/services-hero-bg.jpg";
import paperTexture from "@/assets/paper-texture-light.jpg";

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

      {/* Form Section */}
      <section
        className="relative py-16"
        style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-4 max-w-xl">
          <p className="text-center text-sm font-heading uppercase tracking-widest text-muted-foreground mb-8">
            — Get In Touch —
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg border border-black/5 p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
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

              {/* Email */}
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

              {/* Project Type */}
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

              {/* Message */}
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

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full">
                Send My Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

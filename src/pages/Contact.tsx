import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

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
      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mb-3">
              Get Your Free Estimate
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to transform your home? Let's discuss your painting project.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-foreground">
                  Project Type <span className="text-destructive">*</span>
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
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
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
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

          {/* Phone CTA */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-3">Prefer to talk? Give us a call:</p>
            <a
              href="tel:+17204475654"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              (720) 447-5654
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

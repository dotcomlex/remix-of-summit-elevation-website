import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  Shield,
  CheckCircle2,
  Star,
  Mail,
  MapPin,
  Clock,
  Phone,
  Palette,
  Award,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/services-hero-bg.jpg";

const projectTypes = [
  "Interior Painting",
  "Exterior Painting",
  "Interior & Exterior",
  "Cabinet Refinishing",
  "Commercial Project",
  "Specialty Finishes",
  "Other/Not Sure",
];

const timelines = [
  "ASAP - Within 2 weeks",
  "Within 1 Month",
  "1-3 Months",
  "3-6 Months",
  "Just Planning/Getting Ideas",
];

const whyChooseUs = [
  {
    icon: Award,
    title: "8+ Years Colorado Experience",
    desc: "Local expertise in Colorado climate & home styles",
  },
  {
    icon: Palette,
    title: "Premium Materials Only",
    desc: "Sherwin-Williams & Benjamin Moore with warranties",
  },
  {
    icon: Shield,
    title: "Satisfaction Guarantee",
    desc: "Not happy with color? We'll repaint at no cost",
  },
  {
    icon: CheckCircle2,
    title: "Licensed & Fully Insured",
    desc: "Complete coverage for your peace of mind",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    address: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({
      title: "Consultation Request Sent!",
      description:
        "We'll get back to you within 24 hours with next steps for your free color consultation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      timeline: "",
      address: "",
      details: "",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional painting consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <h1
            className="font-heading text-snow-white font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Get Your Free Color Consultation
          </h1>
          <p
            className="text-snow-white/90 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Ready to transform your Colorado home? Let's discuss your painting
            vision and provide a detailed, no-obligation color consultation and
            estimate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-snow-white/80 text-sm">
            <span className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-primary" />
              Free Color Consultation
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              8+ Years Colorado Experience
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT - Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-6 sm:p-10 shadow-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Request Your Free Color Consultation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        maxLength={100}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        required
                        maxLength={255}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(720) 555-0123"
                      maxLength={20}
                      className="h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Painting Project Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(v) =>
                          setFormData((prev) => ({ ...prev, projectType: v }))
                        }
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(v) =>
                          setFormData((prev) => ({ ...prev, timeline: v }))
                        }
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Project Address (City, State)</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Denver, CO"
                      maxLength={200}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Project Details & Color Preferences</Label>
                    <Textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your project — rooms, colors, timeline preferences..."
                      rows={5}
                      maxLength={1000}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-semibold h-14 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Get My Free Color Consultation"
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      No spam, ever
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Response within 24 hours
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Free consultation included
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Info & Trust */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <a href="tel:+17204475654" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <p className="text-primary font-medium group-hover:underline">(720) 447-5654</p>
                    </div>
                  </a>

                  <a href="mailto:info@emeraldpaintsllc.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                      <p className="text-primary font-medium group-hover:underline text-sm">info@emeraldpaintsllc.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Service Area</h4>
                      <p className="text-muted-foreground text-sm">
                        Denver · Boulder · Aurora · Lakewood<br />
                        Arvada · Westminster · Thornton · Littleton<br />
                        <span className="text-primary font-medium">+ 50-mile radius</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                      <p className="text-muted-foreground text-sm">
                        Email responses: Within 24 hours<br />
                        Consultations: Scheduled within 3 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Why Choose Emerald Paints?</h3>
                <div className="space-y-5">
                  {whyChooseUs.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[hsl(var(--pine-forest))] rounded-2xl p-8 text-snow-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(var(--aspen-gold))] text-[hsl(var(--aspen-gold))]" />
                  ))}
                </div>
                <p className="text-snow-white/90 text-sm leading-relaxed mb-4 italic">
                  "Emerald Paints transformed our home with incredible attention to detail.
                  The color consultation was invaluable — they helped us choose the perfect
                  palette that we never would have considered. Professional, reliable, and
                  the results exceeded our expectations."
                </p>
                <p className="text-snow-white/70 text-sm font-semibold">— Sarah M., Denver homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

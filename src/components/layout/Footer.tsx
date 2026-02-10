import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight, Facebook, Instagram, Twitter, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoEmerald from "@/assets/logo-emerald.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Quote", href: "tel:+17204475654" },
];

const serviceAreas = [
  "Denver", "Boulder", "Lakewood",
  "Aurora", "Arvada", "Westminster",
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEstimateRequest = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setSubscriptionStatus('success');
      setIsSubmitting(false);
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="relative bg-black text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />

      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logoEmerald} alt="Emerald Paints" className="h-12 w-auto" style={{ filter: "brightness(110%) drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }} />
              <span className="text-lg font-bold">Emerald Paints</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Colorado's trusted painting professionals since 2017. Quality interior, exterior, and commercial painting services that stand the test of time.
            </p>
            <div className="space-y-2">
              <a href="tel:+17204475654" className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (720) 447-5654
              </a>
              <a href="mailto:Paintsemerald@gmail.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                Paintsemerald@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('tel:') ? (
                    <a href={link.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h3 className="text-base font-bold mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/60">{area}</li>
              ))}
            </ul>
            <p className="text-primary text-xs font-medium mt-3">+ 50-mile radius from Denver</p>
          </div>

          {/* Column 4 — Quote Form + Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold mb-2">Request Free Quote</h3>
              <p className="text-xs text-white/50 mb-3">Enter your email and we'll send you a quote form</p>
              <form onSubmit={handleEstimateRequest} className="relative">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting || subscriptionStatus !== 'idle'}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Button type="submit" size="sm" disabled={isSubmitting || subscriptionStatus !== 'idle'}>
                    {isSubmitting ? '...' : <ArrowRight className="w-4 h-4" />}
                  </Button>
                </div>
                {subscriptionStatus !== 'idle' && (
                  <p className={`text-xs mt-2 ${subscriptionStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {subscriptionStatus === 'success' ? 'Quote form sent! 📧' : 'Failed. Try again.'}
                  </p>
                )}
              </form>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors" aria-label={social.label}>
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Licensed & Insured
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> BBB Accredited
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Since 2017
              </span>
            </div>
            <div className="text-xs text-white/40">
              <p>© {new Date().getFullYear()} Emerald Paints LLC. All rights reserved.</p>
              <p className="mt-1">
                Powered by{" "}
                <a href="https://frostmediallc.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                  Frost Media LLC
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Twitter, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoEmerald from "@/assets/logo-emerald.png";

const serviceAreas = [
  "Denver", "Boulder", "Lakewood",
  "Aurora", "Arvada", "Westminster",
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575693606448", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/emeraldpaintsllc/", icon: Instagram },
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

      <div className="container px-4 md:px-6 py-10 md:py-12">
        {/* Logo + Description — side by side on desktop */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
          <Link to="/" className="flex justify-center md:justify-start flex-shrink-0">
            <img
              src={logoEmerald}
              alt="Emerald Paints"
              className="h-28 md:h-20 w-auto"
              style={{ filter: "brightness(110%) drop-shadow(0 4px 20px rgba(0,0,0,0.6))", maxWidth: "none" }}
            />
          </Link>
          <p className="text-sm text-white/60 leading-relaxed max-w-lg text-center md:text-left">
            Colorado's trusted painting professionals since 2017. Quality interior, exterior, and commercial painting services that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
          {/* Service Areas */}
          <div>
            <h3 className="text-base font-bold mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/60">{area}</li>
              ))}
            </ul>
            <p className="text-primary text-xs font-medium mt-3">+ 50-mile radius from Denver</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-white/60 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm text-white/60 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-sm text-white/60 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-sm text-white/60 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-white/60 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label={social.label}>
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
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
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Emerald Paints LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

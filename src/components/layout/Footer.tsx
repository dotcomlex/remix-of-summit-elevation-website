import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import logoEmerald from "@/assets/logo-emerald.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
];

const serviceAreas = [
  "Denver", "Boulder", "Lakewood",
  "Aurora", "Arvada", "Westminster",
];

const certifications = [
  "Licensed & Insured",
  "BBB Accredited",
  "Serving Colorado Since 2017",
];

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />

      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand & Contact */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-block mb-5">
              <img
                src={logoEmerald}
                alt="Emerald Paints"
                className="h-24 sm:h-28 md:h-32 w-auto"
                style={{ filter: "brightness(110%) drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Colorado's trusted painting professionals. Transforming homes with premium
              craftsmanship and expert color consultation since 2017.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:Paintsemerald@gmail.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                Paintsemerald@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-primary" />
                Serving All of Colorado
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
        </div>

        {/* Certifications */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {certifications.map((cert) => (
              <span key={cert} className="flex items-center gap-1.5 text-xs text-white/60">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 text-sm text-white/50">
            <div>
              <p>© {new Date().getFullYear()} Emerald Paints LLC. All rights reserved.</p>
              <p className="text-xs text-white/30 mt-2">
                Powered by{" "}
                <a
                  href="https://frostmediallc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/50 transition-colors"
                >
                  Frost Media LLC
                </a>
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-white/30 cursor-default">Privacy Policy</span>
              <span className="text-white/30 cursor-default">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

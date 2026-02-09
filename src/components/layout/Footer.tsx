import { Link } from "react-router-dom";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import logoEmerald from "@/assets/logo-emerald.png";

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
        {/* Centered Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img
              src={logoEmerald}
              alt="Emerald Paints"
              className="h-32 sm:h-36 md:h-40 w-auto"
              style={{ filter: "brightness(110%) drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
            />
          </Link>
        </div>

        {/* Centered Contact Info */}
        <div className="flex flex-col items-center gap-3 mb-10">
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

        {/* Service Areas + Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-base font-bold mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/60">{area}</li>
              ))}
            </ul>
            <p className="text-primary text-xs font-medium mt-3">+ 50-mile radius from Denver</p>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4">Certifications</h3>
            <div className="flex flex-col gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="flex items-center gap-1.5 text-sm text-white/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="text-sm text-white/50">
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
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoEmerald from "@/assets/logo-emerald.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const logoFilter = "drop-shadow(0 4px 20px rgba(0,0,0,0.6)) brightness(110%)";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setShowFloatingCTA(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-4">

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src={logoEmerald}
                alt="Emerald Paints"
                className="h-56 xl:h-64 w-auto -my-16 xl:-my-20"
                style={{ filter: logoFilter, maxWidth: "none" }}
              />
            </Link>

            <nav>
              <ul className="flex items-center gap-2 bg-black/25 backdrop-blur-md rounded-xl px-2 py-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        "relative px-5 py-3 font-semibold text-base transition-all duration-300 rounded-lg",
                        location.pathname === link.path
                          ? "text-snow-white bg-white/15"
                          : "text-snow-white/90 hover:text-snow-white hover:bg-white/10"
                      )}
                      style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-gold rounded-full" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden relative flex items-center justify-center px-4">
            <Link to="/" className="flex items-center pr-14">
              <img
                src={logoEmerald}
                alt="Emerald Paints"
                className="h-48 sm:h-52 w-auto -my-12 sm:-my-14"
                style={{ filter: logoFilter, maxWidth: "none" }}
              />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 text-snow-white hover:text-white/80 transition-colors"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 z-50 transition-all duration-300 ease-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={cn("relative bg-black transition-transform duration-300", isOpen ? "translate-y-0" : "-translate-y-4")}>
          <div className="container mx-auto px-4 py-8">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-snow-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex justify-center mb-8 pt-4">
              <img src={logoEmerald} alt="Emerald Paints" className="h-20 w-auto" />
            </div>

            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <li key={link.path} style={{ animationDelay: `${index * 50}ms` }} className={cn(isOpen && "animate-fade-up")}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-5 py-4 rounded-xl font-semibold text-lg transition-colors",
                      location.pathname === link.path
                        ? "bg-white/15 text-snow-white"
                        : "text-snow-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Button asChild className="w-full font-semibold h-14 text-base" size="lg">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Your Free Estimate</Link>
              </Button>
              <p className="text-center text-snow-white/50 text-sm mt-4">
                Licensed & Insured · Serving Colorado Since 2017
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

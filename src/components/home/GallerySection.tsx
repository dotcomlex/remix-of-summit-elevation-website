import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";
import paperTexture from "@/assets/paper-texture-light.jpg";


export function GallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [radius, setRadius] = useState(600);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Responsive radius (smaller values for square cards)
  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 640 ? 320 : 520);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  // IntersectionObserver to detect when section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting && entry.intersectionRatio > 0.25);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const items: GalleryItem[] = useMemo(
    () => [
      { common: "Living Room Refresh", binomial: "Denver, CO", photo: { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", text: "Modern living room interior paint", by: "Emerald Paints" } },
      { common: "Exterior Repaint", binomial: "Lakewood, CO", photo: { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", text: "Full home exterior repaint", by: "Emerald Paints" } },
      { common: "Deck Staining", binomial: "Boulder, CO", photo: { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", text: "Cedar deck staining project", by: "Emerald Paints" } },
      { common: "Kitchen Cabinet Paint", binomial: "Aurora, CO", photo: { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", text: "White kitchen cabinet refinish", by: "Emerald Paints" } },
      { common: "Bedroom Makeover", binomial: "Arvada, CO", photo: { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80", text: "Master bedroom accent wall", by: "Emerald Paints" } },
      { common: "Commercial Office", binomial: "Westminster, CO", photo: { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", text: "Commercial office painting", by: "Emerald Paints" } },
      { common: "Fence Staining", binomial: "Thornton, CO", photo: { url: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", text: "Cedar fence staining", by: "Emerald Paints" } },
      { common: "Exterior Trim Work", binomial: "Centennial, CO", photo: { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", text: "Detailed exterior trim painting", by: "Emerald Paints" } },
    ],
    []
  );

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const nextImage = useCallback(() => setLightboxIndex((p) => (p + 1) % items.length), [items.length]);
  const prevImage = useCallback(() => setLightboxIndex((p) => (p - 1 + items.length) % items.length), [items.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden md:min-h-screen"
    >
      {/* Premium multi-layer background */}
      {/* Base gradient — deep forest greens */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2419] via-[#132e1f] to-[#0a1a10]" />
      
      {/* Radial glow — warm green/gold */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,67,50,0.12)_0%,transparent_70%)]" />
      
      {/* Mesh gradient overlay — forest greens & gold accents */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 80%, rgba(27,67,50,0.25) 0%, transparent 50%),
            radial-gradient(at 80% 20%, rgba(163,138,76,0.10) 0%, transparent 50%),
            radial-gradient(at 50% 50%, rgba(34,85,52,0.12) 0%, transparent 60%)
          `,
        }}
      />

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <div className="relative flex flex-col items-center pt-16 pb-12 px-4 md:min-h-screen md:py-16">
        {/* Header */}
        <AnimatedSection className="text-center mb-2 md:mb-16 relative z-40">
          <span className="inline-block text-primary font-semibold text-xs md:text-sm tracking-widest uppercase mb-2">
            Our Work
          </span>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Work That Speaks For Itself
          </h2>
          <p className="text-white/70 text-sm md:text-base mt-2 max-w-md mx-auto">
            A showcase of recent painting projects across Colorado.
          </p>
        </AnimatedSection>

        {/* Circular Gallery */}
        <CircularGallery
          items={items}
          radius={radius}
          autoRotateSpeed={-0.035}
          isActive={isActive}
          onItemClick={openLightbox}
          className="relative z-10 h-[340px] sm:h-[420px] md:h-[480px]"
        />

        {/* Instruction */}
        <AnimatedSection delay={0.2} className="text-center mt-2 md:mt-16 relative z-40">
          <p className="text-white/40 text-xs md:text-sm tracking-wide">
            Auto-rotates • Swipe left or right to explore • Tap any photo to view
          </p>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-6 relative z-40">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base shadow-lg btn-shine"
          >
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image container */}
          <div 
            className="relative max-w-5xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[lightboxIndex].photo.url}
              alt={items[lightboxIndex].photo.text}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-lg">
                    {items[lightboxIndex].common}
                  </p>
                  <p className="text-white/60 text-sm">
                    {items[lightboxIndex].binomial}
                  </p>
                </div>
                <span className="text-white/50 text-sm">
                  {lightboxIndex + 1} / {items.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

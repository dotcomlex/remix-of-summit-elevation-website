import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";

import interiorLivingRoom from "@/assets/gallery/interior-living-room.jpg";
import exteriorCraftsman from "@/assets/gallery/exterior-craftsman.jpg";
import stainingDeck from "@/assets/gallery/staining-deck.jpg";
import cabinetsKitchenWhite from "@/assets/gallery/cabinets-kitchen-white.jpg";
import interiorBedroomNavy from "@/assets/gallery/interior-bedroom-navy.jpg";
import commercialLobby from "@/assets/gallery/commercial-lobby.jpg";
import stainingFence from "@/assets/gallery/staining-fence.jpg";
import exteriorTrimDetail from "@/assets/gallery/exterior-trim-detail.jpg";


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
      { common: "Living Room Refresh", binomial: "Denver, CO", photo: { url: interiorLivingRoom, text: "Freshly painted white living room", by: "Emerald Paints" } },
      { common: "Craftsman Exterior", binomial: "Boulder, CO", photo: { url: exteriorCraftsman, text: "Colorado craftsman home exterior paint", by: "Emerald Paints" } },
      { common: "Cedar Deck Staining", binomial: "Evergreen, CO", photo: { url: stainingDeck, text: "Cedar deck staining project", by: "Emerald Paints" } },
      { common: "Kitchen Cabinets", binomial: "Denver, CO", photo: { url: cabinetsKitchenWhite, text: "White kitchen cabinet refinish", by: "Emerald Paints" } },
      { common: "Navy Accent Wall", binomial: "Arvada, CO", photo: { url: interiorBedroomNavy, text: "Master bedroom accent wall", by: "Emerald Paints" } },
      { common: "Office Lobby", binomial: "Denver, CO", photo: { url: commercialLobby, text: "Commercial office lobby painting", by: "Emerald Paints" } },
      { common: "Fence Staining", binomial: "Aurora, CO", photo: { url: stainingFence, text: "Cedar fence staining", by: "Emerald Paints" } },
      { common: "Exterior Trim Work", binomial: "Thornton, CO", photo: { url: exteriorTrimDetail, text: "Detailed exterior trim painting", by: "Emerald Paints" } },
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
      {/* Dark green background matching Process section */}
      <div className="absolute inset-0 bg-mountain-charcoal" />
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.2)_100%)]" />

      {/* Content */}
      <div className="relative flex flex-col items-center pt-16 pb-12 px-4 md:min-h-screen md:py-16">
        {/* Header */}
        <AnimatedSection className="text-center mb-2 md:mb-16 relative z-40">
          <span className="inline-block text-white/80 font-semibold text-xs md:text-sm tracking-widest uppercase mb-2">
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

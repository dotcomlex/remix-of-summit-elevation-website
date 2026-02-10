import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, Grid3X3, Home, TreePine, Building2, PaintBucket, DoorOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

// Import hero/CTA background
import heroImage from "@/assets/hero-gallery.jpg";

// Gallery images
import interiorLivingRoom from "@/assets/gallery/interior-living-room.jpg";
import interiorBedroomNavy from "@/assets/gallery/interior-bedroom-navy.jpg";
import interiorDiningSage from "@/assets/gallery/interior-dining-sage.jpg";
import interiorHallway from "@/assets/gallery/interior-hallway.jpg";
import exteriorCraftsman from "@/assets/gallery/exterior-craftsman.jpg";
import exteriorRanch from "@/assets/gallery/exterior-ranch.jpg";
import exteriorTrimDetail from "@/assets/gallery/exterior-trim-detail.jpg";
import exteriorTwostory from "@/assets/gallery/exterior-twostory.jpg";
import stainingDeck from "@/assets/gallery/staining-deck.jpg";
import stainingFence from "@/assets/gallery/staining-fence.jpg";
import stainingDoor from "@/assets/gallery/staining-door.jpg";
import commercialLobby from "@/assets/gallery/commercial-lobby.jpg";
import commercialStorefront from "@/assets/gallery/commercial-storefront.jpg";
import commercialHallway from "@/assets/gallery/commercial-hallway.jpg";
import cabinetsKitchenWhite from "@/assets/gallery/cabinets-kitchen-white.jpg";
import cabinetsBathroom from "@/assets/gallery/cabinets-bathroom.jpg";
import cabinetsTwotone from "@/assets/gallery/cabinets-twotone.jpg";
import cabinetsLaundry from "@/assets/gallery/cabinets-laundry.jpg";

interface GalleryImage {
  id: number;
  category: string;
  src: string;
  alt: string;
  title: string;
  location: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, title: "Living Room Refresh", location: "Denver, CO", category: "interior", src: interiorLivingRoom, alt: "Freshly painted white living room with mountain view" },
  { id: 2, title: "Navy Accent Wall", location: "Arvada, CO", category: "interior", src: interiorBedroomNavy, alt: "Master bedroom with bold navy accent wall" },
  { id: 3, title: "Sage Dining Room", location: "Littleton, CO", category: "interior", src: interiorDiningSage, alt: "Dining room with warm sage green walls and crown molding" },
  { id: 4, title: "Hallway Repaint", location: "Centennial, CO", category: "interior", src: interiorHallway, alt: "Freshly painted hallway with clean trim edges" },
  { id: 5, title: "Craftsman Exterior", location: "Boulder, CO", category: "exterior", src: exteriorCraftsman, alt: "Colorado craftsman home with fresh two-tone exterior paint" },
  { id: 6, title: "Ranch Home Repaint", location: "Lakewood, CO", category: "exterior", src: exteriorRanch, alt: "Ranch-style home with newly painted siding and trim" },
  { id: 7, title: "Exterior Trim Detail", location: "Thornton, CO", category: "exterior", src: exteriorTrimDetail, alt: "Close-up of clean exterior trim and window detail work" },
  { id: 8, title: "Two-Story Paint Job", location: "Westminster, CO", category: "exterior", src: exteriorTwostory, alt: "Two-story home with professional exterior paint job" },
  { id: 9, title: "Cedar Deck Staining", location: "Evergreen, CO", category: "staining", src: stainingDeck, alt: "Cedar deck freshly stained with honey tone" },
  { id: 10, title: "Fence Staining", location: "Aurora, CO", category: "staining", src: stainingFence, alt: "Wooden fence with fresh semi-transparent stain" },
  { id: 11, title: "Front Door Stain", location: "Golden, CO", category: "staining", src: stainingDoor, alt: "Front door with deep mahogany stain" },
  { id: 12, title: "Office Lobby", location: "Denver, CO", category: "commercial", src: commercialLobby, alt: "Modern office lobby with clean painted walls" },
  { id: 13, title: "Retail Storefront", location: "Aurora, CO", category: "commercial", src: commercialStorefront, alt: "Retail storefront with freshly painted exterior" },
  { id: 14, title: "Commercial Hallway", location: "Broomfield, CO", category: "commercial", src: commercialHallway, alt: "Commercial hallway with bright painted walls" },
  { id: 15, title: "White Kitchen Cabinets", location: "Denver, CO", category: "cabinets", src: cabinetsKitchenWhite, alt: "Kitchen with freshly painted white cabinets" },
  { id: 16, title: "Bathroom Vanity Refresh", location: "Lakewood, CO", category: "cabinets", src: cabinetsBathroom, alt: "Bathroom vanity with painted gray cabinets" },
  { id: 17, title: "Two-Tone Kitchen", location: "Parker, CO", category: "cabinets", src: cabinetsTwotone, alt: "Kitchen with two-tone painted cabinets" },
  { id: 18, title: "Sage Laundry Room", location: "Castle Rock, CO", category: "cabinets", src: cabinetsLaundry, alt: "Laundry room with sage green painted cabinets" },
];

type CategoryFilter = "all" | "interior" | "exterior" | "staining" | "commercial" | "cabinets";

const categories: { id: CategoryFilter; label: string; icon: typeof Grid3X3 }[] = [
  { id: "all", label: "All Projects", icon: Grid3X3 },
  { id: "interior", label: "Interior", icon: Home },
  { id: "exterior", label: "Exterior", icon: PaintBucket },
  { id: "staining", label: "Staining", icon: TreePine },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "cabinets", label: "Cabinets", icon: DoorOpen },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) => 
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox("prev");
    if (e.key === "ArrowRight") navigateLightbox("next");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[35vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gallery of completed painting projects"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-charcoal/70 via-mountain-charcoal/50 to-mountain-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-28 pb-8 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-white/80 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-4"
          >
            — Our Portfolio —
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-[clamp(1.5rem,5vw,3.5rem)] leading-[1.15] font-bold text-snow-white mb-3 sm:mb-6 max-w-4xl mx-auto text-shadow-strong"
          >
            Our Work in Action
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-snow-white/80 text-xs sm:text-lg md:text-xl max-w-2xl mx-auto text-shadow-strong"
          >
            Browse our collection of completed painting projects across the Denver metro area. Every surface prepped right, every finish flawless.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-3 sm:py-4 gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              const count = category.id === "all" 
                ? galleryImages.length 
                : galleryImages.filter(img => img.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 
                    rounded-full font-medium text-xs sm:text-sm
                    transition-all duration-300 whitespace-nowrap min-h-[44px]
                    ${isActive 
                      ? "bg-foreground/5 text-foreground border border-foreground/15" 
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                  <span className="hidden xs:inline">{category.label}</span>
                  <span className="xs:hidden">{category.id === "all" ? "All" : category.label}</span>
                  {isActive && (
                    <span className="ml-1 px-1.5 py-0.5 bg-foreground/10 rounded-full text-[10px] sm:text-xs font-normal">
                      {count}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-snow-white font-semibold text-xs sm:text-sm md:text-base">{image.title}</p>
                        <p className="text-snow-white/70 text-xs">{image.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mountain-charcoal/90 via-mountain-charcoal/70 to-mountain-charcoal/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-snow-white mb-3 sm:mb-4 text-shadow-strong">
              Ready to Transform Your Space?
            </h2>
            <p className="text-snow-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto text-shadow-strong">
              Let's bring your vision to life. Get a free consultation and estimate from our expert team.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 shadow-warm">
              <Link to="/contact">
                Get Your Free Estimate <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex]?.src}
                alt={filteredImages[currentImageIndex]?.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-white font-semibold text-sm sm:text-lg">{filteredImages[currentImageIndex]?.title}</p>
                <p className="text-white/70 text-xs sm:text-sm">{filteredImages[currentImageIndex]?.location}</p>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

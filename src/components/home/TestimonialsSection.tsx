import { Star } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Denver, CO",
    project: "Interior Painting",
    text: "Emerald Paints completely transformed our living room and kitchen. The crew was professional, on time, and incredibly clean. They even helped us pick the perfect shade of sage green. Our home feels brand new!",
    rating: 5,
  },
  {
    name: "David & Lisa R.",
    location: "Lakewood, CO",
    project: "Exterior Repaint",
    text: "We got three quotes and Emerald was the most thorough. They actually explained the prep process and why it matters. The exterior looks incredible six months later — no peeling, no fading. Worth every penny.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    location: "Aurora, CO",
    project: "Deck Staining",
    text: "Our deck was in rough shape after years of Colorado weather. Jose and his team stripped, sanded, and stained it to perfection. It looks better than when we first built it. Already planning to have them do the fence next.",
    rating: 5,
  },
  {
    name: "Jennifer K.",
    location: "Arvada, CO",
    project: "Full Home Interior",
    text: "From the free estimate to the final walkthrough, everything was smooth. They covered all our furniture, taped every edge, and the lines are razor sharp. Jose even came back to do a free touch-up two weeks later.",
    rating: 5,
  },
  {
    name: "Robert & Ana P.",
    location: "Westminster, CO",
    project: "Commercial Office",
    text: "We needed our office painted over a weekend to avoid disrupting our team. Emerald Paints made it happen — started Friday evening, finished Sunday afternoon. Professional, fast, and the quality is outstanding.",
    rating: 5,
  },
  {
    name: "Michelle W.",
    location: "Boulder, CO",
    project: "Cabinet Painting",
    text: "Instead of spending $15K on new cabinets, we had Emerald paint them for a fraction of the cost. They look factory-finished. Multiple neighbors have asked who did the work. Couldn't recommend them more.",
    rating: 5,
  },
];

const microReviews = [
  { text: "Best painters in Denver!", author: "Sarah M." },
  { text: "Flawless exterior paint job", author: "David R." },
  { text: "Our deck looks brand new", author: "Marcus T." },
  { text: "Razor sharp lines everywhere", author: "Jennifer K." },
  { text: "Weekend office paint — done!", author: "Robert P." },
  { text: "Cabinets look factory-finished", author: "Michelle W." },
  { text: "Incredibly clean and professional", author: "Carlos D." },
  { text: "Already booked them again", author: "Anna L." },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-testimonial-bg overflow-hidden">
      <div className="absolute inset-0 texture-grain opacity-50" />
      <div className="container relative z-10 px-4 md:px-6">
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Client Reviews</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">What Our Clients Are Saying</h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">Real 5-star reviews from Colorado homeowners</p>
        </AnimatedSection>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[85%] snap-center">
                <div className="relative bg-white/[0.08] backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg overflow-hidden transition-all duration-300 h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <blockquote className="text-base text-white/90 leading-relaxed mb-6 font-light">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="h-px bg-white/10 mb-5" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-base font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/50">{testimonial.location} • {testimonial.project}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {testimonials.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <StaggerContainer className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="relative bg-white/[0.08] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg overflow-hidden transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 h-full">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <blockquote className="text-base text-white/90 leading-relaxed mb-6 font-light">
                  "{testimonial.text}"
                </blockquote>
                <div className="h-px bg-white/10 mb-5" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/50">{testimonial.location} • {testimonial.project}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Google rating summary */}
        <AnimatedSection delay={0.3} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 Average Rating</span>
            <span>•</span>
            <span>Google Reviews</span>
          </div>
        </AnimatedSection>

        {/* Marquee Row */}
        <div className="mt-14 overflow-hidden">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-testimonial-bg to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-testimonial-bg to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...microReviews, ...microReviews].map((review, i) => (
                <div key={i} className="flex-shrink-0 mx-6 flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold fill-gold" />
                  <span className="text-white/50 text-sm whitespace-nowrap">"{review.text}" — <span className="text-white/70">{review.author}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

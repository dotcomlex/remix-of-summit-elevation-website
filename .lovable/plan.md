

# Prompt 6: Testimonials Redesign + FAQ Section + Final CTA

Three major changes: rewrite the testimonials as a card grid, create a new FAQ section, and add a CTA banner. Plus update the homepage assembly.

---

## 1. Rewrite `src/components/home/TestimonialsSection.tsx`

Replace the entire Embla carousel implementation with a static 3-column card grid.

- **Remove**: All Embla imports, hooks (`useEmblaCarousel`, `useState`, `useCallback`, `useEffect`), carousel nav buttons, dot indicators, avatar imports
- **Keep**: `Star` icon import, `AnimatedSection`, dark background (`bg-section-dark`), texture overlay, marquee section at the bottom
- **New layout**: A `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` containing 6 testimonial cards
- **Card design**: Glass-morphism cards (`bg-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10`) with left green accent bar, star ratings, quote text, divider, and author info with initial-circle avatar (no photos)
- **New data**: 6 painting-specific reviews (Sarah M., David & Lisa R., Marcus T., Jennifer K., Robert & Ana P., Michelle W.)
- **New micro-reviews**: Updated for painting context
- **Google rating summary**: Simple centered row below cards showing 5 stars + "5.0 Average Rating" + "Google Reviews"
- **Marquee**: Keep exact same animation and fade-edge styling, just update the text snippets

## 2. Create `src/components/home/FAQSection.tsx` (new file)

- Light background section (`bg-sand`) with paper texture overlay
- Header: "Common Questions" pill, "Frequently Asked Questions" heading
- Uses shadcn `Accordion` component with 8 painting-specific Q&As covering timelines, furniture, paint brands, costs, prep work, color consultation, licensing, and service areas
- CTA below accordion: "Still have questions?" with phone link to (720) 447-5654
- Wrapped in `AnimatedSection` for scroll animations

## 3. Update `src/components/home/CTASection.tsx` (repurpose as CTA Banner)

- Update heading: "Ready to Transform Your Home?"
- Update description for painting context
- Update phone link to `+17204475654`
- Change "15+ Years" to "8+ Years Experience"
- Change "Let's Build Something Beautiful" to "Ready to Transform Your Home?" with "Your Space" as the accent span
- Keep the Denver skyline background image and overlay structure

## 4. Update `src/pages/Index.tsx`

- Add imports for `FAQSection`
- Remove `LogoCloud` import and `partnerLogos` data (or keep if still desired -- will keep it since prompt doesn't mention removing it)
- Final section order: Hero -> LogoCloud -> ServicesPreview -> GallerySection -> WhyChooseUs -> TestimonialsSection -> FAQSection -> CTASection

---

## Technical Details

### TestimonialsSection card structure
Each card contains:
- Absolute-positioned left accent bar (`w-1 bg-primary`)
- Star row (5 gold stars)
- Blockquote with review text
- Horizontal divider (`h-px bg-white/10`)
- Author row: circular initial avatar (`w-10 h-10 rounded-full bg-primary/20 text-primary`) + name + location/project

### FAQSection accordion
Uses existing `@/components/ui/accordion` (Radix-based). Each item has:
- `AccordionTrigger` with the question text
- `AccordionContent` with the multi-sentence answer
- Styling: white background cards, border, rounded corners on the accordion container

### Files changed
1. `src/components/home/TestimonialsSection.tsx` — full rewrite (carousel to grid)
2. `src/components/home/FAQSection.tsx` — new file
3. `src/components/home/CTASection.tsx` — content updates only
4. `src/pages/Index.tsx` — add FAQSection import and placement


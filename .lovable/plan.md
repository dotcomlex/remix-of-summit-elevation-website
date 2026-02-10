
# Fix Footer Desktop, Service Images, Homepage Layout, and Why Choose Us

---

## 1. Footer: Desktop vs Mobile Layout

**Problem**: The footer currently centers the logo AND the description text on desktop. User wants desktop footer to look like a normal left-aligned layout -- only apply the centered large logo treatment on mobile.

**Changes to `src/components/layout/Footer.tsx`**:
- On **desktop (md+)**: Logo stays at its normal size in the top-left area, description text left-aligned, standard 3-column grid below -- essentially the traditional footer layout
- On **mobile**: Keep the centered, large logo (h-36), description below it, stacked content
- Use responsive classes: `flex justify-center md:justify-start` for logo, and adjust text alignment with `text-left`

---

## 2. Navigation Logo: Increase Size More

**Problem**: User wants it even bigger (3x was mentioned).

**Changes to `src/components/layout/Navigation.tsx`**:
- Desktop logo: Keep current `h-48 xl:h-56` or go slightly bigger -- these are already very large. Since user says 3x and it was originally around h-16, the current h-48 is already 3x. Will keep as-is or bump to `h-52 xl:h-60` for extra prominence.
- No changes to mobile (user said "do not center it etc, just apply for mobile only" about footer -- but for the nav logo, increase applies to desktop too).

---

## 3. Services Preview Cards: Fix Layout and Regenerate Images

**Problems identified from screenshots**:
- The 1-over-2 grid layout looks bad on desktop (giant horizontal card on top)
- The AI-generated images are poor quality (interior painting image has artifacts, exterior shows someone spray-painting what looks like a roofline against pure blue sky)
- The green title text ("Interior Painting") has poor contrast against the dark overlay

**Changes to `src/components/home/ServicesPreview.tsx`**:
- Change layout to **3 equal columns on desktop** (md:grid-cols-3) instead of the 1-over-2 layout. Remove the `md:col-span-2` on the first card
- Make all cards the same height
- Fix text color: change the title hover color from `text-primary` (dark green, hard to read) to keep it `text-snow-white` with a subtle underline or glow effect instead
- Regenerate all 3 service preview images with better, more realistic prompts

**New images to generate**:
- `service-interior-painting.jpg` -- Bright, well-lit living room with freshly painted walls, paint roller on tray in foreground, natural warm light
- `service-exterior-painting.jpg` -- Beautiful Colorado home exterior with fresh paint, mountains in background, professional ladder setup
- `service-wood-staining.jpg` -- Rich wood deck being stained, warm tones, backyard setting with greenery

---

## 4. Move Gallery Section Higher on Homepage

**Problem**: User loves the 3D circular gallery but wants it closer to the top, not buried at the bottom.

**Changes to `src/pages/Index.tsx`** -- new section order:
1. HeroSection
2. LogoCloud
3. **GallerySection** (moved up from position 6)
4. ServicesPreview
5. ProcessSection
6. WhyChooseUs (redesigned -- see below)
7. TestimonialsSection
8. FAQSection
9. CTASection

---

## 5. Redesign "Why Choose Us" Section

**Problem**: The 4 stat blocks (1,000+ Homes, 5.0 Rating, 8+ Years, 100% Satisfaction) with emoji icons look redundant and childish. The whole section feels cluttered.

**Changes to `src/components/home/WhyChooseUs.tsx`**:
- **Remove the 4 stat cards entirely** (the emoji blocks at the top)
- Keep the two-column layout (reasons on left, image + testimonial on right)
- Instead of the stat blocks, incorporate the key numbers inline within the heading or as a subtle single-line trust strip (e.g., "1,000+ Homes | 5.0 Stars | 8+ Years") below the subheading -- clean and not redundant
- This declutters the section significantly

---

## Technical Summary

### Files modified:
- `src/components/layout/Footer.tsx` -- responsive layout: left-aligned on desktop, centered on mobile
- `src/components/layout/Navigation.tsx` -- bump desktop logo size slightly larger
- `src/components/home/ServicesPreview.tsx` -- 3-column equal grid, fix text contrast, update images
- `src/pages/Index.tsx` -- reorder: move GallerySection up to position 3
- `src/components/home/WhyChooseUs.tsx` -- remove 4 stat cards, replace with inline trust strip

### Assets regenerated (3 new images):
- `src/assets/service-interior-painting.jpg`
- `src/assets/service-exterior-painting.jpg`
- `src/assets/service-wood-staining.jpg`

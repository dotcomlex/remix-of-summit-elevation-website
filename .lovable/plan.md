

# Comprehensive Visual Polish -- Round 2

This plan addresses all remaining issues from your feedback and screenshots.

---

## 1. Logo Cloud -- Clear Background, Colored Logos

The current dark green background with white/inverted logos looks washed out. Changes:
- Remove the dark green gradient background -- use a clean light/white background instead (e.g., `bg-white` or `bg-sand`)
- Remove the `brightness-0 invert` filter so logos show in their original colors
- Update the label text to dark color for contrast
- Update the ProgressiveBlur bgColor to match the new light background
- Keep the gold accent borders for a premium feel

---

## 2. Process Section -- White Icons

The "Simple as 1-2-3" icons are currently green (`text-primary`) on dark green circles, making them hard to see. Change the icon color to white (`text-white`) so they stand out against the dark background. The step number badges stay as-is (white text on green circle).

---

## 3. Testimonials Section -- White Background

The testimonial section currently has a dark charcoal/blue background which adds to the color overwhelm. Changes:
- Switch to a white/light background (`bg-white` or `bg-sand`)
- Change all text colors: headline to dark (`text-charcoal`), subtext to muted, card backgrounds to subtle borders on white
- Testimonial cards: light background with subtle shadow/border instead of glassmorphism
- Star ratings stay gold
- Marquee row: adjust to work on light background
- "5.0 Average Rating" text changes to dark

---

## 4. Gallery Section -- Dark Green Background with Card Shadows

Use the same dark green as the Process section (`bg-mountain-charcoal`) but add white/light shadow glow effects around the gallery images so they pop against the dark background. This creates visual interest without the "solid green wall" feel.

---

## 5. FAQ Section -- Two-Column Layout + Remove CTA

- Split FAQs into a 2-column grid on desktop (4 items left, 4 items right) to reduce vertical space
- Mobile stays single-column
- Remove the "Still have questions? Contact us" CTA at the bottom entirely

---

## 6. About Page -- Remove Bottom CTA + Fix Hero Spacing

- Remove the entire "Ready to Transform Your Home?" CTA section at the bottom
- Reduce hero top padding so the nav sits closer to the top and content doesn't overlap awkwardly (reduce `py-32` to `pt-28 pb-16` or similar)

---

## 7. Services Page -- Remove Cream Texture Background

- Replace the paper texture background on the services grid section with a clean white (`bg-white`) background
- This removes the dated cream look and makes it feel cleaner

---

## 8. Contact Page -- Remove Cream Texture Background

- Same as Services: replace the paper texture background with clean white (`bg-white`)
- Remove the inline `backgroundImage` style referencing `paperTexture`

---

## Technical Details

### Files to modify:

| File | Change |
|------|--------|
| `src/components/home/LogoCloud.tsx` | Light background, remove `brightness-0 invert`, dark label text |
| `src/components/home/ProcessSection.tsx` | Icons from `text-primary` to `text-white` |
| `src/components/home/TestimonialsSection.tsx` | White background, dark text, light card styling |
| `src/components/home/GallerySection.tsx` | Match Process section dark green, add white shadow on gallery items |
| `src/components/home/FAQSection.tsx` | 2-column grid, remove "Still have questions?" CTA |
| `src/pages/About.tsx` | Remove bottom CTA section, tighten hero spacing |
| `src/pages/Services.tsx` | Replace paper texture with `bg-white` |
| `src/pages/Contact.tsx` | Replace paper texture with `bg-white` |


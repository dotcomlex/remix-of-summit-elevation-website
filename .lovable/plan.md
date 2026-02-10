

# Fix Back-to-Back Green Sections (Process + Testimonials)

## Problem
Both the **Process** ("Simple as 1-2-3") and **Testimonials** ("What Our Clients Are Saying") sections use the same dark green background color. The previous change swapped one green for another green (`section-dark` and `mountain-charcoal` are both hue 153 at ~8-9% lightness -- visually identical).

## Solution
Change the **Testimonials** section to a neutral dark charcoal (no green hue) so it visually breaks from the Process section above it.

### Changes

**File: `src/components/home/TestimonialsSection.tsx`**
- Replace `bg-mountain-charcoal` with a custom inline style or a new neutral color: a true charcoal like `#1a1a2e` or `#1c1c28` (dark blue-grey, zero green)
- Update the marquee gradient fade edges to match the new background color
- Ensure all text (white headings, white/60 subtext, card borders) remains fully legible

**File: `src/index.css`** (optional)
- Add a CSS variable `--testimonial-bg: 240 15% 13%` for a neutral dark slate, or we can use a direct class. This avoids touching the existing green palette.

This gives a clear visual separation: the Process section stays dark green, and the Testimonials section becomes a neutral dark slate/charcoal with no green tint.

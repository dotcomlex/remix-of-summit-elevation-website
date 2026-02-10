

# Hero Section Fix — Structure and Responsiveness

## Problems Identified

### Mobile
- Image section (`h-[45vh]`) is too tall, pushing content down
- Trust indicators and "8+ years" text get cut off below the fold
- Too much spacing between elements (mt-10, mt-8, mt-6)
- Content padding is too generous for small screens

### Desktop
- Image panel uses `absolute inset-4` which clips the image awkwardly on the right edge
- Left content panel isn't properly vertically centered
- Too much bottom dead space — trust indicators feel disconnected
- The green accent line on the left of the image feels random

## Fixes

### Mobile Adjustments
- Reduce mobile image height from `h-[45vh]` to `h-[35vh]`
- Tighten spacing: reduce margins between badge, headline, subtext, CTA, and trust indicators
- Reduce padding on the content area for mobile
- Ensure all elements (including trust badges and "8+ years" text) fit above the fold

### Desktop Adjustments
- Change image container from `absolute inset-4` to `absolute inset-0` with padding only on top/bottom/left (let image bleed to the right edge for a cleaner look)
- Better vertical centering of the left content panel
- Remove the decorative green accent line (it looks out of place)
- Tighten the spacing between elements so content feels more cohesive

### File to modify
- `src/components/home/HeroSection.tsx` — Adjust spacing, image container, and responsive breakpoints

### Key changes
- Mobile image: `h-[45vh]` changed to `h-[35vh] min-h-[220px]`
- Mobile spacing: `mt-10` to `mt-6`, `mt-8` to `mt-4`, `mt-6` to `mt-3`, `mb-8` to `mb-5`
- Desktop image container: remove `inset-4 xl:inset-6 rounded-2xl` and use a cleaner edge-to-edge approach with rounding only on the left side
- Remove the green accent line div
- Add `lg:min-h-screen` to ensure proper height on desktop
- Content panel: add proper vertical centering with `lg:py-20`

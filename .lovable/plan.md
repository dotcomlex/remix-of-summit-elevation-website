

# Hero Section — Mobile-First Redesign + Desktop Nav Fix

## Problems from Screenshots

### Mobile (Primary Concern)
- The image block at top and the dark content block below look like **two separate sections** — there's a hard visual break between them
- The logo is barely visible against the bright image background
- The gradient fade from image to dark background isn't smooth enough

### Desktop
- Nav links ("Services", "Gallery", etc.) are nearly invisible where they overlap the bright sky portion of the image
- The image panel feels oversized and the `left-4` gap creates an awkward seam

## Solution

### Mobile: Unified Full-Bleed Hero
Instead of stacking a separate image block on top of a dark content block, use the image as a **full background** on mobile with a strong dark gradient overlay. This makes it feel like one cohesive section:

```text
+---------------------------+
| [Logo]           [Menu]   |
|                           |
|  (image background with   |
|   dark gradient overlay)  |
|                           |
|  [Badge]                  |
|  Beautiful Homes          |
|  Start with Great Paint   |
|  Subheadline...           |
|  [Get Free Estimate -->]  |
|  [5.0] [1,000+ Homes]    |
|  8+ years...              |
+---------------------------+
```

- Image covers the entire mobile hero as a background (not a separate block)
- Strong gradient overlay (bottom 60% dark) ensures text readability
- Content is vertically centered or pushed to the lower portion
- Everything feels like ONE section

### Desktop: Keep Split Layout (with fixes)
- Nav links get a subtle dark backdrop/shadow so they're readable over the bright image
- Image container: change `left-4` to `left-0` with only `rounded-l-2xl` — cleaner edge
- Slightly reduce image panel from 45% to 40% or add a dark overlay strip at the top of the image where nav overlaps

## Technical Details

### Files to modify

**`src/components/home/HeroSection.tsx`**
- Remove the separate mobile image div (`lg:hidden h-[35vh]`)
- Replace with a full-background approach on mobile: absolute-positioned image behind content with gradient overlay
- Keep the desktop split grid (`lg:grid lg:grid-cols-[55%_45%]`)
- On mobile, content gets `pt-32` (to clear the nav) and is positioned over the background image
- Add stronger gradient: `bg-gradient-to-t from-section-dark via-section-dark/90 to-section-dark/30`

**`src/components/layout/Navigation.tsx`**
- Add a subtle dark text shadow or semi-transparent backdrop to desktop nav links so they remain readable over bright image areas
- Add `text-shadow` or a `bg-black/20 backdrop-blur-sm` behind the nav bar area on desktop

### Key Changes Summary
1. Mobile hero becomes a single full-bleed image with dark gradient overlay and content on top — no more "two sections" feel
2. Desktop nav gets improved contrast over the bright image panel
3. Desktop image panel cleanup (remove `left-4` gap)
4. Logo visibility improves on mobile because the gradient ensures a darker area behind it


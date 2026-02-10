

# Hero Section Redesign — Full Rewrite

## Summary
Replace the entire `HeroSection.tsx` with a simplified full-bleed cinematic hero. This removes the split-panel layout (58/42 grid) and uses a single image + single content wrapper for all breakpoints.

## What Changes

**Layout**: Split-panel grid replaced with full-bleed background image on all screen sizes. One `<img>` tag instead of two. One content wrapper instead of two.

**Copy updates**:
- Headline: "Beautiful Homes Start with Great Paint" becomes "Fall in Love With Your Home Again"
- Subheadline: outcome/pain-point focused copy
- CTA: "Get Your Free Estimate" (was "Get Free Estimate")
- Trust pill: "5.0 on Google" (was "5.0 Rating")
- Bottom text removed (was "8+ years serving Colorado homeowners")

**Mobile improvements**: Content vertically centered, lighter gradient so hero image is visible, `object-[60%_30%]` crops to show the house properly in portrait viewports.

## Steps

1. **Rewrite `src/components/home/HeroSection.tsx`** — full replacement with the new single-layout component:
   - Single full-bleed `<img>` with `object-[60%_30%] lg:object-center`
   - Two gradient overlays (mobile: bottom-to-top, desktop: left-to-right via `lg:bg-gradient-to-r`)
   - Single centered content block with updated copy
   - Same Framer Motion animation structure and delays
   - Same imports (heroImage, Button, Link, icons)

2. **No other files change** — no CSS, no Tailwind config, no new dependencies

## Technical Details

- Removes the `HeroContent` sub-component — everything is inline in `HeroSection`
- Gradient approach: mobile uses `bg-gradient-to-t from-section-dark/90 via-section-dark/50 to-section-dark/10`, desktop overrides with `lg:bg-gradient-to-r lg:from-section-dark lg:via-section-dark/80 lg:to-transparent`
- Image focal point: `object-[60%_30%]` on mobile to crop toward the house, `lg:object-center` on desktop
- Uses existing utility classes: `text-shadow-hero`, `text-shadow-subtle`, `text-gold`, `bg-snow-white/*`, `font-heading`
- ~40 lines of code removed vs the current version (no more duplicate img/content wrappers)

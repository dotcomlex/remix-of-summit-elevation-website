

# Hero Section — Mobile-First Simplification

Streamline `src/components/home/HeroSection.tsx` from a two-column layout with trust cards to a clean, centered single-column design optimized for mobile readability and conversion.

---

## What Changes

### Remove
- Trust cards array and right column (lines 6-25, 130-150)
- "View Color Portfolio" outline button
- Bottom certifications bar
- References to Sherwin-Williams and Benjamin Moore
- Unused imports: `Palette`, `CheckCircle2`, `Link`

### Trust Badge (currently green, invisible on dark bg)
- Change from `bg-primary/20 text-primary border-primary/30` to `bg-white/95 text-gray-900 shadow-lg`
- Text: "Licensed & Insured - Since 2017"

### Headlines
- **Mobile** (visible below `lg`): Two lines — "Beautiful Homes" (white) / "Start with Paint" (primary accent)
- **Desktop** (visible at `lg+`): Single line — "Beautiful Homes Start with Great Paint" with "Great Paint" in primary
- Font sizing: mobile `clamp(2.2rem, 8vw, 3.5rem)`, desktop `clamp(3.5rem, 5vw, 5.5rem)`

### Subheadline
- "Transform your home's value and curb appeal with Colorado's most trusted painting professionals."

### CTA — Single Button
- "Get Free Estimate" with phone link (`tel:+17204475654`)
- Centered, no secondary button

### Trust Indicators — Simplified to 2 Badges
- "5.0 Rating" with stars
- "1,000+ Homes" with Award icon
- Styled as pill badges with `border border-snow-white/20 bg-snow-white/10 backdrop-blur-sm`

### Bottom Text
- Simple line: "8+ years serving Colorado homeowners"

### Layout
- Switch from two-column flex to single centered column (`flex flex-col items-center text-center`)
- Stronger gradient: `from-black/80 via-black/60 to-black/40`
- More bottom padding: `pb-24` instead of `pb-16`

---

## Background Gradient
- Strengthen left side darkness from `from-black/70` to `from-black/80`
- Lighten right side from `to-black/60` to `to-black/40`

---

## File Modified
| File | Changes |
|------|---------|
| `src/components/home/HeroSection.tsx` | Complete rewrite — centered layout, simplified content, single CTA, no trust cards |


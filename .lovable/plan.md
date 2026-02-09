

# Hero Section Transformation — Two-Column Split Layout

Complete overhaul of `src/components/home/HeroSection.tsx` from centered layout to a unique two-column split design with trust cards.

---

## Asset

Copy the uploaded Sherwin-Williams logo to `src/assets/logo-sherwin-williams.png` for potential use in trust cards or logo cloud.

---

## Layout Changes

### Current: Single centered column
### New: Two-column split (60/40) on desktop, stacked on mobile

```text
Desktop:
+---------------------------+-------------------+
|  Trust Badge              |  [Shield Card]    |
|  HEADLINE (left-aligned)  |  [Palette Card]   |
|  Subheadline              |  [Award Card]     |
|  [CTA] [CTA outline]     |                   |
|  Stars | Years | Homes    |                   |
+---------------------------+-------------------+
|        Certifications bar (full width)        |
+-----------------------------------------------+

Mobile:
+---------------------------+
|  Trust Badge (centered)   |
|  HEADLINE (centered)      |
|  Subheadline              |
|  [CTA stacked]            |
|  Trust indicators         |
|  [Trust Cards stacked]    |
|  Certifications bar       |
+---------------------------+
```

---

## Detailed Changes (`src/components/home/HeroSection.tsx`)

### 1. Background Overlay
- Change from `bg-gradient-to-b` to `bg-gradient-to-r from-black/70 via-black/50 to-black/60` for better left-side text readability in the split layout
- Keep existing `heroImage` import (no new background image needed)

### 2. Content Container
- Change from `flex-col items-center text-center` to `flex flex-col lg:flex-row lg:items-center lg:gap-12`
- Left column: `lg:w-3/5 text-center lg:text-left`
- Right column: `lg:w-2/5 mt-12 lg:mt-0`

### 3. Left Column Content

**Trust Badge** (new element):
- Pill-shaped badge with Shield icon: "Licensed & Insured | EPA Certified"
- Uses `bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm`

**Headline**:
- Simplified to two lines: "Premium Painting" / "Done Right" (accent color on second line)
- Uses `clamp(2.2rem, 6vw, 4.5rem)` for responsive sizing
- Left-aligned on desktop, centered on mobile
- Single `h1` with two `span` blocks (no separate mobile/desktop versions)

**Subheadline**:
- "Transform your Colorado home with expert interior and exterior painting. Premium Sherwin-Williams & Benjamin Moore materials, satisfaction guaranteed."

**Dual CTAs**:
- Primary: "Get Free Color Consultation" with phone link — uses the site's existing primary color (green)
- Secondary: Outline button "View Color Portfolio" linking to `/gallery`
- Stack vertically on mobile, side-by-side on `sm+`

**Trust Indicators Row**:
- 5.0 rating with 200+ Reviews (keeping star styling)
- 8+ Years Colorado (corrected from prompt's "15+" to match brand facts)
- 1,000+ Homes Transformed (corrected from prompt's "500+" to match brand facts)
- Left-aligned on desktop, centered on mobile

### 4. Right Column — Trust Cards
Three white glass-morphism cards stacked vertically:

| Card | Icon Color | Title | Description |
|------|-----------|-------|-------------|
| Satisfaction Guarantee | Primary (green) | "Satisfaction Guarantee" | "Not happy with the color? We'll repaint at no extra cost until you love it." |
| Free Color Consultation | Accent/gold | "Free Color Consultation" | "Professional color matching & design advice included with every project." |
| Premium Materials | Primary dark | "Premium Materials Only" | "Sherwin-Williams & Benjamin Moore paints with manufacturer warranty." |

Cards use `bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl` styling.

### 5. Bottom Certifications Bar
- Full-width row below both columns with `border-t border-white/20`
- "Trusted by Colorado homeowners since 2017" (corrected from prompt's 2009)
- Four certification badges: Licensed & Insured, EPA Certified, Lead-Safe Certified, BBB Accredited A+
- Uses CheckCircle2 icons with primary color

### 6. Icon Imports
Add: `Shield, Palette, CheckCircle2` from lucide-react
Keep: `ArrowRight, Star, Award`
Remove: `Clock` (replaced by Award for years badge)

---

## Brand Fact Corrections
The prompt contained some numbers that conflict with established brand facts. The implementation will use the correct values:
- Years: **8+** (not 15+)
- Since: **2017** (not 2009)
- Homes: **1,000+** (not 500+)

---

## Color Approach
The prompt suggests orange and blue accents. To maintain brand consistency with the existing Emerald Paints green theme, the implementation will use the site's existing `primary` (green) color for accents instead of introducing orange/blue. The trust card icon backgrounds will use variations of the existing palette (primary, accent, gold).

---

## Files Modified
| File | Changes |
|------|---------|
| `src/components/home/HeroSection.tsx` | Complete rewrite — two-column layout, trust cards, dual CTAs, certifications bar |
| `src/assets/logo-sherwin-williams.png` | Copy uploaded logo asset |


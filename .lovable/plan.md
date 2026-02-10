

# Testimonials + Navigation + Why Choose Us Fixes

## 1. Testimonials Section -- Complete Redesign

**Background**: Change from `bg-sand` to `bg-white` so it no longer matches the FAQ section.

**Desktop layout**: Replace the stacked 3-column grid with a single-row horizontal scroll carousel using `overflow-x-auto` with `snap-x`. Cards sit side by side and users scroll through them -- much more elegant and modern than a stacked grid.

**Card styling**: Give cards a light sand/cream background (`bg-sand`) instead of white-on-white. This makes them visually distinct against the white section background. Keep the green left accent bar, shadow, and border.

**Google rating badge**: Center-align it properly using `flex justify-center` (currently left-aligned on desktop).

**Marquee row**: Increase text opacity from `text-charcoal/50` to `text-charcoal/70` so the micro-reviews are actually readable.

**File**: `src/components/home/TestimonialsSection.tsx`

---

## 2. Navigation -- Reduce Top Spacing

The logo is extremely tall (`h-48 xl:h-56` on desktop, `h-40 sm:h-44` on mobile), pushing the nav links far down from the top of the viewport. Reduce the logo height to something more reasonable:
- Desktop: `h-48 xl:h-56` down to `h-24 xl:h-28`
- Mobile: `h-40 sm:h-44` down to `h-20 sm:h-24`
- Reduce container padding from `py-4 lg:py-6` to `py-3 lg:py-4`

**File**: `src/components/layout/Navigation.tsx`

---

## 3. Why Choose Us -- Remove Trust Strip Line

Remove the entire "1,000+ Homes / 5.0 Rating / 8+ Years / 100% Satisfaction" inline stat strip (lines 51-59 in WhyChooseUs.tsx). The paragraph above it already mentions "1,000 homes" and these stats are redundant clutter.

**File**: `src/components/home/WhyChooseUs.tsx`

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/home/TestimonialsSection.tsx` | White bg, horizontal scroll on desktop, sand-colored cards, centered badge, visible marquee |
| `src/components/layout/Navigation.tsx` | Smaller logo, less top padding |
| `src/components/home/WhyChooseUs.tsx` | Remove trust strip line |


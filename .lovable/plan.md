

# Navigation Enhancement — Larger Logo, CTA Button, Better Visibility

Updates to `src/components/layout/Navigation.tsx` for logo dominance and a prominent desktop CTA.

---

## Changes

### 1. Desktop Logo — Larger with Enhanced Shadows
- Increase from `h-24 xl:h-28` to `h-32 xl:h-36`
- Add inline style with stronger drop-shadow and brightness boost: `drop-shadow(0 4px 20px rgba(0,0,0,0.6)) brightness(110%)`

### 2. Desktop Nav Links — Slightly Larger Touch Targets
- Increase gap from `gap-1` to `gap-2`
- Change text from `text-sm` to `text-base`, `font-medium` to `font-semibold`
- Increase padding from `px-4 py-2` to `px-5 py-3`
- Add `backdrop-blur-sm` for legibility
- Active state: use `text-primary bg-white/10` with underline

### 3. Desktop CTA Button — New "Free Estimate" Button
- Add a prominent button next to the nav links on the right side
- Wraps the nav + button in a flex container with `gap-8`
- Button links to `tel:+17204475654` (phone call, not /contact)
- Uses primary green color (brand consistent), not orange

### 4. Mobile Logo — Larger with Enhanced Shadows
- Increase from `h-24 sm:h-28` to `h-28 sm:h-32`
- Same enhanced drop-shadow/brightness filter as desktop

### 5. Mobile Hamburger — Slightly Larger
- Increase from `w-11 h-11` to `w-12 h-12`
- Change `rounded-lg` to `rounded-xl`
- Add `shadow-lg` and `backdrop-blur-sm`

### 6. Mobile Menu Panel
- Increase menu logo from `h-16` to `h-20`
- Increase close button from `w-10 h-10` to `w-12 h-12`, move to `top-6 right-6`
- Add padding top `pt-4` above logo, increase `mb-6` to `mb-8`
- Nav link font: change `font-medium` to `font-semibold`
- Add "Licensed & Insured - Serving Colorado Since 2017" text below CTA

### 7. Floating CTA
- Change text from "Get a Free Quote" to "Free Color Consult"
- Keep `tel:` link (not /contact)
- Keep primary green color for brand consistency

---

## Brand Corrections from Prompt
- All CTAs use `tel:+17204475654` instead of `/contact` (no contact page exists)
- Colors stay primary green, not orange (brand consistency)
- "Since 2017" not "Since 2009" in mobile menu footer text

---

## File Modified
| File | Changes |
|------|---------|
| `src/components/layout/Navigation.tsx` | Logo sizing, shadows, desktop CTA button, mobile enhancements, floating CTA text |

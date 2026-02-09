

# Section Fix 6 & 7: Footer Polish, Logo Cloud, and Site-Wide Cleanup

Two combined fixes covering the footer, logo marquee, 404 page, and a full sweep for leftover 14er/renovation references.

---

## Section Fix 6: Footer & Cleanup

### A. Footer Updates (`src/components/layout/Footer.tsx`)

1. **Add Services column** — Insert a 4th column between Quick Links and Service Areas with 6 painting service links (all pointing to `/services`)
2. **Update grid** — Change from `lg:grid-cols-3` to `lg:grid-cols-4` with `lg:gap-10`
3. **Expand service areas** — Add Thornton, Centennial, Littleton, Broomfield (10 total)
4. **Remove Privacy/Terms links** — Replace with non-clickable `<span>` elements styled `text-white/30`
5. **Add Frost Media credit** — Below the copyright line, add a subtle "Powered by Frost Media LLC" link to `https://frostmediallc.com`

### B. NotFound Page (`src/pages/NotFound.tsx`)

- Update text to "Page Not Found" / "The page you're looking for doesn't exist."
- Add "Back to Home" link and a phone CTA: "Call Us: (720) 447-5654"

### C. About Page (`src/pages/About.tsx`)

- Replace "14er Renovations team" alt text with "Emerald Paints team"
- Rewrite "Our Story" paragraphs: remove all "14er" and "renovation" references, replace with Emerald Paints painting-focused copy
- Change "15+" years to "8+" years in the experience badge
- Change "Since 2009" to "Since 2017" in the hero
- Update "Building Colorado Dreams" to "Painting Colorado Homes"
- Update value descriptions to be painting-relevant (e.g., "Every nail, every beam" becomes "Every surface, every detail")

### D. BenefitsSection (`src/components/services/BenefitsSection.tsx`)

- Replace `<Link to="/contact">` with `<a href="tel:+17204475654">` (last remaining `/contact` reference)

### E. Contact Page (`src/pages/Contact.tsx`)

- Replace `info@14errenovations.com` with `Paintsemerald@gmail.com`
- Replace "Kitchen Remodel" and "Bathroom Renovation" project names with painting projects
- Replace service select options (remodeling, concrete, general) with painting services
- Remove any other 14er/renovation references

---

## Section Fix 7: Logo Cloud — Paint Brand Marquee

### A. Copy uploaded brand logos into project

Copy the 5 uploaded images to `src/assets/`:
- `user-uploads://image.png` -> `src/assets/logo-behr.png`
- `user-uploads://image-2.png` -> `src/assets/logo-angi.png`
- `user-uploads://image-3.png` -> `src/assets/logo-homeadvisor-elite.png`
- `user-uploads://image-4.png` -> `src/assets/logo-bbb-accredited.png`
- `user-uploads://image-5.png` -> `src/assets/logo-benjamin-moore.png`

### B. Update `src/pages/Index.tsx`

Replace the `partnerLogos` array with the new brand logos plus text-based entries for Sherwin-Williams and Valspar (no uploaded logos for those). The LogoCloud component accepts `src` (image) entries. For brands without logos, we'll render them as text inside the component.

Update the array to use the new imports:
- Behr logo
- Benjamin Moore logo
- Angi Certified Pro logo
- HomeAdvisor Elite Service logo (new uploaded version)
- BBB Accredited Business logo (new uploaded version)
- Sherwin-Williams (text-based, no logo file)
- Valspar (text-based, no logo file)

Remove old logo imports (logo-nahb, logo-qualified-remodeler, logo-installation-masters, logo-energy-star) and their unused asset files.

### C. Update `src/components/home/LogoCloud.tsx`

- Change label from "Trusted Partners" to "Premium Paints We Trust"
- Update the Logo type to support an optional `name` field for text-based entries
- Render text-based brands as styled `<span>` elements when no `src` is provided
- Keep InfiniteSlider and ProgressiveBlur behavior unchanged

---

## Technical Details

### Files Modified
| File | Changes |
|------|---------|
| `src/components/layout/Footer.tsx` | Add Services column, expand areas, remove privacy links, add Frost Media credit |
| `src/pages/NotFound.tsx` | Rebrand with painting copy and phone CTA |
| `src/pages/About.tsx` | Remove all 14er/renovation references, update to Emerald Paints |
| `src/components/services/BenefitsSection.tsx` | Fix `/contact` link to phone number |
| `src/pages/Contact.tsx` | Replace 14er email, renovation project names, service options |
| `src/pages/Index.tsx` | Replace logo imports and data array |
| `src/components/home/LogoCloud.tsx` | Update label, support text-based brand entries |

### New Assets
5 logo images copied from user uploads to `src/assets/`

### Removed References
After all changes, zero instances of "14er", "renovation", "remodel", "Miguel", or `/contact` will remain in the codebase.


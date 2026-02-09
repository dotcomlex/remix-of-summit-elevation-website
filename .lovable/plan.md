

# Prompt 1: Project Setup — Color Scheme, Fonts, Global Configuration

This first step rebrands the entire project from "14er Renovations" to "Emerald Paints" at the foundational level: colors, meta tags, routing, logo, and contact info.

---

## What Changes

### 1. Copy the uploaded logo into the project
- Copy `user-uploads://ChatGPT_Image_Feb_8_2026_01_43_44_PM.png` to `src/assets/logo-emerald.png`
- This white-on-transparent PNG will replace the 14er logo everywhere

### 2. Update `index.html` meta tags
- Title: "Emerald Paints | Professional Painting Services in Colorado"
- Description and Open Graph tags updated for Emerald Paints
- Remove Lovable-branded OG image references

### 3. Overhaul `src/index.css` color variables
- Replace entire `:root` block with the Emerald Paints forest green/gold palette as specified
- Update `.dark` theme to match
- Keep all animation utilities, font imports, and texture classes untouched

### 4. Simplify routing in `src/App.tsx`
- Remove routes for `/about`, `/contact`, `/services/kitchen-bath`, `/services/concrete`, `/services/general-contracting`
- Keep only: `/` (Home), `/services`, `/gallery`, and `*` (NotFound)
- Remove unused imports

### 5. Update `src/components/layout/Navigation.tsx`
- Replace logo import: `logo-14er.png` becomes `logo-emerald.png`
- Update alt text to "Emerald Paints"
- Reduce nav links to 3: Home, Services, Gallery
- Update all phone numbers from `(720) 818-9678` / `+17208189678` to `(720) 447-5654` / `+17204475654`

### 6. Update `src/components/layout/Footer.tsx`
- Replace logo, company name, phone, email references
- Will need to read this file first during implementation to make precise edits

### 7. Files NOT touched
- `tailwind.config.ts` — colors flow from CSS variables, no changes needed
- `src/components/ui/*` — all shadcn components stay as-is
- `src/components/ui/circular-gallery.tsx` — untouched per instructions
- Animation keyframes and utility classes in index.css — kept intact
- Font imports — Montserrat + Source Sans 3 remain

---

## Technical Details

The color remapping strategy uses the existing CSS variable system. Components using `text-primary`, `bg-primary`, etc. will automatically pick up the new forest green. Variables like `--sunset-orange` and `--sky-blue` are remapped to point to green values so any component referencing those colors through Tailwind classes (e.g., `text-sunset`) will also shift without code changes.

Key color mappings:
- Primary: `#2D6A4F` (deep forest green) — buttons, links, accents
- Gold: `#C5952B` — ratings, highlights
- Section dark: `#0F1F17` — forest-tinted charcoal for dark sections
- Sand/Cream: `#FAF8F5` — light section backgrounds

## Expected Result
- Full visual rebrand from orange/mountain to forest green/gold
- 3-page routing (Home, Services, Gallery)
- Emerald Paints logo in header/footer
- Correct phone number and email throughout navigation
- No visual breakage — all components render with new palette automatically



# Footer Overhaul — Left-Aligned, Better Background, No EPA

Fix the footer so it's left-aligned, has a distinct dark background, removes irrelevant certifications (EPA, Lead-Safe), and looks clean on both desktop and mobile.

---

## Changes to `src/components/layout/Footer.tsx`

### 1. Background
- Change from `bg-[hsl(var(--charcoal-dark))]` (green-tinted) to `bg-gray-900` for a neutral dark background that contrasts better with the page
- Keep the top separator line but make it more visible

### 2. Left-Align Everything
- Remove `text-center` and `items-center` / `justify-center` classes on mobile
- All text, links, and contact info left-aligned on all screen sizes
- Grid columns remain 3-column on desktop, stack on mobile -- but always left-aligned

### 3. Remove EPA / Lead-Safe Certifications
- Delete "EPA Certified" and "Lead-Safe Certified" from the certifications array
- Replace with three simple items: "Licensed & Insured", "BBB Accredited", "Serving Colorado Since 2017"
- Left-align the certifications row instead of centering

### 4. Remove Phone Number
- Per earlier instruction, no phone numbers in footer (email only via `Paintsemerald@gmail.com`)

### 5. Keep "Powered by Frost Media LLC"
- Retain the existing credit link at the bottom

### 6. Mobile Responsiveness
- Single column stack on mobile, all left-aligned
- Service areas in 2-column grid on all sizes
- Proper spacing between sections

---

## Technical Details

### File: `src/components/layout/Footer.tsx`

**Data changes:**
- Remove `certifications` array
- Remove "Contact" from `quickLinks` (avoid linking to contact from footer since it has its own CTA elsewhere)
- Trim `serviceAreas` to 6 items: Denver, Boulder, Lakewood, Aurora, Arvada, Westminster

**Styling changes:**
- Footer: `bg-gray-900 text-white` instead of green-tinted charcoal
- Grid: remove `text-center md:text-left` and `items-center md:items-start` -- just always left
- Contact info: remove `justify-center md:justify-start` -- just `justify-start`
- Certifications section: `flex flex-wrap gap-x-6 gap-y-2` without `justify-center`
- Copyright bar: `items-start` instead of `items-center`

**Imports:**
- Remove `CheckCircle2`, add `CheckCircle2` replaced by simple `CheckCircle2` kept for cert icons (or use a simpler dot)
- Keep `Mail`, `MapPin`, `ArrowRight`
- No `Phone` import

**Structure stays the same:** 3-column grid (Brand, Quick Links, Service Areas) + certifications bar + copyright bar. Just restyled and cleaned up.

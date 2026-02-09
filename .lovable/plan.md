

# Modern Footer Redesign — 4-Column Grid Layout

Redesign the footer from the current centered minimal layout into a modern 4-column grid with more content and interactivity.

---

## What Changes

### 1. Layout: 4-column grid on desktop, stacked on mobile
- **Column 1 — Brand**: Logo, description, contact info (email + phone)
- **Column 2 — Quick Links**: Home, Services, Gallery, Get Quote
- **Column 3 — Service Areas**: 6 Denver metro cities
- **Column 4 — Request Quote + Social**: Email capture form with submit button, plus social media icons

### 2. Background
- Switch from `bg-gray-900` to `bg-gray-800` for slightly lighter contrast

### 3. Quote Request Form
- Simple email input + "Send" button
- Loading and success/error states with auto-reset after 3 seconds
- Simulated submission (no backend wired up yet)

### 4. Social Media Icons
- Facebook, Instagram, Twitter icons with hover effects
- Placeholder `#` links (to be updated with real URLs later)

### 5. Bottom Bar
- Certifications row: Licensed & Insured, BBB Accredited, Since 2017
- Copyright line
- Keep "Powered by Frost Media LLC" credit

### 6. What's removed from current footer
- Centered logo layout replaced with left-aligned brand column
- "Serving All of Colorado" replaced with phone number + email in brand column

---

## Technical Details

### File: `src/components/layout/Footer.tsx` (full rewrite)

**New imports:**
- `useState` from React
- `Phone`, `Mail`, `MapPin`, `ArrowRight`, `Facebook`, `Instagram`, `Twitter` from lucide-react (replace current `Mail`, `MapPin`, `CheckCircle2`)
- `Input` from `@/components/ui/input`
- `Button` from `@/components/ui/button`
- `cn` from `@/lib/utils`

**New data arrays:**
- `quickLinks`: 4 items (Home, Services, Gallery, Get Quote via tel link)
- `serviceAreas`: 6 cities (unchanged)
- `socialLinks`: 3 social platforms with icons

**New state:**
- `email`, `isSubmitting`, `subscriptionStatus` for the quote form

**Grid structure:**
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` with `gap-12 lg:gap-8`
- Each column left-aligned

**Bottom section:**
- Full-width bar with certifications + copyright + Frost Media credit
- Separated by `border-t border-gray-700`


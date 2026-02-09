

# Footer Cleanup — Center Logo, Bigger Size, Remove Clutter

---

## What Changes

### 1. Center and enlarge the logo
- Center the logo on mobile and desktop (wrap in `flex justify-center`)
- Increase size: `h-32 sm:h-36 md:h-40` (up from `h-24 sm:h-28 md:h-32`)

### 2. Remove unnecessary sections
- **Remove "Quick Links"** column entirely — these links are already in the nav and not useful in the footer
- **Remove "Privacy Policy" and "Terms of Service"** — they're non-functional placeholder text (just spans with `cursor-default`)
- **Remove the long description paragraph** — redundant with the rest of the site

### 3. Simplify layout
- Instead of 3-column grid, use a simpler 2-section layout:
  - **Top:** Centered logo + email + location (stacked)
  - **Bottom row:** Service Areas (left) + Certifications (right) on desktop; stacked on mobile
- Keep copyright + Frost Media credit at the very bottom

---

## Technical Details

### File: `src/components/layout/Footer.tsx`

**Removals:**
- Delete `quickLinks` array and its entire column
- Delete the paragraph ("Colorado's trusted painting professionals...")
- Delete Privacy Policy / Terms of Service spans
- Remove `ArrowRight` from imports (no longer used)

**Layout restructure:**
- Logo: centered with `flex justify-center mb-6`, sized `h-32 sm:h-36 md:h-40`
- Contact info (email + location): centered below logo
- Grid changes from `grid-cols-1 md:grid-cols-3` to a simpler layout: Service Areas + Certifications side by side on desktop (`md:grid-cols-2`), stacked on mobile
- Copyright bar stays at bottom with just the year line + Frost Media credit


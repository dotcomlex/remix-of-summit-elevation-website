

# Contact Page — Match Site Style + Remove Phone Number

Two issues to fix: the page looks like a generic template (doesn't match the dark hero / textured style of the rest of the site), and the phone number section at the bottom needs to be removed.

---

## Changes to `src/pages/Contact.tsx`

### 1. Add Dark Hero Banner (matching ServiceHero pattern)
- Background image using `services-hero-bg.jpg`
- Dark gradient overlay: `from-mountain-charcoal/90 via-mountain-charcoal/75 to-mountain-charcoal/60`
- Top gradient for transparent nav: `from-black/50 via-transparent to-transparent`
- "Get Your Free Estimate" heading in `text-snow-white` with primary accent
- Subtitle in lighter text
- Padding: `pt-40 pb-24` to match other hero sections

### 2. Form Section on Textured Background
- Replace plain `bg-background` with a section using `paper-texture-light.jpg` as background
- Section padding `py-16`
- Uppercase tracking-widest section label ("Get In Touch") matching other page sections

### 3. Restyle Form Card
- Change to `bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg border border-black/5` for a more polished look matching the site
- Inputs use `rounded-xl` instead of `rounded-lg`

### 4. Remove Phone CTA
- Delete the entire "Prefer to talk?" section and phone number link (lines 124-134)
- Remove `Phone` from lucide-react imports

### 5. Updated Imports
- Add: `import heroImage from "@/assets/services-hero-bg.jpg"`
- Add: `import paperTexture from "@/assets/paper-texture-light.jpg"`
- Remove: `Phone` icon import

---

## Technical Details

### File: `src/pages/Contact.tsx`
Full rewrite with this structure:

```text
<Layout>
  <!-- Hero Banner -->
  <section> with hero image + gradient overlays (min-h-[50vh])
    h1: "Get Your Free" + "Estimate" (primary accent)
    p: "Ready to transform your home? Tell us about your project."

  <!-- Form Section -->
  <section> with paper texture background, py-16
    Section label: "-- Get In Touch --"
    Form card: bg-white/95, rounded-3xl, shadow-lg, max-w-xl centered
      4 fields (name, email, projectType, message) -- unchanged logic
      Submit button -- unchanged
</Layout>
```

Form logic, validation, toast behavior all stay the same. Only visual and structural changes.


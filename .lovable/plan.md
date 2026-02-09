

# Prompt 5: "Why Choose Emerald Paints" + "How We Work" Section

A content-only update to `src/components/home/WhyChooseUs.tsx`. No structural or layout changes — just text, data, image source, and wave divider color.

---

## Changes (single file)

### 1. Replace image import with Unsplash URL
- Remove `import teamImage from "@/assets/team-work.jpg";`
- Define as a constant string: `const teamImage = "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80";`

### 2. Update proof cards data
Replace the 3 card objects with painting-specific copy:
- "Licensed, Insured & Guaranteed" — satisfaction guarantee messaging
- "Detailed Prep, Flawless Finish" — mentions 7-10 year paint life
- "On Time, On Budget, Zero Mess" — respect and cleanliness

Icons stay the same (Shield, ClipboardCheck, CalendarCheck).

### 3. Update process steps data
Replace the 3 steps:
1. "Free Color Consultation" — visit home, discuss vision, assess surfaces
2. "Detailed Estimate" — written estimate, no hidden fees
3. "Expert Execution" — prep, painting, cleanup

### 4. Update section header text
- Pill: "Why Homeowners Choose Us"
- Pill classes: change `bg-mountain-navy/10 text-mountain-navy` to `bg-primary/10 text-primary`
- Headline: "Why Colorado Homeowners Trust Emerald Paints"
- Subheadline: "More than just a fresh coat — we deliver lasting quality through meticulous preparation, premium materials, and a process built around your schedule."

### 5. Update image area
- Alt text: "Professional painter at work"
- Experience badge: "8+" instead of "15+"
- Caption: "Professional finish, every time"

### 6. Update wave divider fill color
- Change from `hsl(225 25% 15%)` to `hsl(153 30% 8%)` to match `--section-dark`

## What stays untouched
- Entire layout structure (2-column grid, mobile ordering)
- All AnimatedSection wrappers and delays
- Proof card styling (white bg, shadow, icon placement)
- "How It Works" header with horizontal line separators
- Background `bg-sand` and texture overlay
- All responsive classes and breakpoints

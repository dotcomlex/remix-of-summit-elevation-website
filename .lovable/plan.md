

# Contact Page Simplification

Strip the cluttered, multi-column contact page down to a clean, focused single-column layout with only 4 form fields.

---

## What Gets Removed

- Hero section with background image and trust badges
- Right sidebar column (contact info cards, "Why Choose Us", testimonial)
- Form fields: phone, timeline, address, project details
- All "Free Color Consultation" copy
- Unused imports and data arrays (`projectTypes`, `timelines`, `whyChooseUs`, hero image, most icons)

## What Replaces It

A single centered section with:

1. **Header** -- "Get Your Free Estimate" title + one-line subtitle
2. **4-field form** inside a clean card (max-width `xl`):
   - Name (text input, required)
   - Email (email input, required)
   - Project Type (native `<select>` dropdown: Interior, Exterior, Commercial, Deck/Fence Staining, Other -- required)
   - Message (textarea, optional)
3. **Submit button** -- "Send My Request" with arrow icon
4. **Phone CTA** -- "Prefer to talk?" with clickable `tel:+17204475654` link below the form

Toast feedback on submit ("Request sent! We'll be in touch within 24 hours.") with form reset.

## Layout

- Single column, centered (`max-w-xl mx-auto`)
- Top padding to clear nav (`pt-32 pb-16`)
- Clean background (`bg-background`)
- Form card with `rounded-2xl shadow-xl border`

---

## Technical Details

### File: `src/pages/Contact.tsx`
Complete rewrite. New imports: only `useState`, `Button`, `ArrowRight`, `Phone`, `Layout`, `useToast`. Uses native HTML `<input>`, `<select>`, and `<textarea>` elements instead of Radix UI components for simplicity.

### Form state
```text
{ name: "", email: "", projectType: "", message: "" }
```

### Validation
- Requires name, email, and projectType before submit
- Shows destructive toast if missing

### No changes needed to `src/App.tsx`
The `/contact` route already exists.


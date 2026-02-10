

# Hero Images — Use Uploaded + Generate Unique Per Page

---

## What Changes

### 1. Home page hero — use uploaded image
- Replace `hero-clean-home.jpg` with the user's uploaded image
- Update import in `src/components/home/HeroSection.tsx`

### 2. Generate 7 NEW unique AI images (no recycling)

Each page gets its own distinct hero background:

| Page | New Asset File | AI Image Description |
|---|---|---|
| **About** | `hero-about-page.jpg` (overwrite) | Friendly painting crew posing together in front of a completed Colorado home, team photo feel, warm afternoon light |
| **Services** | `services-hero-bg.jpg` (overwrite) | Close-up of a painter's hand rolling premium paint on an interior wall, crisp white paint, professional tools visible |
| **Contact** | `hero-contact.jpg` (new) | Welcoming front door of a freshly painted Colorado home, warm porch light, inviting entrance, mountains in distance |
| **Gallery** | `hero-gallery.jpg` (new) | Dramatic wide shot of a beautifully painted modern Colorado home exterior at golden hour, full curb appeal |
| **Kitchen & Bath** | `hero-kitchen-bath.jpg` (new) | Freshly painted bright kitchen with white cabinets and modern finishes, natural light streaming in |
| **General Contracting** | `hero-general-contracting.jpg` (new) | Active construction site with framing and crew working on a Colorado home addition, blue sky |
| **Concrete** | `hero-concrete.jpg` (new) | Freshly poured stamped concrete patio with mountain views in background, clean professional finish |

### 3. Update imports in each page

- `Contact.tsx`: change import from `services-hero-bg.jpg` to new `hero-contact.jpg`
- `Gallery.tsx`: change import from `services-hero-bg.jpg` to new `hero-gallery.jpg`
- `KitchenBath.tsx`: update `ServiceHero` backgroundImage to new `hero-kitchen-bath.jpg`
- `GeneralContracting.tsx`: update backgroundImage to new `hero-general-contracting.jpg`
- `Concrete.tsx`: update backgroundImage to new `hero-concrete.jpg`

---

## Technical Details

### Files modified:
- `src/components/home/HeroSection.tsx` — change import to uploaded image (copied to `hero-home-new.webp` or similar)
- `src/pages/About.tsx` — no import change needed (same filename, new image)
- `src/pages/Services.tsx` — no import change needed (same filename, new image)
- `src/pages/Contact.tsx` — change import from `services-hero-bg.jpg` to `hero-contact.jpg`
- `src/pages/Gallery.tsx` — change import from `services-hero-bg.jpg` to `hero-gallery.jpg`
- `src/pages/services/KitchenBath.tsx` — add new import, update `ServiceHero` prop
- `src/pages/services/GeneralContracting.tsx` — add new import, update `ServiceHero` prop
- `src/pages/services/Concrete.tsx` — add new import, update `ServiceHero` prop

### New/overwritten assets (8 total):
- `src/assets/hero-home-new.webp` — user's uploaded file (copied)
- `src/assets/hero-about-page.jpg` — AI generated (overwrite)
- `src/assets/services-hero-bg.jpg` — AI generated (overwrite)
- `src/assets/hero-contact.jpg` — AI generated (new)
- `src/assets/hero-gallery.jpg` — AI generated (new)
- `src/assets/hero-kitchen-bath.jpg` — AI generated (new)
- `src/assets/hero-general-contracting.jpg` — AI generated (new)
- `src/assets/hero-concrete.jpg` — AI generated (new)




# Generate Realistic Gallery Images for /gallery Page

## Overview
Replace the current Unsplash stock photos with AI-generated, realistic images of professional painting and staining work. Each image will be generated using the Nano banana image model, then saved to the project assets.

## Images to Generate (18-20 total, covering all categories)

**Interior Painting (4 images)**
1. Freshly painted living room with crisp white walls, natural light, Colorado mountain view through window
2. Master bedroom with a bold navy accent wall, clean tape lines, professional finish
3. Dining room with warm sage green walls, crown molding detail, hardwood floors
4. Hallway with fresh neutral paint, clean edges along trim and ceiling

**Exterior Painting (4 images)**
1. Colorado craftsman home with fresh exterior paint, two-tone color scheme, mountain backdrop
2. Ranch-style home with newly painted siding and contrasting trim, front porch
3. Close-up of clean exterior detail work -- shutters, fascia, and window trim
4. Two-story home with professional scaffolding, fresh paint job in progress

**Staining (3 images)**
1. Cedar deck freshly stained with rich honey tone, mountain backyard setting
2. Wooden fence with fresh semi-transparent stain, clean uniform finish
3. Front door and porch railing with deep mahogany stain, polished look

**Commercial (3 images)**
1. Modern office lobby with clean painted walls, professional finish
2. Retail storefront with freshly painted exterior, crisp signage area
3. Commercial hallway with clean, bright painted walls

**Cabinets / Kitchen & Bath (4 images)**
1. Kitchen with freshly painted white cabinets, clean finish, modern hardware
2. Bathroom vanity with painted cabinets, clean lines
3. Kitchen island with two-tone painted cabinets (white uppers, dark lowers)
4. Laundry room with freshly painted sage cabinets

## Technical Steps

1. **Generate each image** using `google/gemini-2.5-flash-image` via an edge function or direct generation, with detailed prompts emphasizing:
   - Professional painting results (not painters in action, but finished quality work)
   - Colorado residential settings where appropriate
   - Clean lines, professional finish, realistic lighting
   - No text or watermarks

2. **Save generated images** to `src/assets/gallery/` with descriptive filenames (e.g., `interior-living-room.jpg`, `exterior-craftsman.jpg`)

3. **Update `src/pages/Gallery.tsx`** -- replace the `galleryImages` array with the new images, proper titles, locations, categories, and local asset imports

4. **Update `src/components/home/GallerySection.tsx`** -- replace the Unsplash URLs in the circular gallery `items` array with a curated selection of the new generated images

## Notes
- Images will be generated at high resolution for quality
- Each image will have a unique, descriptive title and a Colorado location
- The category distribution ensures all filter tabs have content
- The circular gallery on the homepage will also be updated with new images for consistency


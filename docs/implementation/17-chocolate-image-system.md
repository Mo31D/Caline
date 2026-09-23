# Stage 17 — Chocolate Image System Preparation

**Date:** 2026-09-23  
**Repository:** `Mo31D/Caline`

## Purpose

Prepare the homepage and Chocolate catalogue to receive the newly generated Caline photography without any further layout change after upload.

## Upload directory

`images/chocolate/`

The directory has been created in the repository.

## Final image filenames

1. `caline-made-in-sharjah-belgian-heritage.webp`
2. `caline-assorted-chocolates.webp`
3. `caline-dark-chocolate.webp`
4. `caline-white-chocolate.webp`
5. `caline-decorated-truffles.webp`
6. `caline-gift-boxes.webp`

## Placement

### Homepage hero

`caline-made-in-sharjah-belgian-heritage.webp`

replaces the coded chocolate-box visual beside:

- Made in Sharjah
- Belgian chocolate heritage
- Choose here · enquire directly

The original coded visual remains as a fallback if the image is missing.

### Homepage collection cards

The homepage now expects:
- assorted chocolates;
- dark chocolate;
- decorated truffles;
- gift boxes.

### Chocolate page

The English and Arabic Chocolate pages now expect all five category images:
- Assorted Chocolates
- Dark Chocolate
- White Chocolate
- Decorated Truffles
- Gift Boxes

## Image behaviour

- responsive 4:3 treatment for collection imagery;
- `object-fit: cover`;
- lazy loading for category images;
- hero image loads eagerly with `fetchpriority="high"`;
- subtle hover scale on desktop;
- coded category artwork remains as fallback if an uploaded image is missing.

## Cache

The homepage and Chocolate pages now load:

`site.css?v=20260923-17`

to prevent Safari from reusing the older collection-card stylesheet.

## QA

Confirmed:
- both English and Arabic homepages reference the new hero image;
- both English and Arabic Chocolate pages reference all five category images;
- the homepage references the relevant four collection images;
- the Chocolate image folder exists;
- Stage 17 responsive CSS is present.

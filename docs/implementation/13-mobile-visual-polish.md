# Stage 13 — Mobile Visual Polish & Arabic Typography

**Date:** 2026-09-23  
**Repository:** `Mo31D/Caline`

## Scope

Visual refinement based on real iPhone screenshots of the live bilingual site.

Primary focus:
- full Caline logo visibility;
- Arabic typography;
- mobile header density;
- heading scale;
- readability and contrast;
- mobile spacing;
- cards, forms and saved-list UI;
- footer hierarchy.

## 1. Logo treatment

The original `images/logo.png` includes substantial transparent space around the actual mark.

The previous CSS used `object-fit: cover`, which could crop the kangaroo or tagline in narrow header containers.

Implemented:
- new presentation wrapper: `images/logo-display.svg`;
- the wrapper crops only unused transparent canvas while keeping the original Caline artwork unchanged;
- global header and footer now use the full lockup;
- localized page marks and homepage box mark use the same complete logo;
- favicon and structured-data logo continue to use the original PNG.

No logo artwork was redrawn.

## 2. Arabic typography

Changed Arabic UI typography from IBM Plex Sans Arabic as the primary face to:

**Alexandria**

Fallback:
- IBM Plex Sans Arabic
- Arial
- sans-serif

Why:
- stronger Arabic display character;
- clearer large headings;
- better mobile rhythm;
- more appropriate balance between premium styling and readability.

Arabic headings now use a controlled medium weight rather than relying mainly on size.

## 3. Mobile heading scale

Reduced oversized mobile type, especially in Arabic.

Implemented separate Arabic scaling so Arabic headlines do not simply inherit English dimensions.

Improvements:
- lower H1 size;
- slightly more generous Arabic line-height;
- balanced text wrapping;
- constrained line lengths;
- smoother H1 → lead → CTA spacing.

## 4. Mobile header

At phone widths:
- removed the secondary top information strip to reduce vertical clutter;
- kept the main header as the primary brand/navigation surface;
- gave the complete Caline logo more usable space;
- tightened language, list and menu controls;
- adjusted the mobile navigation panel position to match the new header height.

Tablet behaviour still retains the information strip.

## 5. Readability

Raised mobile text sizes in areas that were previously too small:
- collection descriptions;
- manufacturing/craft blocks;
- timeline text;
- order steps;
- contact information;
- saved-list text;
- footer links and introduction.

Light surfaces now have stronger contrast and warmer luxury tones.

## 6. Layout rhythm

Adjusted mobile spacing for:
- hero;
- page hero;
- normal sections;
- compact sections;
- section headings;
- editorial grids;
- enquiry panels;
- quote sections;
- footer.

The site keeps the high-luxury spacious feel without allowing individual sections to become unnecessarily tall.

## 7. Cards and enquiry panels

Polished:
- collection cards;
- gift enquiry box;
- order steps;
- contact fields;
- My List controls;
- email preview.

Small mobile product grids collapse to one column below 560px for a calmer premium layout.

## 8. Forms

Removed duplicate placeholder attributes left over from the previous language conversion.

Fields now receive:
- stronger mobile sizing;
- clearer focus treatment;
- more comfortable touch height.

## 9. Compatibility fix

Added aliases for the earlier `--cocoa` and `--ivory` CSS variables still referenced by a few manufacturing blocks.

This restores intended dark/light contrast in those sections.

## QA

Confirmed:
- JavaScript parses successfully;
- CSS braces are balanced;
- all 14 English/Arabic public pages use the complete display logo;
- no duplicate form placeholders remain;
- Arabic and English pages retain independent URLs;
- RTL architecture remains intact.

## Main files

- `assets/site.css`
- `assets/site.js`
- `images/logo-display.svg`
- localized files under `/en/` and `/ar/`

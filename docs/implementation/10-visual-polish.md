# Stage 10 — Caline Visual & Content Polish

**Date:** 2026-09-23  
**Repository:** `Mo31D/Caline`  
**Backup branch:** `archive/pre-rebuild-2026-09-23`

## Objective

Move Caline away from the previous template look and away from visual similarity to BM HAIR, while preserving the authentic Caline kangaroo/script identity.

## Design direction implemented

### Caline-specific high-luxury palette

The site now uses a bespoke darker palette rather than BM HAIR-style ivory/beige as the dominant canvas:

- **Black Cacao:** `#120a09`
- **Deep Garnet:** `#4a171b`
- **Garnet Deep:** `#351014`
- **Burnished Gold:** `#c9a45f`
- **Pale Gold:** `#e1c789`
- **Champagne Pearl:** `#f1e9e5`
- **Rose Stone:** `#c9b1a9`

Gold is used as a metallic accent rather than a generic black-and-gold theme.

### Visual changes

- dark premium global header;
- deep garnet/cacao hero treatment;
- sharper, less SaaS-like cards;
- reduced rounded-corner language;
- more restrained gold detailing;
- chocolate presentation visuals built around box geometry and product forms rather than stock cake imagery;
- stronger contrast and section rhythm;
- dedicated Arabic RTL refinements;
- Caline logo retained as the central brand asset.

## Content polish

Public-facing copy was rewritten to remove internal audit/research language.

Removed or rewritten language such as:
- “fake checkout”;
- “invented products”;
- “previous website”;
- “verify first”;
- design-system commentary that belonged in project documentation.

The public site now speaks as a premium chocolate brand while still avoiding unsupported product details.

## Ideas selectively carried over from other projects

### Lakeside Picnic
Used:
- local catalogue / shortlist model without online payment;
- simple customer path from browsing to enquiry.

Not copied:
- its visual identity, colour system or Lake District retail tone.

### The Black Sheep Shop
Used:
- strong collection-led browsing;
- category clarity;
- clear distinction between online browsing and physical/current availability.

Not copied:
- its gift-shop visual styling.

### BM HAIR
Used:
- disciplined global shell;
- responsive hierarchy;
- multilingual architecture principles.

Not copied:
- Shopify;
- BM HAIR palette;
- BM HAIR editorial visual identity.

## Commerce model

The rebuilt Caline site deliberately has:

- no Shopify;
- no online card payment;
- no fake checkout;
- a browser-local **My Selection** list;
- email enquiry flow for current catalogue, quantities, gifting and availability.

## Files central to the new visual system

- `assets/site.css`
- `assets/site.js`
- localized pages under `/en/` and `/ar/`

## Safety / rollback

The complete pre-rebuild state is preserved on:

`archive/pre-rebuild-2026-09-23`

No audit reports were removed.

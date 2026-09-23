# Caline Website Audit — Stage 1: Current Site & Technical/UX Review

**Repository:** `Mo31D/Caline`  
**Branch:** `main`  
**Audited commit:** `5cc9ca058b44c76b24601b0d107fdafd37c58d69`  
**Live domain:** https://calinefactory.com  
**Audit date:** 2026-09-23

## Scope

This stage reviews the current repository and live-site structure only. It does **not** assume that product names, prices, company history, branch claims, or marketing statistics are factually correct. Those are handled in Stages 2 and 3.

## Executive finding

The current site is a prototype/template-based build rather than a production-grade premium chocolate website. The main weakness is not just styling: the information architecture, commerce logic, content consistency, accessibility, trust signals, SEO, and factual reliability all need rebuilding.

The safest direction is to preserve the real Caline identity/assets that can be verified, but **not** polish the existing structure in place. A professional rebuild should start only after the factual/product audit is complete.

## Current page inventory

| Page | Purpose | Current condition |
|---|---|---|
| `index.html` | Home | Template-heavy; duplicated hero slides; placeholder links; unverified marketing claims/products |
| `about.html` | About | Contains useful company narrative, but several claims require verification |
| `combos.html` | Bundles | Product bundles and prices currently unverified |
| `product.html` | Products | Product names/prices currently unverified |
| `luxury.html` | Luxury chocolate | Very thin content; not a credible category page |
| `sugarfree.html` | Sugar-free | Repeats generic “party chocolate” items and uses **SAR/riyal wording** instead of AED |
| `offers.html` | Offers/news | Contains high-risk factual claims that are not sourced |
| `store.html` | Store | Demo-only browser-local cart/store; not a real shared ecommerce system |
| `dashboard.html` | Product dashboard | Public client-side demo dashboard using browser LocalStorage |
| `contact.html` | Contact | Form submits via FormSubmit to a personal Gmail address |
| `thankyou.html` | Thank-you | Static confirmation page |

## Major UX / design issues

### 1. The site still reads visually and structurally like a generic HTML template

The codebase carries a large legacy front-end stack: Bootstrap, several jQuery-era plugins, multiple slider/carousel libraries, Font Awesome, IcoMoon, Revolution Slider assets, Owl Carousel, Swiper, Slick, Fancybox, jQuery UI and Nice Select. Most of this is unnecessary for the actual site.

This contributes to:
- visual inconsistency;
- excess code and asset weight;
- difficult maintenance;
- a dated interaction model;
- harder mobile refinement.

### 2. The hero is duplicated instead of telling a brand story

The home carousel repeats “Caline Chocolate” and the same message/image across its slides. A premium brand should use the first viewport to establish:
- what Caline actually makes;
- where it is made;
- what differentiates it;
- one clear next action.

### 3. Product merchandising is weak

The current product experience lacks:
- clear product taxonomy;
- verified product names;
- weights/sizes;
- ingredients or filling descriptions;
- allergen information;
- packaging options;
- real availability;
- consistent photography;
- product detail pages;
- coherent purchase/quotation flow.

For a premium chocolate manufacturer/boutique, these are core trust and conversion elements.

### 4. Visual language is inconsistent

The stylesheet mixes several unrelated fonts:
- Rajdhani
- Poppins
- Roboto
- Snell script fonts
- Open Sans imports

The palette also contains many near-duplicate browns/darks rather than a controlled token system. The primary orange/brown combination reads more like a generic confectionery template than a distinctive premium Caline identity.

### 5. RTL/Arabic implementation is inconsistent

Some pages use `lang="ar" dir="rtl"`; the homepage does not consistently establish the same document-level RTL semantics. English display typefaces and generic layout rules are mixed with Arabic content.

### 6. Accessibility is poor

Automated source inspection found:
- **31 images on the homepage, all 31 with empty or `#` alt text**;
- many other pages with missing/non-descriptive alt text;
- many action links that do not navigate anywhere;
- generic icon-only/social controls.

This is both an accessibility and SEO problem.

## Broken / placeholder interaction inventory

Source inspection found the following approximate counts of links that are either `#` or `Javascript:void(0)`:

| Page | Placeholder/dead-style links |
|---|---:|
| Home | 18 |
| About | 5 |
| Combos | 5 |
| Contact | 5 |
| Luxury | 6 |
| Offers | 3 |
| Products | 7 |
| Store | 3 |
| Sugar-free | 11 |

This is a major reason the site feels unfinished.

## Ecommerce / technical findings

### Store is not a real ecommerce implementation

`store.html` and `dashboard.html` use browser `localStorage`.

Consequences:
- products entered in the dashboard exist only in the browser that entered them;
- other visitors will not see the same product catalogue;
- clearing browser data removes the catalogue/cart;
- there is no database;
- there is no inventory;
- there is no authentication;
- there is no payment gateway;
- there is no reliable order record.

### Checkout does not transmit an order

The checkout JavaScript collects customer name, phone and address, then shows a success alert and clears the cart. There is no server/API call that actually records or sends the order.

This must not be presented as working ecommerce.

### Dashboard is publicly accessible

`dashboard.html` is shipped as a normal public static page. It is not an authenticated admin panel.

### Contact form routing is unsuitable for a professional production site

The contact page currently posts through:

`https://formsubmit.co/mo.eid.mail@gmail.com`

This exposes a personal Gmail destination in source code rather than using a controlled Caline business endpoint or backend.

## Content consistency problems found before external verification

These are internal contradictions/issues visible from the repository alone:

1. `sugarfree.html` lists prices as **300 ريال**, while the rest of the UAE site uses **درهم/AED**.
2. “Sugar-free” content repeats generic “شوكولاتة الحفلات” rather than identifiable sugar-free SKUs.
3. Home has repeated “شوكولاتة عيد الميلاد” cards with the same 300 AED price.
4. Home statistics claim:
   - 3000+ orders daily
   - 40000+ happy customers
   - 50+ international awards
   
   No evidence is embedded or linked.
5. `offers.html` claims:
   - New Year 20% discount
   - a new Riyadh branch
   - participation in a Dubai international confectionery exhibition
   
   These require independent confirmation before they can remain public.
6. Newsletter forms have no functional subscription backend.
7. Customer-service links such as tracking, shipping, returns, gift-card balance and FAQ are placeholders.

## SEO findings

The homepage currently has:
- empty meta keywords;
- empty meta description;
- non-descriptive image alt text;
- repeated/weak page titles on multiple category pages;
- no visible structured product data;
- no evidence in the repository root of a purposeful sitemap/robots/schema implementation;
- many non-functional links.

The current site therefore should **not** be treated as SEO-ready.

## Repository / maintainability findings

The repository contains a large amount of legacy template/vendor material relative to the actual business functionality. There are also placeholder one-byte files named `1` in several directories.

A rebuild should dramatically reduce this footprint.

## Priority classification

### Critical — fix before relaunch
- verify company facts and products;
- remove false/unverified offers, branches and statistics;
- replace demo ecommerce/localStorage flow;
- remove or protect the public dashboard;
- establish real contact/order routing;
- fix currency inconsistencies.

### High
- rebuild information architecture;
- redesign home/product pages;
- replace placeholder actions;
- establish real Arabic RTL typography;
- implement accessible image alt text;
- create consistent product photography system.

### Medium
- simplify front-end dependencies;
- optimize image formats and loading;
- improve metadata/schema;
- add sitemap/robots/canonical/social metadata after final URL structure is fixed.

## Stage 1 conclusion

The current project is useful as a **reference/archive of the previous attempt**, but it should not be the design foundation for the final professional website.

No public-facing files were modified during this stage. Only audit documentation is being added.

## Next stage

**Stage 2 — Current Content Inventory**

The next report will extract every material company claim, branch/contact detail, product, price, category, service and marketing statistic currently present so each item can be marked later as:

- Verified
- Contradicted
- Unverified
- Remove
- Needs owner confirmation

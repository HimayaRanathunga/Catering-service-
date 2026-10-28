# Sha Catering Service

Website for **Sha Catering Service**, Bandarawela, Sri Lanka: event rentals, Sri Lankan catering and party organizing.

The layout and palette follow the Revamp *Catering Equipment Rental* template (petrol `#092c2d`, paper `#f3f1e8`, acid green `#c6ec32`, Barlow Condensed + DM Sans), adapted for a catering and rental business.

## Features

- **Home**: animated hero with scroll progress, approach, the rental kit (Serve / Set / Pour / Shape), 3-step planning process, menu highlights, gallery teaser, testimonials, FAQ and a closing enquiry call-to-action.
- **Rentals**: categories with a sticky scroll-spy bar and "add to quote" on every item.
- **Menu**: packages, an interactive Popular Dishes showcase and dish categories.
- **Events**: services, expanding event panels and the areas served.
- **Gallery**: category filters, animated tiles and a lightbox with keyboard navigation.
- **Quote builder**: pick event details, a catering package and rentals, then send it as a pre-filled WhatsApp message. No payment is taken on the site.
- **Contact** form that sends via WhatsApp, a floating WhatsApp button, and a dark/light theme toggle.

## Tech stack

React 19 · Vite · Tailwind CSS 4 · React Router 7 · i18next · Oxlint

## Getting started

```bash
npm install
npm run dev       # dev server
npm run build     # production build in dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Project structure

```
public/photos/     site photos (events, rentals, food, dishes)
src/pages/         Home, Rentals, Menu, Services (Events), Gallery, Quote, Contact
src/components/    Navbar, Footer, Lightbox, MenuBody, EventTiles, ...
src/context/       QuoteContext (the quote cart)
src/data/          catalog.js: rental categories, menu packages, dishes
src/i18n/          en.json + en.extra.json (all site text)
src/config.js      contact details, stats and photo mapping
src/index.css      theme colors (dark/light) and animations
```

## Before going live

Edit `src/config.js` and replace the placeholders:

- `whatsapp`, `phoneDisplay` and `email` with the real contact details
- `stats` (events served, guests fed, years) with the real figures

All visible text lives in `src/i18n/en.json` and `src/i18n/en.extra.json` (the extra file overrides the base file).

## Photo credits

Event and rental photos belong to Sha Catering Service. Some dish photos in `public/photos/dishes/` come from Wikimedia Commons under Creative Commons licenses (CC BY-SA 3.0/4.0, CC0). Credit the original authors if you publish the site publicly:

- `kiribath.jpg`: "Kiribath (milk rice)"
- `chicken.jpg`: "Sri lankan chicken curry"
- `fish.jpg`: "Fish curry in Nuwara Eliya"
- `cutlet.jpg`: "Fish cutlets"
- `watalappan.jpg`: "Watalappan-Sri Lanka"
- `kavum.jpg`: "Konda Kavum 02"

## License

All rights reserved, Sha Catering Service.

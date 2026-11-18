# Lagon Trails

A multi-page travel and tourism website promoting **Mauritius**, built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home: hero banner, destination overview, reasons to visit, interactive island map, featured places |
| `explore.html` | Attractions (filterable, with detail pop-ups), culture and cuisine tabs, activities, practical information, external links |
| `plan.html` | Extra feature: itinerary builder and best-time-to-visit guide |
| `about.html` | Author bio, technical and soft skills, contact details, profile picture |
| `contact.html` | Enquiry form with validation and an on-page confirmation message |

## Project structure

```
lagon-trails/
├── index.html
├── explore.html
├── plan.html
├── about.html
├── contact.html
├── style.css        # all styling (design tokens at the top, in :root)
├── script.js        # menu, map, filters, dialog, tabs, itinerary builder, form
├── images/          # original SVG illustrations
└── README.md
```

## How to run

1. Unzip the project.
2. Double-click `index.html` to open it in a browser. No server is needed.
3. An internet connection is only needed to load the Google Fonts. Without it, the site falls back to Georgia and Segoe UI/Arial.

## Features

- Responsive layout with a mobile menu
- Interactive, keyboard-accessible island map (click or press Enter on a region)
- Attraction filters (Beaches, Nature, Culture) and a native `<dialog>` for details
- Culture tabs and a practical-information accordion (`<details>`)
- Itinerary builder: choose trip length and main interest to generate a plan
- Contact form using several input types (text, email, tel, date, number, select, radio, checkbox, range, textarea)
- Required fields: name, email, message and consent. Other fields are optional.
- Visible keyboard focus and reduced-motion support

## Contact form behaviour

There is no back end. On a valid submit, JavaScript prevents the page reload, shows a confirmation message with the visitor's name and email, and resets the form. To make it send real messages, connect the form to a service or server endpoint.

## Credits

- Illustrations: original SVG artwork created for this project.
- Fonts: Fraunces and DM Sans from Google Fonts (SIL Open Font License 1.1).
- Factual information was checked against the Mauritius Tourism Promotion Authority (https://www.tourismmauritius.mu) and UNESCO (https://whc.unesco.org/en/statesparties/mu).
- Full details are in the separate Sources and Credits document.
- This site was drafted with the assistance of Claude (Anthropic) and then edited by the author.

## Browser support

Tested approach targets current versions of Chrome, Edge, Firefox and Safari. The `<dialog>` element requires a reasonably recent browser.
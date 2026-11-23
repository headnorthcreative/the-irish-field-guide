# The Irish Field Guide

We need to redo https://crystaltours.ie/ with a totally new, cosy design to represent what the business is doing. The user selected and refined "The Irish Field Guide (Tactile Redesign)": an authentic, handcrafted editorial site steeped in local lore, storytelling, and tactile textures.

# Locked
Follow these design choices and rules strictly:
- Visual Direction: "Irish Hearth / The Irish Field Guide (Tactile Redesign)".
- Palette: Weathered warm linen and cream (#F9F6F0 / #F4EFE6), deep peat bog umber (#2C221E), rich forest moss green (#2D4030 / #3A503B), warm whiskey amber (#C68B45 / #D4973B), soft limestone slate grey (#6B655D), and antique brass hairline rules.
- Typography: Cormorant Garamond / Newsreader for literary editorial serif headings, titles, and quotes; Caveat or Kalam for authentic handwritten route notes and margin annotations; Lato or Inter for clean, legible narrative body copy.
- Brand & Masthead: "CRYSTAL TOURS • IRELAND" with subtle Gaelic greeting "Fáilte • Céad Míle Fáilte" and postal ink mark ("Co. Kerry • 52°08'N").
- Design Spec Rules:
  1. "it looks too much AI'sih to me, the design, basic": Avoid generic SaaS and AI template tropes: no uniform 3-card grids, floating pill badges, or icon step boxes. Use high-end travel editorial asymmetry, magazine typography, travel-journal storytelling, and spacious photographic pacing.
  2. "refine the editorial layout with more distinctive Irish character and less polished-template styling": Infuse distinctive Irish character: vintage field-guide textures, hand-annotated route map sketches, subtle Gaelic touches (such as Fáilte and Seanchas), archival ink stamps with coordinates, and unpolished, tactile editorial warmth rather than sleek digital styling.
  3. "take 1 is better, but is too short, we need to have more info": Provide deep, reassuring information across the site: the mechanics of private chauffeured touring, vehicle comfort (Mercedes V-Class), ancestral search process, curated routes, and FAQs while retaining the warm Irish Hearth look.
- Approved Screen Layout (Desktop 1280×832):
  - Linen masthead with Gaelic greeting, heritage mark, postal stamp, quiet editorial navigation, and direct telephone/WhatsApp link (+353 83 091 0057).
  - Asymmetric hero with evocative headline ("Where the tarmac ends, the stories begin"), slow travel narrative, and full-bleed 35mm film coastal photograph of Dingle.
  - Field notes "Seanchas: The Art of the Road" timestamped travelogue (Kenmare soda bread, Staigue Fort backroads).
  - The Cartographer's vintage annotated route map of Kerry and the West Coast with highlights and landmarks.
  - Brede's profile: "The Driver Who Listens" with 20 years of navigating boreens and unearthing family cottages.
  - Scrapbook-style expedition showcases for Ring of Kerry & Skellig, Wicklow's Hidden Glens, and Ancient Kilkenny.
  - Archival Ancestry feature reproducing the 1842 parish records case study.
  - Vehicle comfort specs: Mercedes V-Class luxury cabin, leather seating, 7-bag capacity, chilled water, Wi-Fi.
  - The Parlour Table bespoke inquiry form with travel dates, dream destinations, ancestry search request, and direct WhatsApp concierge.
  - Understated footer with Irish tourism accreditation, copyright, and direct private contact details.

# Open
- Responsive mobile (393×764), tablet portrait (744×1133), and tablet landscape (1133×744) layouts preserving the tactile field-guide warmth and editorial spacing.
- Interactive multi-step bespoke itinerary planner / inquiry form with form validation and confirmation modal.
- Interactive route explorer on the map to click through highlights, stops, and local lore.
- Expandable itinerary detail drawers/pages for Ring of Kerry, Wicklow, and the West Coast.
- Accessible FAQ accordion with clear answers on luggage, private group sizes, and deposit policies.
- Full end-to-end working state, including direct WhatsApp integration and phone actions.

build a real working app, not a clickable prototype; the screen and kit files show layout, content and look (a wireframe's, structure only) and are never code to copy. The screens are the moments the user designed, not the whole product. Before building, walk through each flow as its user would and design what the pictures leave out, as a product designer would for this product: the steps a flow needs to finish and how the app responds to what the user does, including the moments its users will actually run into, like waiting on something or finding nothing yet. Add nothing a user of this product would never meet, and keep an app the user wants simple, simple. Never leave a step the product's core flows need as "coming soon", unless the brief says the user chose to. Where such a step needs an outside service, build every part up to it and say in your reply what's left to connect. Fill product gaps only, never a look the design set: an added step reuses the UI kit's tokens, chrome and parts and the nearest designed screen's layout, with no new visual direction. Look at every screen's picture before writing code; design.md says which picture or sheet holds each screen. Open the UI kit's shells and parts HTML for the header, tab bar, composer and components, not only its tokens. Use each finished screen's copy exactly as design.md lists it; never invent copy for one. A wireframe under design.md's Wireframes gives structure only: build it in the design's look, as design.md says. The screens' photos are placeholders for the mockups only: replace every photo design.md lists with the user's own upload for it, else as design.md says (a photo without people re-composed with imagegen--edit_image from it as a reference, a photo of people generated from its brief and never from the photo), and ship no set photo or its URL. For a design that came with no design.md, every photo on assets.lovable.dev or images.unsplash.com is a set photo: replace it with the user's own upload for it, else a new image generated for its slot, any person in it one who doesn't exist, never from the photo or a picture showing it. Build and check each screen at the canvas it was drawn at: phone 393×764, tablet landscape 1133×744, tablet portrait 744×1133, desktop 1280×832. After building, screenshot the app at those sizes and states, compare each finished screen with its picture, and fix every visual difference you didn't choose; check a wireframe's screen against its structure, never its grey look. End your reply with "Changed from the mockups": each deliberate change and why, and "Added beyond the mockups": each step, state or interaction you built that no screen shows.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5f6ecb50-2e13-4875-a3ca-c4e84e6ddb99).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

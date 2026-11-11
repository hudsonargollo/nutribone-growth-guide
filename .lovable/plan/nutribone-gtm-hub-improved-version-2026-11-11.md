# NutriBone GTM Hub: improved version

## Goal
Turn the uploaded dashboard into a full, working NutriBone sales and content hub in this app. Every WhatsApp script and ad should lead customers to buy at https://nutribone.clubemkt.digital/shop. It also gets a full product catalog that can be loaded into a database later.

## 1. Full product catalog (from the 9 catalog images)
- Read every catalog image and write down each line, type, size, jar or packaging, and price. Example: Single 1000 ml in glass, Original 140 / 120 Bs, White 170 / 150 Bs, Anti-inflammatory 170 / 150 Bs. The first price is for a first purchase. The second is a refill price when the customer returns clean, empty jars.
- Show it as a Catalog page with product cards, filters by line, type and size, and both prices.
- Export the same data as files for later database loading: `catalog.json` and `catalog.csv`, plus a suggested table layout. Each row gets: a short code, line, flavor or type, size in ml, container, first-purchase price, refill price, currency (BOB), notes and a shop link.

## 2. WhatsApp scripts that lead to the shop
- Rewrite every script so it ends with a clear call to action and a direct shop link. Links can include tracking labels for source, campaign and product.
- New script sets: first contact, product recommendation per buyer type, handling objections (price, taste, "does it work?"), refill reminder, upsell to larger sizes and bundles, win-back for inactive customers, and post-purchase review requests.
- One-click copy, and an "open in WhatsApp" button that fills in the message.

## 3. Better copy and more content
- Tighten the strategy, buyer types and ad copy in Bolivian Spanish (Santa Cruz).
- Expand the content plan from 75 pieces to a larger plan with posts, Reels, Stories and carousels. Each piece links to a product and the shop.
- Ads: rewrite the 15 direct-response ads and add more, each with a hook, body text, CTA and shop link.
- Keep the sales calculator, and use the real catalog prices in it.

## 4. Prompt generator for social media
- A builder where you pick format (feed post, Reel, Story, carousel, Highlight cover), product, buyer type, goal (educate, sell, refill, social proof) and tone.
- It produces ready-to-paste prompts for image AI (photo style that matches the brand look: warm light, palm shadows, glass jars) and for caption writing, plus Story sequences.
- Highlight planner: a suggested set of Highlights (Catalog, How to take it, Refills, Reviews, Recipes, FAQ, Order) with the content, cover prompt and slide order for each.
- Prompts are built from templates in the app, so there is no AI cost. A live AI writing option can be added later.

## 5. Look and structure
- Keep the NutriBone forest green, gold and cream look with serif headings, and use the catalog photos as images.
- Pages: Overview, Catalog, WhatsApp scripts, Content plan, Ads, Prompt generator, Highlights, Calculator.

## Technical details
- Rebuilt as pages in the app. Catalog data lives in one typed data module that drives the pages, the calculator and the JSON/CSV exports.
- Catalog images uploaded as hosted assets.
- Export files also saved to Files for download.
- No backend for now. Database loading comes later from the export files.

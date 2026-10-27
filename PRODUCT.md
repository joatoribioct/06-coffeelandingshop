# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Urban Dominican home buyers (Santo Domingo, Santiago, with national delivery) who want fresh specialty coffee delivered to their door. Their job: pick a bag (origin, grind), buy it, order via WhatsApp, or start a monthly subscription. The Spanish-language site is mobile-first in practice, since WhatsApp is the ordering channel.

## Product Purpose

Café Nogal sells Dominican specialty coffee online: four products (Jarabacoa, Barahona, Constanza, Blend Espresso, 340 g, grano or molido), a monthly subscription (1, 2 or 3 bags), and a physical shop in Santo Domingo. Success is a visitor completing an order or subscribing, or visiting the shop.

## Positioning

Dominican single-origin coffee from named farms (Jarabacoa, Barahona, Constanza), roasted in small batches every week, with the roast date printed on each bag and delivery in 24–48 h in the main cities.

## Operating Context

Orders go through a cart and WhatsApp (`src/scripts/shop.ts`, WhatsAppButton). The subscription form collects an email. The physical shop has set opening hours. Prices are in Dominican pesos (RD$).

## Capabilities and Constraints

- Astro 7 static site with Tailwind CSS 4; content lives in `src/config/site.ts` and `src/config/products.ts`.
- Single landing page with sections: header, hero, features, products, story, process, testimonials, subscription, location, CTA banner, footer.
- Copy is in Spanish (Dominican audience); keep it that way.
- Image slots (`ImageSlot`) are placeholders awaiting real photography.
- Delivery promise: Santo Domingo and Santiago 24–48 h, rest of country 72 h. Subscription: 15% off, free shipping, pause or cancel anytime.

## Evidence on Hand

All current business details are demo/placeholder content, not confirmed fact: the 555 phone number, address, email, prices, plans, hours, farm claims, and the three testimonials (names, cities, quotes). Future work must not treat them as verified or invent further testimonials, customer counts, certifications, or press. There are no real photos yet.

## Product Principles

1. Origin and freshness are the story: name the farm and the roast date, and show them wherever coffee is sold.
2. Ordering must be one step from any point on the page (cart or WhatsApp).
3. Speak plainly and warmly in Dominican Spanish; avoid generic coffee-snob jargon.
4. Never present placeholder content as proof.

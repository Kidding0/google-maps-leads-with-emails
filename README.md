# Google Maps leads with emails

A practical guide to building a local-business lead list (name, phone, website, **email**) from Google Maps, plus sample output and copy-paste API examples.

The examples use two Apify Actors we maintain:

- [Google Maps Leads with Emails](https://apify.com/countonce/google-maps-leads-emails) - search Google Maps, then visit each business's own website to find emails.
- [Website Contact Scraper](https://apify.com/countonce/website-contact-scraper) - you already have a list of websites and only need the emails, phones and social links.

Both have a free monthly quota, so you can try the whole flow without paying.

---

## Why Google Maps alone is not enough

Google Maps gives you name, address, phone, website, rating and category. It does **not** give you email addresses. Emails live on the businesses' own websites: the home page footer, `/contact`, `/about`, sometimes an imprint page, sometimes hidden behind Cloudflare email protection.

So a useful lead list is a two-step job:

1. Get the places from Google Maps for a search like `dentist in Austin, TX`.
2. For every place that has its own website, open a few pages and pull out the emails.

The Maps Actor does both steps in one run.

## What hit rate to expect

In our own test runs roughly **40-50% of businesses that have a website** show a public email. It varies a lot by niche:

- Higher: lawyers, accountants, agencies, dentists, B2B services.
- Lower: restaurants, salons, chains and franchises (they often use contact forms or a central email).

Businesses whose "website" is a Facebook, Yelp or Instagram page are marked `no_own_website` and are not crawled.

## Cost, honestly

Pay per result, no subscription:

| What | Price |
|---|---|
| Place from Google Maps | $0.001 |
| Extra when at least one email is found | $0.002 |

So 1,000 places with about 450 emails cost about **$1.90**. Places without an email cost only the $0.001. Volume discounts apply on higher Apify plans.

For the website-list Actor: $0.0005 per site plus $0.0015 when an email is found. Unreachable sites are free.

## Quick start (no code)

1. Open [Google Maps Leads with Emails](https://apify.com/countonce/google-maps-leads-emails).
2. Enter one or more searches, e.g. `plumber in Miami, FL`.
3. Set **Max results per search** (start with 20 to see the data).
4. Click **Start**, then export the dataset as CSV or Excel.

Already have a list of company websites? Paste it into [Website Contact Scraper](https://apify.com/countonce/website-contact-scraper) instead.

## Output fields

See [`sample-output.csv`](sample-output.csv) for the shape of the data (rows there are illustrative, not real businesses).

Main columns: `name`, `category`, `phone`, `website`, `email`, `emails`, `emailStatus`, `socials`, `address`, `city`, `rating`, `reviewsCount`, `googleMapsUrl`, `searchQuery`.

`emailStatus` tells you why a row has no email:

- `found` - at least one email on the site
- `not_found` - site crawled, no public email
- `no_website` - Google Maps lists no website
- `no_own_website` - website is a social or directory profile
- `unreachable` - site did not respond

## API examples

- [`examples/curl.md`](examples/curl.md) - run with one HTTP request and get rows back
- [`examples/node.js`](examples/node.js) - Node.js with the official Apify client
- [`examples/python.py`](examples/python.py) - Python with the official Apify client

All examples need an Apify API token from **Console - Settings - API & Integrations**.

## Good practice

- Emails here are business contact addresses published by the businesses themselves. Check your local rules (GDPR, CAN-SPAM, CASL) before cold outreach, and always include an opt-out.
- Verify addresses before a large send to protect your sender reputation.
- Re-run monthly: local businesses change websites and staff often.

## Questions

Open an issue here or on the Actor's Issues tab on Apify. Include the run ID if something looks wrong.

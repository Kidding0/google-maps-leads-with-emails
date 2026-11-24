# Run with one HTTP request

This starts the Actor, waits for it to finish and returns the rows as JSON.

```bash
curl -X POST \
  "https://api.apify.com/v2/acts/countonce~google-maps-leads-emails/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "searchQueries": ["dentist in Austin, TX"],
    "maxResultsPerQuery": 20
  }'
```

For a list of websites instead:

```bash
curl -X POST \
  "https://api.apify.com/v2/acts/countonce~website-contact-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "websites": ["https://example.com", "https://example.org"] }'
```

`run-sync` waits up to 5 minutes. For big runs, start the run asynchronously and fetch the dataset when it finishes.

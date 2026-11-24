# pip install apify-client
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("countonce/google-maps-leads-emails").call(run_input={
    "searchQueries": ["real estate agent in San Diego, CA"],
    "maxResultsPerQuery": 50,
})

items = client.dataset(run["defaultDatasetId"]).list_items().items
with_email = [r for r in items if r.get("email")]

print(f"{len(items)} places, {len(with_email)} with email")
for r in with_email:
    print(r["name"], r["email"], r.get("phone"))

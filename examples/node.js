// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor('countonce/google-maps-leads-emails').call({
    searchQueries: ['plumber in Miami, FL', 'plumber in Tampa, FL'],
    maxResultsPerQuery: 50,
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
const withEmail = items.filter((row) => row.email);

console.log(`${items.length} places, ${withEmail.length} with email`);
for (const row of withEmail) console.log(row.name, row.email, row.phone);

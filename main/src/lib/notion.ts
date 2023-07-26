import { normalizeNotionResponse } from '../../check-in/utils/index';

export async function getPastLocations() {
  const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DB_ID}/query`, {
    headers: {
      'Notion-Version': '2022-06-28',
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`
    },
    method: 'POST'
  });
  const data = await res.json();
  return normalizeNotionResponse(data);
}

export async function getLastLocation() {
  const data = await getPastLocations();
  const last = data[data.length - 1];
  return {
    city: last.city,
    country: last.country
  };
}

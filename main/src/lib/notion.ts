export async function getPastLocations() {
  const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DB_ID}/query`, {
    headers: {
      'Notion-Version': '2022-06-28',
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      sorts: [
        {
          property: 'created',
          direction: 'descending'
        }
      ]
    }),
    next: {
      tags: ['location']
    }
  });
  const data = await res.json();
  return normalizeNotionResponse(data);
}

export async function getLastLocation() {
  const data = await getPastLocations();
  const [last] = data;

  return {
    city: last.city,
    country: last.country
  };
}

export function normalizeNotionResponse(data) {
  const normalizedData = [];

  data.results.forEach((entry) => {
    //@ts-ignore
    const { created, city, country, longitude, latitude } = entry.properties;
    normalizedData.push({
      created: created.date.start,
      city: city.rich_text[0].plain_text,
      country: country.rich_text[0].plain_text,
      longitude: longitude.number,
      latitude: latitude.number
    });
  });
  console.log(normalizedData);
  return normalizedData;
}

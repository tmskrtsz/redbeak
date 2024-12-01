import { Client } from '@notionhq/client';
import { QueryDatabaseParameters, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { cache } from 'react';

type NotionResponseObject = {
  object: 'page';
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {};
  last_edited_by: {};
  cover: null;
  icon: null;
  parent: {};
  archived: false;
  in_trash: false;
  properties: {
    created: {
      date: {
        start: string;
      };
    };
    city: {
      rich_text: [{
        plain_text: string;
      }];
    };
    country: {
      rich_text: [{
        plain_text: string;
      }];
    };
    longitude: {
      number: number;
    };
    latitude: {
      number: number;
    };
  };
  url: string;
  public_url: null;
};

const client = new Client({
  auth: process.env.NOTION_TOKEN
});

export const getLocations = cache(async (args?: Omit<QueryDatabaseParameters, 'database_id'>) => {
  try {
    const res = await client.databases.query({
      database_id: process.env.NOTION_DB_ID,
      ...args
    });

    return extractDataFromNotionResponse(res);
  } catch (e) {
    console.error(e);
  }
})

export async function getPastLocations() {
  return await getLocations();
}

export async function getLastLocation() {
  const [data] = await getLocations({
    sorts: [
      {
        property: 'created',
        direction: 'descending'
      }
    ],
    page_size: 1
  });

  return {
    timestamp: data.created,
    city: data.city,
    country: data.country
  };
}

export function extractDataFromNotionResponse(data: QueryDatabaseResponse) {
  const normalizedData = [];

  if (!data.results.length) {
    return [];
  }

  data.results.forEach((entry: NotionResponseObject) => {
    const { created, city, country, longitude, latitude } = entry.properties;

    normalizedData.push({
      created: created.date?.start,
      city: city.rich_text?.[0]?.plain_text || '',
      country: country.rich_text[0]?.plain_text,
      longitude: longitude.number,
      latitude: latitude.number
    });
  });
  
  return normalizedData;
}

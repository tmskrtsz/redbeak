import { Client } from '@notionhq/client';
import { GeoResponse, NotionResponse, AddNotionRowData } from '../types/utils';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export async function getCountryByGeoData(latitude: number, longitude: number) {
  const res = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`);
  const data: GeoResponse = await res.json();

  return {
    city: data.address.city,
    country: data.address.country
  };
}

export async function getLastLocation(notion: Client) {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DB!
  });

  const data = normalizeNotionResponse(res);
  return data[data.length - 1];
}

export function normalizeNotionResponse(data: QueryDatabaseResponse) {
  const normalizedData: NotionResponse[] = [];

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
  return normalizedData;
}

export async function addNotionRow(notion: Client, data: AddNotionRowData) {
  await notion.pages.create({
    parent: {
      database_id: 'be650928752f4d2cb87da501a795a577'
    },
    properties: {
      id: {
        title: [
          {
            text: {
              content: 'Location'
            }
          }
        ]
      },
      created: {
        date: {
          start: data.date
        }
      },
      city: {
        rich_text: [
          {
            text: {
              content: data.city
            }
          }
        ]
      },
      country: {
        rich_text: [
          {
            text: {
              content: data.country
            }
          }
        ]
      },
      longitude: {
        number: data.longitude
      },
      latitude: {
        number: data.latitude
      }
    }
  });
}
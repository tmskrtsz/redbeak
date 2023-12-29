import { Client } from "@notionhq/client";
import { GeoResponse, NotionResponse, AddNotionRowData } from "../types/utils";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export async function getCountryByGeoData(latitude: number, longitude: number) {
  const apiKey = process.env.MAPSCO_API_KEY

  const res = await fetch(
    `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${apiKey}`
  );
  const data: GeoResponse = await res.json();

  return {
    city: data.address.city || data.address.village,
    country: data.address.country,
  };
}

export async function getLastLocation(notion: Client) {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DB!,
    sorts: [
      {
        property: "created",
        direction: "descending",
      },
    ],
  });

  const [data] = normalizeNotionResponse(res);

  return data;
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
      latitude: latitude.number,
    });
  });
  return normalizedData;
}

export async function addNotionRow(notion: Client, data: AddNotionRowData) {
  await notion.pages.create({
    parent: {
      database_id: "be650928752f4d2cb87da501a795a577",
    },
    properties: {
      id: {
        title: [
          {
            text: {
              content: "Location",
            },
          },
        ],
      },
      created: {
        date: {
          start: data.date,
        },
      },
      city: {
        rich_text: [
          {
            text: {
              content: data.city,
            },
          },
        ],
      },
      country: {
        rich_text: [
          {
            text: {
              content: data.country,
            },
          },
        ],
      },
      longitude: {
        number: data.longitude,
      },
      latitude: {
        number: data.latitude,
      },
    },
  });
}

export async function revalidateLocation() {
  const token = process.env.REVALIDATION_TOKEN;
  const tag = "location";
  const url = `${process.env.REMOTE_BASE_URL}/api/revalidate?tag=${tag}&secret=${token}`;

  try {
    const res = await fetch(url);
    const dsa = await res.json();
    return dsa.revalidated;
  } catch (e) {
    console.error(e);
  }
}

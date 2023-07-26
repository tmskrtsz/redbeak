export type GeoResponse = {
  display_name: string;
  address: {
    house_number: string;
    road: string;
    suburb: string;
    city: string;
    county: string;
    postcode: string;
    country: string;
    country_code: string;
  };
};

export type NotionResponse = {
  created: string;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
};

export type AddNotionRowData = Omit<NotionResponse, 'created'> & { date: string };

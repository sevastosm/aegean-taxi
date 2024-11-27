export type Place = {
  name: string;
  address?: string;
  lat: number;
  lng: number;
  type?: string;
};

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body: any; // You can use a specific type if you have a PortableText definition
}

export interface SanityImage {
  asset: {
    url: string;
  };
}

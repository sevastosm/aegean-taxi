import { locationDetails } from "@/utils/locationDetails";
import { MetadataRoute } from "next";

const locationsAirportTransfers = Object.values(locationDetails.airports)
  .map((innerObject: any) => {
    return (
      innerObject?.location && {
        url: `https://aegeantaxi.com/airport-transfers/${innerObject.location}/`,
        lastModified: new Date(),
      }
    );
  })
  .filter((data) => data && data);

const locationsTaxi = Object.values(locationDetails.taxi_locations)
  .map((innerObject: any) => {
    return (
      innerObject?.location && {
        url: `https://aegeantaxi.com/taxi/${innerObject.location}/`,
        lastModified: new Date(),
      }
    );
  })
  .filter((data) => data && data);

const bookingTaxi = Object.values(locationDetails.taxi_locations)
  .map((innerObject: any) => {
    return (
      innerObject?.location && {
        url: `https://aegeantaxi.com/book-online/${innerObject.slug}/`,
        lastModified: new Date(),
      }
    );
  })
  .filter((data) => data && data);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aegeantaxi.com/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/book-online/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/order/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/taxi/",
      lastModified: new Date(),
    },
    // {
    //   url: "https://aegeantaxi.com/taxi/athens-taxi-app/",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://aegeantaxi.com/taxi/mykonos-taxi-app/",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://aegeantaxi.com/taxi/santorini-taxi-app/",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://aegeantaxi.com/taxi/corfu-taxi-app/",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://aegeantaxi.com/taxi/rhodes-taxi-app/",
    //   lastModified: new Date(),
    // },
    ...locationsTaxi,
    // {
    //   url: "https://aegeantaxi.com/airport-transfers/",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://aegeantaxi.com/airport-transfers/athens/",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://aegeantaxi.com/airport-transfers/mykonos/",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://aegeantaxi.com/airport-transfers/santorini/",
    //   lastModified: new Date(),
    // },
    ...locationsAirportTransfers,
    {
      url: "https://aegeantaxi.com/tours/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/tours/athens/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/tours/mykonos/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/tours/santorini/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/about-us/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/partners/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/privacy/",
      lastModified: new Date(),
    },
    {
      url: "https://aegeantaxi.com/terms/",
      lastModified: new Date(),
    },
    ...bookingTaxi,
  ];
}

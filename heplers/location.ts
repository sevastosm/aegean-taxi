import { locationDetails } from "@/utils/locationDetails";

export const getLocationDetailsFromSlug = (slug) => {
  const location = Object.keys(locationDetails.taxi_locations).find(
    (location) => locationDetails.taxi_locations[location]?.slug === slug
  );
  if (location) return locationDetails.taxi_locations[location];
};

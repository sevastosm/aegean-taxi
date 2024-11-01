//components
import Drivers from "@/components/Bookonline/Drivers";
import { locationDetails } from "@/utils/locationDetails";
export async function generateStaticParams() {
  const locationsTaxi = Object.values(locationDetails.taxi_locations)
    .map((innerObject: any) => {
      return (
        innerObject?.location && {
          location: innerObject.slug,
        }
      );
    })
    .filter((data) => data && data);
  return locationsTaxi;
}

export default function bookOnline() {
  return <Drivers />;
}

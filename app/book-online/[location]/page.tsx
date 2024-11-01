import BookOnline from "@/components/Bookonline/BookOnline";
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

  console.log("locationsTaxi", locationsTaxi);
  return locationsTaxi;
}

export default async function Page({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const slug = (await params).location;
  return <BookOnline />;
}

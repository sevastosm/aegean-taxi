import { Metadata } from "next";

type Props = {
  params: { location: string };
};

//components
import AirportHeader from "@/components/airportHeader";
import WaysToRide from "@/components/waysToRide";
import AirportBookingOptions from "@/components/airportBookingOptions";
import WhyBooAirport from "@/components/whyBookAirport";
import AirportReviews from "@/components/reviews/airportReviews";
import SectionSpacer from "@/components/layout/sectionSpacer";
import AirportFaq from "@/components/faq/airportFaq";
import AirportFares from "@/components/airportFares/airportFares";
import AirportGuides from "@/components/airportGuides/airportGuides";
import { locationDetails } from "@/utils/locationDetails";

export async function generateStaticParams() {
  const locations = Object.values(locationDetails.airports).map(
    (innerObject: any) => {
      return { location: innerObject.location };
    }
  );
  const taxi = [
    { location: "athens" },
    { location: "mykonos" },
    { location: "santorini" },
    ...locations,
  ];

  console.log("locations---generateStaticParams", JSON.stringify(taxi));

  return taxi.map((taxi: any) => ({
    location: taxi.location,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const location = params.location.toLowerCase();
  console.log("location----", location);
  let title =
    "Aegean Taxi - Reliable and Affordable Athens Airport Transfer Services | Book Your Ride Today";
  let description =
    "The easiest way to book your taxi and transfer in Greece. Book in 2 simple steps. Quality cars, cheapest prices, english speaking drivers";

  const locations = ["athens", "mykonos", "santorini"];

  if (params.location) {
    const city = params.location.toLowerCase();

    if (locations.includes(city)) {
      switch (city) {
        case "athens":
          title =
            "Athens Airport Transfers | Book A Ride Online Now | Available 24/7";
          description =
            "Book your Athens Airport Taxi or Transfer. Cheap prices, English speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or the Taxi App.";
          break;
        case "mykonos":
          title =
            "Mykonos Airport Transfers | Book A Ride Online Now | Available 24/7";
          description =
            "Book your Mykonos Airport Taxi or Transfer. Cheap prices, English speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or Taxi App.";
          break;
        case "santorini":
          title =
            "Santorini Airport Transfers | Book A Ride Online Now | Available 24/7";
          description =
            "Book your Santorini Airport Taxi or Transfer. Cheap prices, English speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or Taxi App.";
          break;
      }
    } else {
      title = locationDetails.airports[location]?.meta.title;
      description = locationDetails.airports[location]?.meta.description;
    }
  }

  return {
    title,
    description,
    other: {
      thumbnail:
        "https://aegeantaxi.com/_next/static/media/ECONOMY_yellow.665a091a.webp",
    },
  };
}

export default function Page({ params }: { params: Props }) {
  return (
    <>
      <AirportHeader />
      <SectionSpacer mdt={6}>
        <WhyBooAirport />
      </SectionSpacer>
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <WaysToRide />
      </SectionSpacer>
      <AirportBookingOptions />
      <AirportFares />
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <AirportReviews />
      </SectionSpacer>
      <AirportGuides />
      <AirportFaq />
    </>
  );
}

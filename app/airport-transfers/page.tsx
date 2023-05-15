//components
import AirportHeader from "@/components/airportHeader";
import WaysToRide from "@/components/waysToRide";
import AirportBookingOptions from "@/components/airportBookingOptions";
import WhyBooAirport from "@/components/whyBookAirport";
import AirportLocations from "@/components/airportLocations";
import AirportReviews from "@/components/reviews/airportReviews";
import SectionSpacer from "@/components/layout/sectionSpacer";
import AirportFaq from "@/components/faq/airportFaq";

export default function AirportTransfers() {
  return (
    <>
      <AirportHeader />
      <SectionSpacer mdt={6}>
        <WhyBooAirport />
      </SectionSpacer>
      <AirportLocations />
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <WaysToRide />
      </SectionSpacer>
      <AirportBookingOptions />
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <AirportReviews />
      </SectionSpacer>
      <AirportFaq />
    </>
  );
}

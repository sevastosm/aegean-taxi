//components
import LandingHeader from "@/components/landingHeader";
import WaysToRide from "@/components/waysToRide";
import BookingOptions from "@/components/bookingOptions";
import TransportServices from "@/components/transportServices";
import WhyBook from "@/components/whyBook";
import Locations from "@/components/locations";
import SectionSpacer from "@/components/layout/sectionSpacer";

export default function Page() {
  return (
    <>
      <LandingHeader />
      <WaysToRide />
      <BookingOptions showRideApp={true} />
      <SectionSpacer xst={6} xsb={6} mdt={4} mdb={6}>
        <TransportServices />
      </SectionSpacer>
      <WhyBook />
      <Locations />
    </>
  );
}

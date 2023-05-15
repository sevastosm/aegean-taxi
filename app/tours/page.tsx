//components
import ToursHeader from "@/components/toursHeader";
import TourBookingOptions from "@/components/tourBookingOptions";
import WhyTours from "@/components/whyTours";
import SelectedTours from "@/components/selectedTours";
import ToursLocations from "@/components/toursLocations";
import ToursReviews from "@/components/reviews/toursReviews";
import MeetOurDrivers from "@/components/meetOurDrivers/meetOurDrivers";
import SectionSpacer from "@/components/layout/sectionSpacer";

export default function Tours() {
  return (
    <>
      <ToursHeader />
      <SectionSpacer mdt={6}>
        <SelectedTours />
      </SectionSpacer>
      <TourBookingOptions />
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <WhyTours />
      </SectionSpacer>
      <ToursLocations />
      <ToursReviews />
      <MeetOurDrivers />
    </>
  );
}

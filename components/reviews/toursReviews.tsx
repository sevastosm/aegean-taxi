"use client";
import { useParams } from "next/navigation";

import ToursLandingReviews from "@/components/reviews/toursLanding";
import ToursAthensReviews from "@/components/reviews/toursAthens";
import ToursMykonosReviews from "@/components/reviews/toursMykonos";
import ToursSantoriniReviews from "@/components/reviews/toursSantorini";

export default function ToursReviews() {
  const params: any = useParams();
  let reviewsComponent = <ToursLandingReviews />;

  if (params.location) {
    const city =
      params.location.charAt(0).toUpperCase() + params.location.slice(1);
    switch (city) {
      case "Athens":
        reviewsComponent = <ToursAthensReviews />;
        break;
      case "Mykonos":
        reviewsComponent = <ToursMykonosReviews />;
        break;
      case "Santorini":
        reviewsComponent = <ToursSantoriniReviews />;
        break;
      default:
        reviewsComponent = <ToursLandingReviews />;
        break;
    }
  }

  return reviewsComponent;
}

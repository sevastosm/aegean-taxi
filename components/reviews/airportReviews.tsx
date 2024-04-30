"use client";
import { useParams } from "next/navigation";

import AirportLandingReviews from "@/components/reviews/airportLanding";

export default function AirportReviews() {
  const params: any = useParams();
  let reviewsComponent = <AirportLandingReviews />;

  return reviewsComponent;
}

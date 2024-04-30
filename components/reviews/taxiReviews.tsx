"use client";
import { useParams } from "next/navigation";

import Reviews from "@/components/reviews/reviews";

export default function TaxiReviews() {
  const params: any = useParams();
  const reviewsComponent = <Reviews location={params.location} />;

  return reviewsComponent;
}

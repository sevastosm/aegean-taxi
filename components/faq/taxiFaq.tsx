"use client";
import { useParams } from "next/navigation";

import Faq from "@/components/faq/faq";
export default function TaxiFaq() {
  const params: any = useParams();
  const reviewsComponent = (
    <Faq location={params.location} type="taxi_locations" />
  );
  return reviewsComponent;
}

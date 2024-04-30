"use client";
import { useParams } from "next/navigation";

import Faq from "@/components/faq/faq";

export default function AirportFaq() {
  const params: any = useParams();
  const reviewsComponent = <Faq location={params.location} type="airports" />;
  return reviewsComponent;
}

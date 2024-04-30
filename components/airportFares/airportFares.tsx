"use client";
import { useParams } from "next/navigation";

import AirportsFares from "./Fares";

export default function AirportFares() {
  const params: any = useParams();
  const location = params.location.toLowerCase();
  return <AirportsFares location={location} />;
}

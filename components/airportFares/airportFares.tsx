"use client";
import { useParams } from "next/navigation";

import AthensFares from "./athensFares";
import MykonosFares from "./mykonosFares";
import SantoriniFares from "./santoriniFares";

export default function AirportFares() {
  const params = useParams();
  const location = params.location.toLowerCase();

  return (
    <>
      {location === "athens" && <AthensFares />}
      {location === "mykonos" && <MykonosFares />}
      {location === "santorini" && <SantoriniFares />}
    </>
  );
}

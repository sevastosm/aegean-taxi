"use client";
import { useParams } from "next/navigation";

import AthensTopSights from "./athensTopSights";
import MykonosTopSights from "./mykonosTopSights";
import SantoriniTopSights from "./santoriniTopSights";

export default function ToursTopSights() {
  const params = useParams();
  const location = params.location.toLowerCase();

  return (
    <>
      {location === "athens" && <AthensTopSights />}
      {location === "mykonos" && <MykonosTopSights />}
      {location === "santorini" && <SantoriniTopSights />}
    </>
  );
}

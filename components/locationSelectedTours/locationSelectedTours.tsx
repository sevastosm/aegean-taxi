"use client";
import { useParams } from "next/navigation";

import AthensSelectedTours from "./athensSelectedTours";
import MykonosSelectedTours from "./mykonosSelectedTours";
import SantoriniSelectedTours from "./santoriniSelectedTours";

export default function TaxiFares() {
  const params: any = useParams();
  const location = params.location;

  return (
    <>
      {location === "athens" && <AthensSelectedTours />}
      {location === "mykonos" && <MykonosSelectedTours />}
      {location === "santorini" && <SantoriniSelectedTours />}
    </>
  );
}

"use client";
import { useParams } from "next/navigation";

import AthensGuide from "./athensGuide";
import MykonosGuide from "./mykonosGuide";
import SantoriniGuide from "./santoriniGuide";

export default function TaxiFares() {
  const params = useParams();
  const location = params.location.toLowerCase();

  return (
    <>
      {location === "athens" && <AthensGuide />}
      {location === "mykonos" && <MykonosGuide />}
      {location === "santorini" && <SantoriniGuide />}
    </>
  );
}

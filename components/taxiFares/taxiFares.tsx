"use client";
import { useParams } from "next/navigation";

import AthensFares from "./athensFares";
import MykonosFares from "./mykonosFares";
import SantoriniFares from "./santoriniFares";
import CorfuFares from "./corfuFares";
import RhodesFares from "./rhodesFares";

export default function TaxiFares() {
  const params = useParams();
  const location = params.location.toLowerCase();

  return (
    <>
      {location === "athens" && <AthensFares />}
      {location === "mykonos" && <MykonosFares />}
      {location === "santorini" && <SantoriniFares />}
      {location === "corfu" && <CorfuFares />}
      {location === "rhodes" && <RhodesFares />}
    </>
  );
}

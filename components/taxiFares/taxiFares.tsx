"use client";
import Fares from "./Fares";
export default function TaxiFares({ params }: any) {
  console.log("TaxiFares", params);
  const location = params.location.toLowerCase();
  return <Fares location={location} />;
}

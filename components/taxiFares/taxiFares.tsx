"use client";
import Fares from "./Fares";
export default function TaxiFares({ params }: any) {

  const location = params.location.toLowerCase();
  return <Fares location={location} />;
}

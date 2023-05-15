"use client";
import { useParams } from "next/navigation";

import TaxiAthensFindUs from "@/components/findUs/taxiAthens";
import TaxiMykonosFindUs from "@/components/findUs/taxiMykonos";
import TaxiSantoriniFindUs from "@/components/findUs/taxiSantorini";

export default function TaxiFindUs() {
  const params = useParams();
  let findUsComponent = <></>;

  if (params.location) {
    const city =
      (params.location.charAt(0).toUpperCase() + params.location.slice(1)).replace("-taxi-app", "");;
    switch (city) {
      case "Athens":
        findUsComponent = <TaxiAthensFindUs />;
        break;
      case "Mykonos":
        findUsComponent = <TaxiMykonosFindUs />;
        break;
      case "Santorini":
        findUsComponent = <TaxiSantoriniFindUs />;
        break;
      default:
        findUsComponent = <></>;
        break;
    }
  }

  return findUsComponent;
}

"use client";
import { useParams } from "next/navigation";

import DriversTours from "./toursLanding";
import DriversAthens from "./toursAthens";
import DriversMykonos from "./toursMykonos";
import DriversSantorini from "./toursSantorini";

export default function MeetOurDrivers() {
  const params: any = useParams();
  let drivers = <DriversTours />;

  if (params.location) {
    const location = params.location.toLowerCase();
    switch (location) {
      case "athens":
        drivers = <DriversAthens />;
        break;
      case "mykonos":
        drivers = <DriversMykonos />;
        break;
      case "santorini":
        drivers = <DriversSantorini />;
        break;
      default:
        drivers = <DriversTours />;
        break;
    }
  }

  return drivers;
}

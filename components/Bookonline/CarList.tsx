import { getAvailableRouteCars } from "@/utils/fetchers";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SelectTaxi from "./SelectTaxi";

type Props = {};

const CarList = () => {
  const searchParams = useSearchParams();
  const [availableCars, setAvailableCars] = useState(null);
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const pickuptime = searchParams.get("pickuptime");
  const pickupdate = searchParams.get("pickupdate");
  const calculateAndDisplayRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          if (response) {
            let dayjsLocal = dayjs(`${pickupdate} ${pickuptime}`);
            getAvailableRouteCars(
              response,
              dayjsLocal,
              response.routes[0].legs[0].start_location.lat(),
              response.routes[0].legs[0].start_location.lng(),
              response.routes[0].legs[0].end_location.lat(),
              response.routes[0].legs[0].end_location.lng()
            ).then((tariffs) => setAvailableCars(tariffs));
          }
        }
      }
    );
  };

  useEffect(() => {
    calculateAndDisplayRoute();
  }, [pickuptime, pickuptime]);

  return availableCars && <SelectTaxi cars={availableCars} />;
};

export default CarList;

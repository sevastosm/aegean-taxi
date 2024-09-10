import { getAvailableRouteCars } from "@/utils/fetchers";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import error from "next/error";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CarOptions from "../car-options";

type Props = {};

const CarList = ({
  origin,
  destination
}: any) => {

  const searchParams = useSearchParams()

  const [availableCars, setAvailableCars] = useState(null)



  const pickuptime = searchParams.get('pickuptime')
  const pickupdate = searchParams.get('pickupdate')


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

            let dayjsLocal = dayjs(
              `${pickupdate} ${pickuptime}`
            );
            getAvailableRouteCars(
              response,
              dayjsLocal,
              response.routes[0].legs[0].start_location.lat(),
              response.routes[0].legs[0].start_location.lng(),
              response.routes[0].legs[0].end_location.lat(),
              response.routes[0].legs[0].end_location.lng(),
            ).then((tariffs) => setAvailableCars(tariffs))

          }
        }
      }
    )
  }














  useEffect(() => {
    calculateAndDisplayRoute()
  }, [pickuptime, pickuptime]);

  return (
    availableCars && (

      <CarOptions
        cars={availableCars}
        carSelectHandler={null}
        authorizeUser={null}
      />
    )
  );
};

export default CarList;

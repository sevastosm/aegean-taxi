import { useStore } from "@/app/(taxi)/store/store";
import { cordToNumber } from "@/heplers/googleMap";
import { getAvailableRouteCars } from "@/utils/fetchers";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SelectTaxi from "./SelectTaxi";

type Props = {};

const CarList = () => {
  const [availableCars, setAvailableCars] = useState(null);
  const pickupLocation = useStore((state: any) => state.pickupLocation);
  const dropOffLocation = useStore((state: any) => state.dropOffLocation);

  const pickUpDate = useStore((state: any) => state.pickUpDate);
  const pickUpTime = useStore((state: any) => state.pickUpTime);

  const pickupCoords = new google.maps.LatLng({
    lat: cordToNumber(pickupLocation.lat),
    lng: cordToNumber(pickupLocation.lng),
  });
  const dropOffCoords = new google.maps.LatLng({
    lat: cordToNumber(dropOffLocation.lat),
    lng: cordToNumber(dropOffLocation.lng),
  });

  const calculateAndDisplayRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: pickupCoords,
        destination: dropOffCoords,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          if (response) {
            let dayjsLocal = dayjs(`${pickUpDate} ${pickUpTime}`);
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
  }, [pickUpDate, pickUpTime]);

  if (!availableCars) {
    return <h3 className='text-center'>Searching for drivers ...</h3>;
  }

  return availableCars.length > 0 ? (
    <SelectTaxi cars={availableCars} />
  ) : (
    <h3 className='text-center'>Available drivers not found</h3>
  );
};

export default CarList;

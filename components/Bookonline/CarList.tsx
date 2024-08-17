import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import error from "next/error";
import React, { useEffect, useState } from "react";
import CarOptions from "../car-options";

type Props = {};

const CarList = ({
  directions,
  predictions,
  error,
  orderDetails,
  contextState,
  selectCarStep,
  availableCars,
  setSelectedCarHandler,
  authorizeUser,
  selectedCar,
}: any) => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    setCar(contextState.selectedCar);
  }, [contextState.selectedCar]);

  return (
    directions &&
    !predictions.length &&
    !error &&
    !orderDetails &&
    !contextState.searchingForDriver &&
    selectCarStep && (
      <>
        <CarOptions
          cars={availableCars}
          carSelectHandler={setSelectedCarHandler}
        />

        {console.log("selectedCar", contextState.selectedCar)}

        {car && (
          <div className="flex items-end justify-center px-4 my-4">
            <button
              onClick={authorizeUser}
              className="w-full bg-[#264388] text-white font-semibold text-xl py-4 rounded-md"
            >
              {car
                ? `Confirm ${car.name ? car.name : car.vehicleType}`
                : `Confirm`}
            </button>
          </div>
        )}

        {/* <Box mt={3}>
      <Button
        color="error"
        variant="contained"
        size="large"
        fullWidth={true}
        onClick={clearState}
      >
        Cancel
      </Button>
    </Box> */}
        {/* )} */}
      </>
    )
  );
};

export default CarList;

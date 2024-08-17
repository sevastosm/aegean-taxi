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
        <Box mt={0}>
          {/* <Typography align="center" variant="body1">
        Select car category
      </Typography> */}
          <Typography variant="body2">
            Estimated journey time: {directions.routes[0].legs[0].duration.text}
          </Typography>
        </Box>

        <CarOptions
          cars={availableCars}
          carSelectHandler={setSelectedCarHandler}
        />

        {console.log("selectedCar", contextState.selectedCar)}

        {car && (
          <Box mt={3}>
            <Button
              variant="contained"
              onClick={authorizeUser}
              size="large"
              fullWidth={true}
              disabled={!car}
              //(
              //     !selectedCar && contextState.userVerified
              //   ) ||
              //   (contextState.selectedCarConfirmed &&
              //     contextState.userVerified)
              // }
            >
              {car
                ? `Confirm ${car.name ? car.name : car.vehicleType}`
                : `Confirm`}
            </Button>
          </Box>
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

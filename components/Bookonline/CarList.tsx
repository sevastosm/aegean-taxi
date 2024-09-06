import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import error from "next/error";
import React, { useEffect, useState } from "react";
import CarOptions from "../car-options";

type Props = {};

const CarList = ({
  contextState,
  selectCarStep,
  availableCars,
  setSelectedCarHandler,
  authorizeUser,
}: any) => {
  const [car, setCar] = useState<any>(null);

  useEffect(() => {
    setCar(contextState.selectedCar);
  }, [contextState.selectedCar]);

  return (
    selectCarStep && (

      <CarOptions
        cars={availableCars}
        carSelectHandler={setSelectedCarHandler}
        authorizeUser={authorizeUser}
      />
    )
  );
};

export default CarList;

import React, { useEffect } from "react";
import Image from "next/image";

// material
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";

// Cars
import { Box } from "@mui/system";

// import econ from "./../public/assets/econ.png";
// import suv from "./../public/assets/suv.png";
// import luxury from "./../public/assets/luxury.png";
// import van from "./../public/assets/van.png";

import BUS from "public/assets/onde-service-types/BUS.webp";
import BUSINESS from "public/assets/onde-service-types/BUSINESS.webp";
import CLASSIK from "public/assets/onde-service-types/CLASSIC.webp";
import ECONOMY_YELLOW from "public/assets/onde-service-types/ECONOMY_yellow.webp";
import ECONOMY from "public/assets/onde-service-types/ECONOMY.webp";
import MICRO_BUS from "public/assets/onde-service-types/MICRO_BUS.webp";
import MINIVAN from "public/assets/onde-service-types/MINIVAN.webp";
import SUV from "public/assets/onde-service-types/SUV.webp";
import TESLA_MODEL_X from "public/assets/onde-service-types/TESLA_MODEL_X.webp";
import VAN from "public/assets/onde-service-types/VAN.webp";
import SelectTaxi from "./Bookonline/SelectTaxi";

export default function CarOptions({
  carSelectHandler,
  authorizeUser,
  cars,
}: any) {
  const [view, setView] = React.useState<any>(null);

  useEffect(() => {
    carSelectHandler(view);
  }, [carSelectHandler, view]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: any
  ) => {
    setView(nextView);
  };

  if (cars.length === 0) {
    return null;
  }

  return (
    <SelectTaxi
      cars={cars}
      handleChange={handleChange}
      authorizeUser={authorizeUser}
    />
  );
}

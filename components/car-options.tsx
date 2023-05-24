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

import BUS from "public/assets/onde-service-types/BUS.png";
import BUSINESS from "public/assets/onde-service-types/BUSINESS.png";
import CLASSIK from "public/assets/onde-service-types/CLASSIC.png";
import ECONOMY_YELLOW from "public/assets/onde-service-types/ECONOMY_yellow.png";
// import ECONOMY from "public/assets/onde-service-types/ECONOMY.png";
import MICRO_BUS from "public/assets/onde-service-types/MICRO_BUS.png";
import MINIVAN from "public/assets/onde-service-types/MINIVAN.png";
import SUV from "public/assets/onde-service-types/SUV.png";
import TESLA_MODEL_X from "public/assets/onde-service-types/TESLA_MODEL_X.png";
import VAN from "public/assets/onde-service-types/VAN.png";

export default function CarOptions(props: any) {
  const [view, setView] = React.useState<any>(null);

  useEffect(() => {
    props.carSelectHandler(view);
  }, [props, view]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: any
  ) => {
    setView(nextView);
  };

  const getImage = (name: string) => {
    switch (name) {
      case `econ`:
        return ECONOMY_YELLOW;
        break;

      case `luxury`:
        return BUSINESS;
        break;

      case `suv`:
        return SUV;
        break;

      case `van`:
        return VAN;
        break;
      default:
        return ECONOMY_YELLOW;
    }
  };

  const cars = props.cars.map((car: any, index: number) => (
    <ToggleButton size="small" key={index} value={car} aria-label={car.Name}
    sx={{
      border: 0
    }}>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4} md={4}>
          <Image
            src={getImage(car.Name.toLowerCase())}
            width={100}
            // height={50}
            alt={car.Name}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={6} sx={{mr:1}}>
              <Typography
                color={"#000"}
                align="left"
                variant="h6"
                component="div"
              >
                {car.Name}
              </Typography>
            </Grid>
            <Grid item height={24}>
              <PersonIcon sx={{ color: "#000" }} />
            </Grid>
            <Grid item>
              <Typography
                color={"#000"}
                align="left"
                variant="h6"
                component="div"
              >
                {car.MaxPassengers} 8
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} md={1}>
          <Typography
            color={"#000"}
            align="left"
            variant="h6"
            gutterBottom
            component="div"
          >
            {car.Price}€
          </Typography>
        </Grid>
      </Grid>
    </ToggleButton>
  ));

  return (
    <Box mt={1}>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        fullWidth={true}
        sx={{ border: 0 }}
      >
        {cars}
      </ToggleButtonGroup>
    </Box>
  );
}

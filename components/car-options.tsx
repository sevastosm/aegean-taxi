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
      case `economy_yellow`:
        return ECONOMY_YELLOW;
        break;
      case `classik`:
        return CLASSIK;
        break;
      case `luxury`:
        return BUSINESS;
        break;
      case `business`:
        return BUSINESS;
        break;
      case `suv`:
        return SUV;
        break;
      case `bus`:
        return BUS;
        break;
      case `bus`:
        return BUS;
        break;

      case `van`:
        return VAN;
        break;
      case `micro_bus`:
        return MICRO_BUS;
        break;
      case `minivan`:
        return MINIVAN;
        break;
      default:
        return ECONOMY;
    }
  };

  const cars = props.cars.map((car: any, index: number) => (
    <ToggleButton
      size="small"
      key={index}
      value={car}
      aria-label={car.name}
      sx={{
        border: 0,
      }}
    >
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4} md={4}>
          <Image
            src={getImage(car.vehicleType.toLowerCase())}
            width={100}
            // height={50}
            alt={car.vehicleType}
          />
        </Grid>
        <Grid item xs={5} md={5}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={6} sx={{ mr: 1 }}>
              <Typography
                color={"#000"}
                align="left"
                variant="body2"
                component="div"
                sx={{
                  fontWeight: 600,
                }}
              >
                {car.name ? car.name :  car.vehicleType}
              </Typography>
            </Grid>
            <Grid item height={24}>
              <PersonIcon sx={{ color: "#000" }} />
            </Grid>
            <Grid item>
              <Typography
                color={"#000"}
                align="left"
                variant="body2"
                component="div"
                sx={{
                  fontWeight: 600,
                }}
              >
                {car.numberOfSeats}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} md={3}>
          <Typography
            color={"#000"}
            align="left"
            variant="body1"
            component="div"
            sx={{
              fontWeight: 600,
            }}
          >
            ~ {Math.ceil(car.cost)}€
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

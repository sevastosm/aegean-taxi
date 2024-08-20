"use client";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ARROW from "public/assets/location-arrow-down.svg";
import AIRPORT from "public/assets/airport.svg";
import PORT from "public/assets/port.svg";
import CITY from "public/assets/city-centre.svg";
import { locationDetails } from "../../utils/locationDetails";
import { PricesMap } from "../airportFares/Fares";

export default function Fares({ location }: any) {
  const data =
    location === "default"
      ? locationDetails[location]
      : locationDetails.taxi_locations[location];

  return (
    <Container maxWidth={"lg"}>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          p: 1,
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: "26px", md: "36px" },
            // lineHeight: { xs: "28px", md: "48px" },
            py: 4,
          }}
        >
          Indicative fares and travel times for {data?.name}
          <br /> Hotspots
        </Typography>
      </Box>

      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          display: { xs: "block", md: "none" },
          // lineHeight: { xs: "48px", md: "68px" },
          py: 3,
        }}
      >
        Indicative fares and travel times for {data?.name}
        <br /> Hotspots
      </Typography>

      {/* List */}
      <Container maxWidth="md" disableGutters>
        <Stack spacing={{ xs: 2, md: 3.2 }}>
          {data?.prices.map((data: any, i: any) => (
            <PricesMap key={i} dits={data} />
          ))}
        </Stack>
      </Container>
      {/* ./List */}
    </Container>
  );
}

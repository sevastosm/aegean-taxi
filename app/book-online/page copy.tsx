"use client";
import React, { useState, useEffect, useContext } from "react";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// Map
import GoogleMap from "@/components/googleMap/map";

// form
import FormComponent from "./form";

// context
import { AppContext } from '@/context/appState';

export default function BookOnline() {
  const appState = useContext(AppContext);
  // const [zoom, setZoom] = useState(11); // initial zoom
  // const [center, setCenter] = useState<google.maps.LatLngLiteral>({
  //   lat: 37.4499982,
  //   lng: 25.333332,
  // });

  return (
    <Container maxWidth={"lg"} sx={{ mt: 2 }}>
      <Grid container>
        <Grid
          item
          order={{ xs: 2, md: 1 }}
          xs={12}
          md={7}
          sx={{ p: { xs: 0, md: 3 } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FormComponent />
          </Box>
        </Grid>
        {/* Map */}
        <Grid
          item
          order={{ xs: 1, md: 2 }}
          xs={12}
          md={5}
          sx={{
            backgroundRepeat: "no-repeat",
            minHeight: { xs: 350, md: 626 },
            width: "100%",
          }}
        >
          <GoogleMap />
        </Grid>
      </Grid>
    </Container>
  );
}

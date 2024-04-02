"use client";
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// components
import Form from "components/requestRideForm/form";
import DownloadAppButton from "components/downloadAppButton";

import bg from "public/assets/landing-header.png";

export default function LandingHeader() {
  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mt: 6,
              display: { xs: "none", md: "block" },
            }}
          >
            The #1 Taxi App
            <br />
            for the Greek Islands.
            <br />
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
              mt: 1,
              display: { xs: "block", md: "none" },
              textAlign: "center",
            }}
          >
            The #1 Taxi App for the Greek Islands.
          </Typography>
          <Typography
            component="span"
            variant="h5"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            The easy way to book a ride with Aegean Taxi App in Mykonos,
            Santorini, Athens, Corfu and Rhodes
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundImage: { xs: "none", md: `url(${bg.src})` },
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "230px",
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "0 60%",
            }}
          ></Box>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "block", md: "flex" },
              minHeight: { xs: "auto", md: "595px" },
            }}
          >
            <Form />
          </Box>
          {/* Download the app Button */}
          <DownloadAppButton showMd="none" showStoresMD="none" />
        </Grid>
      </Grid>
    </Container>
  );
}

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
            Arrive.
            <br />
            Get Around.
            <br />
            Depart.
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 400,
              mt: 1,
              display: { xs: "block", md: "none" },
            }}
          >
            Arrive. Get Around. Depart.
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
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Form />
              <DownloadAppButton showMd="none" showStoresMD="none" />
            </div>
          </Box>
          {/* Download the app Button */}
        </Grid>
      </Grid>
    </Container>
  );
}

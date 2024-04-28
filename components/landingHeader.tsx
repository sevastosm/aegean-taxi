"use client";
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// components
import Form from "components/requestRideForm/form";
import DownloadAppButton from "components/downloadAppButton";

import bg from "public/assets/landing-header.webp";

export default function LandingHeader() {
  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          {/* <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mt: 6,
              display: { xs: "none", md: "block" },
              //fontSize: { md: "3.75rem" }, // original 3.75rem
            }}
          >
            Ride with Aegean Taxi.
            <br />
            The best Taxi App for the Greek islands
            <br />
          </Typography> */}
          <Typography
            component="h1"
            gutterBottom
            sx={{
              fontWeight: { xs: "500", md: "700" },
              fontSize: { xs: "1rem", md: "3.75rem" },
              lineHeight: { xs: "2", md: "1.2" },
              // display: { xs: "block", md: "none" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "22px", md: "48px" },
              mb: { xs: "22px" },
            }}
          >
            Ride with Aegean Taxi.
            <br />
            The best Taxi App for the Greek islands
          </Typography>
          <Typography
            component="p"
            variant="h5"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Book a ride 24/7 online. Best prices, available in the most popular
            destinations
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
              width: "100%",
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

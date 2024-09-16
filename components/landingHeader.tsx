"use client";
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// components
import BookingFormLanding from "@/components/requestRideForm/BookingFormLanding";

import bg from "public/assets/landing-header.webp";
import { SxImage } from "./ui/SxImage";
import { locationDetails } from "@/utils/locationDetails";
import Link from "next/link";

export default function LandingHeader() {
  const atlText = locationDetails.landing.alt_header;
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
            sx={{
              fontWeight: { xs: "700", md: "700" },
              fontSize: { xs: "1.9rem", md: "3.75rem" },
              lineHeight: { xs: "1", md: "1.2" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "0px", md: "48px" },
              pt: 2,
            }}
          >
            Ride with Aegean Taxi
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontWeight: { xs: "700", md: "700" },
              fontSize: { xs: "1rem", md: "3.75rem" },
              lineHeight: { xs: "1.5", md: "1.2" },
              // display: { xs: "block", md: "none" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "10px", md: "auto" },
              mb: { xs: "10px" },
            }}
          >
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
            position: "relative",
          }}
        >
          <Link
            href={`/book-online`}
            className="absolute w-full h-[60%] md:h-full z-10 cursor-pointer left-0 top-0"
          ></Link>
          <SxImage
            src={bg.src}
            width={200}
            height={200}
            alt={atlText}
            sx={{
              width: "100%",
              height: { xs: "200px", md: "100%" },
              // backgroundColor: "primary.dark",
              objectFit: { xs: "cover", md: "cover" },
              objectPosition: { xs: "0 50%", md: "0 50%" },
              position: { xs: "relative", md: "absolute" },
            }}
          />

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
                background: "#fff",
              }}
            >
              <BookingFormLanding />
            </div>
          </Box>
          {/* Download the app Button */}
        </Grid>
      </Grid>
    </Container>
  );
}

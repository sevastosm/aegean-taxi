"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// components
import Form from "@/components/requestRideForm/BookingFormLanding";

import bg from "public/assets/airport-header.webp";
// FIXME: No images available
// import Athens from "public/assets/airport-athens.jpg";
// import Mykonos from "public/assets/airport-mykonos.png";
// import Santorini from "public/assets/airport-santorini.png";

import banner from "public/assets/banner.webp";
import { SxImage } from "./ui/SxImage";
import { locationDetails } from "@/utils/locationDetails";
import Link from "next/link";

export default function AirportHeader() {
  const params: any = useParams();
  let city;
  let atlText = "Airport Transfers";
  let cover = bg;

  atlText = locationDetails.airports.alt_header;

  if (params.location) {
    city = params.location.charAt(0).toUpperCase() + params.location.slice(1);
    atlText = locationDetails.airports[params.location].alt_header;
    // FIXME: No images available
    // switch (city) {
    //   case "Athens":
    //     cover = Athens;
    //     break;
    //   case "Mykonos":
    //     cover = Mykonos;
    //     break;
    //   case "Santorini":
    //     cover = Santorini;
    //     break;
    // }
  }

  const locationUrl = params.location
    ? `?location=${params.location}-taxi-app`
    : "";

  return (
    <Container maxWidth={"lg"} sx={{ mb: { xs: 6, md: 40 } }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <Typography
            component="h1"
            sx={{
              fontWeight: { xs: "700", md: "700" },
              fontSize: { xs: "1.5rem", md: "3.75rem" },
              lineHeight: { xs: "1", md: "1.2" },
              // display: { xs: "block", md: "none" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "5px", md: "48px" },
            }}
          >
            {city ? city + " Airport Transfers" : "Airport Transfers made easy"}
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontWeight: { xs: "700", md: "700" },
              fontSize: { xs: "1.2rem", md: "3.75rem" },
              lineHeight: { xs: "1.5", md: "1.2" },
              // display: { xs: "block", md: "none" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: "15px" },
            }}
          >
            {city && "made easy"}
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              minHeight: { xs: "auto", md: "395px" },
            }}
          >
            <Form elevation={1} widthMD={"80%"} displayTitle={false} />

            <Typography component={"div"} variant="h5" sx={{ mt: 4 }}>
              Schedule your ride to or from the airport,
              <br />
              and let us take care of the rest
            </Typography>
          </Box>
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
            href={`/book-online/${locationUrl}`}
            className="absolute w-full h-[62%] md:h-full z-10 cursor-pointer left-0 top-0"
          ></Link>
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
            }}
          >
            <SxImage
              src={cover.src}
              width={200}
              height={500}
              alt={atlText}
              sx={{
                width: "100%",
                height: { xs: "200px", md: "auto" },
                backgroundColor: "primary.dark",
                objectFit: { xs: "cover", md: "cover" },
                objectPosition: { xs: "0 50%", md: "none" },
              }}
            />
          </Box>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "block", md: "none" },
              minHeight: { xs: "auto", md: "595px" },
            }}
          >
            <Form displayTitle={false} />
          </Box>

          {/* banner */}
          {/* Remove from mobile */}
          {/* <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "flex", md: "none" },
              minHeight: "auto",
              mt: 2,
            }}
          >
            <Image src={banner} alt="50.000 Transfer" />
          </Box> */}
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "none", md: "flex" },
              minHeight: "595px",
              position: "relative",
              width: 200,
              top: 325,
              right: -350,
            }}
          >
            <Image src={banner} alt="50.000 Transfer" width={200} />
          </Box>
          {/* ./banner */}
        </Grid>
      </Grid>
    </Container>
  );
}

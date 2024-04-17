"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// components
import Form from "components/requestRideForm/form";

import bg from "public/assets/taxi-header.webp";
// FIXME: No images available
// import Athens from "public/assets/airport-athens.jpg";
// import Mykonos from "public/assets/airport-mykonos.png";
// import Santorini from "public/assets/airport-santorini.png";

import banner from "public/assets/banner.webp";

export default function AirportHeader() {
  const params: any = useParams();
  let city;
  let cover = bg;
  if (params.location) {
    city = params.location.charAt(0).toUpperCase() + params.location.slice(1);
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

  return (
    <Container maxWidth={"lg"} sx={{ mb: { xs: 6, md: 40 } }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          {/*<Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: 50,
              mt: 6,
              display: { xs: "none", md: "block" },
            }}
          >
            {city && (
              <>
                {city} Airport <br /> Transfers made easy
                <br />
              </>
            )}
            {!city && (
              <>
                Airport Transfers
                <br />
                made easy
                <br />
              </>
            )}
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
            {city} Airport Transfers made easy
          </Typography> */}


          <Typography
            component="h1"
            gutterBottom
            sx={{
              fontWeight: { xs: "700", md: "700" },
              fontSize: { xs: "1rem", md: "3.75rem" },
              lineHeight: { xs: "1.5", md: "1.2" },
              // display: { xs: "block", md: "none" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "8px", md: "48px" },
            }}>
              {city} Airport Transfers made easy
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
            backgroundImage: { xs: "none", md: `url(${cover.src})` },
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "230px",
              backgroundImage: `url(${cover.src})`,
              backgroundSize: "cover",
              backgroundPosition: "0 60%",
            }}
          ></Box>
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

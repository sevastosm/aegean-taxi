"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//
import PLANE from "public/assets/plane-travel.png";
import PRICE from "public/assets/price-icon.svg";
import RIDE from "public/assets/ride.svg";
import DRIVERS from "public/assets/drivers-icon.svg";
import FLIGHT from "public/assets/flight.svg";

export default function WhyBooAirport() {
  const params: any = useParams();

  let settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 4,
    slidesToShow: 4,
    speed: 500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let city;

  if (params.location) {
    city = params.location.charAt(0).toUpperCase() + params.location.slice(1);
  }

  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "26px", md: "36px" },
              display: { xs: "none", md: "block" },
              // lineHeight: { xs: "28px", md: "48px" },
            }}
          >
            Book your {city} <br /> airport transfer with Aegean Taxi
          </Typography>
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "26px", md: "36px" },
              display: { xs: "block", md: "none" },
              // lineHeight: { xs: "48px", md: "68px" },
            }}
          >
            Book your {city} airport transfer with Aegean Taxi
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          order={{ xs: 2, md: 1 }}
          sx={{
            minHeight: { xs: 171, md: 292 },
            backgroundImage: `url(${PLANE.src})`,
            backgroundSize: "cover",
          }}
        ></Grid>
      </Grid>

      {/* Slider */}
      <Box sx={{ my: { xs: 0, md: 5 }, p: 2 }}>
        <Slider {...settings}>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 0 } }}>
            <Image src={PRICE} alt="price" width={34} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Lowest Price guarantee
            </Typography>
            <Typography variant="body1">
              We have the best rates and all fares include taxes, fees, and
              tolls
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 0 } }}>
            <Image src={RIDE} alt="price" width={34} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Comfortable rides
            </Typography>
            <Typography variant="body1">
              We offer a wide range of vehicles to make sure you can fit
              everyone and everything
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 0 } }}>
            <Image src={DRIVERS} alt="price" width={34} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              English Speaking Drivers
            </Typography>
            <Typography variant="body1">
              Our drivers are fluent in English and hold professional licenses.
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 0 } }}>
            <Image src={FLIGHT} alt="price" width={34} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Flight monitoring
            </Typography>
            <Typography variant="body1">
              we constantly monitor your flight status for a stress free arrival
            </Typography>
          </Stack>
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

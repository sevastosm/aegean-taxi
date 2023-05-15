"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

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
import CAR from "public/assets/whyus-car.png";
import PRICE from "public/assets/price-icon.svg";
import TWENTY from "public/assets/24-icon.svg";
import DRIVERS from "public/assets/drivers-icon.svg";
import APP from "public/assets/class-app-icon.svg";

export default function WhyBook() {
  const params = useParams();

  let settings = {
    dots: true,
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

  let title = `Why Book
  <br />
  with Aegean Taxi App`;
  let city;

  if (params.location) {
    city = (params.location.charAt(0).toUpperCase() + params.location.slice(1)).replace("-taxi-app", "");
    title = `Why Book<br /> with Aegean Taxi App in ${city}`;
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
            dangerouslySetInnerHTML={{ __html: title }}
          ></Typography>
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
            {title.replaceAll("<br />", "")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          order={{ xs: 2, md: 1 }}
          sx={{
            minHeight: { xs: 171, md: 292 },
            backgroundImage: `url(${CAR.src})`,
            backgroundSize: "cover",
          }}
        ></Grid>
      </Grid>

      {/* Slider */}
      <Box sx={{ my: 5, p: 2 }}>
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
              {city
                ? `We offer the best rates in ${city}. All fares include taxes, fees, and tolls`
                : `We have the best rates and all fares include taxes, fees, and
              tolls`}
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 0 } }}>
            <Image src={TWENTY} alt="price" width={34} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              24/7 customer support
            </Typography>
            <Typography variant="body1">
              Our {city} team is available 24/7 to offer a more personal service
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
            <Image src={APP} alt="price" width={34} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              A world class app
            </Typography>
            <Typography variant="body1">
              Download our world class ride app and book your trips.
            </Typography>
          </Stack>
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

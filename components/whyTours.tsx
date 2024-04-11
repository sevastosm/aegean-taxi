"use client";
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
import TOURS from "public/assets/whyus-tours.png";
import LAMP from "public/assets/lamp.svg";
import GEAR from "public/assets/gear.svg";
import STAR from "public/assets/star.svg";

export default function WhyTours() {
  let settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "26px", md: "36px" },
              display: { xs: "none", md: "block" },
              // lineHeight: { xs: "28px", md: "48px" },
              mt: 4,
              ml: 4,
            }}
          >
            Some of the reasons to book your
            <br /> tour with us
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
            Some of the reasons to
            <br />
            book your tour with
            <br />
            us
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          order={{ xs: 2, md: 1 }}
          sx={{
            minHeight: { xs: 197, md: 288 },
            backgroundImage: `url(${TOURS.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></Grid>
      </Grid>

      {/* Slider */}
      <Box sx={{ my: { xs: 0, md: 5 }, p: 2 }}>
        <Slider {...settings}>
          <Stack spacing={2} sx={{ p: { xs: 1, md: 1 } }}>
            <Image src={LAMP} alt="price" width={34} />
            <Typography
              component="h3"
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Local knowledge
            </Typography>
            <Typography 
              component="p"
              variant="body1">
              Our tour guides and drivers have extensive knowledge of the local
              area, allowing them to provide a truly immersive experience for
              guests.
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 1, md: 1 } }}>
            <Image src={GEAR} alt="price" width={34} />
            <Typography
              component="h3"
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Customizable itineraries
            </Typography>
            <Typography 
              component="p"
              variant="body1">
              Designed to be flexible and adaptable to suit the needs of each
              individual group. We take into account your interests and
              preferences, creating an itinerary that is unique and tailored to
              your needs.
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 1, md: 1 } }}>
            <Image src={STAR} alt="price" width={34} />
            <Typography
              component="h3"
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Exceptional service
            </Typography>
            <Typography 
              component="p"
              variant="body1">
              We focus on providing the highest level . of service. From the
              best fleet of cars, to professional English speaking drivers and
              guides, our team and service will impress you
            </Typography>
          </Stack>
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

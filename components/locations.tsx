"use client";
import NextLink from "next/link";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//MUI
import { Link as MUILink } from "@mui/material";

import ATHENS from "public/assets/taxi-athens.webp";
import MYKONOS from "public/assets/taxi-mykonos.webp";
import SANTORINI from "public/assets/taxi-santorini.webp";

import CORFU from "public/assets/taxi-corfu.webp";
import RHODES from "public/assets/taxi-rhodes.webp";

import MILOS from "public/assets/taxi-locations/taxi-milos.webp";
import { locationDetails } from "@/utils/locationDetails";
import { SxImage } from "./ui/SxImage";

export default function Locations() {
  let settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 3,
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "30",
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  const SlideItems: any = () => {
    return (
      <>
        {Object.values(locationDetails.taxi_locations).map(
          (innerObject: any, i) => (
            <Stack key={i} spacing={2} sx={{ textAlign: "center", p: 1 }}>
              <MUILink
                underline="none"
                href={innerObject.slide.href}
                component={NextLink}
              >
                <Paper>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      component={"div"}
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 500,
                        mb: 2,
                        textAlign: { xs: "left", md: "center" },
                      }}
                    >
                      {innerObject.slide.name}
                    </Typography>
                    <Box
                      sx={{
                        minHeight: { xs: 224, md: 345 },
                        backgroundImage: `url(${innerObject.slide.photo})`,
                        backgroundSize: "cover",
                        mb: 3,
                        borderRadius: 3,
                      }}
                    ></Box>
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        mt: 3,
                        lineHeight: 3,
                        borderBottom: `3px solid #000`,
                        width: "75px",
                      }}
                    >
                      Find a ride
                    </Typography>
                  </Box>
                </Paper>
              </MUILink>
            </Stack>
          )
        )}
      </>
    );
  };

  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          display: { xs: "none", md: "block" },
          textAlign: "center",
          // lineHeight: { xs: "28px", md: "48px" },
        }}
      >
        Book a ride online with Aegean Taxi in the following locations
      </Typography>
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          display: { xs: "block", md: "none" },
          textAlign: "center",
          // lineHeight: { xs: "48px", md: "68px" },
        }}
      >
        Book a ride online with Aegean Taxi in the following locations
      </Typography>

      {/* Slider */}
      <Box sx={{ my: 5, p: { xs: 2, md: 0 } }}>
        <Slider {...settings}>
          {Object.values(locationDetails.taxi_locations).map(
            (innerObject: any, i) => (
              <Stack key={i} spacing={2} sx={{ textAlign: "center", p: 1 }}>
                {innerObject.slide?.href && (
                  <MUILink
                    underline="none"
                    href={innerObject.slide.href}
                    component={NextLink}
                  >
                    <Paper>
                      <Box sx={{ p: 2 }}>
                        <Typography
                          component="h3"
                          variant="h5"
                          gutterBottom
                          sx={{
                            fontWeight: 500,
                            mb: 2,
                            textAlign: { xs: "left", md: "center" },
                          }}
                        >
                          {innerObject.slide.name}
                        </Typography>
                        <SxImage
                          src={innerObject.slide.photo}
                          width={200}
                          height={200}
                          alt={innerObject.slide.alt}
                          sx={{
                            minHeight: { xs: 224, md: 345 },
                            backgroundImage: `url(${innerObject.slide.photo})`,
                            objectFit: "cover",
                            mb: 3,
                            borderRadius: 3,
                            width:"100%"
                          }}
                        />
                        <Typography
                          component="span"
                          variant="body1"
                          sx={{
                            mt: 3,
                            lineHeight: 3,
                            borderBottom: `3px solid #000`,
                            width: "75px",
                          }}
                        >
                          Find a ride
                        </Typography>
                      </Box>
                    </Paper>
                  </MUILink>
                )}
              </Stack>
            )
          )}
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

"use client";
import NextLink from "next/link";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//MUI
import { Link as MUILink } from "@mui/material";

// assets
import MAP from "public/assets/locations-map.webp";
import ATHENS from "public/assets/taxi-athens.webp";
import MYKONOS from "public/assets/taxi-mykonos.webp";
import SANTORINI from "public/assets/taxi-santorini.webp";

export default function AirportLocations() {
  let settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 2,
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
          // lineHeight: { xs: "28px", md: "48px" },
        }}
      >
        We offer tours and experiences in the
        <br />
        following locations
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
          mt: 6,
        }}
      >
        We offer tours and
        <br />
        experiences in the
        <br />
        following locations
      </Typography>

      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "block", md: "flex" },
              minHeight: { xs: "auto", md: "595px" },
            }}
          >
            <Image src={MAP} alt="Locations map" />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Slider */}
          <Box sx={{ my: 5, p: { xs: 2, md: 0 } }}>
            <Slider {...settings}>
              <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
                <MUILink
                  underline="none"
                  href="/tours/athens/"
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
                        Athens
                      </Typography>
                      <Box
                        sx={{
                          minHeight: { xs: 224, md: 345 },
                          backgroundImage: `url(${ATHENS.src})`,
                          backgroundSize: "cover",
                          borderRadius: 3,
                          mb: 3,
                        }}
                      ></Box>

                      <Typography
                        component="p"
                        variant="body1"
                        sx={{
                          mt: 3,
                          lineHeight: 3,
                          borderBottom: `3px solid #000`,
                          width: "75px",
                        }}
                      >
                        Find a tour in Athens
                      </Typography>
                    </Box>
                  </Paper>
                </MUILink>
              </Stack>
              <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
                <MUILink
                  underline="none"
                  href="/tours/mykonos/"
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
                        Mykonos
                      </Typography>
                      <Box
                        sx={{
                          minHeight: { xs: 224, md: 345 },
                          backgroundImage: `url(${MYKONOS.src})`,
                          backgroundSize: "cover",
                          borderRadius: 3,
                          mb: 3,
                        }}
                      ></Box>

                      <Typography
                        component="p"
                        variant="body1"
                        sx={{
                          mt: 3,
                          lineHeight: 3,
                          borderBottom: `3px solid #000`,
                          width: "75px",
                        }}
                      >
                        Find a tour in Mykonos
                      </Typography>
                    </Box>
                  </Paper>
                </MUILink>
              </Stack>
              <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
                <MUILink
                  underline="none"
                  href="/tours/santorini/"
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
                        Santorini
                      </Typography>
                      <Box
                        sx={{
                          minHeight: { xs: 224, md: 345 },
                          backgroundImage: `url(${SANTORINI.src})`,
                          backgroundSize: "cover",
                          borderRadius: 3,
                          mb: 3,
                        }}
                      ></Box>

                      <Typography
                        component="p"
                        variant="body1"
                        sx={{
                          mt: 3,
                          lineHeight: 3,
                          borderBottom: `3px solid #000`,
                          width: "75px",
                        }}
                      >
                        Find a tour in Santorini
                      </Typography>
                    </Box>
                  </Paper>
                </MUILink>
              </Stack>
            </Slider>
          </Box>
          {/* ./Slider */}
        </Grid>
      </Grid>
    </Container>
  );
}

"use client";

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

import ATHENS from "public/assets/athens-tours.webp";
import MYKONOS from "public/assets/mykonos-tours.webp";
import SANTORINI from "public/assets/santorini-tours.webp";
import CUSTOM from "public/assets/custom-tours.webp";

export default function SelectedTours() {
  let settings = {
    dots: false,
    infinite: true,
    initialSlide: 1,
    slidesToScroll: 1,
    slidesToShow: 3,
    className: "center",
    centerMode: true,
    centerPadding: "50",
    speed: 500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          initialSlide: 0,
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
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          // display: { xs: "none", md: "block" },
          // lineHeight: { xs: "48px", md: "68px" },
        }}
      >
        Some of our carefully selected tours
      </Typography>

      {/* Slider */}
      <Box sx={{ my: 1, px: { xs: 2, md: 3 } }}>
        <Slider {...settings}>
          <Stack spacing={2} sx={{ p: 1 }}>
            <Paper>
              <Box sx={{ p: 2 }}>
                <Typography
                  component={"div"}
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    minHeight: { xs: 0, md: 60 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Athens
                  <br /> Sightseeing
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${ATHENS.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center" /* Center the image */,
                    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
                    borderRadius: 2,
                    mb: 3,
                  }}
                ></Box>

                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    mb: 2,
                    minHeight: { xs: 150, md: 100 },
                  }}
                >
                  The most popular Athens sightseeing option and the best way to
                  discover the most of Athens.
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "14px", md: "16px" },
                        // display: { xs: "none", md: "block" },
                        lineHeight: { xs: "16px", md: "20px" },
                      }}
                    >
                      Half-day
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "14px", md: "16px" },
                        // display: { xs: "none", md: "block" },
                        lineHeight: { xs: "16px", md: "20px" },
                      }}
                    >
                      from 300€
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Stack>
          <Stack spacing={2} sx={{ p: 1 }}>
            <Paper>
              <Box sx={{ p: 2 }}>
                <Typography
                  component={"div"}
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    minHeight: { xs: 0, md: 60 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Private Half-Day Sightseeing <br />
                  Ride in Mykonos
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${MYKONOS.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center" /* Center the image */,
                    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
                    borderRadius: 2,
                    mb: 3,
                  }}
                ></Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    mb: 2,
                    minHeight: { xs: 150, md: 100 },
                  }}
                >
                  Explore the beauty of Mykonos. Discover charming windmills,
                  picturesque beaches, and traditional villages
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "14px", md: "16px" },
                        // display: { xs: "none", md: "block" },
                        lineHeight: { xs: "16px", md: "20px" },
                      }}
                    >
                      Half-day (4-hours)
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "14px", md: "16px" },
                        // display: { xs: "none", md: "block" },
                        lineHeight: { xs: "16px", md: "20px" },
                      }}
                    >
                      from 300€
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Stack>
          <Stack spacing={2} sx={{ p: 1 }}>
            <Paper>
              <Box sx={{ p: 2 }}>
                <Typography
                  component={"div"}
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    minHeight: { xs: 0, md: 60 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Private Full-Day Sightseeing Ride in Santorini
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${SANTORINI.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center" /* Center the image */,
                    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
                    borderRadius: 2,
                    mb: 3,
                  }}
                ></Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    mb: 2,
                    minHeight: { xs: 150, md: 100 },
                  }}
                >
                  Explore the Sunset city of Oia and the Ruins of Kasteli
                  Fortress and visit famous wineries.
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "14px", md: "16px" },
                        // display: { xs: "none", md: "block" },
                        lineHeight: { xs: "16px", md: "20px" },
                      }}
                    >
                      Half-day
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "14px", md: "16px" },
                        // display: { xs: "none", md: "block" },
                        lineHeight: { xs: "16px", md: "20px" },
                      }}
                    >
                      from 500€
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Stack>
          <Stack spacing={2} sx={{ p: 1 }}>
            <Paper>
              <Box sx={{ p: 2 }}>
                <Typography
                  component={"div"}
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    minHeight: { xs: 0, md: 60 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Custom <br />
                  Tour
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${CUSTOM.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center" /* Center the image */,
                    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
                    borderRadius: 2,
                    mb: 3,
                  }}
                ></Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    mb: 2,
                    minHeight: { xs: 150, md: 100 },
                  }}
                >
                  Want a custom tour tailored to your needs? we got you covered.
                  Contact us and we will create a custom tour for you
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "14px", md: "16px" },
                        // display: { xs: "none", md: "block" },
                        lineHeight: { xs: "16px", md: "20px" },
                      }}
                    >
                      On-demand
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "14px", md: "16px" },
                        // display: { xs: "none", md: "block" },
                        lineHeight: { xs: "16px", md: "20px" },
                      }}
                    >
                      from 70€/h
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Stack>
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

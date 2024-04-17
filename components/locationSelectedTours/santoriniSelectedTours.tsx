"use client";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// slick
import Slider from "react-slick";

//
import DAY from "public/assets/tours-santorini-half-day.webp";
import NIGHT from "public/assets/tours-santorini-night.webp";
import CUSTOM from "public/assets/tours-santorini-custom.webp";

export default function SantoriniSelectedTours() {
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
        Some of our carefully selected Santorini tours
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
                    minHeight: { xs: 55, md: 70 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Private Half-Day Sightseeing
                  <br /> Ride in Santorini
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${DAY.src})`,
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
                    minHeight: { xs: 195, md: 150 },
                  }}
                >
                  Orient yourself to Santorini and visit the landmarks you like.
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
                    minHeight: { xs: 55, md: 70 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Private Full-Day Sightseeing <br /> Ride in Santorini
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
                    minHeight: { xs: 195, md: 150 },
                  }}
                >
                  Explore the Sunset city of Oia and the Ruins of Kasteli
                  Fortress
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
                    minHeight: { xs: 55, md: 70 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Santorini
                  <br />
                  by Night
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${NIGHT.src})`,
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
                    minHeight: { xs: 195, md: 150 },
                  }}
                >
                  Fall in love with Santorini on a personalized evening ride at
                  its illuminated landmarks and most famous sites.
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
                      3-Hours
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
                      from 180€
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
                    minHeight: { xs: 55, md: 70 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Custom tours
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
                    minHeight: { xs: 195, md: 150 },
                  }}
                >
                  Experience the breathtaking beauty of Santorini on a custom
                  tour tailored to your preferences. Discover the island&prime;s
                  stunning beaches, ancient ruins, and famous sunset views. Let
                  us create a memorable journey for you.
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
                      Full-day
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
                      from 60€/h
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

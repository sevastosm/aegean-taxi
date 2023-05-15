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

import ATHENS from "public/assets/athens-tours.jpeg";
import SOUNION from "public/assets/cape-sounion.jpg";
import RIVIERA from "public/assets/athenian-riviera.jpg";
import DELPHI from "public/assets/delphi.jpg";
import METEORA from "public/assets/meteora.jpg";
import OLYMPIA from "public/assets/olympia.jpg";
import CUSTOM from "public/assets/custom-tours.png";

export default function AthensSelectedTours() {
  let settings = {
    dots: true,
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
          dots: true,
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
        Some of our carefully selected Athens tours
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
                    minHeight: { xs: 150, md: 130 },
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
                    minHeight: { xs: 55, md: 70 },
                    fontSize: { xs: "1rem", md: 20 },
                  }}
                >
                  Cape <br />
                  Sounion
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${SOUNION.src})`,
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
                    minHeight: { xs: 150, md: 130 },
                  }}
                >
                  Take a break from the city center and spend a few hours
                  exploring the beautiful Athenian coastline, Cape Sounion and
                  the majestic Temple of Poseidon
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
                      from 350€
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
                  Athenian
                  <br />
                  Riviera
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${RIVIERA.src})`,
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
                    minHeight: { xs: 150, md: 130 },
                  }}
                >
                  Take a tour of the majestic Athens riviera and soak up the sun
                  in one of the many beach clubs. Ask our guides on where to
                  enjoy a meal by the seaside
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
                  Delphi
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${DELPHI.src})`,
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
                    minHeight: { xs: 150, md: 130 },
                  }}
                >
                  Take a day trip to Arachovaand Mount Parnasos and explore the
                  mythical center of the world, Delphi.
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
                  Meteora
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${METEORA.src})`,
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
                    minHeight: { xs: 150, md: 130 },
                  }}
                >
                  Experience breathtaking mountain views from the renowned
                  Meteora Monasteries.
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
                      from 600€
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
                  Olympia
                </Typography>
                <Box
                  sx={{
                    minHeight: 230,
                    backgroundImage: `url(${OLYMPIA.src})`,
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
                    minHeight: { xs: 150, md: 130 },
                  }}
                >
                  Just 3-hour drive from Athens, the ancient center of Olympic
                  Games. Explore the ancient site and feel like ancient Greek.
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
                    minHeight: { xs: 150, md: 130 },
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
                    ></Typography>
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

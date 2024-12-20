"use client";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ARROW from "public/assets/location-arrow-down.svg";
import AIRPORT from "public/assets/airport.svg";
import PORT from "public/assets/port.svg";
import CITY from "public/assets/city-centre.svg";

export default function CorfuFares() {
  return (
    <Container maxWidth={"lg"}>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          p: 1,
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: "26px", md: "36px" },
            // lineHeight: { xs: "28px", md: "48px" },
            py: 4,
          }}
        >
          Indicative fares and travel times for Corfu
          <br /> Hotspots
        </Typography>
      </Box>

      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          display: { xs: "block", md: "none" },
          // lineHeight: { xs: "48px", md: "68px" },
          py: 3,
        }}
      >
        Indicative fares and travel times for Corfu
        <br /> Hotspots
      </Typography>

      {/* List */}
      <Container maxWidth="md" disableGutters>
        <Stack spacing={{ xs: 2, md: 3.2 }}>
          <Paper
            sx={{
              // background: "#244284",
              // color: "#fff",
              p: 1,
            }}
          >
            <Grid container>
              <Grid item xs={2.2} md={1}>
                <Image src={AIRPORT} alt="airport" />
              </Grid>
              <Grid item xs={1} md={0.5} sx={{ mt: 1 }}>
                <Image src={ARROW} alt="arrow" height={65} />
              </Grid>
              <Grid item xs={5.7} md={8}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "24px" },
                    }}
                  >
                    Corfu Airport
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "14px", md: "18px" },
                    }}
                  >
                    Corfu Town
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3} md={2}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "28px" },
                    }}
                  >
                    From 15€
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#A09D9D",
                    }}
                  >
                    10 mins
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
          {/* ./ */}
          <Paper
            sx={{
              // background: "#244284",
              // color: "#fff",
              p: 1,
            }}
          >
            <Grid container>
              <Grid item xs={2.2} md={1}>
                <Image src={CITY} alt="city centre" />
              </Grid>
              <Grid item xs={1} md={0.5} sx={{ mt: 1 }}>
                <Image src={ARROW} alt="arrow" height={65} />
              </Grid>
              <Grid item xs={5.7} md={8}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "24px" },
                    }}
                  >
                    Lefkimi
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "14px", md: "18px" },
                    }}
                  >
                    Corfu Port
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3} md={2}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "28px" },
                    }}
                  >
                    From 50€
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#A09D9D",
                    }}
                  >
                    55 mins
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
          {/* ./ */}
          <Paper
            sx={{
              // background: "#244284",
              // color: "#fff",
              p: 1,
            }}
          >
            <Grid container>
              <Grid item xs={2.2} md={1}>
                <Image src={PORT} alt="Port" />
              </Grid>
              <Grid item xs={1} md={0.5} sx={{ mt: 1 }}>
                <Image src={ARROW} alt="arrow" height={65} />
              </Grid>
              <Grid item xs={5.7} md={8}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "24px" },
                    }}
                  >
                    Corfu Airport
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "14px", md: "18px" },
                    }}
                  >
                    Corfu Port
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3} md={2}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "28px" },
                    }}
                  >
                    From 15€
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#A09D9D",
                    }}
                  >
                    10 mins
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
          {/* ./ */}
          <Paper
            sx={{
              // background: "#244284",
              // color: "#fff",
              p: 1,
            }}
          >
            <Grid container>
              <Grid item xs={2.2} md={1}>
                <Image src={CITY} alt="City" />
              </Grid>
              <Grid item xs={1} md={0.5} sx={{ mt: 1 }}>
                <Image src={ARROW} alt="arrow" height={65} />
              </Grid>
              <Grid item xs={5.7} md={8}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "24px" },
                    }}
                  >
                    City Town
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "14px", md: "18px" },
                    }}
                  >
                    Achilion
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3} md={2}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "28px" },
                    }}
                  >
                    From 25€
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#A09D9D",
                    }}
                  >
                    20 mins
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
          {/* ./ */}
          <Paper
            sx={{
              // background: "#244284",
              // color: "#fff",
              p: 1,
            }}
          >
            <Grid container>
              <Grid item xs={2.2} md={1}>
                <Image src={AIRPORT} alt="airPort" />
              </Grid>
              <Grid item xs={1} md={0.5} sx={{ mt: 1 }}>
                <Image src={ARROW} alt="arrow" height={65} />
              </Grid>
              <Grid item xs={5.7} md={8}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "24px" },
                    }}
                  >
                    Palaiokastritsa
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "14px", md: "18px" },
                    }}
                  >
                    Corfu Airport
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3} md={2}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "18px", md: "28px" },
                    }}
                  >
                    From 45€
                  </Typography>

                  <Typography
                    component="div"
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#A09D9D",
                    }}
                  >
                    35 mins
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
          {/* ./ */}
        </Stack>
      </Container>
      {/* ./List */}
    </Container>
  );
}

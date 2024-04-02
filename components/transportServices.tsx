"use client";
import { useState, SyntheticEvent } from "react";
import NextLink from "next/link";

// MUI
import { Link as MUILink } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";

import HailIcon from "@mui/icons-material/Hail";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InsertInvitationSharpIcon from "@mui/icons-material/InsertInvitationSharp";

import Stack from "@mui/material/Stack";
import TRANSPORT from "public/assets/professional-transport.png";
import AIRPORT from "public/assets/airport_transfers.png";
import TOURS from "public/assets/tours.jpg";

export default function TransportServices() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={"lg"} sx={{ mb: { xs: 4, md: 6 } }}>
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          textAlign: "center",
        }}
      >
        Transport Services, wherever you go
      </Typography>

      {/* tabs */}
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "#dedede" }}>
            <TabList
              variant="fullWidth"
              onChange={handleChange}
              aria-label="transport services tabs"
            >
              <Tab
                label="Taxi"
                value="1"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              />
              <Tab
                label="Airport Transfers"
                value="2"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              />
              <Tab
                label="Tours"
                value="3"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              />
            </TabList>
          </Box>
          {/* Taxi */}
          <TabPanel value="1">
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "left" }}>
                  <Typography
                    component={"span"}
                    variant="h5"
                    gutterBottom
                    sx={{
                      // lineHeight: "48px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Choose our fastest pickup option when you
                    <br /> need a quick ride.
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="h6"
                    gutterBottom
                    sx={{
                      // lineHeight: "40px",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    Choose our fastest pickup option when you need a quick ride.
                  </Typography>

                  <Stack spacing={0}>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <HailIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Get an affordable ride in minutes
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <InsertInvitationSharpIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Schedule your ride in advance
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <AutoAwesomeIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Choose an easy way to book
                        </Typography>
                      </Grid>
                    </Grid>
                  </Stack>

                  <MUILink
                    underline="none"
                    href="/taxi"
                    component={NextLink}
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 3,
                      borderBottom: `3px solid #000`,
                      width: "80px",
                    }}
                  >
                    Find a ride
                  </MUILink>

                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 5,
                      width: "100%",
                      minHeight: "254px",
                      backgroundImage: `url(${TRANSPORT.src})`,
                      backgroundSize: "cover",
                      borderRadius: 2,
                    }}
                  ></Box>
                </Stack>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  display: { xs: "none", md: `block` },
                  backgroundImage: `url(${TRANSPORT.src})`,
                  backgroundSize: "cover",
                  minHeight: 450,
                }}
              ></Grid>
            </Grid>
          </TabPanel>
          {/* ./Taxi */}
          {/* Ariport Transfer */}
          <TabPanel value="2">
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "left" }}>
                  <Typography
                    component={"span"}
                    variant="h5"
                    gutterBottom
                    sx={{
                      // lineHeight: "48px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Book your airport transfer in advance,
                    <br />
                    for a stress free arrival.
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="h6"
                    gutterBottom
                    sx={{
                      // lineHeight: "40px",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    Book your airport transfer in advance, for a stress free
                    arrival.
                  </Typography>

                  <Stack spacing={0}>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <HailIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Comfortable rides
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <InsertInvitationSharpIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Flight monitoring
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <AutoAwesomeIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Best available rates
                        </Typography>
                      </Grid>
                    </Grid>
                  </Stack>

                  <MUILink
                    underline="none"
                    href="/airport-transfers"
                    component={NextLink}
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 3,
                      borderBottom: `3px solid #000`,
                      width: "135px",
                    }}
                  >
                    Book your transfer
                  </MUILink>

                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 5,
                      width: "100%",
                      minHeight: "254px",
                      backgroundImage: `url(${AIRPORT.src})`,
                      backgroundSize: "cover",
                      borderRadius: 2,
                    }}
                  ></Box>
                </Stack>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  display: { xs: "none", md: `block` },
                  backgroundImage: `url(${AIRPORT.src})`,
                  backgroundSize: "cover",
                  minHeight: 450,
                }}
              ></Grid>
            </Grid>
          </TabPanel>
          {/* /. Ariport Transfer */}
          {/* Tours */}
          <TabPanel value="3">
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "left" }}>
                  <Typography
                    component={"span"}
                    variant="h5"
                    gutterBottom
                    sx={{
                      // lineHeight: "48px",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Book one of our pre-selected tours,
                    <br />
                    or customise your own
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="h6"
                    gutterBottom
                    sx={{
                      // lineHeight: "40px",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    Book one of our pre-selected tours, or customise your own
                  </Typography>

                  <Stack spacing={0}>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <HailIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Local knowledge
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <InsertInvitationSharpIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Customisable tours
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid container item xs={2} md={1}>
                        <AutoAwesomeIcon />
                      </Grid>
                      <Grid container item xs={10} md={11}>
                        <Typography variant="body1" gutterBottom>
                          Exceptional Service
                        </Typography>
                      </Grid>
                    </Grid>
                  </Stack>

                  <MUILink
                    underline="none"
                    href="/tours"
                    component={NextLink}
                    variant="body1"
                    sx={{
                      mt: 3,
                      lineHeight: 3,
                      borderBottom: `3px solid #000`,
                      width: "97px",
                    }}
                  >
                    Explore tours
                  </MUILink>

                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 5,
                      width: "100%",
                      minHeight: "254px",
                      backgroundImage: `url(${TOURS.src})`,
                      backgroundSize: "cover",
                      borderRadius: 2,
                    }}
                  ></Box>
                </Stack>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  display: { xs: "none", md: `block` },
                  backgroundImage: `url(${TOURS.src})`,
                  backgroundSize: "cover",
                  minHeight: 450,
                }}
              ></Grid>
            </Grid>
          </TabPanel>
          {/* /. Tours */}
        </TabContext>
      </Box>
    </Container>
  );
}

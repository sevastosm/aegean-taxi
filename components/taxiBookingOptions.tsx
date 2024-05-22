"use client";
import { useState, SyntheticEvent } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";

import Slider from "react-slick";

//
import CAR from "public/assets/horizontal-car.webp";
import PHONE from "public/assets/phone-booking.webp";
import WEB from "public/assets/app-booking.webp";
import WHATSAPP from "public/assets/whatsapp-booking.webp";
import RIDEAPP from "public/assets/ride-app.webp";

// components

import CallUsButton from "components/callUsButton";
import BookOnlineButton from "components/bookOnlineButton";
import DownloadAppButton from "components/downloadAppButton";
import WhatsAppButton from "components/whatsAppButton";

export default function TaxiBookingOptions({
  showRideApp = true,
}: {
  showRideApp?: boolean;
}) {
  const params: any = useParams();
  let title = `We made it easier to book your taxi ride <br /> in Greece`;
  let city = "";

  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipeToSlide: true,
  };

  if (params.location) {
    city = (
      params.location.charAt(0).toUpperCase() + params.location.slice(1)
    ).replace("-taxi-app", "");
    title = `We made it easier to book a ride<br /> in ${city}`;
  }

  return (
    <Container maxWidth={"lg"}>
      <Box sx={{ marginTop: { xs: 5, md: 10 } }}>
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: "26px", md: "36px" },
            display: { xs: "none", md: "block" },
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        ></Typography>
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "left",
            fontWeight: 700,
            fontSize: { xs: "26px", md: "36px" },
            display: { xs: "block", md: "none" },
          }}
        >
          {title.replaceAll("<br />", "")}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center", mt: 3 }}
      >
        <div
          style={{
            background: "#000",
            height: 7,
            position: "absolute",
            width: "46%",
            zIndex: 1,
            left: "3%",
          }}
        ></div>
        <div
          style={{
            background: "#ECEFF1",
            height: 7,
            position: "absolute",
            width: "46%",
            zIndex: 1,
            right: "3%",
          }}
        ></div>
        <Box sx={{ height: { xs: 40, md: 70 }, zIndex: 3 }}>
          <Image
            src={CAR}
            alt="car"
            style={{ zIndex: 3, height: "100%", width: "auto" }}
          />
        </Box>
      </Box>
      {/* Slider */}
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Slider {...settings}>
          {/* Ride App */}
          {showRideApp && (
            <Stack spacing={0}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
                sx={{ my: { xs: 3, md: 3 } }}
              >
                <Grid item xs={12} md={6}>
                  <Stack sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        textAlign: "left",
                        ml: 15,
                        mt: 18,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <Typography
                        component="h3"
                        variant="h4"
                        gutterBottom
                        sx={{
                          mt: "0 !important",
                          fontWeight: 700,
                        }}
                      >
                        {city} Taxi App
                        {/* A World Class
                        <br /> Ride App */}
                      </Typography>
                    </Box>
                    <Typography
                      component="h3"
                      variant="h6"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {/* A World Class Ride App */}
                      {city} Taxi App
                    </Typography>
                    <Box
                      justifyContent="center"
                      alignItems="center"
                      sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                    >
                      <Image src={RIDEAPP} height={391} alt="Ride App" />
                    </Box>
                    <Box
                      sx={{
                        textAlign: "left",
                        ml: 15,
                        mt: 6,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <Typography 
                        component="p"
                        variant="body1">
                        Download our {city} taxi app from the apple or google play stores.
                        <br />
                        Register, book a taxi ride, and start a trip in minutes
                        {/* Get our ride app from the stores, and start riding
                        <br /> in minutes */}
                        <DownloadAppButton />
                      </Typography>
                    </Box>

                    <Typography
                      component="p"
                      variant="body1"
                      sx={{
                        mt: 3,
                        display: { xs: "block", md: "none" },
                        minHeight: 77,
                      }}
                    >
                      Download our {city} taxi app from the apple or google play stores.
                      <br />
                      Register, book a taxi ride, and start a trip in minutes
                      {/* Get our ride app from the stores,
                      <br /> and start riding in minutes */}
                    </Typography>

                    <Box
                      sx={{
                        textAlign: "left",
                        ml: 15,
                        mt: 6,
                        mr: 8,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <DownloadAppButton showMd="none" />
                    </Box>
                    <Box
                      sx={{
                        display: { xs: "block", md: "none" },
                        mt: 3,
                      }}
                    >
                      <DownloadAppButton showMd="none" />
                    </Box>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: { xs: "none", md: `block` } }}
                >
                  <Box justifyContent="center" alignItems="center">
                    <Image src={RIDEAPP} alt="Ride App" />
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          )}
          {/* ./Ride App  */}
          {/* Phone Booking  */}
          <Stack spacing={0}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={0}
              sx={{ my: { xs: 3, md: 3 } }}
            >
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 18,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h4"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                      }}
                    >
                      {city} Taxi Phone
                    </Typography>
                  </Box>
                  <Typography
                    component="h3"
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: "0 !important",
                      fontWeight: 700,
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {city} Taxi Phone
                  </Typography>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                  >
                    <Image src={PHONE} height={391} alt="Phone booking" />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography 
                      component="p"
                      variant="body1">
                      Our {city} taxi call center is available 24/7. Book a taxi
                      <br /> ride or transfer in seconds. Reserve for now or later
                    </Typography>
                  </Box>

                  <Typography
                    component="p"
                    variant="body1"
                    sx={{
                      mt: 3,
                      display: { xs: "block", md: "none" },
                      minHeight: 77,
                    }}
                  >
                    Our {city} taxi call center is available 24/7. Book a taxi
                    <br /> ride or transfer in seconds. Reserve for now or later
                  </Typography>

                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      mr: 8,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <CallUsButton />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 3,
                    }}
                  >
                    <CallUsButton />
                  </Box>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: { xs: "none", md: `block` } }}
              >
                <Box justifyContent="center" alignItems="center">
                  <Image src={PHONE} alt="Phone booking" />
                </Box>
              </Grid>
            </Grid>
          </Stack>
          {/* ./Phone Booking  */}
          {/* WhatsApp Booking  */}
          <Stack spacing={0}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={0}
              sx={{ my: { xs: 3, md: 3 } }}
            >
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 18,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h4"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                      }}
                    >
                      WhatsApp
                      <br />
                      Booking
                    </Typography>
                  </Box>
                  <Typography
                    component="h3"
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: "0 !important",
                      fontWeight: 700,
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    WhatsApp instant Booking
                  </Typography>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                  >
                    <Image src={WHATSAPP} height={391} alt="WhatsApp booking" />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography 
                      component="p"
                      variant="body1">
                      {/* Just launch WhatsApp and request a ride, 24/7. Instant
                      <br /> confirmation with driver and ETA details. */}
                      {/*Just launch WhatsApp and request a ride
                      {city ? ` in ${city}` : ""}, 24/7*/}
                      {city ? `${city}` : ""} WhatsApp taxi booking 24/7. Use Whatsapp to request to book a ride
                      {city ? ` in ${city}` : ""}. Online and always available, to book now or later
                    </Typography>
                  </Box>

                  <Typography
                    component="p"
                    variant="body1"
                    sx={{
                      mt: 3,
                      display: { xs: "block", md: "none" },
                      minHeight: 77,
                    }}
                  >
                    {city ? `${city}` : ""} WhatsApp taxi booking 24/7. Use Whatsapp to request to book a ride
                    {city ? ` in ${city}` : ""}. Online and always available, to book now or later
                  </Typography>

                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      mr: 8,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <WhatsAppButton />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 3,
                    }}
                  >
                    <WhatsAppButton />
                  </Box>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: { xs: "none", md: `block` } }}
              >
                <Box justifyContent="center" alignItems="center">
                  <Image src={WHATSAPP} alt="WhatsApp booking" />
                </Box>
              </Grid>
            </Grid>
          </Stack>
          {/* ./WhatsApp Booking  */}
          {/* Web Booking  */}
          <Stack spacing={0}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={0}
              sx={{ my: { xs: 3, md: 3 } }}
            >
              <Grid item xs={12} md={6}>
                <Stack sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 18,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h4"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                      }}
                    >
                      Book Online
                    </Typography>
                  </Box>
                  <Typography
                    component="h3"
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: "0 !important",
                      fontWeight: 700,
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    Book Online
                  </Typography>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                  >
                    <Image src={WEB} height={391} alt="App booking" />
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography 
                      component="p"
                      variant="body1">
                      Book a taxi ride online{city ? ` in ${city}` : ""} in 2 simple
                      steps. Cheap rides available 24/7 to book now or later.
                    </Typography>
                  </Box>

                  <Typography
                    component="p"
                    variant="body1"
                    sx={{
                      mt: 3,
                      display: { xs: "block", md: "none" },
                      minHeight: 77,
                    }}
                  >
                    Book a taxi ride online{city ? ` in ${city}` : ""} in 2 simple
                    steps. Cheap rides available 24/7 to book now or later.
                  </Typography>

                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      mr: 8,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <BookOnlineButton />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 3,
                    }}
                  >
                    <BookOnlineButton />
                  </Box>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: { xs: "none", md: `block` } }}
              >
                <Box justifyContent="center" alignItems="center">
                  <Image src={WEB} alt="App booking" />
                </Box>
              </Grid>
            </Grid>
          </Stack>
          {/* ./Web Booking  */}
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

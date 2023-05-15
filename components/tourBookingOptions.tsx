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
import PHONE from "public/assets/phone-booking.png";
import WHATSAPP from "public/assets/whatsapp-booking.png";
import WhatsAppButton from "components/whatsAppButton";

// components
import Call24Button from "components/call-24-Button";

export default function TourBookingOptions({
  showRideApp = true,
}: {
  showRideApp?: boolean;
}) {
  const params = useParams();
  let city;
  if (params.location) {
    city = params.location.charAt(0).toUpperCase() + params.location.slice(1);
  }

  let settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipeToSlide: true,
  };

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
        >
          Book your {city} tour directly with us
        </Typography>
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
          Book your {city} tour directly with us
        </Typography>
      </Box>

      {/* Slider */}
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Slider {...settings}>
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
                      component={"span"}
                      variant="h4"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                      }}
                    >
                      Phone
                    </Typography>
                  </Box>
                  <Typography
                    component={"span"}
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: "0 !important",
                      fontWeight: 700,
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    Phone
                  </Typography>
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: { xs: "block", md: "none" }, mt: 2 }}
                  >
                    <Image src={PHONE} height={391} alt="Phone booking" />x
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      ml: 15,
                      mt: 6,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography variant="body1">
                      Our call centre is available 24/7 to create and book
                      <br />
                      your tour
                    </Typography>
                  </Box>

                   <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      display: { xs: "block", md: "none" },
                      minHeight: 77
                    }}
                  >
                    Our call centre is available 24/7
                    <br /> to create and book your tour
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
                    <Call24Button />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                      mt: 3,
                    }}
                  >
                    <Call24Button />
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
                  <Image src={PHONE} height={391} alt="Phone booking" />
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
                      component={"span"}
                      variant="h4"
                      gutterBottom
                      sx={{
                        mt: "0 !important",
                        fontWeight: 700,
                      }}
                    >
                      WhatsApp
                    </Typography>
                  </Box>
                  <Typography
                    component={"span"}
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: "0 !important",
                      fontWeight: 700,
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    WhatsApp
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
                    <Typography variant="body1">
                      Just launch WhatsApp and talk to our team
                      <br /> about your ideal tour
                    </Typography>
                  </Box>

                   <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      display: { xs: "block", md: "none" },
                      minHeight: 77
                    }}
                  >
                    Just launch WhatsApp and talk to our team about your ideal
                    tour
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
                  <Image src={WHATSAPP} height={391} alt="WhatsApp booking" />
                </Box>
              </Grid>
            </Grid>
          </Stack>
          {/* ./WhatsApp Booking  */}
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

"use client";
import { useState, SyntheticEvent } from "react";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// cars
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LuggageIcon from "@mui/icons-material/Luggage";
import BUS from "public/assets/onde-service-types/BUS.png";
import BUSINESS from "public/assets/onde-service-types/BUSINESS.png";
import CLASSIK from "public/assets/onde-service-types/CLASSIC.png";
import ECONOMY_YELLOW from "public/assets/onde-service-types/ECONOMY_yellow.png";
// import ECONOMY from "public/assets/onde-service-types/ECONOMY.png";
import MICRO_BUS from "public/assets/onde-service-types/MICRO_BUS.png";
import MINIVAN from "public/assets/onde-service-types/MINIVAN.png";
import SUV from "public/assets/onde-service-types/SUV.png";
import TESLA_MODEL_X from "public/assets/onde-service-types/TESLA_MODEL_X.png";
import VAN from "public/assets/onde-service-types/VAN.png";

export default function WaysToRide() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const setSettings = (slidesLength = 3) => {
    settings.slidesToScroll = slidesLength;
    settings.slidesToShow = slidesLength;
    return settings;
  };

  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h2"
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
        }}
      >
        Ways to ride
      </Typography>

      {/* tabs */}
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "#dedede" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Standard"
                value="1"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              />
              <Tab
                label="SUV"
                value="2"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              />
              <Tab
                label="VAN"
                value="3"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              />
              <Tab
                label="Mini bus"
                value="4"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* Standard Slider */}
            <Slider {...settings}>
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={ECONOMY_YELLOW} alt="ECONOMY" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Taxi
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="4"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="3"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">Budget friendly rides</Typography>
              </Stack>
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={CLASSIK} alt="Classic" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Comfort
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="4"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="4"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">
                  Our most afordable rides
                </Typography>
              </Stack>
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={BUSINESS} alt="Business" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Sedan
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="4"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="4"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">
                  Premium rides in our best sedans
                </Typography>
              </Stack>
            </Slider>
            {/* /. Standard Slider */}
          </TabPanel>
          <TabPanel value="2">
            {/* SUV Slider */}
            <Slider {...setSettings(2)}>
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={SUV} alt="SUV" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Premium
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="4"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="4"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">
                  Spacious cars with extra seats
                </Typography>
              </Stack>
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={TESLA_MODEL_X} alt="TESLA MODEL X" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Luxury
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="4"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="5"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">
                  More space, more luxury.
                </Typography>
              </Stack>
            </Slider>
            {/* /. SUV Slider */}
          </TabPanel>
          <TabPanel value="3">
            {/* VAN Slider */}
            <Slider {...setSettings(2)}>
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={MINIVAN} alt="Minivan" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Minivan
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="7"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="5"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">
                  Spacious rides for larger groups.
                </Typography>
              </Stack>
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={VAN} alt="Van" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Van
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="8"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="6"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">
                  Spacious rides for larger groups.
                </Typography>
              </Stack>
            </Slider>
            {/* /. VAN Slider */}
          </TabPanel>
          <TabPanel value="4">
            <Slider {...setSettings(2)}>
              {/* MiniBus Slider */}
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={MICRO_BUS} alt="Micro bus" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Minibus
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="10"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="8"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">
                  Versatile rides to fit all.
                </Typography>
              </Stack>
              <Stack spacing={2} sx={{ textAlign: "center" }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Image src={BUS} alt="Bus" width={256} />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: "0 !important",
                  }}
                >
                  Bus
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack direction="row" spacing={1}>
                    <Chip
                      icon={<DirectionsCarIcon />}
                      label="14"
                      color="primary"
                      size="small"
                    />
                    <Chip
                      icon={<LuggageIcon />}
                      label="12"
                      color="primary"
                      size="small"
                    />
                  </Stack>
                </Box>
                <Typography variant="body2">Our luxury buses.</Typography>
              </Stack>
            </Slider>
            {/* MiniBus Slider */}
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}

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
import BUS from "public/assets/onde-service-types/BUS.webp";
import BUSINESS from "public/assets/onde-service-types/BUSINESS.webp";
import CLASSIK from "public/assets/onde-service-types/CLASSIC.webp";
import ECONOMY_YELLOW from "public/assets/onde-service-types/ECONOMY_yellow.webp";
// import ECONOMY from "public/assets/onde-service-types/ECONOMY.webp";
import MICRO_BUS from "public/assets/onde-service-types/MICRO_BUS.webp";
import MINIVAN from "public/assets/onde-service-types/MINIVAN.webp";
import SUV from "public/assets/onde-service-types/SUV.webp";
import TESLA_MODEL_X from "public/assets/onde-service-types/TESLA_MODEL_X.webp";
import VAN from "public/assets/onde-service-types/VAN.webp";
import { locationDetails } from "@/utils/locationDetails";
import { Console } from "console";

export default function WaysToRide({data}:any) {
  const [value, setValue] = useState(0);


  console.log("WaysToRide",data);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h2"
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "25px", md: "36px" },
          textAlign: "center",
        }}
      >
        From taxis to luxury cars, you can choose the right ride for you
      </Typography>

      {/* tabs */}
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "#dedede" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {data.tabs.map((tab: any, i: number) => {
                return (
                  <Tab
                    key={i}
                    component="h3"
                    label={tab.label}
                    value={i}
                    sx={{
                      textTransform: "none",
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  />
                );
              })}
            </TabList>
          </Box>
          {data.tabs.map((tab: any, i: number) => {
            let settings = {
              dots: false,
              infinite: true,
              initialSlide: 0,
              slidesToScroll: 3,
              slidesToShow: tab.slides.length,
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
            return (
              <TabPanel key={i} value={i}>
                <Slider {...settings}>
                  {tab.slides.map((item: any, key: number) => (
                    <Stack key={key} spacing={2} sx={{ textAlign: "center" }}>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ textAlign: "center" }}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={256}
                          height={200}
                        />
                      </Box>
                      <Typography
                        component="h3"
                        variant="h6"
                        gutterBottom
                        sx={{
                          mt: "0 !important",
                        }}
                      >
                        {item.name}
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
                      <Typography variant="body2">
                        Budget friendly rides
                      </Typography>
                    </Stack>
                  ))}
                  {/* <Stack spacing={2} sx={{ textAlign: "center" }}>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ textAlign: "center" }}
                        >
                          <Image
                            src={ECONOMY_YELLOW}
                            alt="{location.ways_to_ride.economy_alt.classic}"
                            width={256}
                          />
                        </Box>
                        <Typography
                          component="h3"
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
                        <Typography variant="body2">
                          Budget friendly rides
                        </Typography>
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
                          component="h3"
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
                          component="h3"
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
                      </Stack> */}
                </Slider>
                {/* /. Standard Slider */}
              </TabPanel>
            );
          })}
        </TabContext>
      </Box>
    </Container>
  );
}

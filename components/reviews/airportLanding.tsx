// @ts-nocheck
"use client";
import Image from "next/image";
import ReadMoreReact from "read-more-react";
// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import LinesEllipsis from "react-lines-ellipsis";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//MUI

import GB from "public/assets/flags/gb.svg";
import US from "public/assets/flags/us.svg";
import ES from "public/assets/flags/es.svg";
import FR from "public/assets/flags/fr.svg";
import IT from "public/assets/flags/it.svg";

import { locationDetails } from "@/utils/locationDetails";
import { Review } from "./reviews";

export default function AirportLandingReviews({ location }: any) {
  console.log("AirportLandingReviews", location);
  const data = location
    ? locationDetails.airports[location]
    : locationDetails.default;

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

  const getFlag = (flag: string) => {
    if (flag === "uk") {
      return GB;
    }
    if (flag === "america") {
      return US;
    }
    if (flag === "french") {
      return FR;
    }
    if (flag === "spain") {
      return ES;
    }
    if (flag === "italy") {
      return IT;
    }
  };

  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "26px", md: "36px" },
              display: { xs: "none", md: "block" },
              // lineHeight: { xs: "28px", md: "48px" },
              mt: 5,
            }}
          >
            What travelers who booked
            <br /> a ride with Aegean Taxi say about us
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
            }}
          >
            What travelers who booked a ride with Aegean Taxi say about us
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Slider */}
          <Box sx={{ my: 1, p: { xs: 2, md: 3 } }}>
            <Slider {...settings}>
              {data?.reviews.map((item: any, i: number) => (
                <Review key={i} item={item} />
              ))}
            </Slider>
          </Box>
          {/* ./Slider */}
        </Grid>
      </Grid>
    </Container>
  );
}

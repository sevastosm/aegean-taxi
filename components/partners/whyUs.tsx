"use client";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Slider from "react-slick";

//
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import EuroSymbolSharpIcon from "@mui/icons-material/EuroSymbolSharp";
import MovingSharpIcon from "@mui/icons-material/MovingSharp";
import SavingsSharpIcon from "@mui/icons-material/SavingsSharp";

export default function WhyUs() {
  let settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 4,
    slidesToShow: 4,
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
    <Container
      disableGutters
      maxWidth={false}
      sx={{ background: "#f9f9f9", p: 4, mt: 4 }}
    >
      {/* Slider */}
      <Box sx={{ my: 5, p: 1 }}>
        <Slider {...settings}>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 2 } }}>
            <TimerSharpIcon sx={{ fontSize: 40 }} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Save time
            </Typography>
            <Typography variant="body1">
              Our quick and easy to use interface reduces booking time or
              eliminates it completely, freeing up your staff&prime;s valuable
              time
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 2 } }}>
            <EuroSymbolSharpIcon sx={{ fontSize: 40 }} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Earn new revenue
            </Typography>
            <Typography variant="body1">
              We made it easy for partners to monetise on their potential by
              opening a revenue stream that was previously seen as too complex
              to capture
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 2 } }}>
            <MovingSharpIcon sx={{ fontSize: 40 }} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Drive royalty
            </Typography>
            <Typography variant="body1">
              Impress your clients and differentiate your brand without the
              operational complexity
            </Typography>
          </Stack>
          <Stack spacing={2} sx={{ p: { xs: 4, md: 2 } }}>
            <SavingsSharpIcon sx={{ fontSize: 40 }} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: { xs: "18px", md: "initial" },
              }}
            >
              Reduce costs
            </Typography>
            <Typography variant="body1">
              Take advantage of our all in one solution and low costs, to switch
              from inneficcient or expensive options.
            </Typography>
          </Stack>
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

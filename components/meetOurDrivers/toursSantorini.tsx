"use client";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// assets
import NIKOS from "public/assets/drivers/nikos.webp";
import COSTAS from "public/assets/drivers/costas-santorini.webp";
import ALEX from "public/assets/drivers/alex.webp";

export default function DriversSantorini() {
  let settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 3,
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
          centerPadding: "50",
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div className="grayBg">
      <Container maxWidth={"lg"} sx={{ pt: 4 }}>
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 500,
            textAlign: "center",
            fontSize: { xs: "26px", md: "36px" },
            lineHeight: { xs: "35px", md: "68px" },
          }}
        >
          Meet our drivers
        </Typography>

        <Container maxWidth={"md"}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              textAlign: "center",
              // fontSize: { xs: "26px", md: "36px" },
              lineHeight: { xs: "26px", md: "30px" },
            }}
          >
            We employ only the best and treat them fairly. All our Santorini Taxi drivers speak
            English, are professionally trained, and know the areas they work in
            like the back of their hands. Whatever the occasion, you can rest
            assured that we will get you where you need to be on time!
          </Typography>
        </Container>

        {/* Slider */}
        <Box sx={{ my: 1, p: { xs: 2, md: 0 }, pb: { xs: 6, md: 0 } }}>
          <Slider {...settings}>
            <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    minHeight: { xs: 224, md: 345 },
                    backgroundImage: `url(${NIKOS.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "05% 50%",
                    borderRadius: 2,
                    mb: 3,
                  }}
                ></Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "16px", md: "24px" },
                    mb: 2,
                  }}
                >
                  Nikos | Santorini
                </Typography>
              </Box>
            </Stack>
            <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    minHeight: { xs: 224, md: 345 },
                    backgroundImage: `url(${COSTAS.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 2,
                    mb: 3,
                  }}
                ></Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "16px", md: "24px" },
                    mb: 2,
                  }}
                >
                  Costas | Santorini
                </Typography>
              </Box>
            </Stack>
            <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    minHeight: { xs: 224, md: 345 },
                    backgroundImage: `url(${ALEX.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50% 20%",
                    borderRadius: 2,
                    mb: 3,
                  }}
                ></Box>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "16px", md: "24px" },
                    mb: 2,
                  }}
                >
                  Alex | Santorini
                </Typography>
              </Box>
            </Stack>
          </Slider>
        </Box>
        {/* ./Slider */}
      </Container>
    </div>
  );
}

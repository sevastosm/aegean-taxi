"use client";
import { useParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// components
import bg from "public/assets/tours-header.png";
import MYKONOS from "public/assets/tours-mykonos.png";
import SANTORINI from "public/assets/tours-santorini.jpg";

export default function ToursHeader() {
  const params = useParams();
  let city;
  let cover = bg;

  if (params.location) {
    city = params.location.charAt(0).toUpperCase() + params.location.slice(1);

    switch (city) {
      case "Athens":
        cover = bg;
        break;
      case "Mykonos":
        cover = MYKONOS;
        break;
      case "Santorini":
        cover = SANTORINI;
    }
  }

  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: { xs: "none", md: `url(${cover.src})` },
            backgroundSize: "cover",
            minHeight: "436px",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "258px",
              backgroundImage: `url(${cover.src})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 0",
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              flexDirection: { xs: "center", md: "row-reverse" },
            }}
          >
            <Box
              sx={{
                minHeight: { xs: "auto", md: "280px" },
                background: "#FFFFFF",
                width: { xs: "100%", md: 420 },
                top: { xs: 0, md: 40 },
                right: { xs: 0, md: 90 },
                position: "relative",
                p: 2,
              }}
            >
              <Typography
                component="h1"
                variant="h1"
                gutterBottom
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: { xs: "30px", md: "40px" },
                  // lineHeight: { xs: "45px", md: "60px" },
                }}
              >
                {city ? city : "Curated"} tours and
                <br /> experiences
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "18px", md: "24px" },
                  lineHeight: { xs: "31px", md: "40px" },
                }}
              >
                Select one of our tours to explore
                <br /> main sites, or customize your own
                <br /> experience
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

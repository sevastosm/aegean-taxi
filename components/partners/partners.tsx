"use client";

// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

import bg from "public/assets/partner-header.jpg";

import GridImages from "./GridImages/gridImages";
import WhyUs from "./whyUs";
import Solutions from "./solutions";
import Services from "./services";
import CaseStudies from "./case-studies";

export default function PartnersPage() {
  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: 200, md: 400 },
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: 18, md: 36 },
              color: "#fff",
              mt: { xs: 10, md: 22 },
            }}
          >
            We solve your transportation needs.
            <br />
            You earn!
          </Typography>
          {/* <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "230px",
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "0 60%",
            }}
          ></Box> */}
        </Grid>
      </Grid>

      <GridImages />
      <WhyUs />
      <Solutions />
      <Services />
      <CaseStudies />
    </Container>
  );
}

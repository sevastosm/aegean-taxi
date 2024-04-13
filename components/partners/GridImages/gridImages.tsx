"use client";

// mui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import GridBox from "./GridBox/gridBox";
import hotel from "/public/assets/partner-images/Hotel.svg";
import hotelHover from "/public/assets/partner-images/hotel.png";
import travelAgencies from "/public/assets/partner-images/EarthTravelAgency.svg";
import travelAgenciesHover from "/public/assets/partner-images/travel_agency.png";
import airlines from "/public/assets/partner-images/desginedfor3.png";
import airlinesHover from "/public/assets/partner-images/airlines.png";
import concierge from "/public/assets/partner-images/ConciergeKeys.svg";
import conciergeHover from "/public/assets/partner-images/concierge.png";
import auto from "/public/assets/partner-images/car_AutoIndustry.svg";
import autoHover from "/public/assets/partner-images/auto_industry.png";
import food from "/public/assets/partner-images/Food&Beverage.svg";
import foodHover from "/public/assets/partner-images/food_beverage.png";
import health from "/public/assets/partner-images/HealthCare.svg";
import healthHover from "/public/assets/partner-images/healthcare.png";
import events from "/public/assets/partner-images/Events.svg";
import eventsHover from "/public/assets/partner-images/events.png";
import corporate from "/public/assets/partner-images/Corporate.svg";
import corporateHover from "/public/assets/partner-images/corporate.png";
import schools from "/public/assets/partner-images/School.svg";
import schoolsHover from "/public/assets/partner-images/school.png";

export default function GridImages() {
  return (
    <Container maxWidth={"md"}>
      <Typography
        component="h2"
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 400,
          fontSize: { xs: 16, md: 28 },
          mt: 2,
        }}
      >
        An all in one solution that{" "}
        <strong>helps you provide ground transportation</strong> to clients and
        employees. <strong>Designed for</strong>:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          //   mt: 3,
        }}
      >
        <GridBox icon={hotel} title="Hotels & ΒnB" hoverImg={hotelHover} />
        <GridBox
          icon={travelAgencies}
          title="Travel Agencies"
          hoverImg={travelAgenciesHover}
        />
        <GridBox icon={airlines} title="Airlines" hoverImg={airlinesHover} />
        <GridBox icon={concierge} title="Concierge" hoverImg={conciergeHover} />
        <GridBox icon={auto} title="Auto Industry" hoverImg={autoHover} />
        <GridBox icon={food} title="Food & Beverage" hoverImg={foodHover} />
        <GridBox icon={health} title="Healthcare" hoverImg={healthHover} />
        <GridBox icon={events} title="Events" hoverImg={eventsHover} />
        <GridBox icon={corporate} title="Corporate" hoverImg={corporateHover} />
        <GridBox icon={schools} title="Schools" hoverImg={schoolsHover} />
      </Box>
    </Container>
  );
}

"use client";

// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

// assets
import ATHENS from "public/assets/athens-airport.webp";
import TAXI from "public/assets/taxi-guide.webp";
import TRANSPORT from "public/assets/transport-guide.webp";

export default function MykonosGuide() {
  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h2"
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          lineHeight: { xs: "84px", md: "68px" },
          py: { xs: 1, md: 3 },
        }}
      >
        Airport Guide
      </Typography>
      {/* List */}

      <Stack spacing={{ xs: 2, md: 3.2 }}>
        {/* Services */}
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              backgroundImage: `url(${ATHENS.src})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              minHeight: { xs: 238, md: 300 },
            }}
          ></Grid>
          <Grid item xs={12} md={5} sx={{ p: { xs: 0, md: 3 } }}>
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: { xs: "40px", md: "38px" },
              }}
            >
              Airport services
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Private Flights Lounge <br /> Business Lounges
              <br /> ATMs <br />
              Currency Exchange
              <br /> Car Rental <br />
              Internet Access (WiFi) <br />
              Shops, Restaurant & Cafes <br />
              Hellenic Duty Free Shops
            </Typography>
          </Grid>
        </Grid>
        {/* ./Services */}

        {/* Taxi */}
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              backgroundImage: `url(${TAXI.src})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              minHeight: { xs: 350, md: 526 },
            }}
          ></Grid>
          <Grid item xs={12} md={5} sx={{ p: { xs: 0, md: 3 } }}>
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: { xs: "40px", md: "38px" },
              }}
            >
              Taxi Information
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Mykonos taxis use taximeters to calculate most journeys in the
              city, except for trips originating from the airport or port, where
              you may be able to negotiate a set-rate fee. The rates for taxi
              services in Mykonos are regulated and closely monitored, making
              them a trustworthy choice for transportation.
              <br />
              <br />
              Here are the typical taxi fare rates in Mykonos:
              <br />
              <br />
              Base fare - €1.14
              <br />
              Tariff 1 price per km (from 05:00 to 24:00) - €0.65
              <br />
              Tariff 2 price per km (from 24:00 to 05:00) - €1.14
              <br />
              Minimum charge - €3.27
              <br />
              Keep in mind that additional charges may apply for excess baggage
              weighing over 10kg (€0.38), waiting time (€10.46/hour), airport
              pick-up (€2.51), and port pick-up (€1.04).
              <br />
            </Typography>
          </Grid>
        </Grid>
        {/* ./Taxi */}

        {/* Transportation */}
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              backgroundImage: `url(${TRANSPORT.src})`,
              backgroundSize: "cover",
              minHeight: { xs: 450, md: 675 },
            }}
          ></Grid>
          <Grid item xs={12} md={5} sx={{ p: { xs: 0, md: 3 } }}>
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: { xs: "40px", md: "38px" },
              }}
            >
              Public Transportation Information
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Metro
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Bus service is provided between the Airport and the city of
              Mykonos (Chora) and other destinations. The bus stop is located in
              front of the terminal building (Arrivals area). Tickets can be
              purchased by the bus driver. For more Information please contact:
              <a href="http://www.mykonosbus.com/index.en.html" target="_blank">
                http://www.mykonosbus.com/index.en.html
              </a>
            </Typography>
          </Grid>
        </Grid>
        {/* ./Transportation */}
      </Stack>
      {/* ./List */}
    </Container>
  );
}

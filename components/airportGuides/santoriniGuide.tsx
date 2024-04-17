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

export default function SantoriniGuide() {
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
              First Aid
              <br />
              ATMs
              <br />
              Currency Exchange
              <br />
              Car Rental
              <br />
              Internet Access (WiFi)
              <br />
              Charging mobile devices
              <br />
              Shops, Restaurant & Cafes
              <br />
              Hellenic Duty Free Shops
              <br />
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
              If you&apos;re planning a trip to Santorini, it&apos;s important
              to know that taxis are a rare sight on the island. With only 25
              taxis operating in total, it can be quite challenging to secure a
              ride when you need one. However, don&apos;t let this discourage
              you from exploring the island in comfort and convenience.
              <br />
              <br />
              Here are some tips to help you get around with ease:
              <br />
              1. Hail a taxi on the street - this is your best option as taxis
              are almost never waiting at the Fira taxi station. Keep an eye out
              for them while you&apos;re out and about and flag them down when
              you see one.
              <br />
              2. Head to the main taxi stand - located just below Fira main
              square, this is where you&apos;re most likely to find a taxi.
              However, be prepared to wait in line as other travelers are also
              vying for a ride.
              <br />
              3. Look for taxis at the airport - while there are only a few
              taxis lined up just outside of Arrivals, it&apos;s worth checking
              out if you&apos;re in need of a ride upon arrival.
              <br />
              4. Call to book in advance - if you prefer to plan ahead, you can
              call +30 22860 22555 to book a taxi. Keep in mind, however, that
              due to the low number of taxis on the island, this option may take
              longer than hailing one from the street.
              <br />
              Remember, taxi fares on Santorini start at a minimum of 5 euros,
              and the cost will depend on your destination. Additionally, there
              may be extra charges for luggage or for having a taxi come to your
              hotel.
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
              Bus service is provided between the Airport and Fira. The bus stop
              is located between of the departures building. Tickets can be
              purchased by the bus conductor.
              <br />
              <br />
              More information may be found at the following link:
              <a
                href="https://www.ktel-santorini.gr/index.php/en/"
                target="_blank"
              >
                https://www.ktel-santorini.gr/index.php/en/
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

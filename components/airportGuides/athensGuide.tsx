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

export default function AthensGuide() {
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
              Baggage Services
              <br />
              Children Facilities
              <br />
              Health Facilities
              <br />
              Hospitality Services
              <br />
              Business Lounges
              <br />
              Banks, ATMs & Post
              <br />
              Currency Exchange
              <br />
              Air Transport Services
              <br />
              Art & Culture
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
              {`With over 13,000 taxis in the city, hailing a ride is a breeze. Whether you're in a rush or want to explore the city in comfort, choosing an Athens taxi is a fantastic option.

Athens has a wide range of regulated taxi companies, so you can be sure of a safe and reliable service wherever you go. You can easily flag down a taxi on the street, call a radiotaxi, or head to one of the many designated taxi ranks located throughout the city and popular tourist spots.

All taxis in Athens operate using a taximeter, which calculates your fare based on the distance you travel. During the daytime (05:00 to 24:00), the rate is €0.74 per kilometer, while at night (24:00 to 05:00), the rate is €1.29 per kilometer. There's also a base fare of €1.29, plus extra charges for things like luggage over 10kg, airport pickups, and waiting time.

Whether you're a local or a tourist, taking an Athens taxi is a convenient and affordable way to get around the city. So next time you're in need of transportation, consider hailing a taxi for a hassle-free ride.`}
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
              {`The airport is accessible via Metro's Line 3 (Blue Line):
              “Municipal Theatre” (Piraeus) - Airport`}
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
              SUBURBAN RAIL
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
              Athens International Airport is connected via the Suburban Rail
              with: <br />
              Piraeus via Larissis Station
              <br /> Ano Liosia Kiato Aigio (via Kiato)
              <br /> For further information regarding timetables and
              connections, please call 14511 or consult the relevant{" "}
              <a
                href="https://www.hellenictrain.gr/en/suburban-railway"
                target="_blank"
              >
                link
              </a>
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
              BUS SERVICES (OSY)
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
              Four bus routes connect directly Athens and Piraeus with the
              airport. All buses set down passengers at the Departures Level and
              depart from the Arrivals Level, between Exits 4 and 5.
              <br /> For further information, please call 11 185.
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
              REGIONAL BUSES - KTEL EXPRESS SERVICE
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
              Five regional buses operate at the airport. All buses set down
              passengers at the Departures Level and depart from the Arrivals
              Level, between Exits 2 and 3, opposite the Airport Hotel
              (Sofitel).
              <br />
              For further information regarding travelling by Regional Buses to
              other major cities please call:
              <br />
              KTEL Kifissou Bus Station:tel: +30 210 5124910, +30 210 5124911,
              +30 210 5132601
              <br />
              KTEL Liosion Bus Station: tel: +30 210 8317186
            </Typography>
          </Grid>
        </Grid>
        {/* ./Transportation */}
      </Stack>
      {/* ./List */}
    </Container>
  );
}

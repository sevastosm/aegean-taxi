"use client";
import { useParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

// components
import BookingFormLanding from "@/components/requestRideForm/BookingFormLanding";
import DownloadAppButton from "components/downloadAppButton";

import bg from "public/assets/taxi-header.webp";
import Athens from "public/assets/taxi-athens.webp";
import Mykonos from "public/assets/taxi-mykonos.webp";
import Santorini from "public/assets/taxi-santorini.webp";
import Corfu from "public/assets/taxi-corfu.webp";
import Rhodes from "public/assets/taxi-rhodes.webp";
import Milos from "public/assets/taxi-locations/taxi-milos.webp";
import Bodrum from "public/assets/taxi-locations/taxi-bodrum.webp";
import Tinos from "public/assets/taxi-locations/taxi-tinos.webp";
import Paros from "public/assets/taxi-locations/taxi-paros.webp";
import Naxos from "public/assets/taxi-locations/taxi-naxos.webp";
import Kos from "public/assets/taxi-locations/taxi-kos.webp";
import Heraklion from "public/assets/taxi-locations/taxi-heraklion.webp";
import Chalkidiki from "public/assets/taxi-locations/taxi-chalkidiki.webp";
import Kefalonia from "public/assets/taxi-locations/taxi-kefalonia.webp";
import Kea from "public/assets/taxi-locations/taxi-kea.webp";

import { locationDetails } from "@/utils/locationDetails";
import { SxImage } from "./ui/SxImage";
import Link from "next/link";

export default function TaxiHeader() {
  const params: any = useParams();
  let title = `Your Taxi App in Greece`; // original: `Your Taxi App <br />in Greece`
  let subHeader = ` in Greece`;
  let atlText = "Taxi Transfers";

  let cover = bg;
  atlText = locationDetails.taxi_locations.alt_header;

  const data = locationDetails[params.location];

  if (params.location) {
    atlText = locationDetails.taxi_locations[params.location].alt_header;
    console.log("params.location", params.location);

    const city = (
      params.location.charAt(0).toUpperCase() + params.location.slice(1)
    ).replace("-taxi-app", "");
    title = `Your ${city} Taxi App`;
    subHeader = `  in ${city}`;
    switch (city) {
      case "Athens":
        cover = Athens;
        break;
      case "Mykonos":
        cover = Mykonos;
        break;
      case "Santorini":
        cover = Santorini;
        break;
      case "Corfu":
        cover = Corfu;
        break;
      case "Rhodes":
        cover = Rhodes;
        break;
      case "Milos":
        cover = Milos;
        break;
      case "Bodrum":
        cover = Bodrum;
        break;
      case "Tinos":
        cover = Tinos;
        break;
      case "Paros":
        cover = Paros;
        break;
      case "Naxos":
        cover = Naxos;
        break;
      case "Kos":
        cover = Kos;
        break;
      case "Heraklion":
        cover = Heraklion;
        break;
      case "Chalkidiki":
        cover = Chalkidiki;
        break;
      case "Kefalonia":
        cover = Kefalonia;
        break;
      case "Kea":
        cover = Kea;
        break;
    }
  }

  const locationUrl = params.location ? `?location=${params.location}` : "";

  // Your Athens Taxi App
  // The easiest way to book your taxi and transfer in Athens
  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          {/*<Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mt: 6,
              display: { xs: "none", md: "block" },
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          ></Typography>
          <Typography
            component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 400,
              mt: 1,
              display: { xs: "block", md: "none" },
            }}
          >
            {title.replaceAll("<br />", "")}
          </Typography>*/}

          <Typography
            component="h1"
            gutterBottom
            sx={{
              fontWeight: { xs: "700", md: "700" },
              fontSize: { xs: "1.7rem", md: "3.75rem" },
              lineHeight: { xs: "1.5", md: "1.2" },
              // display: { xs: "block", md: "none" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "0px", md: "48px" },
            }}
          >
            {title}
          </Typography>

          <Typography
            component="p"
            variant="h5"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            The easiest way to book your taxi <br /> and transfer
            {subHeader}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            position: "relative",
          }}
        >
          <Link
            href={`/book-online/${locationUrl}`}
            className="absolute w-full h-[62%] md:h-full z-10 cursor-pointer left-0 top-0"
          ></Link>
          <SxImage
            src={cover.src}
            width={200}
            height={200}
            alt={atlText}
            sx={{
              width: "100%",
              height: { xs: "200px", md: "100%" },
              // backgroundColor: "primary.dark",
              objectFit: { xs: "cover", md: "cover" },
              objectPosition: { xs: "0 50%", md: "0 50%" },
              position: { xs: "relative", md: "absolute" },
            }}
          />

          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "block", md: "flex" },
              minHeight: { xs: "auto", md: "595px" },
              position: "relative",
            }}
          >
            <BookingFormLanding />
          </Box>
          {/* Download the app Button */}
          {/* <DownloadAppButton showMd="none" showStoresMD="none" /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

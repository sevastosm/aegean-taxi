"use client";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

import at_logo_blue from "public/assets/at_logo_blue.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Google from "public/assets/google-play-badge.png";
import Apple from "public/assets/apple-badge-black.png";

export default function DownloadAppButton({
  showXs = `block`,
  showMd = `block`,
  showStoresXs = `none`,
  showStoresMD = `flex`,
}: {
  showXs?: string;
  showMd?: string;
  showStoresXs?: string;
  showStoresMD?: string;
}) {
  return (
    <>
      <a
        href="https://aegean.page.link/navigate"
        target="_blank"
        rel="nofollow"
      >
        <Box
          justifyContent="flex-start"
          alignItems="flex-start"
          display="flex"
          sx={{
            width: "100%",
            height: "105px",
            background: "#EBEBEB",
            p: 2,
            display: { xs: showXs, md: showMd },
            mb: 2,
            cursor: "pointer",
          }}
        >
          <Grid container spacing={0} sx={{ background: "#fff", p: 1 }}>
            <Grid item xs={3} md={2} sx={{ mt: 1 }}>
              <Image src={at_logo_blue} alt="Aegean" height={38} />
            </Grid>
            <Grid item xs={7} md={8} sx={{ mt: 2, textAlign: "left" }}>
              <Typography
                component="span"
                variant="body1"
                gutterBottom
                sx={{
                  lineHeight: 1,
                  mt: 0,
                }}
              >
                Download the App
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ mt: 1.5 }}>
              <ArrowRightAltIcon fontSize="large" />
            </Grid>
          </Grid>
        </Box>
      </a>

      {/* App Stores */}
      <Grid
        container
        spacing={2}
        sx={{
          pb: { xs: 6, md: 0 },
          display: { xs: showStoresXs, md: showStoresMD },
        }}
      >
        <Grid item xs={6} md={5}>
          <a
            href="https://play.google.com/store/apps/details?id=aegean.taxi.ride.app.mykonos.santorini.athens.greece.passenger"
            target="_blank"
            rel="nofollow"
          >
            <Image src={Google} height={40} alt="Google Play" />
          </a>
        </Grid>
        <Grid item xs={6} md={5}>
          <a
            href="https://apps.apple.com/app/id6447252101"
            target="_blank"
            rel="nofollow"
          >
            <Image src={Apple} height={40} alt="Apple Store" />
          </a>
        </Grid>
      </Grid>
      {/* /. App Stores */}
    </>
  );
}

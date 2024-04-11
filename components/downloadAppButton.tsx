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
import { useEffect, useState } from "react";

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
  const [windowNavigator, setNavigator] = useState<any>(null);
  function isAndroid() {
    if (windowNavigator) {
      return /Android/.test(windowNavigator.userAgent);
    }
  }

  function isIOS() {
    if (windowNavigator) {
      return (
        /iPad|iPhone|iPod/.test(windowNavigator.userAgent) && !window?.MSStream
      );
    }
  }

  useEffect(() => {
    setNavigator(navigator);
  }, []);

  const ApplicationLink = () => {
    if (isAndroid()) {
      return (
        <a
          data-baseweb="link"
          href="https://play.google.com/store/apps/details?id=aegean.taxi.ride.app.mykonos.santorini.athens.greece.passenger"
          target="_blank"
        >
          <Image
            src={Google}
            height={38}
            alt="Download the Aegean Taxi App for Android"
          />
        </a>
      );
    }
    if (isIOS()) {
      return (
        <a
          data-baseweb="link"
          href="https://apps.apple.com/app/id6447252101"
          target="_blank"
        >
          <Image
            src={Apple}
            height={38}
            alt="Download the Aegean Taxi App for iOS"
          />
        </a>
      );
    }
    return (
      <a
        data-baseweb="link"
        href="https://aegean.page.link/navigate"
        target="_blank"
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
              <Image
                src={at_logo_blue}
                alt="Download the Aegean Taxi App for Android and iOS"
                height={38}
              />
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
    );
  };

  return <ApplicationLink />;

  // return (
  //   <>
  //     <a href="https://aegean.page.link/navigate" target="_blank">
  //       <Box
  //         justifyContent="flex-start"
  //         alignItems="flex-start"
  //         display="flex"
  //         sx={{
  //           width: "100%",
  //           height: "105px",
  //           background: "#EBEBEB",
  //           p: 2,
  //           display: { xs: showXs, md: showMd },
  //           mb: 2,
  //           cursor: "pointer",
  //         }}
  //       >
  //         <Grid container spacing={0} sx={{ background: "#fff", p: 1 }}>
  //           <Grid item xs={3} md={2} sx={{ mt: 1 }}>
  //             <Image src={at_logo_blue} alt="Aegean" height={38} />
  //           </Grid>
  //           <Grid item xs={7} md={8} sx={{ mt: 2, textAlign: "left" }}>
  //             <Typography
  //               component="span"
  //               variant="body1"
  //               gutterBottom
  //               sx={{
  //                 lineHeight: 1,
  //                 mt: 0,
  //               }}
  //             >
  //               Download the App
  //             </Typography>
  //           </Grid>
  //           <Grid item xs={2} sx={{ mt: 1.5 }}>
  //             <ArrowRightAltIcon fontSize="large" />
  //           </Grid>
  //         </Grid>
  //       </Box>
  //     </a>

  //     {/* App Stores */}
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         gap: "15px",
  //         flexWrap: "wrap",
  //       }}
  //     >
  //       {isAndroid() && (
  //         <a
  //           href="https://play.google.com/store/apps/details?id=aegean.taxi.ride.app.mykonos.santorini.athens.greece.passenger"
  //           target="_blank"
  //         >
  //           <Image
  //             src={Google}
  //             height={38}
  //             alt="Download the Aegean Taxi App for Android"
  //           />
  //         </a>
  //       )}
  //       {isIOS() && (
  //         <a href="https://apps.apple.com/app/id6447252101" target="_blank">
  //           <Image
  //             src={Apple}
  //             height={38}
  //             alt="Download the Aegean Taxi App for iOS"
  //           />
  //         </a>
  //       )}
  //     </div>
  //     {/* /. App Stores */}
  //   </>
  // );
}

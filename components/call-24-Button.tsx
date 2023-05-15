"use client";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

import CALLUS from "public/assets/phone-black.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Call24Button({
  displayXS = "block",
  displayMD = "block",
}: {
  displayXS?: string;
  displayMD?: string;
}) {
  return (
    <a
      href="tel:00302152154000"
      style={{ textDecoration: "none", color: "#000" }}
    >
      <Box
        justifyContent="flex-start"
        alignItems="flex-start"
        display="flex"
        sx={{
          width: "100%",
          background: "#EBEBEB",
          p: 1.5,
          borderRadius:1,
          display: { xs: displayXS, md: displayMD },
          mb: 1,
          cursor:'pointer'
        }}
      >
        <Grid container spacing={0} sx={{ background: "#fff", p: 1 }}>
          <Grid item xs={3} md={2} sx={{ mt: 1 }}>
            <Image src={CALLUS} alt="Phone" />
          </Grid>
          <Grid item xs={7} md={8} sx={{ mt: 1, textAlign: "left" }}>
            <Typography
              component="span"
              variant="body1"
              gutterBottom
              sx={{
                lineHeight: 2.5,
                fontWeight: 700,
                mt: 0,
              }}
            >
              Call 24/7
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ mt: 1.5 }}>
            <ArrowRightAltIcon fontSize="large" />
          </Grid>
        </Grid>
      </Box>
    </a>
  );
}

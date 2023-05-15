"use client";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import S1 from "public/assets/service-1.jpg";
import S2 from "public/assets/service-2.jpg";
import S3 from "public/assets/service-3.jpg";

export default function Services() {
  return (
    <Container maxWidth={"md"}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          md={6}
          order={1}
          sx={{
            backgroundImage: `url(${S1.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: { xs: 300, md: 300 },
          }}
        ></Grid>
        <Grid item xs={12} md={6} order={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
            }}
          >
            <Box sx={{ width: 200 }}>
              <Typography variant="h6">Online Booking Engine</Typography>
              <Typography variant="body1">
                Book rides for your clients and employees. Or integrate in your
                website.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 4, md: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "right" },
              mt: { xs: "initial", md: -10 },
            }}
          >
            <Box sx={{ width: 200 }}>
              <Typography variant="h6">Reporting dashboard</Typography>
              <Typography variant="body1">
                Manage and keep track of the trips and revenues on your account,
                as well as overall company travel expenses
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 3, md: 4 }}
          sx={{
            backgroundImage: `url(${S2.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: { xs: 300, md: 300 },
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={5}
          sx={{
            backgroundImage: `url(${S3.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: { xs: 300, md: 300 },
          }}
        ></Grid>
        <Grid item xs={12} md={6} order={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
              mt: { xs: "initial", md: -12 },
              ml: { xs: "initial", md: -12 },
            }}
          >
            <Box sx={{ width: 200 }}>
              <Typography variant="h6">iPad Features</Typography>
              <Typography variant="body1">
                Price estimation. Drop off location. Driver tracking. Payment
                methods.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

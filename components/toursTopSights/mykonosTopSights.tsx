"use client";

// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// assets
import MYKONOS from "public/assets/mykonos-top-sights.jpg";

export default function MykonosTopSights() {
  return (
    <Container maxWidth={"md"}>
      <Grid container sx={{ my: 6 }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundImage: `url(${MYKONOS.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "91% 50%",
            minHeight: { xs: 268, md: 300 },
            borderRadius: 2,
          }}
        ></Grid>
        <Grid item xs={12} md={5} sx={{ p: { xs: 0, md: 3 } }}>
          <Typography
            component="div"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "26px", md: "30px" },
              lineHeight: { xs: "40px", md: "38px" },
              mt: {xs: 1, md:0}
            }}
          >
            Mykonos top sights
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 450,
              fontSize: { xs: "20px", md: "18px" },
              lineHeight: { xs: "43px", md: "45px" },
            }}
          >
            Mykonos Town (Chora)<br />
            Little Venice (Chora)<br />
            Windmills (Chora)<br />
            Delos Island<br />
            Panagia Paraportiani (Chora)<br />
            Panagia Tourliani (Ano Mera)<br />
            Paradise Beach<br />
            Super Paradise Beach<br />
            Paragka Beach<br />
            Psarou Beach<br />
            Armenistis Lighthouse<br />
            Elia Beach<br />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

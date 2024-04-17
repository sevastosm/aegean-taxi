"use client";

// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// assets
import ATHENS from "public/assets/athens-top-sights.webp";

export default function AthensTopSights() {
  return (
    <Container maxWidth={"md"}>
      <Grid container sx={{ my: 6 }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundImage: `url(${ATHENS.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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
            Athens top sights
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 450,
              fontSize: { xs: "20px", md: "18px" },
              lineHeight: { xs: "43px", md: "45px" },
            }}
          >
            Acropolis hill & Museum <br />
            Constitution Square <br />
            Panathenaic Stadium <br />
            Lycabettus Hill <br />
            Athens Trilogy <br />
            Monastiraki Square <br />
            Palak <br />
            Athens National Garden <br />
            Temple of Olympian Zeus <br />
            Zappeion Hall
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

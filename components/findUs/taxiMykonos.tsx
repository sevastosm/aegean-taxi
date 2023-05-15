"use client";

// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function TaxiMykonosFindUs() {
  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          // // lineHeight: { xs: "28px", md: "48px" },
          mt: 5,
        }}
      >
        We are local
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2087.8027816899103!2d25.346147862746122!3d37.43296992689945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2bee3ba1f6b4f%3A0xff93f41474d47c62!2sAegean%20Taxi!5e0!3m2!1sen!2sgr!4v1683193509636!5m2!1sen!2sgr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={0.5}>
            <div>
              <Typography
                component="span"
                variant="h6"
                gutterBottom
                sx={{ ml: 2, mr: 1 }}
              >
                Address:
              </Typography>
              <Typography component="span" variant="body1" gutterBottom>
                Epar.Od. Mikonou, Drafaki
              </Typography>
            </div>
            <div>
              <Typography
                component="span"
                variant="h6"
                gutterBottom
                sx={{ ml: 2, mr: 1 }}
              >
                Tel:
              </Typography>
              <Typography component="span" variant="body1" gutterBottom>
                +30 215 215 4000
              </Typography>
            </div>
            <div>
              <Typography
                component="span"
                variant="h6"
                gutterBottom
                sx={{ ml: 2, mr: 1 }}
              >
                E-mail:
              </Typography>
              <Typography component="span" variant="body1" gutterBottom>
                contact@aegeantaxi.com
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

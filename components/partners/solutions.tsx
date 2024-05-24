"use client";

// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// assets
import IMG1 from "public/assets/solutions-1.jpg";
import IMG2 from "public/assets/solutions-2.jpg";

import DvrSharpIcon from "@mui/icons-material/DvrSharp";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";

export default function Solutions() {
  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h5"
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 400,
          display: { xs: "none", md: "block" },
          fontSize: { xs: "18px", md: "28px" },
          lineHeight: { xs: "32px", md: "48px" },
          py: { xs: 1, md: 3 },
        }}
      >
        We offer 2 solutions to make it easy for you or your clients to book
        their rides.
        <br /> Register for the one that best suits your needs, or combine both for a
        high
        <br /> conversion and impact.
      </Typography>
      <Typography
        component="h5"
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 400,
          display: { xs: "block", md: "none" },
          fontSize: { xs: "18px", md: "28px" },
          lineHeight: { xs: "32px", md: "48px" },
          py: { xs: 1, md: 3 },
        }}
      >
        We offer 2 solutions to make it easy for you or your clients to book
        their rides. Pick the one that best suits your needs, or combine both
        for a high conversion and impact.
      </Typography>
      {/* List */}

      <Stack spacing={{ xs: 2, md: 3.2 }}>
        {/* Solution */}
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundImage: `url(${IMG1.src})`,
              // backgroundSize: "cover",
              // backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              minHeight: { xs: 238, md: 300 },
            }}
          ></Grid>
          <Grid item xs={12} md={5} sx={{ pt: 0, pl: { xs: 0, md: 3 } }}>
            <Typography
              // component="span"
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: { xs: "40px", md: "38px" },
                mt: 0,
              }}
            >
              1. Online Booking
            </Typography>
            <Typography variant="caption" gutterBottom>
              An efficient way to book and manage trips
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mt: 2,
              }}
            >
              Aegean Portal
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
              }}
            >
              Provide customers or clients with a premium door-to-door transport
              by requesting a ride on their behalf through your company account.
              Book trips for now or later and charge to your account or let your
              clients pay on board.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mt: 2,
              }}
            >
              Website Integration
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
              }}
            >
              Integrate our booking engine directly to your website, and let
              clients book their rides at any step of the checkout process. For
              more simplicity, include our link in your confirmation email.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mt: 3.5,
              }}
            >
              Benefits
            </Typography>

            <Grid container spacing={0}>
              <Grid item xs={1} md={1}>
                <DvrSharpIcon />
              </Grid>
              <Grid item xs={6} md={6}>
                Easy to manage
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid item xs={1} md={1}>
                <DescriptionSharpIcon />
              </Grid>
              <Grid item xs={6} md={6}>
                Transparent reporting
              </Grid>
            </Grid>

            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                mt: 2,
              }}
            >
              Ideal for:{" "}
              <strong>
                Hotels. Travel Agents. Airlines. Concierge. Restaurants.
                Healthcare. Events. Corporate.
              </strong>
            </Typography>
          </Grid>
        </Grid>
        {/* ./Solution */}

        {/* Solution 2 */}
        <Grid container sx={{background: "#f9f9f9", p: {xs:1, md: 0}, pt: 6}}>
          <Grid item order={{xs:2, md:1}} xs={12} md={6} sx={{ p: { xs: 0, md: 3 } }}>
            <Typography
              // component="span"
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: { xs: "40px", md: "38px" },
                mt: 0,
              }}
            >
              2. Hardware Solution
            </Typography>
            <Typography variant="caption" gutterBottom>
              Free ipad, pre loaded with our app. A gift from us to you
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mt: 2,
              }}
            >
              Fixed installation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
              }}
            >
              Usually placed it in a visible location it offers a self service
              solution to clients. Fully autonomous solution for high traffic
              locations. All you need is a power plug and internet.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mt: 2,
              }}
            >
              No strings attached
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
              }}
            >
              Keep your ipad free, and hand it over to your clients when they
              want to get a ride, or help them to make their booking.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mt: 3.5,
              }}
            >
              Benefits
            </Typography>

            <Grid container spacing={0}>
              <Grid item xs={1} md={1}>
                <CachedSharpIcon />
              </Grid>
              <Grid item xs={6} md={6}>
                Self sufficient
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid item xs={1} md={1}>
                <TuneSharpIcon />
              </Grid>
              <Grid item xs={6} md={6}>
                Brand customization
              </Grid>
            </Grid>

            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                mt: 2,
              }}
            >
              Ideal for:{" "}
              <strong>
                Hotels. Travel Agents. Airlines. Concierge. Restaurants.
                Healthcare. Events. Corporate.
              </strong>
            </Typography>
          </Grid>
          <Grid
            item
            order={{xs:1, md:2}}
            xs={12}
            md={6}
            sx={{
              backgroundImage: `url(${IMG2.src})`,
              // backgroundSize: "cover",
              // backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              minHeight: { xs: 350, md: 526 },
            }}
          ></Grid>
        </Grid>
        {/* ./Solution 2 */}
      </Stack>
      {/* ./List */}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', background: "#f9f9f9", pb: {xs: 3, md:6},pr:{xs:0, md:6} }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "unset" }}
          component={Link}
          onClick={(e) => {
            window.location.href = `mailto:\u0063\u006f\u006e\u0074\u0061\u0063\u0074\u0040\u0061\u0065\u0067\u0065\u0061\u006e\u0074\u0061\u0078\u0069\u002e\u0063\u006f\u006d\u003f\u0073\u0075\u0062\u006a\u0065\u0063\u0074\u003d\u0041\u0065\u0067\u0065\u0061\u006e\u0020\u0043\u006f\u006e\u0074\u0061\u0063\u0074`;
            e.preventDefault();
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

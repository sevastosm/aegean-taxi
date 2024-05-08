"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

// MUI
import { Link as MUILink } from "@mui/material";
import { Phone } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid"; // Grid version 1
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// components
import logo_white from "public/assets/AT_White-logo.webp";
import Google from "public/assets/google-play-badge.webp";
import Apple from "public/assets/apple-badge-black.webp";
import Instagram from "public/assets/instagram.webp";
import Facebook from "public/assets/facebook.webp";
import Linkedin from "public/assets/linkedin.webp";
import Twitter from "public/assets/twitter.webp";
import whatsApp from "public/assets/whatsapp_btn.svg";
import phoneIcon from "public/assets/phone-call-icon.svg";
import { locationDetails } from "@/utils/locationDetails";

export default function FooterLayout() {
  const pathname = usePathname();

  const showWhatsAppButton = pathname === "/book-online/" ? "none" : "initial";
  const [showCookiesBanner, setShowCookiesBanner] = useState(true);

  const getCookieValue = (cname: string) => {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  useEffect(() => {
    const hasCookie = getCookieValue("aegeanShowCookies");
    if (hasCookie) {
      setShowCookiesBanner(!hasCookie);
    }
  }, []);

  const hideCookiesBanner = () => {
    setShowCookiesBanner(false);
    document.cookie = "aegeanShowCookies=false";
  };

  const LinkItems = () => (
    <>
      {Object.values(locationDetails.taxi_locations).map(
        (innerObject: any, i) =>
          innerObject.footer?.link && (
            <ListItem key={i} sx={{ pl: 0 }}>
              <MUILink
                underline="none"
                color="#fff"
                href={innerObject.footer.link}
                component={NextLink}
                rel="canonical"
                variant="body1"
              >
                {innerObject.footer.name}
              </MUILink>
            </ListItem>
          )
      )}
    </>
  );

  const LinkItemsAirport = () => (
    <>
      {Object.values(locationDetails.airports).map(
        (innerObject: any, i) =>
          innerObject.footer?.link && (
            <ListItem key={i} sx={{ pl: 0 }}>
              <MUILink
                underline="none"
                color="#fff"
                href={innerObject.footer.link}
                component={NextLink}
                rel="canonical"
                variant="body1"
              >
                {innerObject.footer.name}
              </MUILink>
            </ListItem>
          )
      )}
    </>
  );

  return (
    <footer className="footer">
      <Container maxWidth={"lg"} sx={{ pt: 4, zIndex: 9999 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <Image src={logo_white} alt="Aegean logo" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Links */}
            <Grid container spacing={0}>
              <Grid item xs={12} md={4}>
                <Typography
                  component={"span"}
                  variant="h6"
                  sx={{ borderBottom: "2px #fff solid" }}
                >
                  Sitemap
                </Typography>
                <List>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/taxi"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Taxi App
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/airport-transfers"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Airport Transfers
                    </MUILink>
                  </ListItem>

                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/tours"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Tours
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/about-us"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      About us
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/partners"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Partners
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/book-online"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Book Online
                    </MUILink>
                  </ListItem>
                </List>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography
                  component={"span"}
                  variant="h6"
                  sx={{ borderBottom: "2px #fff solid" }}
                >
                  Locations
                </Typography>
                <List>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/taxi/athens-taxi-app/"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Athens
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/taxi/mykonos-taxi-app/"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Mykonos
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/taxi/santorini-taxi-app/"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Santorini
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/taxi/corfu-taxi-app/"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Corfu
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/taxi/rhodes-taxi-app/"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      Rhodes
                    </MUILink>
                  </ListItem>
                  <LinkItems />
                </List>
              </Grid>
              {/* AIRPORTS */}
              <Grid item xs={12} md={4}>
                <Typography
                  component={"span"}
                  variant="h6"
                  sx={{ borderBottom: "2px #fff solid" }}
                >
                  Airports
                </Typography>
                <List>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/airport-transfers/athens/"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      ATH
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/airport-transfers/mykonos/"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      JMK
                    </MUILink>
                  </ListItem>
                  <ListItem sx={{ pl: 0 }}>
                    <MUILink
                      underline="none"
                      color="#fff"
                      href="/airport-transfers/santorini/"
                      component={NextLink}
                      rel="canonical"
                      variant="body1"
                    >
                      JTR
                    </MUILink>
                  </ListItem>
                  <LinkItemsAirport />
                </List>
              </Grid>
            </Grid>
            {/* /. Links */}
          </Grid>
          <Grid item xs={12} md={3}>
            {/* Buttons */}
            <Button
              variant="contained"
              component={MUILink}
              color="secondary"
              sx={{ textTransform: "unset" }}
              startIcon={<EmailIcon />}
              size="large"
              fullWidth
              onClick={(e) => {
                window.location.href = `mailto:\u0063\u006f\u006e\u0074\u0061\u0063\u0074\u0040\u0061\u0065\u0067\u0065\u0061\u006e\u0074\u0061\u0078\u0069\u002e\u0063\u006f\u006d\u003f\u0073\u0075\u0062\u006a\u0065\u0063\u0074\u003d\u0041\u0065\u0067\u0065\u0061\u006e\u0020\u0043\u006f\u006e\u0074\u0061\u0063\u0074`;
                e.preventDefault();
              }}
            >
              Contact Us
            </Button>

            <Button
              variant="contained"
              component={MUILink}
              color="secondary"
              sx={{ mt: 2 }}
              startIcon={<Phone />}
              size="large"
              fullWidth
              href="tel:00302152154000"
            >
              +30 215 215 4000
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Divider
        variant="fullWidth"
        sx={{ borderColor: "rgba(255, 255, 255, 0.15);", my: 4 }}
      />
      <Container maxWidth={"lg"} sx={{ pb: { xs: 0, md: 2 } }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3} order={{ xs: 2, md: 1 }}>
            <Typography
              variant="body1"
              sx={{ opacity: "50%", my: { xs: 4, md: 0 } }}
            >
              The best solution for all your transportation needs
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 3, md: 2 }}>
            {/* App Stores */}
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <a
                  data-baseweb="link"
                  href="https://play.google.com/store/apps/details?id=aegean.taxi.ride.app.mykonos.santorini.athens.greece.passenger"
                  target="_blank"
                >
                  <Image
                    src={Google}
                    height={50}
                    alt="Download the Aegean Taxi App for Android"
                  />
                </a>
              </Grid>
              <Grid item xs={6} md={4}>
                <a
                  data-baseweb="link"
                  href="https://apps.apple.com/app/id6447252101"
                  target="_blank"
                >
                  <Image
                    src={Apple}
                    height={50}
                    alt="Download the Aegean Taxi App for iOS"
                  />
                </a>
              </Grid>
            </Grid>
            {/* /. App Stores */}
          </Grid>
          <Grid item xs={12} md={3} order={{ xs: 1, md: 3 }}>
            {/* Social */}
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                <a
                  href="https://www.facebook.com/AegeanTaxiApp"
                  target="_blank"
                  rel="nofollow"
                >
                  <Image src={Facebook} alt="Facebook" />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://twitter.com/AegeanTaxi"
                  target="_blank"
                  rel="nofollow"
                >
                  <Image src={Twitter} alt="Twitter" />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.instagram.com/aegeantaxi.app/"
                  target="_blank"
                  rel="nofollow"
                >
                  <Image src={Instagram} alt="Aegean taxi instagram" />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/company/aegean-taxi/"
                  target="_blank"
                  rel="nofollow"
                >
                  <Image src={Linkedin} alt="Linkedin" />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider
        variant="fullWidth"
        sx={{ borderColor: "rgba(255, 255, 255, 0.15);", my: 2 }}
      />
      <Container maxWidth={"lg"} sx={{ pb: { xs: 10, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 1,
            m: 1,
          }}
        >
          <Stack spacing={2} direction="row">
            <MUILink
              underline="none"
              color="#fff"
              href="/privacy"
              component={NextLink}
              rel="canonical"
              variant="body1"
            >
              Privacy Policy
            </MUILink>
            <Typography variant="body1">|</Typography>
            <MUILink
              underline="none"
              color="#fff"
              href="/terms"
              component={NextLink}
              rel="canonical"
              variant="body1"
            >
              Terms & Conditions
            </MUILink>
          </Stack>
        </Box>
      </Container>
      {/* Floating whatsapp hideOnMobile*/}
      <Box
        className="no-gutter watchAppBottom"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          //flexDirection: { xs: "row", md: "row-reverse" },

          textAlign: "center",
          // right: { xs: "30%", md: 10 },
          position: "fixed" /* Fixed/sticky position */,
          bottom: showCookiesBanner
            ? { xs: 50, md: 40 }
            : 0 /* Place the button at the bottom of the page */,
          /* // right: 30px, /* Place the button 30px from the right */
          zIndex: 99980 /* Make sure it does not overlap */,
          border: "none" /* Remove borders */,
          outline: "none" /* Remove outline */,
          p: 1,
        }}
      >
        {/* <a href="tel:+306943829494" className="">
          <Image src={phoneIcon} width="46" height="38" alt="Call us" />
        </a> */}
        <a
          style={{ display: "flex" }}
          href="https://wa.me/+306943829494"
          target="_blank"
          className="mr-4 watchAppBottom watchApp"
        >
          <Image src={whatsApp} height="45" alt="Message us on WhatsApp" />
        </a>
      </Box>

      {showCookiesBanner && (
        <Alert
          sx={{
            position: { xs: "relative", md: "fixed" },
            width: "100%",
            whiteSpace: "nowrap",
            bottom: 0,
            zIndex: 99999,
          }}
          severity="info"
          onClose={hideCookiesBanner}
        >
          We use cookies to ensure that we give you the best experience on our
          website. By selecting to close this alert, you are agreeing to
          allowing this site to use 3rd party cookies.
        </Alert>
      )}
    </footer>
  );
}

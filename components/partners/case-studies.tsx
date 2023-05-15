"use client";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

// slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//MUI
import ATHENS from "public/assets/cs-carAthens.jpg";
import CATHENS from "public/assets/cs-conciergeAthens.jpg";
import MYKONOS from "public/assets/cs-mykonos.jpg";
import SANTORINI from "public/assets/cs-santorini.jpg";
import SHIPPING from "public/assets/cs-shippingCompany.jpg";
import TRAVEL from "public/assets/cs-travelAgent.jpg";

export default function CaseStudies() {
  let settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 3,
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "30",
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  return (
    <Container maxWidth={"lg"} sx={{ py: 8, background: "#f9f9f9" }}>
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          // lineHeight: { xs: "28px", md: "48px" },
        }}
      >
        Case Studies
      </Typography>

      {/* Slider */}
      <Box sx={{ my: 5, p: { xs: 2, md: 0 } }}>
        <Slider {...settings}>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <Paper>
              <Box sx={{ p: 2, minHeight: {xs:540, md:470} }}>
                <Typography
                  component={"div"}
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    fontSize: {xs:18, md:24},
                    textAlign: "left",
                  }}
                >
                  Hotel<br/> in Mykonos
                </Typography>
                <Box
                  sx={{
                    minHeight: { xs: 100, md: 142 },
                    backgroundImage: `url(${MYKONOS.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mb: 3,
                    borderRadius: 2,
                  }}
                ></Box>

                <Box sx={{ textAlign: "left", minHeight: {xs:250, md:150} }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 300,
                    }}
                  >
                    iPad installation
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 300,
                      mb: 0,
                    }}
                  >
                    Impact:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      mt: 0,
                    }}
                  >
                    - Decreased average wait time from 30 mins to 15.
                    <br />
                    - Decreased Av. Ride cost from 25 to 20
                    <br />- Saved on average 2 hours/day from employees time
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    mt: 3,
                    lineHeight: 3,
                    borderBottom: `2px solid #000`,
                    width: "75px",
                  }}
                >
                  Source coming soon
                </Typography>
              </Box>
            </Paper>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <Paper>
              <Box sx={{ p: 2, minHeight: {xs:540, md:470} }}>
                <Typography
                  component={"div"}
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    fontSize: {xs:18, md:24},
                    textAlign: "left",
                  }}
                >
                  Car testing facility<br/> in Athens
                </Typography>
                <Box
                  sx={{
                    minHeight: { xs: 100, md: 142 },
                    backgroundImage: `url(${ATHENS.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mb: 3,
                    borderRadius: 2,
                  }}
                ></Box>

                <Box sx={{ textAlign: "left", minHeight: {xs:250, md:150} }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 300,
                    }}
                  >
                    Web booking by staff
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 300,
                      mb: 0,
                    }}
                  >
                    Impact:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      mt: 0,
                    }}
                  >
                    - Decreased testing time from 45 to 30 mins. <br />
                    - Decrease transport costs from 15 per car to 9.
                    <br />- Increased customer loyalty and referrals
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    mt: 3,
                    lineHeight: 3,
                    borderBottom: `2px solid #000`,
                    width: "75px",
                  }}
                >
                  Source coming soon
                </Typography>
              </Box>
            </Paper>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <Paper>
              <Box sx={{ p: 2, minHeight: {xs:540, md:470} }}>
                <Typography
                  component={"div"}
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    fontSize: {xs:18, md:24},
                    textAlign: "left",
                  }}
                >
                  Restaurant <br/>in Santorini
                </Typography>
                <Box
                  sx={{
                    minHeight: { xs: 100, md: 142 },
                    backgroundImage: `url(${SANTORINI.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mb: 3,
                    borderRadius: 2,
                  }}
                ></Box>

                <Box sx={{ textAlign: "left", minHeight: {xs:250, md:150} }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 300,
                    }}
                  >
                    iPad installation
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 300,
                      mb: 0,
                    }}
                  >
                    Impact:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      mt: 0,
                    }}
                  >
                    - Decreased cancellations by 20%. <br />
                    - No late arrivals in all transfers handled. <br />-
                    Increased customer satisfaction.
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    mt: 3,
                    lineHeight: 3,
                    borderBottom: `2px solid #000`,
                    width: "75px",
                  }}
                >
                  Source coming soon
                </Typography>
              </Box>
            </Paper>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <Paper>
              <Box sx={{ p: 2, minHeight: {xs:540, md:470} }}>
                <Typography
                  component={"div"}
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    fontSize: {xs:18, md:24},
                    textAlign: "left",
                  }}
                >
                  Shipping company<br/> in Athens
                </Typography>
                <Box
                  sx={{
                    minHeight: { xs: 100, md: 142 },
                    backgroundImage: `url(${SHIPPING.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mb: 3,
                    borderRadius: 2,
                  }}
                ></Box>

                <Box sx={{ textAlign: "left", minHeight: {xs:250, md:150} }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 300,
                    }}
                  >
                    Web booking by staff
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 300,
                      mb: 0,
                    }}
                  >
                    Impact:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      mt: 0,
                    }}
                  >
                    - Decreased transport operational costs by 30%. <br />
                    - Increased employee productivity.
                    <br />- Saved on average 4 hours/day from employees time.
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    mt: 3,
                    lineHeight: 3,
                    borderBottom: `2px solid #000`,
                    width: "75px",
                  }}
                >
                  Source coming soon
                </Typography>
              </Box>
            </Paper>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <Paper>
              <Box sx={{ p: 2, minHeight: {xs:540, md:470} }}>
                <Typography
                  component={"div"}
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    fontSize: {xs:18, md:24},
                    textAlign: "left",
                  }}
                >
                  Travel Agent<br/> in Athens
                </Typography>
                <Box
                  sx={{
                    minHeight: { xs: 100, md: 142 },
                    backgroundImage: `url(${TRAVEL.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mb: 3,
                    borderRadius: 2,
                  }}
                ></Box>

                <Box sx={{ textAlign: "left", minHeight: {xs:250, md:150} }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 300,
                    }}
                  >
                    Web booking & iPad
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 300,
                      mb: 0,
                    }}
                  >
                    Impact:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      mt: 0,
                    }}
                  >
                    - New revenue from transport added 12% in bottom line
                    <br />- Increased partner network.
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    mt: 3,
                    lineHeight: 3,
                    borderBottom: `2px solid #000`,
                    width: "75px",
                  }}
                >
                  Source coming soon
                </Typography>
              </Box>
            </Paper>
          </Stack>
          <Stack spacing={2} sx={{ textAlign: "center", p: 1 }}>
            <Paper>
              <Box sx={{ p: 2, minHeight: {xs:540, md:470} }}>
                <Typography
                  component={"div"}
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    fontSize: {xs:18, md:24},
                    textAlign: "left",
                  }}
                >
                  Concierge<br/> in Athens
                </Typography>
                <Box
                  sx={{
                    minHeight: { xs: 100, md: 142 },
                    backgroundImage: `url(${CATHENS.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mb: 3,
                    borderRadius: 2,
                  }}
                ></Box>

                <Box sx={{ textAlign: "left", minHeight: {xs:250, md:150} }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 300,
                    }}
                  >
                    iPad installation
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 300,
                      mb: 0,
                    }}
                  >
                    Impact:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      mt: 0,
                    }}
                  >
                    - Increased transport booking revenue by 70%.
                    <br />
                    - Decreased on average 2 hours/day from employees time.
                    <br />- Increased customer loyalty.
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    mt: 3,
                    lineHeight: 3,
                    borderBottom: `2px solid #000`,
                    width: "75px",
                  }}
                >
                  Source coming soon
                </Typography>
              </Box>
            </Paper>
          </Stack>
        </Slider>
      </Box>
      {/* ./Slider */}
    </Container>
  );
}

"use client";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function AirportAthensFaq() {
  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h2"
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "26px", md: "36px" },
          // lineHeight: { xs: "48px", md: "68px" },
          mt: 5,
        }}
      >
        Frequently asked questions
      </Typography>

      <Box sx={{ my: 3 }}>
        <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="booking-content"
            id="booking-header"
          >
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are taxis in Athens safe?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Yes. Taxis in Athens have a great safety record and tourists can
              feel comfortable using any of the licensed services available.
              Aegean Taxi has the highest safety score amongst transport
              comopanies, and offers added security by sharing the driver and
              ride details which are available when a booking using one of the
              suggested methods (taxi app, webapp, call, whatsapp)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Where to find a taxi in Athens?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Taxis can be found in a number of designated taxi ranks throughout
              the city, at the arrivals area on the Athens International
              Airport, and on all ports. Hailling a taxi from the street is also
              easy, one has to look at the taxi light at the top of every car,
              when this is illuminated, it means that the taxi is free and
              available for hire
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="drivers-content"
            id="drivers-header"
          >
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Is it hard to get a taxi in Athens?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              No. Getting a ride in Athens is relatively easy due to large
              availability of cars.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              How many taxis are there in Athens?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Athens has in excess of 13,000 licensed taxis available, in
              addition to a number of limousine and private transfer cars
              available
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              How long do taxis run in Athens?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Taxis in Athens are available 24/4 and can be found throughout the
              day in designated taxi ranks or on the street
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              What Colour are taxis in Athens?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              All Athens taxis are yellow in color
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: { xs: 2, md: 1.5 } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="span"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Is transport expensive in Athens?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Getting around in Athens is relatively cheap compared to all other
              European capitals. The minimum flag fare in Athens starts from €4
              and every trip is charged according to time and distance.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

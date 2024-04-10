"use client";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function TaxiCorfuFaq() {
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are taxis available at Corfu Airport?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Yes. it is easy to find a taxi at the designated taxi ranks
              outside Rhodes airport arrivals. Alternatively you can pre-book a
              ride using Aegean Taxi, using one of the available booking methods
              on our website (taxi app, webapp, call, whatsapp)
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are taxis available at Corfu port?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Yes. You can easily find a taxi at the designated taxi ranks
              within the corfu port area. Alternatively you can pre-book a ride
              using Aegean Taxi, using one of the available booking methods on
              our website
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are taxis easy to get in Corfu?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              It is relatively straightforward to find an available taxi in
              Corfu. There are designated pick up spots on the airport and port,
              and also taxi ranks throughout town. Hailing a taxi from the
              street is also possible.
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are taxis in Corfu metered?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Yes. It is a legal requirement for all licensed taxis to turn on
              the meter before starting a ride. Private transfer services have
              to communicate a pre arranged fare which starts at €36
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Do I need cash for taxis in Corfu?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Yes. There is no government mandate that forces taxi drivers to
              carry a POS machine to accept card payments, so the majority of
              the taxis in Corfu require cash payment.
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              What is the best transportation in Corfu?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Corfu offers a range of transport modes, depending on the
              destination. Tourists can choose from taxis, buses, private
              transfer services or to simply rent a car to get around the island
              of Corfu
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              What colours are Taxis in Corfu?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              All Corfu taxis are blue colour
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Do taxis run all day and night?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Most taxis operate throughout the day on the island of Corfu.
              Aegean Taxi operates 24/7 and getting a ride is easy using one of
              the booking methods offered
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
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are there buses in Corfu island?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "16px" },
                lineHeight: { xs: "40px", md: "51px" },
              }}
            >
              Yes. Corfu operates a frequent bus service to and from most of the
              popular destinations on the island and getting a bus is a safe and
              cheap way to get around
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

"use client";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function TaxiRhodesFaq() {
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
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="booking-content"
            id="booking-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Can I pay the taxi with card in Rhodes?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              There is no government mandate that requires taxi drivers in
              Rhodes to carry a POS machine to accept card payments, so the
              majority of the taxis in Rhodes require cash payment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              How much is a taxi from Rhodes Old Town to the airport?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              A usual day fare for a ride between Rhodes international airport
              and Rhodes town is about €30
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="drivers-content"
            id="drivers-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are taxis available at Rhodes Airport?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              Yes. You can easily find a taxi at the designated taxi ranks
              outside Rhodes airport. Alternatively you can pre-book a ride
              using Aegean Taxi, using one of the available booking methods on
              our website
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Do you tip taxi drivers in Rhodes?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              Tips are optional for transport providers in Rhodes and one should
              not expect to have to pay anything extra than the pre arranged or
              metered fare.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are there buses in Rhodes?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              Yes. Rhodes operates a frequent bus service to and from most of
              the popular destinations on the island.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Can you get around Rhodes without a car?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              Rhodes is a large island and getting to the various points of
              interest is not possible without a method of transport.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              What colours are Taxis in Rhodes?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              All taxis in Rhodes are blue colour
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
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
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              Most taxis operate throughout the day on the island of Rhodes.
              Aegean Taxi operates 24/7 and getting a ride is easy using one of
              the booking methods offered
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ py: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}
            aria-controls="question-content"
            id="question-header"
          >
            <Typography
              component="h3"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                // color: `rgba(0, 0, 0, 0.6)`,
              }}
            >
              Are taxis available at Rhodes port?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              Yes. You can easily find a taxi at the designated taxi ranks
              within the port area. Alternatively you can pre-book a ride using
              Aegean Taxi, using one of the available booking methods on our
              website (taxi app, webapp, call, whatsapp)
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

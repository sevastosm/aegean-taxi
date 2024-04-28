"use client";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function AirportMykonosFaq() {
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
              How can i find a taxi or transfer in Mykonos?
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
              Apart from the designated taxi stands in the town center, port or
              airport, the best way is to use a private transfer service. Aegean
              Taxi offers a great fleet of cars at competitive prices, with
              english speaking drivers and is available 24/7. You can order a
              ride from www.aegeantaxi.com using the webapp in 3 simple steps,
              download the Aegean Taxi app, or simply call the call center on
              +302152154000
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
              Is it easy to find a taxi in Mykonos?
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
              No. Taxis in Mykonos can be hard to find, especially in the peak
              months of July and August. If you want to book your ride in
              advance or on demend, the best way is to download the Aegean Taxi
              app or use one of the other 3 methods to book your ride
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
              Are Mykonos Taxis and Transfers safe in Mykonos?
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
              Yes. Mykonos is a cosidered to be a safe island with no major
              incidents ever reported related to taxis or transfers. Aegean Taxi
              employs only professional english speaking drivers who are
              pre-screened and trained to offer an excellent service
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
              What is the best way to find a taxi from Mykonos town?
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
              Mykonos town has 2 designated taxi ranks in the areas of Remezzo
              and Fabrika. The best way to book your taxi is via Aegean Taxi,
              using the taxi app or calling the 24/7 call center
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
              How much are the taxis or transfers from Mykonos Airport or Port ?
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
              A usual taxi fare from Mykonos airport to town is about €20, and
              from the port usually the same. You can book your airport or port
              ride using Aegean taxi while in Mykonos.
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
              Are taxis and transfers expensive?
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
              Taxis in Mykonos operate with a government mandated taxi meter,
              however it is possible to negotiate a flat fare with your driver.
              Private transfer services are available with a minimum €36 fare
              for half an hour which is the rate for a standard car. Vans tend
              to charge higher rates
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
              Are there buses in Mykonos?
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
              Yes. Mykonos operates a frequent bus service to and from most of
              the popular destinations on the island. The main bus stop is at
              Fabrika and tourists can buy tickets before entering the bus.
              Fares vary and range from €3-€10 for a single tickets. In the peak
              months buses are usually crowded and there may be a waiting line.
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
              How many taxis are there in Mykonos?
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
              Mykonos island has only 34 registered taxis, which cater to the
              hundreads of thousands of visitors to the island every year. There
              are a number of private transfer services available on the island
              which can be pre-booked. The minimum fare is €36
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
              Is Aegean Taxi working in Mykonos?
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
              Yes. Aegean Taxi is the leading taxi and transfer service in the
              island of Mykonos. Tourists can download the Aegean Taxi app from
              the google or apple stores, register in 3 simple steps and
              requests rides in Mykonos. Alternative booking methods include the
              website using the webapp, telephone booking or whatsapp
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
              Do Taxi drivers speak English in Mykonos?
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
              Aegean Taxi hires only fluent English speakers so all drivers can
              speak English. It is a legal requirement for transport companies
              to obtain proof of English profficiency when hiring drivers. This
              does not apply to Taxi drivers who do not need to be speaking
              English to become drivers
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
              What colors are Taxis in Mykonos?
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
              Mykonos Taxis are painted in silver color
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
              Do you have to tip taxis in Mykonos?
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
              Tips are optional for transport providers in Mykonos and one
              should not expect to have to pay anything extra than the pre
              arranged or metered fare. When extra services are provided by a
              driver like carrying luggage or stops along the way, then it is
              customary to reward drivers for the service
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
              Do I need cash for taxis in Mykonos?
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
              Yes. There is no government mandate that requires taxi drivers to
              carry a POS machine to accept card payments, so the majority of
              the taxis in Mykonos require cash payment. Aegean Taxi accepts all
              major credit cards, and you can also add your credit card details
              to pay for your ride when using the Taxi app
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
              Do taxis run all day and night in Mykonos?
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
              Most taxis operate throughout the day on the island of Mykonos.
              Aegean Taxi operates 24/7 and getting a ride is easy at any time
              using one of the booking methods offered
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

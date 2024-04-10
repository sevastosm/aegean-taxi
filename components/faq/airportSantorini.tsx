"use client";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function AirportSantoriniFaq() {
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
              How much does a taxi cost on Santorini?
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
              Taxi fares in Santorini are dictacted by government regulations
              and based on time and distance of each specific ride. Private
              transfers have a minimum fare of €36 for a 30 minute ride and
              might depend on the type of car selected and the distance of the
              route. Aegean Taxi offers the most competitive rates
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
              Is it easy to get a taxi in Santorini?
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
              Due to the limited number of taxis on the island, dispatch times
              vary depending by month, and it can be anything from 10 minutes to
              45 minutes. It is usually a lot faster to call Aegean Taxi on +30
              2152154000 to call for a ride, or download the Aegean Taxi app for
              Santorini
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
              How to find a taxi in Santorini?
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
              You can hail a Taxi in Santorini from the street, or simply by
              going to one of the designated taxi stands that are located around
              the Island. Downloading the Aegean Taxi app is another way to get
              a ride, or just send a message on whatsapp on +30 694 382 9494 to
              order one. Using www.aegeantaxi.com is also another way to get a
              ride using the simple online webapp
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
              Do you tip taxi drivers in Santorini?
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
              Tipping your driver is entirely on your discretion and depends on
              the level of service you receive. There is no standard percentage
              from the total ride value that should be added to the fare, and
              drivers do not usually expect to receive a tip
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
              Do taxis in Santorini take cash or card?
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
              The preferred payment method for taxis in Santorini is cash, since
              there is still no legal requirement for drivers to carry a POS
              machine. Aegean taxi accepts all major credit cards which can be
              added on the account section after downloading the taxi app and
              completing the registration
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
              How much is a taxi from Oia to Fira?
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
              Fares for this ride vary from €30 to €60 euros, depending on the
              group size, type of car selected, and time of the day
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
              Is Fira or Oia better?
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
              Both locations within Santorini island are unique and offer a
              different ambience and setting. Depending on your group
              requirements, Oia is considered a romanting sunset spot with great
              restaurants for dinner, while vibrant Fira offers a number of
              options for shopping, dinner and night time entertainment
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
              Is Aegean Taxi working in Santorini?
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
              Yes. Aegean Taxi is the leading taxi and transfer service in the
              island of Santorini and is available from early April until the
              end of October. Tourists can download the Aegean Taxi app from the
              google or apple stores, register in 3 simple steps and requests
              rides in Santorini. Alternative booking methods include the
              website using the webapp, telephone booking or whatsapp
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
              Do drivers speak English in Santorini?
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
              Aegean Taxi hires only fluent English speakers so all drivers can
              speak English in Santorini. It is a legal requirement for transfer
              companies to obtain proof of English profficiency when hiring
              fleet drivers. This does not apply to Taxi drivers who do not need
              to be speaking English to become drivers
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
              What colours are Taxis in Santorini?
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
              All licenced taxis in Santorini are silver or grey. Aegean Taxi
              operates a fleet of luxury cars with most cars in black colour
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
              Do you need to tip your driver in Santorini?
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
              Tips are optional for transport providers in Santorini and there
              is no suggested percentage of the fare that should be added on top
              of the fare. So one should not expect to have to pay anything
              extra than the pre arranged or metered fare. When extra services
              are provided by a driver like carrying luggage or stops along the
              way, then it is customary to reward drivers for the service
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
              Do I need cash for taxis in Santorini?
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
              Yes. There is no government mandate that requires taxi drivers in
              Santorini to carry a POS machine to accept card payments, so the
              majority of the taxis in Santorini require cash payment. Aegean
              Taxi accepts all major credit cards, and you can also add your
              credit card details to pay for your ride when using the Taxi app
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

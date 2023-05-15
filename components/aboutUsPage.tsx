"use client";
import Image from "next/image";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

import bg from "public/assets/aboutus-background.png";
import earth from "public/assets/earth.png";

export default function AboutUsPage() {
  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h1"
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: 400,
          my: 2,
          mt: 1,
          display: { xs: "block", md: "none" },
        }}
      >
        Welcome to Aegean Taxi
      </Typography>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            backgroundImage: { xs: "none", md: `url(${bg.src})` },
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: 200, md: 400 },
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#fff",
              mt: 22,
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
          >
            Welcome to Aegean Taxi
          </Typography>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "230px",
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "0 60%",
            }}
          ></Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: { xs: 1, md: 4 } }}>
        <Grid
          item
          xs={6}
          md={5}
          sx={{ display: { xs: "none", md: "initial" }, textAlign: "center" }}
        >
          <Image src={earth} alt="earth" />
        </Grid>
        <Grid item xs={12} md={6} sx={{}}>
          <Typography
            // component="h1"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Background
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            We are a passionate and dynamic team of entrepreneurs but first and
            foremost we are travellers ourselves. We therefore understand the
            excitement of being in a new country but also the stress of trying
            to find reliable drivers to help you get from point A to Point B.
            This of course starts with the airport arrival and transfer and
            continues throughout the stay, all the way to the transfer back and
            final goodbye. This is why our motto: “Arrive-Get around-Depart”,
            encapsulates the entire spectrum of logistics a traveller might
            need.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            While travelling within Greece, we faced numerous times difficulties
            in finding reliable, quality and affordable services as well as a
            complete transport solution provider in the most popular locations
            in Greece. We started Aegean Taxi with the aim to become the
            preferred ground transportation partner who understands the needs of
            visitors and tourists in Greece, makes them feel like home and helps
            them have a relaxed and pleasant stay.
          </Typography>

          <Typography
            // component="h1"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Timeline
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            Our story started in the island of Mykonos, when in 2015 our founder
            had to pay € 30 to another tourist to ride in the back of a scooter
            in order to get to his destination, due the lack of available
            drivers. After this experience and realising that the same situation
            was prevalent in other islands around Greece, we started working
            towards creating the first taxi application that would be dedicated
            to visiting tourists. By the end of 2015 we were the first taxi app
            in Mykonos island, bringing together a fleet of drivers and tourists
            who were looking for quality and affordable rides.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            In 2016 we expanded our service to the island of Santorini, but
            realised the difficulties in finding and training good quality
            drivers, who could offer a premium service to our clients. We then
            decided to invest in our own fleet of cars and opened our offices in
            both Mykonos and Santorini, which we used as a base for further
            expansion.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            In 2018 we expanded our services to the islands of Corfu and Rhodes
            as well as to the capital, Athens.
          </Typography>
          <Typography
            // component="h1"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            At Aegean Taxi, we pride ourselves on being the leading taxi and
            transfer service provider in the beautiful regions of Mykonos,
            Santorini, Corfu, Rhodes and Athens. With a deep commitment to
            customer satisfaction, reliability and exceptional service, we
            constantly strive to exceed our clients’ expectations and ensure
            their transportation needs are met with the utmost professionalism
            and convenience.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            Our experienced and highly trained team of drivers is dedicated to
            delivering a safe and comfortable travel experience. All our drivers
            are fluent in English and know the locations they are working in,
            like the back of their hands.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            What sets Aegean Taxi apart is our commitment to punctuality and
            reliability. We understand the value of your time and our drivers
            are trained to arrive promptly at your location. Our modern and
            well-maintained fleet of vehicles is equipped with the latest
            amenities to make your journey as comfortable and enjoyable as
            possible.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            At Aegean Taxi, we prioritize your safety and peace of mind. Our
            drivers undergo rigorous background checks and possess the necessary
            licenses and certifications to provide you with a secure and
            trustworthy travel experience, all in full compliance with Greek
            legislation and the quality standards set for the sector.
            Additionally, our vehicles are regularly inspected and maintained to
            the highest standards, ensuring optimal safety for our passengers.
          </Typography>
          <Typography
            // component="h1"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            The Team
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            Aegean Taxi is structured in 4 main operating divisions: <br />
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Operations:</i> Our operations division encompases the call
            center and customer support divisions, the driver recruitment and
            training and fleet management division.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Development:</i> The development division is comprised by a team
            of front end, back end and applications developers, responsible for
            building our suite of products and releasing them to the market.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Marketing:</i> The marketing division is comprised of our digital
            marketing team which helps promote our products and services across
            different platforms.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Admin & Finance:</i> Our admin and finance team is responsible
            for all transactions with partner venues and handling payments for
            our services.
          </Typography>
          <Typography
            // component="h1"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            Our services have expanded over the years to cover the increasing
            needs of our clients:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Taxi and Transfer services:</i> Our most popular service, the “on
            demand” requests for ride is how Aegean Taxi started and is the core
            of our service offering. Get a ride wherever you are, using one of
            our 4 booking methods.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Airport transfers:</i> For those who don’t like surprises and
            want to plan ahead, we offer a convenient airport transfer service.
            Simply book in advance by using one of the available methods and we
            will take care of the rest. We operate in 5 airports: Mykonos
            International Airport (JMK), Santorini International Airport (JTR),
            Corfu International Airport (CFU), Rhodes international Airport
            (RHO) and Athens International Airport (ATH).
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Tours:</i> For travellers who want to explore what each location
            has to offer, we have created a tailored selection of tours that
            last from 4 to 8 hours, to help show you the best of every location.
            Call us to inquire about our unique packages.
          </Typography>
          <Typography
            // component="h1"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Ways to book with us
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            Our customers’ satisfaction is at the core of everything we do, so
            we have made it very easy to book a ride with us, using one of 4
            available methods.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Phone:</i> Our dedicated customer support team is available 24/7
            to assist you with your bookings, queries or concerns you may have.
            You can call us any time on +30 215 215 4000 to book your ride. We
            value your feedback and continuously strive to improve our services
            based on your suggestions and our experience.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>App:</i> We have developed a world class app which you can
            download from both the iOS and Google stores. It is simple and easy
            to use, registration is completed in 3 simple steps and you are
            ready to book your ride in just a few seconds after registration.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Webapp:</i> Our browser based webapp is a very simple way to
            order a ride without downloading the app. It is fast, efficient and
            it simulates the app environment which makes it extremely easy and
            fast to order a ride. Simply click on book now in any of the pages
            and you will be redirected.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            <i>Whatsapp:</i> Thousands of our clients found whatsapp to be a
            very easy way to communicate with our drivers and request rides. We
            therefore added whatsapp as a tool which you can use to get a ride.
            Simply click on the link found on the website, or save our number:
            +306934702974 and text us.
          </Typography>

          <Typography
            // component="h1"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
              my: 2,
            }}
          >
            Welcome aboard Aegean Taxi!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 2,
              lineHeight: { xs: "22px", md: "30px" },
            }}
          >
            Thank you for choosing Aegean Taxi for your transportation needs. We
            look forward to serving you and making your journey in Greece a
            memorable one. Book with us today and experience convenience,
            reliability and exceptional service.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

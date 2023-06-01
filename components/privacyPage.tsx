"use client";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

import bg from "public/assets/privacy.png";

export default function PrivacyPage() {
  return (
    <Container maxWidth={"lg"}>
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
        <Grid item xs={12} md={12} sx={{}}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Introduction
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
            When you use Aegean taxi , you trust us with your information. We
            are committed to keeping that trust by helping you understand our
            privacy practices.
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
            This policy describes the information we collect, how it is used and
            shared, and your choices regarding this information. We recommend
            that you read this along with our Privacy Overview, which highlights
            key points about our privacy practices (including what information
            we collect, when we collect it and how we use it).
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
            Last modified: 12 May 2023
            <br />
            Effective date: 12 May 2023
          </Typography>

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Data Collection And Uses
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
              my: 0,
            }}
          >
            Scope
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                This policy applies to users of Aegean taxi services anywhere in
                the world, including users of Aegean taxi&prime;s apps,
                websites, features or other services.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                This policy describes how Aegean taxi and its affiliates collect
                and use personal information to provide our services. This
                policy applies to all users of our apps, websites, features or
                other services anywhere in the world, unless covered by a
                separate privacy policy. This policy specifically applies to:
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
                <strong>Riders:</strong> users who request or receive transport
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
                <strong>Drivers:</strong> users who provide transport
                individually or through partner transport companies
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
                <strong>Partners:</strong> companies that collaborate with us to
                either request a service or provide a service
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
                This policy also applies to those who provide information to
                Aegean taxi in connection with an application to use our
                services, or whose information Aegean taxi otherwise receives in
                connection with its services (such as contact information of
                individuals astsociated with Aegean taxi Hotel/Restaurant
                partners). All those subject to this policy are referred to as
                “users” for purposes of this policy.
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
                The practices described in this policy are subject to applicable
                laws in the places in which we operate. This means that we only
                engage in the practices described in this policy in a particular
                country or region if permitted under the laws of those places.
                Please contact us if you have questions on our practices in your
                country or region.
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Data Controller
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              Aegean taxi provides services to users throughout the world. If
              you use our services in the European Union or elsewhere, Butler
              Hospitality and Logistics is the data controller. We process
              personal information inside and outside of the European Union.
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              ></Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                If you live in the European Union or elsewhere, the data
                controller is:
              </Typography>
              <Typography
                component="address"
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <i>
                  Butler Hospitality and Logistics, 16192 Coastal Highway,
                  Lewes, Delaware 19958, USA.
                </i>
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
                Questions, comments and complaints about Aegean taxi&prime; data
                practices can be submitted to Aegean taxi&prime; data protection
                office through here
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
                We process personal information inside and outside of the
                European Union. Aegean Taxi transfers information of users
                outside the European Union on the basis of mechanisms approved
                under applicable laws.
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            The Information We Collect
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Aegean taxi collects:
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
                Information that you provide to Aegean taxi , such as when you
                create your Aegean taxi account.
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
                Information created when you use our services, such as location,
                usage and device information.
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
                Information from other sources, such as Aegean taxi partners and
                third parties that use Aegean taxi APIs.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                The following information is collected by or on behalf of Aegean
                taxi :
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
                <strong>1.Information you provide</strong>
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
                This may include:
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
                <strong>User profile:</strong> We collect information when you
                create or update your Aegean taxi account. This may include your
                name, email, phone number, login name and password, address,
                payment or banking information (including related payment
                verification information), government identification numbers,
                date of birth, photo and signature. This also includes driver
                vehicle or insurance information. This also includes the
                preferences and settings that you enable for your Aegean taxi
                account.
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
                <strong>Background check information: </strong> We may collect
                background check information if you sign up to use Aegean taxi
                services as a driver or partner. This may include information
                such as your driver history or criminal record (where permitted
                by law). This information may be collected by a vendor on Aegean
                taxi ’s behalf.
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
                <strong>Demographic data:</strong> We may collect demographic
                information about you, including through user surveys. In some
                countries, we may also receive demographic information about you
                from third parties.
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
                <strong>User content:</strong> We may collect information that
                you submit when you contact Aegean taxi customer support,
                provide ratings or compliments for other users, or otherwise
                contact Aegean taxi .
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
                <strong>Address book or calendar:</strong> If you permit the
                Aegean taxi app to access the address book on your device, we
                may collect names and contact information from your address book
                for purposes such as facilitating social interactions through
                our services. If you permit the Aegean taxi app to access the
                calendar on your device, we collect calendar information such as
                event title and description, your response (Yes, No, Maybe),
                date and time, location and number of attendees
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
                <strong>2.Information created when you use our services</strong>
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
                This may include:
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
                <strong>Location information:</strong> Depending on the Aegean
                taxi services that you use, and your app settings or device
                permissions, we may collect your precise or approximate location
                information as determined through data such as GPS, IP address
                and WiFi.
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
                - If you are a driver or delivery partner, Aegean taxi collects
                location information when the Aegean taxi app is running in the
                foreground (app open and on-screen) or background (app open but
                not on screen) of your device.
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
                - If you are a rider, Aegean taxi may collect location
                information when theAegean taxi app is running in the
                foreground. In certain regions, Aegean taxi may also collect
                this information when the Aegean taxi app is running in the
                background of your device if this collection is enabled through
                your app settings or device permissions.
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
                - Riders and delivery recipients may use the Aegean taxi app
                without enablingAegean taxi to collect their location
                information. However, this may affect the functionality
                available on your Aegean taxi app. For example, if you do not
                enable Aegean taxi to collect your location information, you
                will have to enter your pick-up address manually. In addition,
                location information will be collected from the driver during
                your trip, even if you have not enabledAegean taxi to collect
                your location information.
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
                <strong>Transaction information:</strong> We collect transaction
                details related to your use of our services, including the type
                of services you requested or provided, your order details,
                delivery information, date and time the service was provided,
                amount charged, distance travelled, and payment method.
                Additionally, if someone uses your promo code, we may associate
                your name with that person
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
                <strong>Usage information:</strong> We collect information about
                how you interact with our services. This includes information
                such as access dates and times, app features or pages viewed,
                app crashes and other system activity, type of browser and
                third-party sites or service you were using before interacting
                with our services. In some cases, we collect this information
                through cookies, pixel tags, and similar technologies that
                create and maintain unique identifiers. To learn more about
                these technologies, please see our Cookie Policy
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
                <strong>Device information:</strong>
                We may collect information about the devices you use to access
                our services, including the hardware models, device IP address,
                operating systems and versions, software, file names and
                versions, preferred languages, unique device identifiers,
                advertising identifiers, serial numbers, device motion
                information, and mobile network information.
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
                <strong>Communications data:</strong> We enable users to
                communicate with each other and Aegean taxi through the Aegean
                taxi apps, websites and other services. For example, we enable
                drivers and riders, and delivery partners and recipients to call
                or text each other (in some countries, without disclosing their
                telephone numbers to each other). To provide this service,
                Aegean taxi receives some information regarding the calls or
                texts, including the date and time of the call/text, and the
                content of the communications. Aegean taxi may also use this
                information for customer support services (including to resolve
                disputes between users), for safety and security purposes, to
                improve our products and services and for analytics.
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  mt: 3,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <strong>3.Information from other sources</strong>
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
                This may include:
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={1}>User feedback, such as ratings or compliments.</li>
                <li key={2}>
                  Users providing your information in connection with referral
                  programmes.
                </li>
                <li key={3}>
                  Users requesting services for or on your behalf.
                </li>
                <li key={4}>
                  Users or others providing information in connection with
                  claims or disputes.
                </li>
                <li key={5}>
                  Aegean taxi business partners through which you create or
                  access your Aegean taxiTaxi account, such as payment
                  providers, social media services, on-demand music services, or
                  apps or websites who use Aegean taxi ’s APIs or whose API
                  Aegean taxiuses.
                </li>
                <li key={6}>
                  Insurance providers (if you are a driver or delivery partner).
                </li>
                <li key={7}>
                  Financial services providers (if you are a driver or delivery
                  partner).
                </li>
                <li key={8}>
                  Partner transport companies (if you are a driver who uses our
                  services through an account associated with such a company).
                </li>
                <li key={9}>
                  The owner of an Aegean taxi for Business or Aegean taxi Family
                  profile that you use.
                </li>
                <li key={10}>Publicly available sources.</li>
                <li key={11}>Marketing service providers.</li>
                <li key={12}>
                  Local governments or government issued documents (such as
                  Driving license, Passport etc)
                </li>
                <li key={13}>
                  Medical Institutions (such as health certificates)
                </li>
                <li key={14}>
                  Aegean taxi may combine the information collected from these
                  sources with other information in its possession.
                </li>
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            How We Use Your Information
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Aegean taxi collects and uses information to enable reliable and
                convenient transportation, delivery and other products and
                services. We also use the information we collect:
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwul-${1}`}>
                  To enhance the safety and security of our users and services
                </li>
                <li key={`hwul-${2}`}>For customer support</li>
                <li key={`hwul-${3}`}>For research and development</li>
                <li key={`hwul-${4}`}>
                  To enable communications to or between users
                </li>
                <li key={`hwul-${5}`}>To provide promotions or contests</li>
                <li key={`hwul-${6}`}>In connection with legal proceedings</li>
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
                Aegean taxi does not sell or share your personal information to
                third parties for third party direct marketing purposes.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Aegean taxi uses the information it collects for purposes
                including:
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
                <strong>1.Providing services and features</strong>
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
                Aegean taxi uses the information we collect to provide,
                personalise, maintain and improve our products and services.
                This includes using the information to:
              </Typography>
              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur-${1}`}>Create and update your account.</li>
                <li key={`hwur-${2}`}>Verify your identity.</li>
                <li key={`hwur-${3}`}>
                  Enable transport, deliveries and other services.
                </li>
                <li key={`hwur-${4}`}>
                  Process or facilitate payments for those services.
                </li>
                <li key={`hwur-${5}`}>
                  Offer, obtain, provide or facilitate insurance or finance
                  solutions in connection with our services.
                </li>
                <li key={`hwur-${6}`}>
                  To track the progress of your trip or delivery.
                </li>
                <li key={`hwur-${7}`}>
                  Enable features that allow you to share information with other
                  people, such as when you submit a compliment about a driver,
                  refer a friend to Aegean taxi , split fares or share your ETA.
                </li>
                <li key={`hwur-${8}`}>
                  Enable features to personalise your Aegean taxi account, such
                  as creating bookmarks for your favourite places, and to enable
                  quick access to previous destinations.
                </li>
                <li key={`hwur-${9}`}>
                  Perform internal operations necessary to provide our services,
                  including to troubleshoot software bugs and operational
                  problems, to conduct data analysis, testing, and research, and
                  to monitor and analyse usage and activity trends.
                </li>
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
                <strong>2.Safety and security</strong>
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
                We use your data to help maintain the safety, security and
                integrity of our services and users. This includes, for example:
              </Typography>
              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur2-${1}`}>
                  Screening drivers and partners prior to enabling their use of
                  our services and at subsequent intervals, including thorough
                  reviews of background checks where permitted by law, to
                  prevent use of our services by unsafe drivers.
                </li>
                <li key={`hwur2-${2}`}>
                  Using information from drivers’ devices to identify unsafe
                  driving behaviour such as speeding or harsh braking and
                  acceleration, and to raise awareness among drivers regarding
                  such behaviours.
                </li>
                <li key={`hwur2-${3}`}>
                  ID check feature, which prompts drivers to share a selfie
                  before going online. This helps ensure that the driver using
                  the app matches the Aegean taxi account we have on file,
                  preventing fraud and helping to protect other users.
                </li>
                <li key={`hwur2-${4}`}>
                  Using device, location, profile, usage and other information
                  to prevent, detect, and combat fraud or unsafe activities.
                  This includes processing of such information, in certain
                  countries, to identify practices or patterns that indicate
                  fraud or risk of safety incidents. This may also include
                  information from third parties. In certain cases such
                  incidents may lead to deactivation by means of an automated
                  decision-making process. Users in the EU have the right to
                  object to this type of processing; see Section II.I.1.d for
                  more information
                </li>
                <li key={`hwur2-${5}`}>
                  Using user ratings to encourage improvement by affected users,
                  and as grounds for deactivating users with ratings below a
                  certain minimum as may be required in their region.
                  Calculation and deactivation may be done through an automated
                  decision-making process. Users in the EU have the right to
                  object to this type of processing; see Section II.I.1.d for
                  more information.
                </li>
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
                <strong>3.Customer support</strong>
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
                Aegean taxi uses the information we collect (including
                recordings of customer support calls after notice to you and
                with your consent) to assist you when you contact our customer
                support services, including to:
              </Typography>
              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur3-${1}`}>
                  Direct your questions to the appropriate customer support
                  person
                </li>
                <li key={`hwur3-${2}`}>
                  Investigate and address your concerns
                </li>
                <li key={`hwur3-${3}`}>
                  Monitor and improve our customer support responses
                </li>
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
                <strong>4.Research and development</strong>
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
                We may use the information we collect for testing, research,
                analysis and product development. This allows us to improve and
                enhance the safety and security of our services, develop new
                features and products, and facilitate insurance and finance
                solutions in connection with our services.
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
                <strong>5.Communications among users</strong>
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
                Aegean taxi uses the information we collect to enable
                communications between our users. For example, a driver may text
                or call a rider to confirm a pick-up location, or a restaurant
                or delivery partner may call a delivery recipient with
                information about their order.
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
                <strong>6.Communications from Aegean taxi</strong>
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
                Aegean taxi uses the information we collect to enable
                communications between our users. For example, a driver may text
                or call a rider to confirm a pick-up location, or a restaurant
                or delivery partner may call a delivery recipient with
                information about their order.
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
                <strong>7.Legal proceedings and requirements</strong>
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
                We may use the information we collect to investigate or address
                claims or disputes relating to your use of Aegean taxi&prime;
                services, or as otherwise allowed by applicable law, or as
                requested by regulators, government entities and official
                inquiries.
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Cookies and Third-Party Technologies
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Aegean taxi and its partners use cookies and other
                identification technologies on our apps, websites, emails and
                online ads for purposes described in this policy.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Cookies are small text files that are stored on your browser or
                device by websites, apps, online media and advertisements Aegean
                taxi uses cookies and similar technologies for purposes such as:
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur4-${1}`}>Authenticating users</li>
                <li key={`hwur4-${2}`}>
                  Remembering user preferences and settings
                </li>
                <li key={`hwur4-${3}`}>
                  Determining the popularity of content
                </li>
                <li key={`hwur4-${4}`}>
                  Delivering and measuring the effectiveness of advertising
                  campaigns
                </li>
                <li key={`hwur4-${5}`}>
                  Analysing site traffic and trends, and generally understanding
                  the online behaviours and interests of people who interact
                  with our services
                </li>
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
                We may also allow others to provide audience measurement and
                analytics services for us, to serve advertisements on our behalf
                across the Internet, and to track and report on the performance
                of those advertisements. These entities may use cookies, web
                beacons, SDKs and other technologies to identify your device
                when you visit our site and use our services, as well as when
                you visit other online sites and services.
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
                Please see our Cookie Policy for more information regarding the
                use of cookies and other technologies described in this section,
                including regarding your choices relating to such technologies.
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Information Sharing and Disclosure
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Some of Aegean taxi&prime; products, services and features
                require that we share information with other users or at your
                request. We may also share your information with our affiliates,
                subsidiaries and business partners, for legal reasons or in
                connection with claims or disputes
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Aegean taxi may share the information we collect:
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
                <strong>1.With other users</strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur5-${1}`}>
                  For example, if you are a rider, we may share your first name,
                  average rider rating given by drivers, and pick-up and/or
                  drop-off locations with drivers
                </li>
                <li key={`hwur5-${2}`}>
                  If you are a driver, we may share information with your
                  rider(s) including name and photo; vehicle make, model,
                  colour, licence plate and vehicle photo; location; average
                  rating provided by riders; total number of trips; for how long
                  you have been using the Aegean taxi app; and contact
                  information (depending upon applicable laws). If you choose to
                  complete a driver profile, we may also share any information
                  associated with that profile, including information that you
                  submit and compliments that past riders have submitted about
                  you. The rider/delivery recipient will also receive a receipt
                  containing information such as a breakdown of amounts charged,
                  your first name, photo and a map of the route you took.
                </li>
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
                <strong>2.At your request</strong>
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
                This includes sharing your information with:
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur6-${1}`}>
                  <strong>Other people at your request.</strong> For example, we
                  may share your ETA and location with a friend at your request,
                  or your trip information when you split a fare with a friend.
                </li>
                <li key={`hwur6-${2}`}>
                  <strong>Aegean taxi business partners.</strong> For example,
                  if you requested a service through a partnership or
                  promotional offering made by a third party,Aegean taxi may
                  share your information with those third parties. This may
                  include, for example, other apps or websites that integrate
                  with our APIs, vehicle suppliers, or services, or those with
                  an API or service with which we integrate, or business
                  partners with whom Aegean taxi may partner with to deliver a
                  promotion, a contest or a specialized service
                </li>
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
                <strong>
                  3.With the general public when you submit content to a public
                  forum.
                </strong>
                We love hearing from our users -- including through public
                forums such as Aegean taxiTaxi blogs, social media and certain
                features on our network. When you communicate with us through
                those channels, your communications may be viewable by the
                public.
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
                <strong>
                  4.With the owner of Aegean taxi accounts that you may use.
                </strong>
                If you use a profile associated with another party we may share
                your trip information with the owner of that profile. This
                occurs, for example, if you are:
              </Typography>
              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur7-${1}`}>
                  A driver using an account owned by a partner transport
                  company.
                </li>
                <li key={`hwur7-${2}`}>
                  A rider who takes a trip arranged by a friend or under a
                  Family profile.
                </li>
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
                <strong>5.With Aegean taxi subsidiaries and affiliates</strong>
                We share information with our subsidiaries and affiliates to
                help us provide our services or conduct data processing on our
                behalf. For example, Aegean taxi may process and stores
                information in the United States on behalf of its international
                subsidiaries and affiliates.
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
                <strong>
                  6.With Aegean taxi service providers and business partners.
                </strong>
                Aegean taxi may provide information to its vendors, consultants,
                marketing partners, research firms and other service providers
                or business partners. This may include, for example:
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur8-${1}`}>Payment processors and facilitators.</li>
                <li key={`hwur8-${2}`}>
                  Background check providers (drivers only).
                </li>
                <li key={`hwur8-${3}`}>Cloud storage providers.</li>
                <li key={`hwur8-${4}`}>
                  Marketing partners and marketing platform providers.
                </li>
                <li key={`hwur8-${5}`}>Data analytics providers.</li>
                <li key={`hwur8-${6}`}>
                  Research partners, including those performing surveys or
                  research projects in partnership with Aegean taxi or on Aegean
                  taxi ’s behalf.
                </li>
                <li key={`hwur8-${7}`}>
                  Vendors that assist Aegean taxi to enhance the safety and
                  security of its apps.
                </li>
                <li key={`hwur8-${8}`}>
                  Consultants, lawyers, accountants and other professional
                  service providers.
                </li>
                <li key={`hwur8-${9}`}>Fleet partners.</li>
                <li key={`hwur8-${10}`}>Insurance and finance partners.</li>
                <li key={`hwur8-${11}`}>Airports.</li>
                <li key={`hwur8-${12}`}>Restaurant partners.</li>
                <li key={`hwur8-${13}`}>
                  Vehicle solution vendors or third-party vehicle suppliers.
                </li>
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
                <strong>
                  7.For legal reasons or in the event of a dispute.
                </strong>
                Aegean taxi may share your information if we believe it is
                required by applicable law, regulation, operating agreement,
                legal process or governmental request, or where the disclosure
                is otherwise appropriate due to safety or similar concerns. This
                includes sharing your information with law enforcement
                officials, government authorities, airports (if required by the
                airport authorities as a condition of operating on airport
                property), or other third parties as necessary to enforce our
                Terms of Service, user agreements, or other policies, to protect
                Aegean taxi ’s rights or property or the rights, safety or
                property of others, or in the event of a claim or dispute
                relating to your use of our services. If you use another
                person’s credit card, we may be required by law to share
                information with that credit card holder, including trip
                information. This also includes sharing your information with
                others in connection with, or during negotiations of, any
                merger, sale of company assets, consolidation or restructuring,
                financing, or acquisition of all or a portion of our business by
                or into another company.
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
                <strong>8.With your consent</strong>
                Aegean taxi may share your information other than as described
                in this policy if we notify you and you consent to the sharing.
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Information Retention and Deletion
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Aegean taxi retains user profile and other information for as
                long as you maintain your Aegean taxi account.
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
                Aegean taxi retains transaction, location, usage and other
                information for 7 years in connection with regulatory, tax,
                insurance or other requirements in the places in which it
                operates. Aegean taxi thereafter deletes or anonymises such
                information in accordance with applicable laws.
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
                If you withdraw consent to the collection or use of personal
                information for optional features, such as features that use
                your calendar or address book, Aegean taxiTaxi deletes such
                personal information.
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
                Users may request deletion of their accounts at any time.
                Following such request,Aegean taxi deletes the information that
                it is not required to retain, and restricts access to or use of
                any information it is required to retain.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Aegean taxi requires user profile information in order to
                provide its services and retains such information for as long
                you maintain your Aegean taxi account. Aegean taxi retains
                certain information, including transaction, location, device and
                usage information, for a minimum of 7 years in connection with
                regulatory, tax, insurance and other requirements in the places
                in which it operates. Once such information is no longer
                necessary to provide Aegean taxi&prime; services, enable
                customer support, enhance the user experience or for other
                operational purposes,Aegean taxi takes steps to prevent access
                to or use of such information for any purpose other than
                compliance with these requirements or for purposes of safety,
                security and fraud prevention and detection. You may request
                deletion of your account at any time through the contact section
                in the Aegean taxi app, or via Aegean taxi&prime; website.
                Following such requests, Aegean taxi deletes the information
                that it is not required to retain. In certain circumstances,
                Aegean taxi may be unable to delete your account, such as if
                there is an outstanding credit on your account or an unresolved
                claim or dispute. Upon resolution of the issue preventing
                deletion, Aegean taxi will delete your account as described
                above. Aegean taxi may also retain certain information if
                necessary for its legitimate business interests, such as fraud
                prevention and enhancing users&prime; safety and security. For
                example, if Aegean taxi shuts down a user&prime;s account
                because of unsafe behaviour or security incidents, Aegean taxi
                may retain certain information about that account to prevent
                that user from opening a new Aegean taxi account in the future.
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Special Information For EU Users
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Beginning on 25 May 2018, the processing of personal data of
                users in the European Union is subject to the EU General Data
                Protection Regulation (“GDPR”).
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
                This section summarises Aegean taxi ’s grounds for processing
                personal information under the GDPR, and the rights of EU users
                as relates to Aegean taxi ’s handling of personal information.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Beginning on 25 May 2018, the processing of personal data of
                users in the European Union is subject to the EU General Data
                Protection Regulation (“GDPR”). This section provides
                information as relates to EU users&prime; rights, and Aegean
                taxi&prime; responsibilities, under this regulation.
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
                <strong>1.EU user rights.</strong> If you are an Aegean taxi
                user in the EU, you have the following rights with respect to
                Aegean taxi&prime; handling of your personal information. To
                exercise these rights, please see below or submit your request
                here. Users outside the EU may also request explanation,
                correction, deletion or copies of their personal data from the
                same link.
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
                <strong>a. Explanation and copies of your data</strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur9-${1}`}>
                  You have the right to request an explanation of the
                  information that Aegean taxiTaxi has about you and how Aegean
                  taxi uses that information.
                </li>
                <li key={`hwur9-${2}`}>
                  You also have the right to receive a copy of the information
                  that Aegean taxicollects about you if collected on the basis
                  of consent or because Aegean taxirequires the information to
                  provide the services that you request.
                </li>
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
                <strong>b. Correction</strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur10-${1}`}>
                  If Aegean taxi has information about you that you believe is
                  inaccurate, you have the right to request correction of your
                  information. Please see the section titled “Explanation,
                  copies and correction” below for more information on
                  correcting, or requesting correction of, your information.
                </li>
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
                <strong>c. Deletion</strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur11-${1}`}>
                  Users may request deletion of their accounts at any time
                  through the Aegean taxiTaxi app, or via Aegean taxi&prime;
                  website. We may retain certain information about you as
                  required by law and for legitimate business purposes permitted
                  by law.
                </li>
                <li key={`hwur11-${2}`}>
                  Please see the “Information retention & deletion” section
                  above for more information regarding Aegean taxi&prime;
                  retention and deletion practices.
                </li>
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
                <strong>d. Objections and complaints</strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur12-${1}`}>
                  Users in the EU have the right to object to Aegean taxi&prime;
                  processing of personal data, including for marketing purposes
                  based on profiling and/or automated decision-making. Aegean
                  taxi may continue to process your information notwithstanding
                  the objection to the extent permitted under GDPR.
                </li>
                <li key={`hwur12-${2}`}>
                  You may also submit questions, comments or complaints to
                  Aegean taxi&prime; data protection officer.
                </li>
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
                <strong>2. Grounds for processing.</strong> GDPR requires that
                companies processing the personal data of EU users do so on the
                basis of specific legal grounds. As described below, Aegean taxi
                processes the information of EU users based on one or more of
                the grounds specified under GDPR:
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
                <strong>
                  a. This processing is necessary to provide the services and
                  features you request
                </strong>{" "}
                Aegean taxi must collect and use certain information in order to
                provide its services. This includes:
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur13-${1}`}>
                  User profile information that is necessary to establish and
                  maintain your account, including to verify your identity;
                  enable communications with you about your trips, orders and
                  accounts; and to enable you to make or receive payments.
                </li>
                <li key={`hwur13-${2}`}>
                  Background check information necessary to enable drivers to
                  provide transportation services through the Aegean taxi app.
                </li>
                <li key={`hwur13-${3}`}>
                  Driver location information, which is necessary to match
                  drivers with riders and to track trips while in progress and
                  suggest navigation.
                </li>
                <li key={`hwur13-${4}`}>
                  Transaction information, which is necessary to generate and
                  maintain in connection with your use of Aegean taxi&prime;
                  services.
                </li>
                <li key={`hwur13-${5}`}>
                  Usage information, which is necessary to maintain, optimise
                  and enhance Aegean taxiTaxi&prime;s services, including to
                  determine, sometimes in combination with other information,
                  incentives, connect riders and drivers, and calculate costs of
                  trips and driver payments.
                </li>
                <li key={`hwur13-${6}`}>
                  Collection and use of this information is a requirement for
                  using Aegean taxiTaxi&prime;s apps.
                </li>
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
                <strong>
                  b. The processing is necessary to protect the vital interests
                  of our users or of others
                </strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur14-${1}`}>
                  Aegean taxi may process personal information, including
                  disclosing data to law enforcement authorities in case of
                  threats to the safety of users or of others
                </li>
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
                <strong>
                  c. The processing is necessary for Aegean taxi&prime;
                  legitimate interest
                </strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur15-${1}`}>
                  To maintain and enhance our users&prime; safety and security.
                  For example, we collect background check information (where
                  permitted by law) to prevent unsafe users from providing
                  services through our apps. We also use personal information to
                  prevent use of our services by users who have engaged in
                  inappropriate or dangerous behaviour, such as by retaining
                  information of banned users to prevent their use of Aegean
                  taxi&prime; apps. We also use usage information to prevent
                  matching of riders and drivers for whom there is higher risk
                  of conflict (e.g. because they have been the subject of prior
                  complaints from other users).
                </li>
                <li key={`hwur15-${2}`}>
                  To prevent, detect and combat fraud in connection with the use
                  of our services. For example, Aegean taxi uses user profile,
                  location, device and usage information to identify and prevent
                  circumstances when users attempt to defraudAegean taxi or
                  other users.
                </li>
                <li key={`hwur15-${3}`}>
                  To inform law enforcement officials regarding criminal acts or
                  threats to public safety.
                </li>
                <li key={`hwur15-${4}`}>To provide customer support.</li>
                <li key={`hwur15-${5}`}>
                  To optimise our service and develop new services. This
                  includes, for example, identifying the best pick-up/drop-off
                  locations, recommending (new) features, improving navigation,
                  enhancing pricing and matching riders and drivers or delivery
                  recipients and partners.
                </li>
                <li key={`hwur15-${6}`}>
                  For research and analytical purposes. This includes, for
                  example, analysing usage trends to improve the user experience
                  and enhance the safety and security of our services.
                </li>
                <li key={`hwur15-${7}`}>
                  For direct marketing purposes. This includes, for example,
                  analysing data to identify trends and tailor marketing
                  messages to user needs.
                </li>
                <li key={`hwur15-${8}`}>
                  To enforce Aegean taxi&prime; Terms of Service.
                </li>
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
                <strong>
                  d. The processing is necessary for the legitimate interests of
                  other persons or parties
                </strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur16-${1}`}>
                  Aegean taxi collects and uses personal information to the
                  extent necessary for the interests of other persons or the
                  general public. This includes sharing information in
                  connection with legal or insurance claims, to protect the
                  rights and safety of others.
                </li>
                <li key={`hwur16-${2}`}>
                  Aegean taxi may also process personal information when
                  necessary in regards to a substantial public interest, on the
                  basis of applicable laws.
                </li>
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
                <strong>
                  e. The processing is necessary to fulfil Aegean taxi&prime;
                  legal obligations
                </strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur17-${1}`}>
                  Aegean taxi is subject to legal requirements in the
                  jurisdictions in which it operates that require us to collect,
                  process, disclose and retain your personal data. For example,
                  Aegean taxi is subject to laws and regulations in many cities
                  and countries that require it to collect and retain
                  information about your trips, to retain such information for
                  extended periods of time, and to provide copies of such
                  information to governmental or other authorities. Aegean
                  taxiuses your information to comply with such laws to the
                  extent they apply to your use of the Aegean taxi apps.
                </li>
                <li key={`hwur17-${2}`}>
                  Aegean taxi may also share information with law enforcement,
                  or requests by third parties pursuant to legal processes.
                </li>
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
                <strong>f. Consent</strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur17-${1}`}>
                  Aegean taxi may collect and use your information on the basis
                  of your consent. You may revoke your consent at any time. If
                  you revoke your consent, you will not be able to use any
                  service or feature that requires collection or use of the
                  information we collected or used on the basis of consent.
                </li>
                <li key={`hwur17-${2}`}>
                  Aegean taxi relies on consent in connection with data
                  collections or uses that are necessary to enhance the user
                  experience, to enable optional services or features, or to
                  communicate with you. If you are an EU user, the following
                  types of data are collected or used on the basis of your
                  consent.
                </li>
                <li key={`hwur17-${3}`}>Location information (riders)</li>
                <li key={`hwur17-${4}`}>Share live location (riders)</li>
                <li key={`hwur17-${5}`}>
                  Notifications: Account and trip updates
                </li>
                <li key={`hwur17-${6}`}>Notifications: Discounts and news</li>
                <li key={`hwur17-${7}`}>Address book/contacts</li>
                <li key={`hwur17-${8}`}>Calendar syncing</li>
                <li key={`hwur17-${9}`}>
                  Please see the choice & transparency section below for further
                  information about these types of data collection and use, how
                  to opt in or out of them, and the effect of opting out of
                  these on your use of Aegean taxi&prime; apps.
                </li>
                <li key={`hwur17-${10}`}>
                  Aegean taxi may also collect personal information about you
                  through voluntary surveys. Your responses to such surveys are
                  collected on the basis of consent and will be deleted once no
                  longer necessary for the purposes collected.
                </li>
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Choices and Transparency
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                Aegean taxi provides means for you to see and control the
                information that Aegean taxiTaxi collects, including through:
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur18-${1}`}>in-app privacy settings</li>
                <li key={`hwur18-${2}`}>device permissions</li>
                <li key={`hwur18-${3}`}>in-app ratings pages</li>
                <li key={`hwur18-${4}`}>marketing opt-outs</li>
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
                You may also request that Aegean taxi provide you with
                explanation, copies or correction of your data.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <strong>A. PRIVACY SETTINGS</strong>
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
                The settings menu in the Aegean taxi rider app gives users the
                ability to set or update their location and contact sharing
                preferences, and their preferences for receiving mobile
                notifications from Aegean taxi . Information on these settings,
                how to set or change these settings, and the effect of turning
                off these settings is described below.
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
                <strong>Location information</strong>
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur19-${1}`}>
                  {" "}
                  Aegean taxi uses riders&prime; device location services to
                  make it easier to get a safe, reliable trip whenever you need
                  one. Location data helps improve our services, including
                  pick-ups, navigation and customer support.
                </li>
                <li key={`hwur19-${2}`}>
                  {" "}
                  You may enable/disable or adjust Aegean taxi&prime; collection
                  of rider location information at any time through the Privacy
                  settings menu in the Aegean taxi app or via the settings on
                  your mobile device. If you disable the device location
                  services on your device, your use of the Aegean taxi app will
                  be affected. For example, you will need to manually enter your
                  pick-up or drop-off locations.
                </li>
                <li key={`hwur19-${3}`}> Notifications: Discounts and news</li>
                <li key={`hwur19-${4}`}>
                  {" "}
                  You may enable Aegean taxi to send you push notifications
                  about discounts and news from Aegean taxi . You may
                  enable/disable these notifications at any time through the
                  Privacy settings menu in the Aegean taxi app.
                </li>
                <li key={`hwur19-${5}`}> Address book/contacts</li>
                <li key={`hwur19-${6}`}>
                  {" "}
                  You may enable Aegean taxi to periodically sync with the
                  address book/contacts information on your mobile device and
                  store your contact information on our servers. This includes
                  the names, phone numbers, emails addresses and other
                  information that you store in your address book contacts. This
                  information is necessary to enable features such as fare
                  splitting, sharing your trip status and making personalised
                  recommendations for you and other riders.
                </li>
                <li key={`hwur19-${7}`}>
                  {" "}
                  You may enable/disable contact syncing at any time via the
                  Privacy settings menu in the Aegean taxi app. If you disable
                  contact syncing, you will not be able to use features that use
                  your contacts&prime; information.
                </li>
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
                <strong>B. DEVICE PERMISSIONS</strong>
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
                Most mobile platforms (iOS, Android, etc.) have defined certain
                types of device data that apps cannot access without your
                consent. These platforms have different permission systems for
                obtaining your consent. The iOS platform will alert you the
                first time the Aegean taxi app wants permission to access
                certain types of data and will let you consent (or not consent)
                to that request. Android devices will notify you of the
                permissions that the Aegean taxi app seeks before you first use
                the app. Your use of the app constitutes your consent.
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
                <strong>C. RATINGS LOOK-UP</strong>
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
                After every trip, drivers and riders are able to rate each
                other, as well as give feedback on how the trip went. This
                two-way system holds everyone accountable for their behaviour.
                Accountability helps create a respectful, safe environment for
                both drivers and riders. Your rider rating is available in the
                main menu of the Aegean taxi rider app. Your driver rating is
                available in the Ratings tab of the Aegean taxi Partner app.
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
                <strong>D. EXPLANATIONS, COPIES AND CORRECTION.</strong>You may
                request that Aegean taxi :
              </Typography>

              <Typography
                component={"ul"}
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                <li key={`hwur20-${1}`}>
                  Provide a detailed explanation regarding the information
                  Aegean taxi has collected about you and how it uses that
                  information.
                </li>
                <li key={`hwur20-${2}`}>
                  Receive a copy of the information Aegean taxi has collected
                  about you.
                </li>
                <li key={`hwur20-${3}`}>
                  Request correction of any inaccurate information that Aegean
                  taxi has about you.
                </li>
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
                You can make these requests by contacting Aegean taxi hereYou
                can also edit the name, phone number and email address
                associated with your account through the Settings menu in Aegean
                taxi&prime; apps. You can also look up your trip, order and
                delivery history in the Aegean taxi apps.
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
                <strong>E. MARKETING OPT-OUTS</strong>
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
                You may opt out of receiving promotional emails from Aegean taxi
                here. You may also opt out of receiving emails and other
                messages from Aegean taxi by following the instructions in those
                messages. Please note that if you opt out, we may still send you
                non-promotional messages, such as receipts for your trips or
                information about your account.
              </Typography>
            </Grid>
          </Grid>
          {/*  */}

          {/*  */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Updates to this Policy
          </Typography>
          <Divider variant="fullWidth" sx={{ my: 1 }} />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 0,
            }}
          >
            Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                We may occasionally update this policy. If you use our services
                after an update, you consent to the updated policy.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  my: 2,
                  lineHeight: { xs: "22px", md: "30px" },
                }}
              >
                We may occasionally update this policy. If we make significant
                changes, we will notify you of the changes through the Aegean
                taxi apps or through others means, such as email. To the extent
                permitted under applicable law, by using our services after such
                notice, you consent to our updates to this policy. We encourage
                you to periodically review this policy for the latest
                information on our privacy practices. We will also make prior
                versions of our privacy policies available for review.
              </Typography>
            </Grid>
          </Grid>
          {/*  */}
        </Grid>
      </Grid>
    </Container>
  );
}

"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// material
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Cars
import BUS from "public/assets/onde-service-types/BUS.png";
import BUSINESS from "public/assets/onde-service-types/BUSINESS.png";
import CLASSIK from "public/assets/onde-service-types/CLASSIC.png";
import ECONOMY_YELLOW from "public/assets/onde-service-types/ECONOMY_yellow.png";
// import ECONOMY from "public/assets/onde-service-types/ECONOMY.png";
import MICRO_BUS from "public/assets/onde-service-types/MICRO_BUS.png";
import MINIVAN from "public/assets/onde-service-types/MINIVAN.png";
import SUV from "public/assets/onde-service-types/SUV.png";
import TESLA_MODEL_X from "public/assets/onde-service-types/TESLA_MODEL_X.png";
import VAN from "public/assets/onde-service-types/VAN.png";

// context
import { AppContext } from "@/context/appState";

// hooks
import useStorage from "@/hooks/useStorage";

// models
import { BookingState } from "@/types/bookingState";

export default function Driver(props: any) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [tripStatus, setTripStatus] = useState<string>();
  const [driver, setDriver] = useState<any>();

  const { getItem } = useStorage();
  const { setItem } = useStorage();
  const cookieState = getItem("aegean", "local");
  const appContext = useContext(AppContext);
  const contextState: BookingState = appContext.state;

  useEffect(() => {
    getOrderInfo();
    getDriverDetails();
    return () => {};
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    props.cancelTrip();
  };

  const handleCompleted = () => {
    clearTimeout(apiTimeout);
    setOpen(false);
    props.clearState();

    contextState.pickUpLocation = "";
    contextState.dropLocation = "";
    contextState.directions = null;
    contextState.selectedCar = null;
    contextState.driver = false;
    contextState.driverDetails = null;
    contextState.orderDetails = null;
    contextState.selectedCar = null;
    contextState.selectedCarConfirmed = false;
    contextState.nextButton = false;
    contextState.searchingForDriver = false;
    contextState.pickUpDate = "NOW";
    contextState.pickUpTime = "LATER";
    contextState.startLocationLat = null;
    contextState.startLocationLng = null;
    contextState.endLocationLat = null;
    contextState.endLocationLng = null;
    contextState.driverLocation = null;
    appContext.updateAppState(contextState);
    setItem("aegean", contextState, "local");

    router.push("/book-online");
  };

  let apiTimeout: any;

  const handleCanceled = () => {
    clearTimeout(apiTimeout);
    setOpen(false);
    props.cancelTrip();

    contextState.pickUpLocation = "";
    contextState.dropLocation = "";
    contextState.directions = null;
    contextState.selectedCar = null;
    contextState.driver = false;
    contextState.driverDetails = null;
    contextState.orderDetails = null;
    contextState.selectedCar = null;
    contextState.selectedCarConfirmed = false;
    contextState.nextButton = false;
    contextState.searchingForDriver = false;
    contextState.pickUpDate = "NOW";
    contextState.pickUpTime = "LATER";
    contextState.startLocationLat = null;
    contextState.startLocationLng = null;
    contextState.endLocationLat = null;
    contextState.endLocationLng = null;
    contextState.driverLocation = null;
    appContext.updateAppState(contextState);
    setItem("aegean", contextState, "local");
    props.clearState();

    router.push("/book-online");
  };

  const getDriverDetails = () => {
    // cancel
    if (props.orderDetails) {
      fetch(
        `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${contextState.orderDetails.orderId}/offer`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setDriver(result);
          },
          (error) => {
            // setError(error);
          }
        );
    }

    setOpen(false);
  };
  const getOrderInfo = () => {

    // contextState.driverLocation = {
    //   "lat": 37.4415004,
    //   "lng": 25.3351517
    // };
    // appContext.updateAppState(contextState);
    // setItem("aegean", contextState, "local");
    // props.updateDriverLocationHandler({
    //   "lat": 37.4415004,
    //   "lng": 25.3351517
    // })

    // clearTimeout(apiTimeout);
    // apiTimeout = setTimeout(() => {
    //   getOrderInfo();
    // }, 3000);


    if (props.orderDetails && contextState.orderDetails) {
      fetch(
        `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${contextState.orderDetails.orderId}/update`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            switch (result.status) {
              case `CANCELLED_BY_DISPATCH`:
              case `CANCELLED_BY_DRIVER`:
              case `CANCELLED_NO_PASSENGER`:
              case `CANCELLED_DECIDED_NOT_TO_GO`:
              case `CANCELLED_NO_TAXI`:
              case `CANCELLED_DRIVER_OFFLINE`:
              case `CANCELLED_SEARCH_EXCEEDED`:
                setTripStatus("Cancelled");
                break;
              case `ASSIGNED`:
                setTripStatus("Assigned");
                break;
              case `ARRIVED`:
                setTripStatus("Arrived");
                break;
              case `TRANSFERRING`:
                setTripStatus("Transferring");
                break;
              case `REVIEW_SUMMARY`:
                setTripStatus("Review");
                break;
              case `PAYMENT`:
                setTripStatus("Payment");
                break;
              case `STARTED`:
                setTripStatus("Started");
                break;
              case `StatusArrived`:
                setTripStatus("Arrived");
                break;
              case `FINISHED_PAID`:
              case `FINISHED_UNPAID`:
                setTripStatus("Completed");
                break;
              default:
                setTripStatus("Other");
                break;
            }

            contextState.driverLocation = result.driverLocation;
            appContext.updateAppState(contextState);
            setItem("aegean", contextState, "local");
            props.updateDriverLocationHandler(result.driverLocation);

            if (tripStatus !== "Completed" && tripStatus !== "Cancelled") {
              clearTimeout(apiTimeout);
              apiTimeout = setTimeout(() => {
                getOrderInfo();
              }, 10000);
            } else {
              clearTimeout(apiTimeout);
            }
          },
          (error) => {
            // setError(error);
          }
        );
    }

    setOpen(false);
  };

  const getImage = (name: string) => {
    switch (name) {
      case `econ`:
        return ECONOMY_YELLOW;
        break;

      case `luxury`:
        return BUSINESS;
        break;

      case `suv`:
        return SUV;
        break;

      case `van`:
        return VAN;
        break;
      default:
        return ECONOMY_YELLOW;
    }
  };

  return (
    <>
      <Box pt={3}>
        {driver && (
          <Grid container>
            <Grid item xs={3} md={3}>
              <Image
                src={getImage(driver.car.vehicleType.toLowerCase())}
                width={137}
                height={100}
                alt={driver.car.vehicleType}
              />
            </Grid>
            <Grid item xs={9} md={9}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Stack sx={{ textAlign: "right", mt: 3 }}>
                  <Typography variant="body2">{driver.driver.name}</Typography>
                  <Typography variant="h6">{driver.car.plateNumber}</Typography>
                  <Typography variant="caption">
                    {driver.car.color} {driver.car.model}
                  </Typography>
                  <Typography variant="caption">
                    <Link href={`tel:${driver.Phone}`} color="inherit">
                      {driver.driver.phone}
                    </Link>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>

      <Alert sx={{ my: 2 }} severity="info">
        <strong>Order status:</strong> {tripStatus}
      </Alert>

      <Box sx={{ p: 2 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12} md={8}>
            {tripStatus !== "Cancelled" &&
              tripStatus !== "Completed" &&
              tripStatus !== "Review" &&
              tripStatus !== "Transferring" &&
              tripStatus !== "Payment" && (
                <Button
                  color="error"
                  variant="contained"
                  fullWidth={true}
                  onClick={handleClickOpen}
                >
                  Cancel
                </Button>
              )}

            {(tripStatus === "Cancelled" || tripStatus === "Completed") && (
              <Button
                variant="contained"
                fullWidth={true}
                onClick={handleCompleted}
              >
                Start a new trip
              </Button>
            )}
          </Grid>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Cancel trip?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure that you want to cancel your trip?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleCanceled} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

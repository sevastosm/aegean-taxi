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

export default function Driver(props: any) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [tripStatus, setTripStatus] = useState<string>();
  const appState = useContext(AppContext);

  useEffect(() => {
    getOrderInfo();

    return () => {};
  }, [appState]);

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
    props.clearState();
    router.push("/book-online/verification");
  };

  let apiTimeout: any;
  const getOrderInfo = () => {
    // cancel
    if (props.orderDetails) {
      fetch(
        `https://carky-api.azurewebsites.net/api/AdminDashboard/Trips/GetTripDetails?tripId=${props.orderDetails.Id}`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${appState.state.apiToken}`,
            "content-type": "application/json",
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(1111, result.Status);
            switch (result.Status) {
              case `StatusCancelledByDispatch`:
              case `StatusCancelledDecidedNotToGo`:
              case `StatusCancelledSearchExceeded`:
              case `StatusCancelledByDriver`:
              case `StatusCancelledNoPassenger`:
              case `StatusCancelledNoTaxi`:
              case `StatusCancelledDriverOffline`:
              case `CancelledByDispatch`:
              case `CancelledDecidedNotToGo`:
              case `CancelledSearchExceeded`:
              case `CancelledByDriver`:
              case `CancelledNoPassenger`:
              case `CancelledNoTaxi`:
              case `CancelledDriverOffline`:
                setTripStatus("Cancelled");
                break;
              case `dispatched`:
                setTripStatus("Dispatched");
                break;
              case `arrived`:
                setTripStatus("Arrived");
                break;
              case `scheduled`:
                setTripStatus("Scheduled");

              case `completed`:
                setTripStatus("Completed");
                break;
              case `onride`:
                setTripStatus("On ride");
                break;
              case `StatusAssigned`:
                setTripStatus("Assigned");
                break;
              case `StatusStarted`:
                setTripStatus("Started");
                break;
              case `StatusArrived`:
                setTripStatus("Arrived");
                break;
              case `StatusFinishedPaid`:
              case `StatusFinishedPaidDeprecated`:
              case `StatusFinishedUnpaid`:
              case `StatusFinishedUnpaidDeprecated`:
              case `FinishedPaid`:
              case `FinishedPaidDeprecated`:
              case `FinishedUnpaid`:
              case `FinishedUnpaidDeprecated`:
                setTripStatus("Finished");
                break;
              case `StatusPayment`:
              case `Payment`:
                setTripStatus("Payment");
                break;
              case `StatusSearch`:
              case `StatusTransferring`:
              case `StatusReviewSummary`:
              case `Search`:
              case `Transferring`:
              case `ReviewSummary`:
              default:
                setTripStatus("Other");
                break;
            }

            if (tripStatus !== "Completed" && tripStatus !== "Cancelled") {
              apiTimeout = setTimeout(() => {
                getOrderInfo();
              }, 5000);
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
        <Grid container>
          <Grid item xs={3} md={3}>
            <Image
              src={getImage(props.driverDetails.CarkyCategory.toLowerCase())}
              width={137}
              height={100}
              alt={props.driverDetails.CarkyCategory}
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
                <Typography variant="body2">
                  {props.driverDetails.FirstName}
                </Typography>
                <Typography variant="h6">
                  {props.driverDetails.CarPlates}
                </Typography>
                <Typography variant="caption">
                  {props.driverDetails.CarColor} {props.driverDetails.Car}
                </Typography>
                <Typography variant="caption">
                  <Link
                    href={`tel:${props.driverDetails.Phone}`}
                    color="inherit"
                  >
                    {props.driverDetails.Phone}
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Alert sx={{ my: 2 }} severity="info">
        <strong>Order status:</strong> {tripStatus}
      </Alert>

      <Box sx={{ p: 2 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12} md={8}>
            {tripStatus !== "Canceled" &&
              tripStatus !== "Completed" &&
              tripStatus !== "On ride" &&
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

            {tripStatus === "Canceled" ||
              tripStatus === "Completed" && (
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
            <Button onClick={handleConfirm} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

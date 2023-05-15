"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Loader } from "@googlemaps/js-api-loader";

// Styles
import styles from "./form.module.scss";

// Material
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import CropSquareSharp from "@mui/icons-material/CropSquareSharp";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import Typography from "@mui/material/Typography";

// Google Maps
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const loader = new Loader({
  apiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
  version: "weekly",
  libraries: ["places"],
});

// components
// import PredictionListItem from "./../components/predictions-list";

// context
import { AppContext } from "@/context/appState";

// hooks
import useStorage from "@/hooks/useStorage";

export default function FormComponent() {
  // const router = useRouter();
  const appState = useContext(AppContext);

  const [initGoogle, setGoogle] = useState<boolean>(false);
  const [focusLocation, setFocusLocation] = useState<boolean>(false);
  const [focusDestination, setFocusDestination] = useState<boolean>(false);
  const [pickUpLocaction, setPickUpLocaction] = useState<any>();
  const [dropLocation, setDropLocation] = useState<any>();
  const [predictions, setPredictions] = useState<Array<any>>([]);
  const [triggerCalculate, setTriggerCalculate] = useState<boolean>(false);
  const [locationHandler, setLocationHandler] = useState<string>();

  const [autocompleteService, setAutocompleteService] = useState<any>();
  const [placesService, setPlacesService] = useState<any>();
  const [geocoderService, setGeocoderService] = useState<any>();

  const [nearbyLocations, setNearbyLocations] = useState<Array<any>>([]);
  const [currentLocationAddress, setCurrentLocationAddress] =
    useState<string>();
  const [currentLocation, setCurrentLocation] =
    useState<google.maps.LatLngLiteral>();

  useEffect(() => {
    if (!initGoogle) {
      setGoogle(true);
      loader
        .load()
        .then((google) => {
          // new google.maps.Map(document.getElementById("map"), mapOptions);
          setAutocompleteService(
            () => new window.google.maps.places.AutocompleteService()
          );

          setPlacesService(
            () =>
              new google.maps.places.PlacesService(
                document.createElement("div")
              )
          );

          setGeocoderService(() => new google.maps.Geocoder());
        })
        .catch((e) => {
          // do something
        });
    }
  }, [initGoogle]);

  const displaySuggestions = function (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null,
    status: google.maps.places.PlacesServiceStatus,
    target: string
  ) {
    if (
      status != window.google.maps.places.PlacesServiceStatus.OK ||
      !predictions
    ) {
      console.log(status);
      return;
    }

    setPredictions(() => predictions);
  };

  const getSuggestions = (event: any, target: string) => {
    // if (nextButton) {
    //   setNextButton(false);
    // }

    if (event.target.value.length) {
      // setError(null);
      autocompleteService.getQueryPredictions(
        { input: event.target.value },
        displaySuggestions
      );
    }

    let predictionsLength = predictions.length;
    if (predictionsLength && target === "pickUp") {
      setTriggerCalculate(false);
      // setPickUpLocaction(event.target.value);
      setLocationHandler(() => "pickUp");
    } else if (predictionsLength && target === "dropOff") {
      setTriggerCalculate(false);
      // setDropLocation(event.target.value);
      setLocationHandler(() => "dropOff");
    }
  };

  const toggleFocusLocation = () => () => {
    setFocusLocation(!focusLocation);
    setNearbyLocations([]);
    setCurrentLocationAddress("");
  };

  const toggleFocusDestination = () => () => {
    setFocusDestination(!focusDestination);
    setCurrentLocationAddress("");
    setNearbyLocations([]);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        p={2}
      >
        <Box
          mt={2}
          sx={{ width: "100%" }}
          className={focusLocation ? styles.onFocusStyles : styles.onBlurStyles}
        >
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Input
              id="standard-adornment-weight"
              value={pickUpLocaction}
              onChange={(e) => {
                setPickUpLocaction(e.target.value);
                getSuggestions(e, "pickUp");
              }}
              disableUnderline={true}
              fullWidth={true}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              autoComplete="off"
              onFocus={toggleFocusLocation()}
              onBlur={toggleFocusLocation()}
              className={styles.inputContainer}
              placeholder="Add a pick up location"
              startAdornment={
                <InputAdornment position="end" className={styles.square}>
                  <CropSquareSharp fontSize="inherit" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end" className={styles.clearButton}>
                  <IconButton
                    aria-label="clear input"
                    // onClick={handleClearPickup}
                    edge="end"
                  >
                    {/* {open && pickUpLocaction && <CancelOutlinedIcon />} */}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box
          mt={2}
          sx={{ width: "100%" }}
          className={
            focusDestination ? styles.onFocusStyles : styles.onBlurStyles
          }
        >
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Input
              id="standard-adornment-weight"
              value={dropLocation}
              onChange={(e) => {
                setDropLocation(e.target.value);
                getSuggestions(e, "dropOff");
              }}
              disableUnderline={true}
              fullWidth={true}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              autoComplete="off"
              onFocus={toggleFocusDestination()}
              onBlur={toggleFocusDestination()}
              className={styles.inputContainer}
              placeholder="Enter your destination"
              startAdornment={
                <InputAdornment position="end" className={styles.square}>
                  <CropSquareSharp fontSize="inherit" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end" className={styles.clearButton}>
                  <IconButton
                    aria-label="clear input"
                    // onClick={handleClearDropOff}
                    edge="end"
                  >
                    {/* {open && dropLocation && <CancelOutlinedIcon />} */}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        {/* <div
          className={`${styles.connectionLine} ${
            open ? styles.connectionLineOnOpen : ""
          }`}
        ></div> */}
      </Box>

      {/* {nextButton && (
        <Box mt={3} px={3}>
          <Button
            variant="contained"
            onClick={nextButtonHandler}
            size="large"
            fullWidth={true}
          >
            Next
          </Button>
        </Box>
      )} */}
    </>
  );
}

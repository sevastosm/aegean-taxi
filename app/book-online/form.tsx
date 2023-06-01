"use client";
import React, { useState, useContext } from "react";
import dayjs from "dayjs";

// Styles
import styles from "@/components/requestRideForm/form.module.scss";

// Material
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CropSquareSharp from "@mui/icons-material/CropSquareSharp";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"; // Grid version 1
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventSharpIcon from "@mui/icons-material/EventSharp";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

// context
import { AppContext } from "@/context/appState";

// hooks
import useStorage from "@/hooks/useStorage";

export default function FormComponent({}: {}) {
  const [openDayPicker, setOpenDayPicker] = useState<boolean>(false);
  const [pickUpDate, setPickUpDate] = useState<string>("NOW");
  const [openTimePicker, setOpenTimePicker] = useState<boolean>(false);
  const [pickUpTime, setPickUpTime] = useState<string>("LATER");

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
      <Paper
        elevation={0}
        sx={{ width: { xs: "100%", md: "60%" }, padding: 2 }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: { xs: "center", md: "start" },
            flexDirection: "column",
          }}
        >
          <Typography
            component="span"
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
              m: 0,
            }}
          >
            Select pick up/drop off details
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              mt={2}
              sx={{ width: "100%" }}
              className={
                focusLocation ? styles.onFocusStyles : styles.onBlurStyles
              }
            >
              <FormControl variant="filled" sx={{ width: "100%" }}>
                <Input
                  id="standard-adornment-weight"
                  // value={pickUpLocaction}
                  // onChange={(e) => {
                  //   setPickUpLocaction(e.target.value);
                  //   getSuggestions(e, "pickUp");
                  // }}
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
                    <InputAdornment
                      position="end"
                      className={styles.clearButton}
                    >
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
                  // value={dropLocation}
                  // onChange={(e) => {
                  //   setDropLocation(e.target.value);
                  //   getSuggestions(e, "dropOff");
                  // }}
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
                    <InputAdornment
                      position="end"
                      className={styles.clearButton}
                    >
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
            <div className={`${styles.connectionLine} `}></div>
          </Box>
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
        <Grid container spacing={1} mt={1}>
          <Grid item xs={6} md={6}>
            <Box sx={{ position: "relative" }}>
              <Button
                startIcon={<EventSharpIcon />}
                variant="contained"
                size="large"
                fullWidth={true}
                onClick={() => {
                  setOpenDayPicker(true);
                }}
                sx={{ position: "absolute", zIndex: 999 }}
              >
                {pickUpDate}
              </Button>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=""
                  open={openDayPicker}
                  disablePast={true}
                  sx={{
                    position: "absolute",
                    zIndex: 0,
                  }}
                  onClose={() => setOpenDayPicker(false)}
                  slotProps={{ textField: { size: "small" } }}
                  onChange={(value: any) =>
                    setPickUpDate(dayjs(value).format("DD/MM/YYYY"))
                  }
                />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box sx={{ position: "relative" }}>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<AccessTimeIcon />}
                size="large"
                fullWidth={true}
                onClick={() => {
                  setOpenTimePicker(true);
                }}
                sx={{ position: "absolute", zIndex: 999 }}
              >
                {pickUpTime}
              </Button>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopTimePicker
                  defaultValue={dayjs()}
                  label=""
                  open={openTimePicker}
                  disablePast={true}
                  sx={{
                    position: "absolute",
                    zIndex: 0,
                  }}
                  onClose={() => setOpenTimePicker(false)}
                  slotProps={{ textField: { size: "small" } }}
                  onChange={(value: any) => {
                    setPickUpTime(dayjs(value).format("HH:mm:ss"));
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

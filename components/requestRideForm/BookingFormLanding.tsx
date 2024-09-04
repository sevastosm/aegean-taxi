/**
 * Resents fake ride form Landing page"
 */

import React, { useState } from "react";
import NextLink from "next/link";

// Styles
import styles from "./form.module.scss";

// Material
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

// context

// hooks
import DownloadAppButton from "../downloadAppButton";
import Observer from "./Observer";
import HeaderWrapper from "../layout/HeaderWrapper";

export default function FormComponent({
  elevation = 0,
  widthMD = "50%",
  displayTitle = true,
}: {
  elevation?: number;
  widthMD?: string;
  displayTitle?: boolean;
}) {
  const [focusLocation, setFocusLocation] = useState<boolean>(false);
  const [focusDestination, setFocusDestination] = useState<boolean>(false);

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
    <HeaderWrapper>
      <Paper
        elevation={elevation}
        sx={{
          width: { xs: "100%", md: widthMD, background: "white", zIndex: 1 },
          padding: { xs: "0", md: 2 },
        }}
      >
        <div className="absolute bg-transparent h-[400px] md:h-full w-full z-10 cursor-pointer left-0 top-0"></div>

        {displayTitle && (
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", md: "start" },
              flexDirection: "column",
            }}
          >
            <Typography
              component="span"
              variant="h5"
              sx={{
                fontWeight: "bold",
                // fontSize: 32,
                marginTop: { xs: "10px", md: "auto" },
              }}
            >
              Request a ride now
            </Typography>
          </Box>
        )}
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
                  placeholder="Enter pickup location"
                  disabled
                  startAdornment={
                    <InputAdornment position="end" className={styles.square}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <ellipse
                          cx="5.37223"
                          cy="4.83582"
                          rx="4.53044"
                          ry="4.83582"
                          fill="black"
                        />
                        <path
                          d="M9.40267 4.83582C9.40267 7.26165 7.56796 9.17164 5.37223 9.17164C3.17651 9.17164 1.3418 7.26165 1.3418 4.83582C1.3418 2.40999 3.17651 0.5 5.37223 0.5C7.56796 0.5 9.40267 2.40999 9.40267 4.83582Z"
                          stroke="black"
                          stroke-opacity="0.6"
                        />
                      </svg>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment
                      position="end"
                      className={styles.clearButton}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M18.0173 5.86911L1.59342 11.8794C1.33323 11.9764 1.16813 12.2366 1.19752 12.513C1.21114 12.6476 1.26983 12.7736 1.36419 12.8711C1.45854 12.9686 1.5831 13.0317 1.7179 13.0505L10.3405 14.274L11.5722 22.8387C11.6111 23.1143 11.835 23.3281 12.1125 23.3564C12.3009 23.377 12.4825 23.3083 12.6095 23.1821C12.6709 23.1211 12.7193 23.0473 12.7504 22.9631L18.8014 6.64958C18.8843 6.42635 18.829 6.17735 18.6605 6.00992C18.4919 5.84249 18.2412 5.78754 18.0173 5.86911Z"
                          fill="black"
                        />
                      </svg>
                      {/* {open && pickUpLocaction && <CancelOutlinedIcon />} */}
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
                  disabled
                  autoComplete="off"
                  onFocus={toggleFocusDestination()}
                  onBlur={toggleFocusDestination()}
                  className={styles.inputContainer}
                  placeholder="Enter dropoff location"
                  startAdornment={
                    <InputAdornment position="end" className={styles.square}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <rect
                          x="0.841797"
                          y="0.328369"
                          width="9.06088"
                          height="9.67164"
                          rx="1"
                          fill="black"
                        />
                        <rect
                          x="1.3418"
                          y="0.828369"
                          width="8.06088"
                          height="8.67164"
                          rx="0.5"
                          stroke="black"
                          stroke-opacity="0.6"
                        />
                      </svg>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment
                      position="end"
                      className={styles.clearButton}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="27"
                        viewBox="0 0 19 27"
                        fill="none"
                      >
                        <path
                          d="M8.60234 25.7404C1.74543 14.9326 0.472656 13.8234 0.472656 9.85141C0.472656 4.41061 4.52933 0 9.53353 0C14.5377 0 18.5944 4.41061 18.5944 9.85141C18.5944 13.8234 17.3216 14.9326 10.4647 25.7404C10.0147 26.4471 9.05227 26.4471 8.60234 25.7404ZM9.53353 13.9562C11.6186 13.9562 13.3089 12.1184 13.3089 9.85141C13.3089 7.58441 11.6186 5.74666 9.53353 5.74666C7.44845 5.74666 5.75817 7.58441 5.75817 9.85141C5.75817 12.1184 7.44845 13.9562 9.53353 13.9562Z"
                          fill="black"
                          fill-opacity="0.15"
                        />
                      </svg>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <div className={`${styles["connectionLine-landing"]} `}></div>
          </Box>
          <Button
            sx={{
              textTransform: "none",
              marginTop: "16px",
              padding: "9px 0",
            }}
            variant="contained"
            // onClick={nextButtonHandler}
            size="large"
            fullWidth={true}
          >
            Check Prices
          </Button>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "12px",
          }}
        >
          <DownloadAppButton showMd="none" showStoresMD="none" />
          <Observer />
        </Box>
      </Paper>
    </HeaderWrapper>
  );
}

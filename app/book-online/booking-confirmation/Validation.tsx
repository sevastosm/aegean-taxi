// @ts-nocheck
"use client";
import React, { useRef } from "react";
import { useEffect, useState, useContext } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import OtpInput from "react-otp-input";

import Image from "next/image";

import styles from "./styles.module.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// context
import { AppContext } from "@/context/appState";

// hooks
import useStorage from "@/hooks/useStorage";

// models
import { BookingState } from "@/types/bookingState";

// crypto
import AES from "crypto-js/aes";
import { createOrder, sendSms } from "@/utils/fetchers";
import { height, padding } from "@mui/system";
var CryptoJS = require("crypto-js");

export default function Validation({}: {}) {
  const router = useRouter();
  const pathName = usePathname();
  const appState = useContext(AppContext);
  const [secCode, setSecCode] = useState<any>(null);

  const { getItem, removeItem } = useStorage();
  const { setItem } = useStorage();
  const cookieState = getItem("aegean", "local");
  const appContext = useContext(AppContext);
  const contextState: BookingState = appContext.state;
  const [bookingState, setBookingState] = useState<BookingState>();
  const [otp, setOtp] = useState("");

  // useEffect(() => {
  //   appState.state = aegeanState;
  //   if (aegeanState && aegeanState.userVerified) {
  //     router.push("/book-online");
  //   }
  // }, [aegeanState]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const orderid = searchParams.get("orderid");

  useEffect(() => {
    setItem("validationBeenVisited", true, "local");
  }, []);

  const handleChange = (event: any) => {
    setSecCode(event.target.value as string);
  };
  useEffect(() => {
    console.log("set state");
    if (cookieState) {
      console.log(1, cookieState);
      setBookingState(() => cookieState);
      appContext.updateAppState(cookieState);
    }

    return () => {};
  }, []);

  console.log("bookingState", bookingState);

  async function onSubmit(e) {
    e.preventDefault();
    let securityCode = AES.decrypt(
      `${appState.state.security.code}`,
      `${process.env.NEXT_PUBLIC_CRYPTO_KEY}`
    );

    if (securityCode.toString(CryptoJS.enc.Utf8) === secCode) {
      (appState.state.searchingForDriver = true),
        (appState.state.userVerified = true);
      appState.state.security.code = "null";
      appState.updateAppState(appState.state);

      setItem("aegean", appState.state, "local");
      const createOrderData = await createOrder(appState.state);
      if (createOrderData.orderId) {
        appState.state.orderDetails = createOrderData;
        appState.updateAppState(appState.state);
        appState.state &&
          sendSms(
            `00${appState.state.phoneNumber.replace("+", "")}`,
            `Your taxi booking request has been received.Please check the below link to see the status of your reservation and your driver details once assigned.https://aegeantaxi.com/orders?orderid=${createOrderData.orderId}`
          );
        router.push(`/orders?orderid=${createOrderData.orderId}`);
      }
    }
  }

  const handleGoBack = () => {
    // Navigate to the previous page in the history stack
    router.back();
  };

  // Create references for each input field
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Function to handle input changes and focus the next input
  const handleForm = (e, index) => {
    const { value } = e.target;
    if (value.length === 1) {
      // Move to the next input if there is a value
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  return (
    <Box
      sx={{
        position: "relative", // Set position relative to contain the absolute positioned back button
        minHeight: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center content vertically
        px: 2, // Horizontal padding
      }}
    >
      <IconButton
        onClick={handleGoBack}
        sx={{
          position: "absolute",
          top: 16, // Adjust top position as needed
          left: 16, // Adjust left position as needed
          backgroundColor: "#264388",
          padding: 2,
          width: 50,
          height: 50,
          borderRadius: "50%",
          zIndex: 10, // Ensure button is on top of other content
        }}
      >
        <ArrowBackIcon sx={{ color: "white", width: "100%", height: "100%" }} />
      </IconButton>

      <Grid container spacing={0} columns={10} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              component="h1"
              sx={{
                fontWeight: "500", // Font weight similar to Tailwind's 'font-semibold'
                fontSize: "1.15rem", // Font size similar to Tailwind's 'text-xl'
                color: "#244284", // Specific font color
                textAlign: "center", // Center text alignment
                mb: 2, // Margin bottom for spacing
              }}
            >
              Enter the 5-digit code sent to you at
              <br />
              <b>{appState.phoneNumber}</b>
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={3}>
                <input
                  disabled
                  value={bookingState?.countryCode}
                  className="text-black bg-gray-200 font-semibold p-4 w-full rounded-md"
                />
              </Grid>
              <Grid item xs={9}>
                <input
                  disabled
                  value={bookingState?.phone}
                  className="text-black bg-gray-200 font-semibold p-4 w-full rounded-md"
                />
              </Grid>
            </Grid>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              my={2}
            >
              <Typography
                color="#E53935"
                fontWeight="600"
                align="center"
                variant="body2"
                sx={{ fontSize: "13px" }}
              >
                *Make sure you entered the correct country code
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                px: 1,
              }}
            >
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={5}
                // renderSeparator={<span >-</span>}
                inputStyle={{
                  color: "black",
                  fontSize: "16px",
                  width: "50px",
                  height: "50px",
                }}
                inputType="number"
                renderInput={(props) => (
                  <input
                    class="text-black  mx-2 bg-gray-200 text-[26px] font-semibold rounded-md"
                    {...props}
                  />
                )}
              />
            </Box>

            <Box
              my={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/assets/whatsAppNew.svg"
                alt="Wallet Icon"
                sx={{ margin: "my-2" }}
                width={50} // Specify the width of the image
                height={50} // Specify the height of the image
              />
              <Typography
                component="p"
                sx={{
                  fontWeight: "500", // Font weight similar to Tailwind's 'font-semibold'
                  fontSize: "1rem", // Font size similar to Tailwind's 'text-xl'
                  color: "#000", // Specific font color
                  textAlign: "center", // Center text alignment
                  my: 2, // Margin bottom for spacing
                }}
              >
                If you have not received your SMS verification, please click on
                the whatsapp button to message us directly
              </Typography>
            </Box>

            {/* <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ textTransform: "none", mt: 2 }} // Margin top for spacing
              onClick={onSubmit}
            >
              Next
            </Button>

            <Box mt={2}>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("Resend code clicked.");
                }}
              >
                Resend code
              </Link>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

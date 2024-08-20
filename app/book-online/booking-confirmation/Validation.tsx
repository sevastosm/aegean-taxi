// @ts-nocheck
"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";

import styles from "./styles.module.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// context
import { AppContext } from "@/context/appState";

// hooks
import useStorage from "@/hooks/useStorage";

// models
import { BookingState } from "@/types/bookingState";

// crypto
import AES from "crypto-js/aes";
import { createOrder, sendSms } from "@/utils/fetchers";
var CryptoJS = require("crypto-js");

export default function Validation({}: {}) {
  const router = useRouter();
  const pathName = usePathname();
  const appState = useContext(AppContext);
  const [secCode, setSecCode] = useState<any>(null);

  const { getItem } = useStorage();
  const { setItem } = useStorage();
  const aegeanState = getItem("aegean", "local");

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

  return (
    <Grid
      container
      spacing={0}
      columns={10}
      alignItems="flex-start"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        mt: 4,
      }}
    >
      <Grid item xs={8} md={2}>
        <Box>
          <Typography variant="body1" component="h1">
            Enter the 5-digit code sent to you at
            <br />
            <b>{aegeanState.phoneNumber}</b>
          </Typography>
        </Box>

        <Box my={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
            className={styles.formWrapper}
          >
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
              }}
            >
              <TextField
                id="standard-adornment-weight"
                value={secCode}
                onChange={handleChange}
                fullWidth={true}
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                className={styles.inputContainer}
              />
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          size="large"
          fullWidth={true}
          style={{ textTransform: "none" }}
          onClick={onSubmit}
        >
          Next
        </Button>

        <Box my={2}>
          <Link
            component="button"
            variant="body2"
            // onClick={() => {
            //   console.info("I'm a button.");
            // }}
          >
            {/* Resend code */}
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

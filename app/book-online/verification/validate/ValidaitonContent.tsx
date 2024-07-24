import { useRouter } from "next/navigation";
import React, { FormEvent, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AppContext } from "@/context/appState";
import useStorage from "@/hooks/useStorage";
import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";
import { sendSms, createOrder } from "@/utils/fetchers";
import styles from "./../styles.module.scss";

type Props = {
  handleCreateOrder: (orderId: string) => void;
};

const ValidationContent = ({ handleCreateOrder }: Props) => {
  const router = useRouter();
  const appState = useContext(AppContext);
  const [secCode, setSecCode] = useState<any>(null);

  const { getItem } = useStorage();
  const { setItem } = useStorage();

  const aegeanState = getItem("aegean", "local");

  const handleChange = (event: any) => {
    setSecCode(event.target.value as string);
  };

  async function onSubmit(e: FormEvent) {
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

      // Create order
      await createOrder(appState.state).then((data)=>{
        if (data.orderId) {
          appState.state.orderDetails = data;
          appState.updateAppState(appState.state);
  
           // Call handleCreateOrder to view BookingFlow
           handleCreateOrder(data.orderId);
        }
      });
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
      </Grid>
    </Grid>
  );
};

export default ValidationContent;

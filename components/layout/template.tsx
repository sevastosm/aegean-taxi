"use client";
import { useState, useEffect, useContext } from "react";
import "./../../app/globals.css";

// MUI
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import RootStyleRegistry from "./createEmotionCache";

// components
import DrawerAppBar from "components/layout/navbar";
import FooterLayout from "components/layout/footer";
// context
import { AppContext } from "@/context/appState";

export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentState, setCurrentState] = useState({
    apiToken: null,
    phoneNumber: "",
    security: {
      code: null,
      expires: null,
    },
    userVerified: false,
    pickUpLocation: "",
    dropLocation: "",
    driver: false,
    driverDetails: null,
    directions: null,
    selectedCar: null,
    orderDetails: null,
    showNavigatorButton: true,
    firstname: "",
    lastname: "",
  });

  const updateState = (state: any) => {
    setCurrentState(state);
  };

  return (
    <AppContext.Provider
      value={{ state: currentState, updateAppState: updateState }}
    >
      <RootStyleRegistry>
        <ThemeProvider theme={theme}>
          <Box>
            <CssBaseline />
            <DrawerAppBar />
            <Box component="main" sx={{mt: {xs:2.5, md:'initial'}}}>
              <Toolbar />
              {children}
            </Box>
            <FooterLayout />
          </Box>
        </ThemeProvider>
      </RootStyleRegistry>
    </AppContext.Provider>
  );
}

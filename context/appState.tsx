"use client";
import { useState } from "react";
import { createContext } from "react";

// models
import { BookingState } from "@/types/bookingState";

export const AppContext = createContext({
  state: {
    apiToken: "",
    phoneNumber: "",
    security: {
      code: "",
      expires: 0,
    },
    userVerified: false,
    pickUpLocation: "",
    dropLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    driver: false,
    driverDetails: null,
    directions: null,
    selectedCar: null,
    selectedCarConfirmed: false,
    orderDetails:null,
    showNavigatorButton: true,
    nextButton: false,
    firstName: "",
    lastName: "",
    searchingForDriver: false,
    startLocationLat:"",
    startLocationLng:"",
    endLocationLat:"",
    endLocationLng:"",
    rideScheduled: false,
  },
  updateAppState: (state: any) => {},
});

export default function AppContextProvider({ children }: { children: any }) {
  const [currentState, setCurrentState] = useState<BookingState>({
    apiToken: "",
    phoneNumber: "",
    security: {
      code: "",
      expires: 0,
    },
    userVerified: false,
    pickUpLocation: "",
    dropLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    driver: false,
    driverDetails: null,
    directions: null,
    selectedCar: null,
    selectedCarConfirmed: false,
    orderDetails:null,
    showNavigatorButton: true,
    nextButton: false,
    firstName: "",
    lastName: "",
    searchingForDriver: false,
    startLocationLat:"",
    startLocationLng:"",
    endLocationLat:"",
    endLocationLng:"",
    rideScheduled: false,
  });

  const updateState = (state: any) => {
    setCurrentState(state);
  };

  return (
    <AppContext.Provider
      value={{ state: currentState, updateAppState: updateState }}
    >
      {children}
    </AppContext.Provider>
  );
}

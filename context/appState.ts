import { createContext } from 'react';

export const AppContext = createContext({
  state: {
    apiToken: null,
    phoneNumber: '',
    security: {
      code: null,
      expires: null,
    },
    userVerified: false,
    pickUpLocation: '',
    dropLocation: '',
    driver: false,
    driverDetails: null,
    directions: null,
    selectedCar: null,
    orderDetails: null,
    showNavigatorButton: true,
    firstname: '',
    lastname: ''
  },
  updateAppState: (state: any) => {},
});

"use client";

// GoogleMapsProvider.js
import React, { createContext, useContext } from 'react';
import { useLoadScript } from '@react-google-maps/api';

// Create the GoogleMapsContext
const GoogleMapsContext = createContext(null);

export const useGoogleMaps = () => useContext(GoogleMapsContext);

// GoogleMapsProvider component to wrap your app
export const GoogleMapsProvider = ({ children }) => {
  const libraries = ['places'];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMapsContext.Provider value={window.google}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

import React, { useContext, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  InfoWindow,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";
import { ZoomInMap } from "@mui/icons-material";
import { locationDetails } from "@/utils/locationDetails";
import { positions } from "@mui/system";
const uberCar = "/assets/booking-flow/uberCar.svg";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 37.451414,
  lng: 25.2984466,
};

function MapTracking({ orderDetails, tracking = null }) {
  console.log("orderDetails", orderDetails);
  console.log("tracking", tracking);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const carMarkerRef = useRef(null); // For keeping reference to the car marker

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [originPosition, setOriginPosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);
  const [carPosition, setCarPosition] = useState(null);
  const [carMarker, setCarMarker] = useState(null);

  const [zoom, setZoom] = useState(11);

  const { waypoints } = orderDetails;

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
  };

  const mapRef = useRef(null);

  // Helper function to calculate the heading (bearing) between two LatLng points
  const computeHeading = (start, end) => {
    return window.google.maps.geometry.spherical.computeHeading(start, end);
  };

  const animateCar = (route) => {
    let step = 0;

    if (carMarker) {
      carMarker.setMap(null); // Remove existing marker
    }

    const marker = new window.google.maps.Marker({
      position: route[0], // Initial position
      map,
      icon: {
        url: "https://aegean-taxi-sandbox.netlify.app/uberIcon.svg", // Car icon URL
        scaledSize: new window.google.maps.Size(50, 50), // Size of the icon
        anchor: new window.google.maps.Point(25, 25), // Anchor to center the icon
        rotation: 0, // Initial rotation
      },
    });

    setCarMarker(marker);
    carMarkerRef.current = marker;

    const moveCar = () => {
      if (step < route.length - 1) {
        const heading = computeHeading(route[step], route[step + 1]);

        marker.setPosition({
          lat: tracking?.driverLocation.lat,
          lng: tracking?.driverLocation.lng,
        });

        // Update the icon's rotation based on heading
        marker.setIcon({
          url: uberCar, // Car icon URL
          scaledSize: new window.google.maps.Size(35, 35),
          anchor: new window.google.maps.Point(25, 25),
          rotation: tracking?.driverLocation.bearing, // Set the rotation
        });

        step += 1;
        window.requestAnimationFrame(moveCar);
      }
    };

    moveCar();
  };

  useEffect(() => {
    if (isLoaded) {
      const origin = waypoints[0].placeLatLng;
      const destination = waypoints[1].placeLatLng;

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
            setOriginPosition(origin);
            setDestinationPosition(destination);
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    }
  }, [waypoints, isLoaded]);

  // useEffect(() => {
  //   const position = {
  //     lat: tracking?.driverLocation.lat,
  //     lng: tracking?.driverLocation.lng,
  //   };

  //   if (
  //     (tracking && tracking?.status === "TRANSFERRING") ||
  //     tracking?.status === "STARTED"
  //   ) {
  //     setCarPosition(position);
  //   }

  //   //   {
  //   //     "driverId": "8cfe26fa-543e-405c-a82b-2423c3d79df6",
  //   //     "driverLocation": {
  //   //         "accuracy": 4.8624396,
  //   //         "bearing": 215.22165,
  //   //         "speed": 5.554667,
  //   //         "time": "2024-09-05T10:05:27.541Z",
  //   //         "lat": 36.4034201086584,
  //   //         "lng": 25.472339893745684
  //   //     },
  //   //     "status": "TRANSFERRING"
  //   // }
  // }, [tracking]);

  useEffect(() => {
    if (directionsResponse) {
      console.log("directionsResponse", directionsResponse);

      animateCar(directionsResponse.routes[0].overview_path);
    }
  }, [tracking, directionsResponse]);

  return (
    isLoaded && (
      <GoogleMap
        ref={mapRef}
        mapContainerStyle={containerStyle}
        zoom={zoom}
        onLoad={(mapInstance) => {
          setMap(mapInstance);
        }}
        options={mapOptions}
        // onCenterChanged={handleCenterChanged}
        center={center}
        onUnmount={() => setMap(null)}
      >
        {originPosition && (
          <Marker
            position={originPosition}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE, // Use a built-in shape
              scale: 8, // Scale the icon
              fillColor: "#ffffff", // Fill color
              fillOpacity: 1, // Fill opacity
              strokeWeight: 8, // Outline width
              strokeColor: "#000000", // Outline color
            }}
          ></Marker>
        )}
        {destinationPosition && (
          <Marker
            position={destinationPosition}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE, // Use a built-in shape
              scale: 8, // Scale the icon
              fillColor: "#ffffff", // Fill color
              fillOpacity: 1, // Fill opacity
              strokeWeight: 8, // Outline width
              strokeColor: "#000000", // Outline color
            }}
          ></Marker>
        )}
        {/* 
        {tracking && (
          <Marker
            position={{
              lat: tracking?.driverLocation.lat,
              lng: tracking?.driverLocation.lng,
            }}
            icon={{
              url: uberCar, // Car icon
              scaledSize: new window.google.maps.Size(40, 40), // Icon size
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(25, 25), // Center the icon
            }}
          ></Marker>
        )} */}

        {directionsResponse && (
          <DirectionsRenderer
            options={{ suppressMarkers: true, suppressInfoWindows: true }}
            directions={directionsResponse}
          />
        )}
      </GoogleMap>
    )
  );
}

export default MapTracking;

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
import { AppContext } from "@/context/appState";
import { ZoomInMap } from "@mui/icons-material";
import { locationDetails } from "@/utils/locationDetails";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 37.451414,
  lng: 25.2984466,
};

function MapComponent({ calculateAndDisplayRoute, locationSearch }: any) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const appContext = useContext(AppContext);

  const contextState: BookingState = appContext.state;

  console.log("contextState", contextState);

  const origin = contextState.pickUpLocation;

  const destination = contextState.dropLocation;

  const originPos = {
    lat: contextState.startLocationLat,
    lng: contextState.startLocationLng,
  };

  const center = contextState.mapCenter;

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [originPosition, setOriginPosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);
  const [zoom, setZoom] = useState(11);

  const [centerMap, setCenter] = useState(center);

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

  useEffect(() => {
    if (origin !== "" && destination !== "" && isLoaded) {
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address: origin }, (results, status) => {
        if (status === "OK") {
          setOriginPosition(results[0].geometry.location);
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      });

      geocoder.geocode({ address: destination }, (results, status) => {
        if (status === "OK") {
          setDestinationPosition(results[0].geometry.location);
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      });

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
            calculateAndDisplayRoute(result);
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    }
  }, [origin, destination]);

  // useEffect(() => {
  //   if (locationSearch) {
  //     const mapOptions =
  //       locationDetails.taxi_locations[locationSearch]?.mapOptions;
  //     setZoom(mapOptions.zoom);
  //     setCenter({
  //       lat: mapOptions.lat,
  //       lng: mapOptions.lng,
  //     });
  //     contextState.mapCenter = {
  //       lat: mapOptions.lat,
  //       lng: mapOptions.lng,
  //     };
  //   }
  // }, [locationSearch]);

  useEffect(() => {
    if (map) {
      if (document.getElementById("centerMap")) {
        return;
      }
      const centerControlDiv = document.createElement("div");
      const centerControlUI = document.createElement("button");
      centerControlDiv.id = "centerMap";
      centerControlUI.style.backgroundColor = "#fff";
      centerControlUI.style.border = "2px solid #fff";
      centerControlUI.style.padding = "5px";
      centerControlUI.style.borderRadius = "100%";
      centerControlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
      centerControlUI.style.cursor = "pointer";
      centerControlUI.style.marginBottom = "22px";
      centerControlUI.style.marginRight = "16px";
      centerControlUI.style.textAlign = "center";
      centerControlUI.textContent = "Center Map";
      centerControlUI.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 492.589 492.589" xml:space="preserve">
<g>
	<path d="M468.467,222.168h-28.329c-9.712-89.679-80.46-161.18-169.71-172.258V24.135c0-13.338-10.791-24.134-24.134-24.134   c-13.311,0-24.117,10.796-24.117,24.134V49.91C132.924,60.988,62.177,132.488,52.482,222.168H24.153   C10.806,222.168,0,232.964,0,246.286c0,13.336,10.806,24.132,24.153,24.132h29.228c12.192,86.816,81.551,155.4,168.797,166.229   v31.804c0,13.336,10.806,24.135,24.117,24.135c13.343,0,24.134-10.799,24.134-24.135v-31.804   c87.228-10.829,156.607-79.413,168.775-166.229h29.264c13.33,0,24.122-10.796,24.122-24.132   C492.589,232.964,481.797,222.168,468.467,222.168z M246.294,398.093c-85.345,0-154.804-69.453-154.804-154.813   c0-85.363,69.459-154.813,154.804-154.813c85.376,0,154.823,69.45,154.823,154.813   C401.117,328.639,331.671,398.093,246.294,398.093z"/>
	<path d="M246.294,176.93c-36.628,0-66.34,29.704-66.34,66.349c0,36.635,29.711,66.349,66.34,66.349   c36.66,0,66.34-29.713,66.34-66.349C312.634,206.635,282.955,176.93,246.294,176.93z"/>
</g>
</svg>`;
      centerControlDiv.appendChild(centerControlUI);

      centerControlUI.addEventListener("click", () => {
        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode(
          { address: contextState.pickUpLocation },
          (results, status) => {
            if (status === "OK") {
              map.panTo(results[0].geometry.location);
            } else {
              console.error(
                `Geocode was not successful for the following reason: ${status}`
              );
            }
          }
        );
      });

      map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(
        centerControlDiv
      );
    }
  }, [map]);

  // const handleCenterChanged = (data) => {
  //   console.log("handleCenterChanged", map?.getCenter());
  // };

  console.log("originPosition", originPosition);
  console.log("destinationPosition", destinationPosition);

  return (
    isLoaded && (
      <>
        <style>{`
        /* Hide the close button in InfoWindow */
         button.gm-ui-hover-effect {
          display: none !important;
        }
        .gm-style .gm-style-iw-tc::after{
          display: none !important;
        }
      `}</style>
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
            >
              <view style={{ width: 40, height: 56 }}>
                <svg width="100%" height="100%" viewBox="0 0 40 56">
                  <path
                    d="M19.7 0c-10.9 .2-19.7 9.1-19.7 20v.1c0 .1 0 .2 0 .3c.1 7.6 4.5 14.1 10.7 17.4c1.8 .9 3.1 2.4 3.8 4.3l5.5 13.9l5.5-14c.7-1.8 2.1-3.3 3.8-4.2c6.4-3.4 10.7-10.1 10.7-17.8c0-11-9-20-20-20c-0.1 0-0.2 0-0.3 0Z"
                    // fill={fill}
                  />
                </svg>
              </view>
              <InfoWindow
                className="skate"
                position={originPosition}
                options={{ disableAutoPan: true }}
              >
                <div className="flex gap-2 l-10 items-center">
                  <div className="font-bold">{origin}</div>
                  <svg
                    className="-rotate-90 w-5 h-5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                  </svg>
                </div>
              </InfoWindow>
            </Marker>
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
            >
              <InfoWindow
                className="skate"
                position={destinationPosition}
                options={{ disableAutoPan: true }}
              >
                <div className="flex gap-2 l-10 items-center">
                  <div className="font-bold">{destination}</div>
                  <svg
                    className="-rotate-90 w-5 h-5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                  </svg>
                </div>
              </InfoWindow>
            </Marker>
          )}

          {directionsResponse && (
            <DirectionsRenderer
              options={{ suppressMarkers: true, suppressInfoWindows: true }}
              directions={directionsResponse}
            />
          )}
        </GoogleMap>
      </>
    )
  );
}

export default MapComponent;

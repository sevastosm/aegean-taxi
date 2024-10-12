import React, { useContext, useEffect, useRef, useState } from "react";
import { GoogleMap, DirectionsRenderer, Marker } from "@react-google-maps/api";
import { AppContext } from "@/context/appState";
import { useGoogleMaps } from "./GoogleMapsProvider";
import { useSearchParams } from "next/navigation";
import { debug } from "console";
import { updateStorage } from "@/heplers/updateStorage";
import { locationDetails } from "@/utils/locationDetails";
import { Place } from "@/types/types";
import useUrl from "@/app/hooks/useUrl";
import { activatePickUp, resetPickUp } from "../ui/helpers";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

import { cordToNumber } from "../../heplers/googleMap";
import { useStore } from "@/app/store/store";
const containerStyle = {
  width: "100%",
  height: "100%",
};
const center1 = {
  lat: 37.451414,
  lng: 25.2984466,
};

function MapComponent({ page = null }: any) {
  const isLoaded = useGoogleMaps();

  const searchParams = useSearchParams();
  const google = useGoogleMaps();

  const pickupLocation = useStore((state: any) => state.pickupLocation);
  const dropOffLocation = useStore((state: any) => state.dropOffLocation);

  const locationSearch = searchParams.get("location");
  const pinpickup = searchParams.get("pinpickup");
  const { updateLocationUrl, updateUrl } = useUrl();

  const activeLocation =
    locationSearch && locationDetails.taxi_locations[locationSearch];

  const origin = searchParams.get("origin");

  const originParam: Place | null = pickupLocation;
  const destinationParam: Place | null = dropOffLocation;

  const { mapOptions } = activeLocation;
  const center = {
    lat: mapOptions.lat,
    lng: mapOptions.lng,
    zoom: mapOptions.zoom,
  };

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showMap, setShowMap] = useState(true); // Control map rendering
  const [centerMap, setCenter] = useState(center);
  const [address, setAddrees] = useState(null);

  const options = {
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    mapId: "c6b58f8fae8c27a7",
  };

  const mapRef = useRef(null);
  // Refs to store the markers
  const originMarkerRef = useRef(null);
  const destinationMarkerRef = useRef(null);
  const directionsRendererRef = useRef(null);
  const pinMarkerRef = useRef(null);

  // Function to handle map click
  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const zoom = map.getZoom(); // Get current zoom level
    console.log("Clicked Lat:", lat, "Lng:", lng, "Zoom:", zoom);
  };

  // Function to clear directions

  const addCustomMarker = async (origin, destination, durationText) => {
    originMarkerRef.current?.setMap(null);
    destinationMarkerRef.current?.setMap(null);
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    // if (!directionsResponse) return;
    // const origin = "San Francisco"; // Example origin text (you can dynami"cally change this)
    // Clear previous markers
    // Create a custom HTML element for the marker
    const originContent = document.createElement("div");
    const destinationContent = document.createElement("div");
    destinationContent.innerHTML = `
      <div class="flex max-w-[100px] gap-2 bg-white items-center mb-1">
        <div class="bg-black text-[10px] max-w-[40px] text-center p-1 text-white">${durationText}</div>
        <div class="font-bold  text-[12px]">${destinationParam?.name}</div>
      </div>
    `;
    originContent.innerHTML = `
      <div class="flex max-w-[100px] bg-white  items-center mb-1">
        <div class="font-bold p-2 text-[12px]">${originParam?.name}</div>
      </div>
    `;

    // Create and store new markers
    const originMarker = new AdvancedMarkerElement({
      position: origin,
      map,
      content: originContent,
    });
    const destinationMarker = new AdvancedMarkerElement({
      position: destination,
      map,
      content: destinationContent,
    });

    // Store the markers in refs for future cleanup
    originMarkerRef.current = originMarker;
    destinationMarkerRef.current = destinationMarker;
  };

  const handleDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();
    if (pinMarkerRef?.current) {
      pinMarkerRef?.current.setMap(null);
    }
    directionsRendererRef.current.setMap(map);
    directionsRendererRef.current.setDirections({ routes: [] });

    const originLat = cordToNumber(originParam.lat);
    const originlng = cordToNumber(originParam.lng);
    const destinationlat = cordToNumber(destinationParam.lat);
    const destinationLng = cordToNumber(destinationParam.lng);
    const latLng = new google.maps.LatLng({ lat: originLat, lng: originlng });
    const destlatLng = new google.maps.LatLng({
      lat: destinationlat,
      lng: destinationLng,
    });

    const waypoints = [
      {
        exactLatLng: latLng,
        street: originParam?.address,
        poiName: originParam?.address,
        placeLatLng: latLng,
      },
      {
        exactLatLng: destlatLng,
        street: destinationParam?.address,
        poiName: destinationParam?.address,
        placeLatLng: destlatLng,
      },
    ];

    updateStorage("waypoints", waypoints);

    directionsService.route(
      {
        origin: latLng, // Replace with actual start location
        destination: destlatLng, // Replace with actual end location
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          // Set directions result to the DirectionsRenderer instance
          const durationText = result.routes[0].legs[0].duration.text;
          addCustomMarker(latLng, destlatLng, durationText);
          directionsRendererRef.current.setDirections(result);
        } else {
          console.error(`Error fetching directions ${status}`);
        }
      }
    );
  };

  const getAddressFromCoordinates = (newCenter) => {
    console.log("newCenter", newCenter);
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: newCenter }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          const address = results[0].formatted_address;
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();

          console.log(results[0]);
          setAddrees(address);
          document.getElementById("pinAddress").value = address;
          document.getElementById("pinName").value = address;
          document.getElementById("pinLat").value = lat;
          document.getElementById("pinLng").value = lng;

          console.log("Address from dragged marker:", address);
        } else {
          console.warn("No results found for the location.");
        }
      } else {
        console.error("Geocoder failed due to:", status);
      }
    });
  };

  // Get user's current location
  const handleGetLocation = () => {
    originMarkerRef.current?.setMap(null);
    destinationMarkerRef.current?.setMap(null);
    activatePickUp();
    if (navigator.geolocation && !originParam) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const newLocation = { lat: latitude, lng: longitude };
        const pinMarker = new google.maps.Marker({
          draggable: false,
          position: newLocation,
          map: map, // Use the existing map instance
          icon: {
            path: faMapPin.icon[4] as string,
            fillColor: "#000000",
            fillOpacity: 1,
            anchor: new google.maps.Point(
              faMapPin.icon[0] / 2, // width
              faMapPin.icon[1] // height
            ),
            strokeWeight: 1,
            strokeColor: "#ffffff",
            scale: 0.075,
          },
        });

        pinMarkerRef.current = pinMarker;
        getAddressFromCoordinates(newLocation);

        map.setCenter(newLocation);
        map.setZoom(16);
        pinMarker.setPosition(newLocation);
        map.addListener("drag", () => {
          // Get the new center of the map after dragging
          const newCenter = map.getCenter();
          pinMarker.setPosition(newCenter);
          getAddressFromCoordinates(newCenter);
        });
      });
    } else {
      resetPickUp();
    }
  };

  // initiliaze map
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

        geocoder.geocode({ address: origin }, (results, status) => {
          if (status === "OK") {
            // map.panTo(results[0].geometry.location);
          } else {
            console.error(
              `Geocode was not successful for the following reason: ${status}`
            );
          }
        });
      });

      map.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(
        centerControlDiv
      );

      if (!directionsRendererRef.current) {
        // Initialize the DirectionsRenderer
        directionsRendererRef.current =
          new window.google.maps.DirectionsRenderer({
            suppressMarkers: true, // Hide default markers
            uppressInfoWindows: true, // Hide info windows
          });
      }
    }
  }, [map]);

  useEffect(() => {
    if (
      map &&
      originParam &&
      destinationParam &&
      directionsRendererRef.current
    ) {
      handleDirections();
    }
  }, [map, directionsRendererRef, originParam, destinationParam]);

  useEffect(() => {
    if (page === "trasporation") {
      return;
    }
    if (map && pinpickup) {
      handleGetLocation();
    }
  }, [pinpickup, map, page]);

  console.log("MAP-RENDER");

  return (
    isLoaded &&
    showMap && (
      <>
        <GoogleMap
          ref={mapRef}
          mapContainerStyle={containerStyle}
          zoom={centerMap.zoom}
          center={centerMap}
          onClick={handleMapClick}
          onLoad={(mapInstance) => {
            setMap(mapInstance);
            mapRef.current = mapInstance;
          }}
          options={options}
          onUnmount={() => setMap(null)}>
          {directionsResponse && (
            <DirectionsRenderer
              ref={directionsRendererRef}
              options={{ suppressMarkers: true, suppressInfoWindows: true }}
              directions={directionsResponse}
            />
          )}
        </GoogleMap>
      </>
    )
  );
}
// export default React.memo(MapComponent, (prevProps, nextProps) => {
//   return (
//     prevProps.origin === nextProps.origin &&
//     prevProps.destination === nextProps.destination
//   );
// });
export default MapComponent;

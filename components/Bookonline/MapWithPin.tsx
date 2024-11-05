import React, { useEffect, useRef, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useGoogleMaps } from "./GoogleMapsProvider";
import { useSearchParams } from "next/navigation";
import { locationDetails } from "@/utils/locationDetails";
import { activatePickUp, resetPickUp } from "../ui/helpers";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "@/app/store/store";
const containerStyle = {
  width: "100%",
  height: "100%",
};
const center1 = {
  lat: 37.451414,
  lng: 25.2984466,
};

function MapWithPin({ page = null }: any) {
  const isLoaded = useGoogleMaps();
  const searchParams = useSearchParams();
  const google = useGoogleMaps();
  const setPinLocation = useStore((state: any) => state.setPinLocation);
  const dropOffLocation = useStore((state: any) => state.dropOffLocation);
  const activeLocation = useStore((state: any) => state.activeLocation);
  if (!activeLocation) return null;

  const { mapOptions } = activeLocation;
  const center = {
    lat: mapOptions.lat,
    lng: mapOptions.lng,
    zoom: mapOptions.zoom,
  };

  const [map, setMap] = useState(null);
  const [showMap, setShowMap] = useState(true); // Control map rendering
  const [centerMap, setCenter] = useState(center);

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

  const pinMarkerRef = useRef(null);

  // Function to handle map click
  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const zoom = map.getZoom(); // Get current zoom level
    console.log("Clicked Lat:", lat, "Lng:", lng, "Zoom:", zoom);
  };

  const getAddressFromCoordinates = (newCenter) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: newCenter }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          const address = results[0].formatted_address;
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          setPinLocation({ name: address, address, lat, lng });
          console.log("Address from dragged marker:", results[0]);
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
    if (navigator.geolocation) {
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
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      handleGetLocation();
    }
  }, [map]);

  console.log("MAP-RENDER");

  return (
    isLoaded && (
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
        onUnmount={() => setMap(null)}></GoogleMap>
    )
  );
}

export default MapWithPin;

// GoogleMapComponent.js
import React, { useEffect, useRef, useState } from 'react';
import {
    GoogleMap, DirectionsRenderer,
    useLoadScript, Marker
} from '@react-google-maps/api';
import { useGoogleMaps } from './GoogleMapsProvider';
import { useSearchParams } from 'next/navigation';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 40.748817, // Default latitude (e.g., NYC)
    lng: -73.985428 // Default longitude (e.g., NYC)
};

const GoogleMapComponent = ({ activeLocation }) => {

    const [directionsResponse, setDirectionsResponse] = useState(null);
    const searchParams = useSearchParams()
    const originParam = searchParams.get('origin')
    const destinationParam = searchParams.get('destination')
    const [originPosition, setOriginPosition] = useState(null);
    const [destinationPosition, setDestinationPosition] = useState(null);

    const mapRef = useRef(null);
    const originMarkerRef = useRef(null);
    const destinationMarkerRef = useRef(null);

    console.log("activeLocation", activeLocation)
    const isLoaded = useGoogleMaps();

    const { mapOptions } = activeLocation

    const center = {
        lat: mapOptions.lat,
        lng: mapOptions.lng
    }

    if (!isLoaded) return <div>Loading...</div>;

    const handleMapLoad = (map) => {
        mapRef.current = map;
    };


    // Function to increase zoom level using the mapRef
    const increaseZoom = () => {
        if (mapRef.current) {
            mapRef.current.setZoom(13);

        }
    };
    const addCustomMarker = async () => {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        const createCustomMarker = (position, content) => {
            const marker = new AdvancedMarkerElement({
                position,
                map,
                content,
            });
        };

        // if (!directionsResponse) return;

        // const origin = "San Francisco"; // Example origin text (you can dynamically change this)
        const durationText = directionsResponse.routes[0].legs[0].duration.text;
        // Clear previous markers


        // Create a custom HTML element for the marker
        const originContent = document.createElement("div");
        const destinationContent = document.createElement("div");

        destinationContent.innerHTML = `
          <div class="flex max-w-[100px] gap-2 bg-white items-center mb-1">
            <div class="bg-black text-[10px] max-w-[40px] text-center p-1 text-white">${durationText}</div>
            <div class="font-bold  text-[12px]">${destinationParam}</div>
          </div>
        `;
        originContent.innerHTML = `
          <div class="flex max-w-[100px] bg-white  items-center mb-1">
            <div class="font-bold p-2 text-[12px]">${originParam}</div>
          </div>
        `;

        // Create and store new markers
        const originMarker = new AdvancedMarkerElement({
            position: originPosition,
            map: mapRef.current,
            content: originContent,
        });
        const destinationMarker = new AdvancedMarkerElement({
            position: destinationPosition,
            map: mapRef.current,
            content: destinationContent,
        });

        // Store the markers in refs for future cleanup
        originMarkerRef.current = originMarker;
        destinationMarkerRef.current = destinationMarker;
    };


    useEffect(() => {
        if (originParam !== "" && destinationParam !== "" && isLoaded) {
            const geocoder = new window.google.maps.Geocoder();

            geocoder.geocode({ address: originParam }, (results, status) => {
                if (status === "OK") {
                    setOriginPosition(results[0].geometry.location);
                } else {
                    console.error(
                        `Geocode was not successful for the following reason: ${status}`
                    );
                }
            });

            geocoder.geocode({ address: destinationParam }, (results, status) => {
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
                    origin: originParam,
                    destination: destinationParam,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        setDirectionsResponse(result);
                        // calculateAndDisplayRoute(result);
                    } else {
                        console.error(`Error fetching directions: ${status}`);
                    }
                }
            );
        }
    }, [originParam, destinationParam]);

    useEffect(() => {
        if (mapRef && directionsResponse) {
            addCustomMarker();
        }
    }, [mapRef, directionsResponse]);



    useEffect(() => {
        if (mapRef.current) {
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
                            mapRef.current.panTo(results[0].geometry.location);
                        } else {
                            console.error(
                                `Geocode was not successful for the following reason: ${status}`
                            );
                        }
                    }
                );
            });

            mapRef.controls[window.google.maps.ControlPosition.RIGHT_BOTTOM].push(
                centerControlDiv
            );
        }
    }, [mapRef]);







    return (
        <>
            <button onClick={increaseZoom}>zoom</button>
            <GoogleMap
                ref={mapRef}
                onLoad={handleMapLoad}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {directionsResponse && (
                    <DirectionsRenderer
                        options={{ suppressMarkers: true, suppressInfoWindows: true }}
                        directions={directionsResponse}
                    />
                )}
            </GoogleMap>
        </>
    );
};

export default GoogleMapComponent;

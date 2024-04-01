"use client";
import React, { useState, useEffect, useContext, useRef } from "react";

// MUI
import CircularProgress from "@mui/material/CircularProgress";

// Google Maps
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { greyMap } from "./mapStyles";

function GoogleMapComponent({
  center,
  children,
  currentLocation,
  directions,
  directionsRenderer,
  directionsService,
  geocoderService,
  placesService,
  zoom,
  ...options
}: {
  center?: google.maps.LatLngLiteral;
  children?: any;
  currentLocation?: google.maps.LatLngLiteral;
  directions?: any;
  directionsRenderer?: any;
  directionsService?: any;
  geocoderService?: any;
  placesService?: any;
  zoom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mapMapWrapper, setMapWrapper] = useState<google.maps.Map>();
  const [markers, setMarkers] = useState<Array<any>>([]);

  const makeMarker = (position: any, icon: any, title: string, map: any) =>
    new window.google.maps.Marker({
      position: position,
      map: map,
      icon: icon,
      title: title,
    });

  useEffect(() => {
    // if (ref.current  && !mapMapWrapper) {
    //   // if (currentLocation) {
    //   //   center = currentLocation;
    //   // }
    //   new window.google.maps.Map(ref.current, {
    //     center,
    //     zoom,
    //     zoomControl: false,
    //     disableDefaultUI: true,
    //     gestureHandling: "none",
    //     styles: greyMap,
    //   });

    //   // directionsRenderer.setMap(mapMapWrapper);
    // }
    if (ref.current && !mapMapWrapper) {
      if (currentLocation) {
        center = currentLocation;
      }
      setMapWrapper(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
          zoomControl: false,
          disableDefaultUI: true,
          gestureHandling: "none",
          styles: greyMap,
        })
      );

      directionsRenderer.setMap(mapMapWrapper);
    }

    if (currentLocation) {
      clearMarkers();
      setMarkers([
        makeMarker(
          currentLocation,
          {
            path: "M10.001,6.54c-0.793,0-1.438,0.645-1.438,1.438c0,0.792,0.645,1.435,1.438,1.435c0.791,0,1.435-0.644,1.435-1.435C11.437,7.184,10.792,6.54,10.001,6.54z M10.001,8.454c-0.264,0-0.479-0.213-0.479-0.476c0-0.265,0.215-0.479,0.479-0.479c0.263,0,0.477,0.214,0.477,0.479C10.478,8.241,10.265,8.454,10.001,8.454z, M10,3.021c-2.815,0-5.106,2.291-5.106,5.106c0,0.781,0.188,1.549,0.562,2.282c0.011,0.062,0.036,0.12,0.07,0.174l0.125,0.188c0.074,0.123,0.151,0.242,0.225,0.341l3.727,5.65c0.088,0.135,0.238,0.215,0.399,0.215c0.161,0,0.311-0.08,0.4-0.215l3.752-5.68c0.057-0.08,0.107-0.159,0.153-0.232l0.132-0.199c0.033-0.05,0.054-0.104,0.064-0.159c0.401-0.757,0.605-1.551,0.605-2.366C15.107,5.312,12.815,3.021,10,3.021z M13.596,10.152c-0.017,0.03-0.029,0.062-0.039,0.095l-0.056,0.084c-0.043,0.066-0.085,0.133-0.139,0.211L10,15.629l-3.339-5.061c-0.068-0.095-0.132-0.193-0.203-0.309l-0.051-0.078c-0.009-0.031-0.021-0.061-0.038-0.089C6.026,9.458,5.852,8.796,5.852,8.127c0-2.287,1.861-4.148,4.147-4.148c2.288,0,4.149,1.861,4.149,4.148C14.148,8.823,13.963,9.503,13.596,10.152z",
            fillColor: "#000",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new window.google.maps.Point(10.5, 18),
          },
          "Current location",
          mapMapWrapper
        ),
      ]);

      directionsRenderer.setMap(mapMapWrapper);

      if (mapMapWrapper) {
        placesService = new google.maps.places.PlacesService(mapMapWrapper);
      }
    }
  }, [ref, mapMapWrapper]);

  const clearMarkers = () => {
    // remove previous markers
    if (markers.length) {
      markers.forEach((m) => {
        m.setMap(null);
      });

      setMarkers([]);
    }
  };

  useEffect(() => {
    if (directions) {
      directionsRenderer.setDirections(directions);
      let leg = directions.routes[0].legs[0];

      // remove previous markers
      clearMarkers();
      // if (markers.length) {
      //   markers.forEach((m) => {
      //     m.setMap(null);
      //   });

      //   setMarkers([]);
      // }

      let newMarkers = [];
      newMarkers.push(
        makeMarker(
          leg.start_location,
          {
            path: "M10.001,6.54c-0.793,0-1.438,0.645-1.438,1.438c0,0.792,0.645,1.435,1.438,1.435c0.791,0,1.435-0.644,1.435-1.435C11.437,7.184,10.792,6.54,10.001,6.54z M10.001,8.454c-0.264,0-0.479-0.213-0.479-0.476c0-0.265,0.215-0.479,0.479-0.479c0.263,0,0.477,0.214,0.477,0.479C10.478,8.241,10.265,8.454,10.001,8.454z, M10,3.021c-2.815,0-5.106,2.291-5.106,5.106c0,0.781,0.188,1.549,0.562,2.282c0.011,0.062,0.036,0.12,0.07,0.174l0.125,0.188c0.074,0.123,0.151,0.242,0.225,0.341l3.727,5.65c0.088,0.135,0.238,0.215,0.399,0.215c0.161,0,0.311-0.08,0.4-0.215l3.752-5.68c0.057-0.08,0.107-0.159,0.153-0.232l0.132-0.199c0.033-0.05,0.054-0.104,0.064-0.159c0.401-0.757,0.605-1.551,0.605-2.366C15.107,5.312,12.815,3.021,10,3.021z M13.596,10.152c-0.017,0.03-0.029,0.062-0.039,0.095l-0.056,0.084c-0.043,0.066-0.085,0.133-0.139,0.211L10,15.629l-3.339-5.061c-0.068-0.095-0.132-0.193-0.203-0.309l-0.051-0.078c-0.009-0.031-0.021-0.061-0.038-0.089C6.026,9.458,5.852,8.796,5.852,8.127c0-2.287,1.861-4.148,4.147-4.148c2.288,0,4.149,1.861,4.149,4.148C14.148,8.823,13.963,9.503,13.596,10.152z",
            fillColor: "#000",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new window.google.maps.Point(10.5, 18),
          },
          leg.start_address,
          mapMapWrapper
        )
      );
      newMarkers.push(
        makeMarker(
          leg.end_location,
          {
            path: "M 16.335938 3.917969 L 13.707031 3.917969 L 13.707031 2.882812 C 13.707031 2.082031 13.058594 1.433594 12.257812 1.433594 L 6.324219 1.433594 L 6.324219 1.113281 C 6.324219 0.5 5.824219 0 5.210938 0 C 4.59375 0 4.097656 0.5 4.097656 1.113281 L 4.097656 17.453125 L 3.488281 17.453125 C 2.78125 17.453125 2.210938 18.023438 2.210938 18.726562 C 2.210938 19.429688 2.78125 20 3.488281 20 L 6.933594 20 C 7.640625 20 8.210938 19.429688 8.210938 18.726562 C 8.210938 18.023438 7.640625 17.453125 6.933594 17.453125 L 6.324219 17.453125 L 6.324219 9.449219 L 11.121094 9.449219 L 11.121094 10.480469 C 11.121094 11.285156 11.769531 11.933594 12.570312 11.933594 L 16.335938 11.933594 C 17.136719 11.933594 17.789062 11.285156 17.789062 10.480469 L 17.789062 5.367188 C 17.789062 4.566406 17.136719 3.917969 16.335938 3.917969 Z M 16.335938 3.917969",
            fillColor: "#000",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 1.5,
            anchor: new window.google.maps.Point(5.5, 20),
          },
          leg.end_address,
          mapMapWrapper
        )
      );

      setMarkers(newMarkers);

      directionsRenderer.setOptions({
        polylineOptions: {
          strokeColor: "#222",
        },
      });

      directionsRenderer.setMap(mapMapWrapper);
    }
  }, [directions]);

  return (
    <>
      <div ref={ref} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { ...mapMapWrapper });
        }
      })}
    </>
  );

  // return <div ref={ref} id="map" />;
}

const render = (status: Status): any => {
  switch (status) {
    case Status.LOADING:
      return <CircularProgress />;
    case Status.FAILURE:
    // return <ErrorComponent />;
    case Status.SUCCESS:
      return <GoogleMapComponent />;
  }
};

export default function GoogleMap({
  latlng = {
    lat: 37.4499982,
    lng: 25.333332,
  },
  zoomLevel = 11,
}: {
  latlng?: google.maps.LatLngLiteral;
  zoomLevel?: number;
}) {
  const [zoom, setZoom] = useState(zoomLevel); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(latlng);

  return (
    <Wrapper
      apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
      libraries={["places"]}
      render={render}
    >
      <GoogleMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}

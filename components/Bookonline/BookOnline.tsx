"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useJsApiLoader } from "@react-google-maps/api";

// DayJS
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// MUI
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

// Styles
// @ts-ignore

// Google Maps
import { Status } from "@googlemaps/react-wrapper";

// context
import { AppContext } from "@/context/appState";

// hooks
import useStorage from "@/hooks/useStorage";

// components

// models
import { BookingState } from "@/types/bookingState";

import TaxiLocations from "../TaxiLocations";
import { locationDetails } from "@/utils/locationDetails";
import LocationSearch from "./LocationSearch";
import BookActions from "./BookActions";
import Places from "./Places";
import CarList from "./CarList";
import Calendars from "./Calendars";
import ToolBar from "./ToolBar";
import classNames from "classnames";
import MapComponent from "./MapComponent";
import { getAvailableRouteCars } from "@/utils/fetchers";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Europe/Athens");

export default function BookOnline() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const locationSearch = searchParams.get("location");
  console.log("search", locationSearch);

  const { getItem, removeItem } = useStorage();
  const { setItem } = useStorage();
  const cookieState = getItem("aegean", "local");
  const appContext = useContext(AppContext);
  const contextState: BookingState = appContext.state;

  const [zoom, setZoom] = useState(11); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 37.4499982,
    lng: 25.333332,
  });

  const [bookingState, setBookingState] = useState<BookingState>();
  const [openDayPicker, setOpenDayPicker] = useState<boolean>(false);
  const [pickUpDate, setPickUpDate] = useState<string>("TODAY");
  const [openTimePicker, setOpenTimePicker] = useState<boolean>(false);
  const [pickUpTime, setPickUpTime] = useState<string>("NOW");

  const [initMap, setInitMap] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(true);
  const [focusLocation, setFocusLocation] = useState<boolean>(false);
  const [focusDestination, setFocusDestination] = useState<boolean>(false);
  const [directionsService, setDirectionsService] = useState<any>();
  const [directionsRenderer, setDirectionsRenderer] = useState<any>();
  const [placesService, setPlacesService] = useState<any>();
  const [geocoderService, setGeocoderService] = useState<any>();
  const [directions, setDirections] = useState<any>();
  const [driverLocation, setDriverLocation] = useState<any>();

  const [pickUpLocation, setPickUpLocation] = useState<any>("");
  const [dropLocation, setDropLocation] = useState<any>("");

  const [autocompleteService, setAutocompleteService] = useState<any>();
  const [predictions, setPredictions] = useState<Array<any>>([]);
  const [locationHandler, setLocationHandler] = useState<string>();
  const [selectedCar, setSelectedCar] = useState<any>();
  const [triggerCalculate, setTriggerCalculate] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [showNavigatorButton, setShowNavigatorButton] = useState<boolean>(true);
  const [currentLocationAddress, setCurrentLocationAddress] =
    useState<string>();
  const [currentLocation, setCurrentLocation] =
    useState<google.maps.LatLngLiteral>();
  const [nearbyLocations, setNearbyLocations] = useState<Array<any>>([]);
  const [carCategories, setCarCategories] = useState<Array<any>>([]);
  const [availableCars, setAvailableCars] = useState<Array<any>>([]);
  const [orderDetails, setOrderDetails] = useState<any>();
  const [driverDetails, setDriverDetails] = useState<any>();
  const [driver, setDriver] = useState<any>();
  const [nextButton, setNextButton] = useState<boolean>(false);
  const [selectCarStep, setSelectCarStep] = useState<boolean>(false);
  const [googleIsDefined, setGoogleIsDefined] = useState<boolean>(false);
  const [rideScheduled, setRideScheduled] = useState<boolean>(false);
  const [removeMarkers, setRemoveMarkers] = useState<boolean>(false);
  const [displayHotSpots, setDisplayHotSpots] = useState<boolean>(true);
  const [selectedPickUp, setSelectedPickUp] = useState<string>("");
  const [selectedDropOff, setSelectedDropOff] = useState<string>("");
  const [map, setMap] = React.useState(null);

  useEffect(() => {
    console.log("set state");
    if (cookieState) {
      console.log(1, cookieState);
      setBookingState(() => cookieState);
      appContext.updateAppState(cookieState);
    } else if (contextState) {
      console.log(11, contextState);
      setBookingState(() => contextState);
      appContext.updateAppState(contextState);
    }

    return () => {};
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleFocusLocation = () => () => {
    setOpenTimePicker(false);
    setFocusLocation(!focusLocation);
    setNearbyLocations([]);
    setCurrentLocationAddress("");
    setError(null);
    toggleDrawer();
    setDisplayHotSpots(true);
    setLocationHandler("pickUp");
  };

  const toggleBlurLocation = () => () => {
    setError(null);
    toggleDrawer();
  };

  const toggleFocusDestination = () => () => {
    setOpenTimePicker(false);
    setFocusDestination(!focusDestination);
    setCurrentLocationAddress("");
    setNearbyLocations([]);
    setError(null);
    toggleDrawer();
    setDisplayHotSpots(true);
    setLocationHandler("dropOff");
  };
  const toggleBlurDestination = () => () => {
    setError(null);
    toggleDrawer();
  };

  const stateManagement = async () => {
    console.log("state managenment");
    //await calculateAndDisplayRoute();

    /* Step 1 - Select route  */
    // if (
    //   !bookingState.directions ||
    //   (bookingState.predictions && bookingState.prediction.length > 0)
    // ) {
    //   console.log("step 1");
    //   await calculateAndDisplayRoute();
    // }

    // /* Step 2 - Select car  */
    // else if (
    //   bookingState.directions &&
    //   (!bookingState.predictions || !bookingState.predictions.length) &&
    //   !bookingState.orderDetails
    // ) {
    //   console.log("step 2");
    //   await calculateAndDisplayRoute();
    //   // clearState();
    // }

    /* Step 3 - Select car  */
    if (cookieState && cookieState.orderDetails && !cookieState.selectedCar) {
      console.log("step 3");
      setOrderDetails(null);
      // await calculateAndDisplayRoute();
    }
    // userVerified

    // /* Step 4 - Search for driver  */
    // if (
    //   cookieState &&
    //   cookieState.userVerified &&
    //   cookieState.selectedCar &&
    //   cookieState.selectedCarConfirmed &&
    //   // !cookieState.orderDetails &&
    //   !cookieState.driver
    // ) {
    //   console.log("step 4");
    //   await calculateAndDisplayRoute();
    //   setSelectedCar(cookieState.selectedCar);
    //   setTimeout(async () => {
    //     console.log("TIME SEARHING");
    //     if (contextState.orderDetails) {
    //       getOrderUpdate(cookieState.orderDetails);
    //     } else {
    //       await createOrder();
    //     }
    //   }, 1500);
    // }

    //   // Step 5
    //   if (
    //     cookieState &&
    //     cookieState.userVerified &&
    //     cookieState.driver &&
    //     cookieState.driverDetails
    //   ) {
    //     await calculateAndDisplayRoute();
    //     console.log("step 5");
    //   }
    //   console.log("end");
  };

  const updateSession = () => {
    appContext.updateAppState(contextState);
    setItem("aegean", contextState, "local");
  };

  useEffect(() => {
    if (focusDestination || focusLocation) {
      setOpen(true);
      window.setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [focusDestination, focusLocation]);

  // markers
  // useEffect(() => {
  //   console.log("init google map");
  //   const setMarkers = () => {
  //     if (!navigator || !navigator.geolocation) {
  //       setShowNavigatorButton(false);
  //       contextState.showNavigatorButton = false;
  //       setItem("aegean", contextState, "local");
  //     }

  //     setDirectionsService(() => new window.google.maps.DirectionsService());
  //     setDirectionsRenderer(
  //       () =>
  //         new window.google.maps.DirectionsRenderer({ suppressMarkers: true })
  //     );

  //     setAutocompleteService(
  //       () => new window.google.maps.places.AutocompleteService()
  //     );

  //     setPlacesService(
  //       () =>
  //         new google.maps.places.PlacesService(document.createElement("div"))
  //     );

  //     setGeocoderService(() => new google.maps.Geocoder());

  //     setInitMap(false);
  //   };

  //   if (
  //     document.readyState === "complete" &&
  //     googleIsDefined &&
  //     cookieState &&
  //     !initMap
  //   ) {
  //     setMarkers();
  //     setSelectedCar(cookieState.selectedCar);
  //     setPickUpLocation(cookieState.pickUpLocation);
  //     setDropLocation(cookieState.dropLocation);
  //     setDirections(cookieState.directions);
  //     setDriver(cookieState.driver);
  //     setRideScheduled(cookieState.rideScheduled);
  //     setDriverDetails(cookieState.driverDetails);
  //     setOrderDetails(cookieState.orderDetails);
  //     setShowNavigatorButton(cookieState.showNavigatorButton);
  //     setNextButton(cookieState.nextButton);

  //     stateManagement();
  //   } else if (document.readyState === "complete" && googleIsDefined) {
  //     setMarkers();
  //   } else {
  //     // window.addEventListener("load", setMarkers);
  //     // return () => document.removeEventListener("load", setMarkers);
  //   }
  // }, [initMap, googleIsDefined]);

  // useEffect(() => {
  //   if (!autocompleteService)
  //     setAutocompleteService(
  //       () => new window.google.maps.places.AutocompleteService()
  //     );
  // }, [directionsService]);

  useEffect(() => {
    console.log("car categories");
    if (bookingState) {
      fetch(
        `https://carky-api.azurewebsites.net/api/AdminDashboard/Cars/GetAllCarkyCategories`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${bookingState.apiToken}`,
            "content-type": "application/json",
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setCarCategories(result);
          },
          (error) => {
            setError(error);
          }
        );
    }
  }, []);

  const validateDateTime = () => {
    let bookLater = false;

    if (pickUpTime === "NOW") {
      setPickUpTimeHandler(dayjs());
    } else {
      // let dateNow = dayjs().add(1, "h");
      // let timeString = pickUpTime.split(":");
      // let futureTime = dayjs()
      //   .set("h", parseInt(timeString[0]))
      //   .set("m", parseInt(timeString[1]));
      // if (pickUpDate === "TODAY" && dateNow.diff(futureTime) <= 3600000) {
      //   setPickUpTimeHandler(dayjs().add(1, "h"));
      //   bookLater = true;
      // }
    }

    if (pickUpDate === "TODAY") {
      setPickUpDateHandler(dayjs());
    } else if (!bookLater) {
      const dateString = dayjs().format("YYYY-MM-DD");
      // console.log(66666, contextState.pickUpDate, dateString);
      if (contextState.pickUpDate !== dateString) {
        bookLater = true;
      }
    }

    return bookLater;
  };

  const calculateAndDisplayRoute = async (response: any = null) => {
    console.log("calculateAndDisplayRoute");
    if (response) {
      contextState.directions = response;
      contextState.startLocationLat =
        response.routes[0].legs[0].start_location.lat();
      contextState.startLocationLng =
        response.routes[0].legs[0].start_location.lng();
      contextState.endLocationLat =
        response.routes[0].legs[0].end_location.lat();
      contextState.endLocationLng =
        response.routes[0].legs[0].end_location.lng();

      await validateDateTime();
      let dayjsLocal = dayjs(
        `${contextState.pickUpDate} ${contextState.pickUpTime}`
      );
      const tariffs = await getAvailableRouteCars(
        contextState,
        dayjsLocal,
        bookingState.apiToken,
        response.routes[0].legs[0].start_location.lat(),
        response.routes[0].legs[0].start_location.lng(),
        response.routes[0].legs[0].end_location.lat(),
        response.routes[0].legs[0].end_location.lng(),
        clearDirections
      );
      setAvailableCars(tariffs);
      contextState.tariffs = tariffs;
      setItem("aegean", contextState, "local");
      setPredictions([]);
      setOpen(false);
      setError(null);
      setDirections(response);
    }
  };

  const displaySuggestions = function (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) {
    if (
      (typeof window !== "undefined" &&
        status != window.google.maps.places.PlacesServiceStatus.OK) ||
      !predictions
    ) {
      console.log(status);
      return;
    }

    setPredictions(() => predictions);
  };

  const getSuggestions = (event: any, target: string) => {
    if (nextButton) {
      setNextButton(false);
    }

    if (event.target.value.length) {
      setError(null);
      autocompleteService.getQueryPredictions(
        { input: event.target.value },
        displaySuggestions
      );
    }

    let predictionsLength = predictions.length;
    if (predictionsLength && target === "pickUp") {
      setTriggerCalculate(false);
      // setPickUpLocation(event.target.value);
      setLocationHandler(() => "pickUp");
    } else if (predictionsLength && target === "dropOff") {
      setTriggerCalculate(false);
      // setDropLocation(event.target.value);
      setLocationHandler(() => "dropOff");
    }
  };

  const setPickUpLocationHandler = (value: string) => {
    console.log("value", value);
    setRemoveMarkers(() => false);
    contextState.pickUpLocation = value;
    updateSession();
    setPickUpLocation(() => value);
    setSelectedPickUp(value);
    updateSession();
    setTriggerCalculate(true);
    setNearbyLocations([]);
    setPredictions([]);
  };

  const setDropOffLocationHandler = (value: string) => {
    setRemoveMarkers(() => false);
    contextState.dropLocation = value;
    updateSession();
    setDropLocation(() => value);
    setSelectedDropOff(value);
    setTriggerCalculate(true);
    setNearbyLocations([]);
    setPredictions([]);
  };

  const setPickUpDateHandler = (value: any) => {
    const dateString = dayjs(value).format("YYYY-MM-DD");
    setPickUpDate(dateString);
    contextState.pickUpDate = dateString;
    updateSession();
  };

  const setPickUpTimeHandler = (value: any) => {
    setOpenTimePicker(false);
    const dateString = dayjs(value).format("HH:mm");

    setPickUpTime(dateString);
    contextState.pickUpTime = dateString;
    updateSession();
  };

  useEffect(() => {
    console.log("calculate route");
    if (triggerCalculate && pickUpLocation && dropLocation) {
      setNextButton(true);
      contextState.nextButton = true;
      setItem("aegean", contextState, "local");
      setSelectCarStep(false);
    }
  }, [pickUpLocation, dropLocation, triggerCalculate]);

  const handleClearPickup = () => {
    setPickUpLocation(() => "");
    setSelectedPickUp("");
    contextState.pickUpLocation = "";
    updateSession();
    setNearbyLocations([]);
    setPredictions([]);
    setDisplayHotSpots(false);
  };

  const handleClearDropOff = () => {
    setDropLocation(() => "");
    setSelectedDropOff("");
    contextState.dropLocation = "";
    updateSession();
    setNearbyLocations([]);
    setPredictions([]);
    setDisplayHotSpots(false);
  };

  const setSelectedCarHandler = (value: any) => {
    setSelectedCar(value);
    contextState.selectedCar = value;
    updateSession();
  };

  const clearDirections = () => {
    setRemoveMarkers(() => true);
    setDirectionsRenderer(() => directionsRenderer.setMap(null));
    setDirectionsRenderer(
      () => new window.google.maps.DirectionsRenderer({ suppressMarkers: true })
    );
    setDirections(() => null);
    setPickUpLocation("");
    setDropLocation("");
    setOpen(true);

    contextState.directions = null;
    contextState.selectedCar = null;
    contextState.pickUpLocation = "";
    contextState.dropLocation = "";
    updateSession();
  };

  const authorizeUser = () => {
    contextState.selectedCarConfirmed = true;
    updateSession();
    setOpen(false);
    router.push("/book-online/verification");

    // if (bookingState && !bookingState.userVerified) {
    //   router.push("/book-online/verification");
    // } else {
    //   createOrder();
    // }
  };
  let apiTimeout: any;

  const getOrderUpdate = (order: any) => {
    // cancel
    if (contextState.orderDetails) {
      contextState.searchingForDriver = true;
      updateSession();
      fetch(
        `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${contextState.orderDetails.orderId}/update`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.status === "SEARCH") {
              clearTimeout(apiTimeout);
              apiTimeout = setTimeout(() => {
                getOrderUpdate(order);
              }, 10000);
            } else {
              clearTimeout(apiTimeout);
              let driverDetails = {
                ...result.driverId,
                ...result.driverLocation,
              };
              contextState.searchingForDriver = false;
              contextState.driver = true;
              contextState.driverDetails = driverDetails;
              setDriverDetails(driverDetails);
              setDriver(true);
              updateSession();
            }
          },
          (error) => {
            setError(error);
            clearState();
          }
        );
    }
  };

  const clearState = () => {
    setRemoveMarkers(() => true);
    directionsRenderer?.setDirections({ routes: [] });
    // setDirectionsRenderer(
    //   () => new window.google.maps.DirectionsRenderer({ suppressMarkers: true })
    // );
    clearTimeout(apiTimeout);
    setDirections(null);
    setPickUpLocation("");
    setDropLocation("");
    setDriverDetails(null);
    setDriver(false);
    setOrderDetails(null);
    setNextButton(true);
    setSelectCarStep(false);
    setSelectedCar(false);
    setNextButton(false);
    setPickUpDate("TODAY");
    setPickUpTime("NOW");
    setRideScheduled(false);
    setDriverLocation(null);
    setSelectedPickUp("");
    setSelectedDropOff("");

    contextState.pickUpLocation = "";
    contextState.dropLocation = "";
    contextState.directions = null;
    contextState.selectedCar = null;
    contextState.driver = false;
    contextState.driverDetails = null;
    contextState.orderDetails = null;
    contextState.nextButton = false;
    contextState.searchingForDriver = false;
    contextState.selectedCarConfirmed = false;
    contextState.pickUpDate = "TODAY";
    contextState.pickUpTime = "NOW";
    contextState.startLocationLat = null;
    contextState.startLocationLng = null;
    contextState.endLocationLat = null;
    contextState.endLocationLng = null;
    contextState.driverLocation = null;
    setItem("aegean", contextState, "local");
    updateSession();
  };

  const nextButtonHandler = async () => {
    setNextButton(false);
    setSelectCarStep(true);
    setOpen(true);
  };

  const handleBack = () => {
    setOpen(true);
    clearState();
  };

  const visited = getItem("validationBeenVisited", "local");

  useEffect(() => {
    if (visited) {
      removeItem("validationBeenVisited", "local");
      router.push("/book-online");
    }
  }, [visited]);

  useEffect(() => {
    if (locationSearch) {
      document.body.classList.remove("inserted");

      const mapOptions =
        locationDetails.taxi_locations[locationSearch]?.mapOptions;
      setZoom(mapOptions.zoom);
      setCenter({
        lat: mapOptions.lat,
        lng: mapOptions.lng,
      });
      contextState.mapCenter = {
        lat: mapOptions.lat,
        lng: mapOptions.lng,
      };
    }
    if (!locationSearch) {
      clearState();
    }
  }, [locationSearch]);

  const hotSpots =
    locationSearch && locationDetails.taxi_locations[locationSearch]?.hotSpots;

  useEffect(() => {
    if (!contextState.pickUpLocation && !contextState.dropLocation) {
      setDisplayHotSpots(true);
    }
  });
  useEffect(() => {
    if (
      contextState.pickUpLocation === "" &&
      contextState.dropLocation === ""
    ) {
      setDisplayHotSpots(true);
    }
  });

  useEffect(() => {
    setDisplayHotSpots(true);
  }, []);
  useEffect(() => {
    if (displayHotSpots) {
      setOpen(true);
    }
  }, [displayHotSpots]);

  // useEffect(() => {
  //   if (selectedPickUp && selectedDropOff) {
  //     if (!open) {
  //       setOpen(false);
  //     }
  //   }
  // }, [selectedPickUp, selectedDropOff]);

  return !locationSearch ? (
    <div className="flex flex-col min-h-screen">
      <div className="px-4">
        <TaxiLocations />
      </div>
    </div>
  ) : (
    <div className="flex relative md:gap-20 flex-col md:flex-row min-h-screen max-h-[700px] max-w-[1200px] mx-auto -mt-5 md:mt-1">
      <div>
        <div className="absolute top-3 left-0 z-10 w-full">
          <ToolBar
            toggleDrawer={toggleDrawer}
            handleClick={handleBack}
            isMapOpen={open}
          />
        </div>

        <div
          className={classNames(
            "w-full md:block h-[280px] md:h-[700px]",
            "relative order-0 md:order-1",
            !open ? "block" : "hidden md:block",
            selectedPickUp && selectedDropOff ? "h-[330px]" : "h-[280px]"
          )}
        >
          <MapComponent
            locationSearch={locationSearch}
            calculateAndDisplayRoute={calculateAndDisplayRoute}
            setAutocompleteService={setAutocompleteService}
          />
        </div>

        {/* <Wrapper
            apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            libraries={["places"]}
            render={render}
            callback={intitializeMap}
          >
            {!initMap && (
              <GoogleMapComponent
                center={center}
                zoom={zoom}
                currentLocation={currentLocation}
                directionsService={directionsService}
                directionsRenderer={directionsRenderer}
                placesService={placesService}
                geocoderService={geocoderService}
                directions={directions}
                driverLocation={driverLocation}
                state={contextState}
                removeMarkers={removeMarkers}
              />
            )}
          </Wrapper> */}
      </div>

      <div className="px-4 w-full md:w-[50%]">
        <Typography
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            visibility: "hidden",
            width: "0px",
            height: "0px",
          }}
        >
          Book a taxi online now
        </Typography>
        <div
          className={classNames(
            "flex flex-col gap-4",
            open && "mt-16 md:mt-auto"
          )}
        >
          <LocationSearch
            toggleFocusLocation={toggleFocusLocation}
            toggleBlurLocation={toggleBlurLocation}
            pickUpLocation={pickUpLocation}
            setPickUpLocation={setPickUpLocation}
            getSuggestions={getSuggestions}
            handleClearPickup={handleClearPickup}
            toggleFocusDestination={toggleFocusDestination}
            toggleBlurDestination={toggleBlurDestination}
            dropLocation={dropLocation}
            setDropLocation={setDropLocation}
            handleClearDropOff={handleClearDropOff}
            selectedPickUp={selectedPickUp}
            selectedDropOff={selectedDropOff}
          />
          <Places
            currentLocationAddress={currentLocationAddress}
            setPickUpLocationHandler={setPickUpLocationHandler}
            nearbyLocations={nearbyLocations}
            predictions={predictions}
            displayHotSpots={displayHotSpots}
            locationSearch={locationSearch}
            locationHandler={locationHandler}
            hotSpots={hotSpots}
            setDropOffLocationHandler={setDropOffLocationHandler}
            selectedPickUp={selectedPickUp}
            selectedDropOff={selectedDropOff}
          />
          {!selectCarStep && selectedPickUp && selectedDropOff && (
            <BookActions
              nextButtonHandler={nextButtonHandler}
              calendars={
                <Calendars
                  setOpenTimePicker={setOpenTimePicker}
                  setOpenDayPicker={setOpenDayPicker}
                  pickUpDate={pickUpDate}
                  openDayPicker={openDayPicker}
                  setPickUpDateHandler={setPickUpDateHandler}
                  pickUpTime={pickUpTime}
                  openTimePicker={openTimePicker}
                  setPickUpTimeHandler={setPickUpTimeHandler}
                />
              }
            />
          )}
          {availableCars && (
            <CarList
              directions={directions}
              predictions={predictions}
              error={error}
              orderDetails={orderDetails}
              contextState={contextState}
              selectCarStep={selectCarStep}
              availableCars={availableCars}
              setSelectedCarHandler={setSelectedCarHandler}
              authorizeUser={authorizeUser}
              selectedCar={selectedCar}
            />
          )}
        </div>
      </div>
    </div>
  );
}

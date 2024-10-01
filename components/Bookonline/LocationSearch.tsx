import useUrl from "@/app/hooks/useUrl";
import { locationDetails } from "@/utils/locationDetails";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useGoogleMaps } from "./GoogleMapsProvider";
import Places from "./Places";
import { getSuggestions } from "@/heplers/googleMap";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { Place } from "@/types/types";
import { resetPickUp } from "../ui/helpers";

const LocationSearch = () => {
  const [origin, setOrigin] = useState(undefined);
  const [focused, setFocused] = useState(undefined);
  const [destination, setDestinaton] = useState(undefined);
  const searchParams = useSearchParams();
  const map = useGoogleMaps();
  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook

  const originParam: Place | null = JSON.parse(searchParams.get("origin"));
  const destinationParam: Place | null = JSON.parse(searchParams.get("destination"));
  const setPinParm = searchParams.get("setPin")

  const locationSearch = searchParams.get("location");

  const activeLocation =
    locationSearch && locationDetails.taxi_locations[locationSearch];

  const { mapOptions } = activeLocation;

  const [autocompleteService, setAutocompleteService] = useState<any>();
  const [predictions, setPredictions] = useState<any>([]);

  useEffect(() => {
    if (map) {
      setAutocompleteService(
        () => new window.google.maps.places.AutocompleteService()
      );
    }
  }, [map]);


  const handlePlaceChange = (value: string) => {
    resetPickUp()
    if (value?.length) {
      const suggestions = getSuggestions(value, mapOptions)
      console.log("suggestions", suggestions)
      setPredictions(suggestions)
    };
  }

  const handleClearPickup = () => {
    setOrigin("");
    updateUrl("origin", null);
  };
  const handleClearDropOff = () => {
    updateUrl("destination", null);
    setDestinaton("");
  };

  useEffect(() => {
    setOrigin(originParam?.address || originParam?.name);
    setDestinaton(destinationParam?.address || destinationParam?.name);
  }, [originParam, destinationParam]);

  return (
    <div className="flex flex-col relative" id="locationInputs">
      {/* Pick up */}
      <div className="flex flex-col mb-4 space-y-4 relative ">
        {originParam && (
          <img
            src={"/assets/booking-flow/bottomArrow.svg"}
            alt="Bottom Pointing Arrow"
            className="z-10 h-[64px] w-[20px] absolute top-[37px] left-[5.8px]"
          />
        )}
        {/* Pickup Location Input */}

        <div className="relative flex items-center">
          {/* Square placeholder */}
          {originParam && (
            <div className="absolute left-[0px] flex items-center justify-center h-full w-6">
              <div className="w-3 h-3 bg-[#244284] ml-2 rounded-full"></div>
            </div>
          )}
          {/* Input field */}
          <input
            onFocus={() => setFocused("pickup")}
            // onBlur={toggleBlurLocation()}
            type="text"
            // value={pickupValue}
            onChange={(e) => {
              setOrigin(e.target.value);
              handlePlaceChange(e.target.value);
            }}
            value={origin}
            // onChange={(e) => {
            //   setPickUpLocation(e.target.value);
            //   getSuggestions(e, "pickUp");
            // }}
            className={`pl-8 pr-8 py-3 border-2 rounded font-semibold focus:outline-none ${origin ? "bg-gray-300" : "bg-white border-[#244284]"
              } w-full`}
            placeholder="Enter pick up location"
          />

          {/* Clear button */}
          <button
            // onClick={() => handleClear(setPickupValue)}
            onClick={handleClearPickup}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#244284] text-white rounded-full w-[25px] h-[25px] flex items-center justify-center mr-2"
          >
            X
          </button>
        </div>
      </div>
      {/* Drop of */}

      {originParam && (
        <div className="flex flex-col gap-4 relative ">
          {/* Pickup Location Input */}
          <div className="relative flex items-center">
            {/* Square placeholder */}
            <div className="absolute left-0 flex items-center justify-center h-full w-6">
              <div className="w-3 h-3 bg-[#244284] ml-2"></div>
            </div>
            {/* Input field */}
            <input
              id="dropOff"
              onFocus={() => setFocused("dropoff")}
              // onBlur={toggleBlurDestination()}
              type="text"
              // value={pickupValue}
              // onChange={(e) =>
              //   handleChange(e, setPickupValue)
              // }
              value={destination}
              onChange={(e) => {
                setDestinaton(e.target.value);
                handlePlaceChange(e.target.value);
              }}
              // onChange={(e) => {
              //   setDropLocation(e.target.value);
              //   getSuggestions(e, "dropOff");
              // }}
              className={`pl-8 pr-8 py-3 border-2 rounded font-semibold focus:outline-none ${destination ? "bg-gray-300" : "bg-white border-blue-500"
                } 
            ${origin && !destination && "bg-white border-[#244284]"}
            w-full`}
              placeholder="Enter drop off location"
            />

            {/* Clear button */}
            <button
              // onClick={() => handleClear(setPickupValue)}
              onClick={handleClearDropOff}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#244284] text-white rounded-full w-[25px] h-[25px] flex items-center justify-center mr-2"
            >
              X
            </button>
          </div>
        </div>
      )}
      <Places
        origin={origin}
        destination={destination}
        focused={focused}
        predictions={predictions}
        setPredictions={setPredictions}
      />
    </div>
  );
};

export default LocationSearch;

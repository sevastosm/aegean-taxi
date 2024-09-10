import useUrl from "@/app/hooks/useUrl";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Places from "./Places";
import PlacesInput from "./PlacesInput";

type Props = {};

const LocationSearch = ({
}: any) => {
  // useEffect(() => {
  //   if (selectedPickUp) {
  //     document.getElementById("dropOff")?.focus();
  //   }
  // }, [selectedPickUp]);

  // set search from inputs

  const [origin, setOrigin] = useState(undefined)
  const [focused, setFocused] = useState(undefined)
  const [destination, setDestinaton] = useState(undefined)
  const searchParams = useSearchParams()

  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook


  const originParam = searchParams.get('origin')
  const destinationParam = searchParams.get('destination')


  const [autocompleteService, setAutocompleteService] = useState<any>();
  const [predictions, setPredictions] = useState<any>([]);


  useEffect(() => {
    if (google) {
      setAutocompleteService(
        () => new window.google.maps.places.AutocompleteService()
      );
      // setPlacesService(
      //   () =>
      //     new window.google.maps.PlacesService(document.createElement("div"))
      // );
    }
  }, [google]);

  const displaySuggestions = function (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) {
    if (
      (typeof window !== "undefined" &&
        status != window.google.maps.places.PlacesServiceStatus.OK) ||
      !predictions
    ) {

      return;
    }

    setPredictions(() => predictions);
  };

  const getSuggestions = (value) => {

    if (value?.length) {
      autocompleteService.getQueryPredictions(
        { input: value },
        displaySuggestions
      );
    }
  }










  const handleClearPickup = () => {
    updateUrl("origin", null)
    // updateUrl("destination", null)

    setOrigin("")
    // handleClearDropOff()
  }
  const handleClearDropOff = () => {
    updateUrl("destination", null)
    setDestinaton("")
  }

  useEffect(() => {
    setOrigin(originParam)
    setDestinaton(destinationParam)
  }, [originParam, destinationParam])



  return (
    <div className="flex flex-col space-y-4 relative">
      {/* Pick up */}
      <div className="flex flex-col space-y-4 relative ">
        <img
          src={"/assets/booking-flow/bottomArrow.svg"}
          alt="Bottom Pointing Arrow"
          className="z-10 h-[60px] w-[20px] absolute top-[37px] left-[6px]"
        />
        {/* Pickup Location Input */}
        <div className="relative flex items-center">
          {/* Square placeholder */}
          <div className="absolute left-[0px] flex items-center justify-center h-full w-6">
            <div className="w-3 h-3 bg-[#244284] ml-2 rounded-full"></div>
          </div>
          {/* Input field */}
          <input

            onFocus={() => setFocused('pickup')}
            // onBlur={toggleBlurLocation()}
            type="text"
            // value={pickupValue}
            onChange={(e) => {
              setOrigin(e.target.value);
              getSuggestions(e.target.value)
            }}
            value={origin}

            // onChange={(e) => {
            //   setPickUpLocation(e.target.value);
            //   getSuggestions(e, "pickUp");
            // }}
            className={`pl-8 pr-8 py-3 border-2 rounded font-semibold focus:outline-none ${origin
              ? "bg-gray-300"
              : "bg-white border-blue-500 border-4"
              } w-full`
            }
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

      {originParam && <div className="flex flex-col gap-4 relative ">
        {/* Pickup Location Input */}
        <div className="relative flex items-center">
          {/* Square placeholder */}
          <div className="absolute left-0 flex items-center justify-center h-full w-6">
            <div className="w-3 h-3 bg-[#244284] ml-2"></div>
          </div>
          {/* Input field */}
          <input
            id="dropOff"
            onFocus={() => setFocused('dropoff')}
            // onBlur={toggleBlurDestination()}
            type="text"
            // value={pickupValue}
            // onChange={(e) =>
            //   handleChange(e, setPickupValue)
            // }
            value={destination}
            onChange={(e) => {
              setDestinaton(e.target.value)
              getSuggestions(e.target.value)
            }
            }
            // onChange={(e) => {
            //   setDropLocation(e.target.value);
            //   getSuggestions(e, "dropOff");
            // }}
            className={`pl-8 pr-8 py-3 border-2 rounded font-semibold focus:outline-none ${destination ? "bg-gray-300" : "bg-white border-blue-500"
              } 
            ${origin &&
              !destination &&
              "bg-white border-blue-500 border-4"
              }
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
      </div>}
      <Places origin={origin} destination={destination} focused={focused} predictions={predictions} setPredictions={setPredictions} />
    </div>
  );
};

export default LocationSearch;

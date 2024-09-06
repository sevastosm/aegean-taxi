import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Places from "./Places";
import PlacesInput from "./PlacesInput";

type Props = {};

const LocationSearch = ({
  toggleFocusLocation,
  toggleBlurLocation,
  pickUpLocation,
  setPickUpLocation,
  getSuggestions,
  handleClearPickup,
  toggleFocusDestination,
  toggleBlurDestination,
  dropLocation,
  setDropLocation,
  handleClearDropOff,
  selectedPickUp,
}: any) => {
  // useEffect(() => {
  //   if (selectedPickUp) {
  //     document.getElementById("dropOff")?.focus();
  //   }
  // }, [selectedPickUp]);

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
            onFocus={toggleFocusLocation()}
            onBlur={toggleBlurLocation()}
            type="text"
            // value={pickupValue}
            // onChange={(e) =>
            //   handleChange(e, setPickupValue)
            // }
            value={pickUpLocation}
            onChange={(e) => {
              setPickUpLocation(e.target.value);
              getSuggestions(e, "pickUp");
            }}
            className={`pl-8 pr-8 py-3 border-2 rounded font-semibold focus:outline-none ${pickUpLocation
              ? "bg-gray-300"
              : "bg-white border-blue-500 border-4"
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
            onFocus={toggleFocusDestination()}
            onBlur={toggleBlurDestination()}
            type="text"
            // value={pickupValue}
            // onChange={(e) =>
            //   handleChange(e, setPickupValue)
            // }
            value={dropLocation}
            onChange={(e) => {
              setDropLocation(e.target.value);
              getSuggestions(e, "dropOff");
            }}
            className={`pl-8 pr-8 py-3 border-2 rounded font-semibold focus:outline-none ${dropLocation ? "bg-gray-300" : "bg-white border-blue-500"
              } 
            ${pickUpLocation &&
              !dropLocation &&
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
      </div>
      {/* <PlacesInput /> */}
    </div>
  );
};

export default LocationSearch;

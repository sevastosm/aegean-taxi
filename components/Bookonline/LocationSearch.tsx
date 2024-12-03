import useUrl from "@/app/(taxi)/hooks/useUrl";
import { locationDetails } from "@/utils/locationDetails";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useGoogleMaps } from "./GoogleMapsProvider";
import Places from "./Places";
import { getSuggestions } from "@/heplers/googleMap";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { Place } from "@/types/types";
import { resetPickUp } from "../ui/helpers";
import LocationInput from "./LocationInput";
import { useStore } from "@/app/(taxi)/store/store";

const LocationSearch = () => {
  const activeLocation = useStore((state: any) => state.activeLocation);

  const [origin, setOrigin] = useState(undefined);
  const [focused, setFocused] = useState(undefined);
  const [destination, setDestinaton] = useState(undefined);
  const searchParams = useSearchParams();
  const map = useGoogleMaps();
  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook

  if (!activeLocation) return null;

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
    resetPickUp();
    updateUrl("origin", null);
    if (value?.length) {
      const suggestions = getSuggestions(value, mapOptions);
      console.log("suggestions", suggestions);
      setPredictions(suggestions);
    }
  };

  const clearPickupValue = useStore((state: any) => state.clearPickupValue);
  const clearDropOffValue = useStore((state: any) => state.clearDropOffValue);

  const handleClearPickup = () => {
    clearPickupValue();
  };
  const handleClearDropOff = () => {
    clearDropOffValue();
  };

  const setPickupValue = useStore((state: any) => state.setPickupValue);
  const pickupValue = useStore((state: any) => state.pickupValue);
  const pickupLocation = useStore((state: any) => state.pickupLocation);
  const dropOffValue = useStore((state: any) => state.dropOffValue);
  const setDropOffValue = useStore((state: any) => state.setDropOffValue);
  const setPlaceSuggestions = useStore(
    (state: any) => state.setPlaceSuggestions
  );

  const handlePickUpChange = (value: string) => {
    setPickupValue(value);
    const suggestions = getSuggestions(value, mapOptions);
    console.log("suggestions", suggestions);
    setPlaceSuggestions(suggestions);
  };

  const handleDropOffChange = (value: string) => {
    setDropOffValue(value);
    const suggestions = getSuggestions(value, mapOptions);
    console.log("suggestions", suggestions);
    setPlaceSuggestions(suggestions);
  };

  const { getState } = useStore;

  console.log("getState", getState());

  const setActiveInput = useStore((state: any) => state.setActiveInput);
  const handlePickupFocus = () => {
    setActiveInput("pickUp");
  };
  const handleDropOffFocus = () => {
    setActiveInput("dropOff");
  };

  return (
    <div className='flex flex-col relative' id='locationInputs'>
      {/* Pick up */}
      <div className='flex flex-col mb-4 space-y-4 relative '>
        {pickupLocation && (
          <img
            src={"/assets/booking-flow/bottomArrow.svg"}
            alt='Bottom Pointing Arrow'
            className='z-10 h-[64px] w-[20px] absolute top-[37px] left-[5.8px]'
          />
        )}
        {/* Pickup Location Input */}

        <LocationInput
          direction='pickUp'
          placeholder='Enter pick up location'
          onClear={handleClearPickup}
          setFocused={setFocused}
          onChange={handlePickUpChange}
          onFocus={handlePickupFocus}
          value={pickupValue}
        />
      </div>
      {/* Drop of */}

      {pickupLocation && (
        <div className='flex flex-col gap-4 relative '>
          {/* Pickup Location Input */}

          {/* Input field */}
          <LocationInput
            direction='dropOff'
            placeholder='Enter drop off location'
            onClear={handleClearDropOff}
            setFocused={setFocused}
            onChange={handleDropOffChange}
            onFocus={handleDropOffFocus}
            value={dropOffValue}
          />
        </div>
      )}
      <Places
        origin={origin}
        destination={destination}
        focused={focused}
        predictions={predictions}
        setPredictions={setPredictions}
        setFocused={setFocused}
      />
    </div>
  );
};

export default LocationSearch;

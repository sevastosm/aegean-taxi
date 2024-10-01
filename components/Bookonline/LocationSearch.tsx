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
import LocationInput from "./LocationInput";

const LocationSearch = () => {
  const [origin, setOrigin] = useState(undefined);
  const [focused, setFocused] = useState(undefined);
  const [destination, setDestinaton] = useState(undefined);
  const searchParams = useSearchParams();
  const map = useGoogleMaps();
  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook

  const originParam: Place | null = JSON.parse(searchParams.get("origin"));
  const destinationParam: Place | null = JSON.parse(
    searchParams.get("destination")
  );
  const setPinParm = searchParams.get("setPin");

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
    resetPickUp();
    updateUrl("origin", null);
    if (value?.length) {
      const suggestions = getSuggestions(value, mapOptions);
      console.log("suggestions", suggestions);
      setPredictions(suggestions);
    }
  };

  const handleClearPickup = () => {
    updateUrl("origin", null);
  };
  const handleClearDropOff = () => {
    updateUrl("destination", null);
  };

  // useEffect(() => {
  //   setOrigin(originParam?.address);
  //   setDestinaton(destinationParam?.address);
  // }, [originParam, destinationParam]);

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

        <LocationInput
          direction="pickUp"
          originParam={originParam}
          destinationParam={destinationParam}
          placeholder="Enter pick up location"
          param={originParam}
          onClear={handleClearPickup}
          setFocused={setFocused}
          onChange={handlePlaceChange}
        />
      </div>
      {/* Drop of */}

      {originParam && (
        <div className="flex flex-col gap-4 relative ">
          {/* Pickup Location Input */}

          {/* Input field */}
          <LocationInput
            direction="dropOff"
            originParam={originParam}
            destinationParam={destinationParam}
            placeholder="Enter drop off location"
            param={destinationParam}
            onClear={handleClearDropOff}
            setFocused={setFocused}
            onChange={handlePlaceChange}

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

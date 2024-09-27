import { Place } from "@/types/types";

let plasesSuggestions: google.maps.places.QueryAutocompletePrediction[] = [];
export const getSuggestions = (
  value: string,
  mapOptions: {
    lat: number;
    lng: number;
  }
) => {
  const cords = { lat: mapOptions.lat, lng: mapOptions.lng };
  const autocompleteService =
    new window.google.maps.places.AutocompleteService();
  const displaySuggestions = function (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) {
    if (
      (typeof window !== "undefined" &&
        status != window.google.maps.places.PlacesServiceStatus.OK) ||
      !predictions
    ) {
      return [];
    }
    console.log("predictions", predictions);
    plasesSuggestions = predictions;
  };

  if (value?.length) {
    const radius = 30000; // Example: 30 k
    const location = new google.maps.LatLng(cords.lat, cords.lng); // Example: San Francisco coordinates

    const request = {
      input: value,
      location,
      radius, // Limit results to places within this radius (in meters)
    };
    autocompleteService.getQueryPredictions(request, displaySuggestions);
  }
  return plasesSuggestions;
};

export const getPlaceDetails = (placeId: string): Promise<Place | null> => {
  return new Promise((resolve, reject) => {
    const placesService = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    // Callback function to handle place details
    placesService.getDetails({ placeId }, (placeResult, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        placeResult
      ) {
        const location = placeResult.geometry.location;
        const lat = location.lat();
        const lng = location.lng();

        // Construct the place details object
        const place: Place = {
          name: placeResult.name,
          address: placeResult.formatted_address,
          lat,
          lng,
        };

        resolve(place); // Resolve the Promise with the place details
      } else {
        reject(`Error fetching place details: ${status}`);
      }
    });
  });
};

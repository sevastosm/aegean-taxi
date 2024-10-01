import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import {
  usePathname,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useGoogleMaps } from "./GoogleMapsProvider";
import React, { useEffect, useState } from "react";
import PredictionListItem from "../predictions-list";
import HotSpot from "./HotSpot";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import useUrl from "@/app/hooks/useUrl";
import { locationDetails } from "@/utils/locationDetails";
import { Place } from "../../types/types";
import { getPlaceDetails } from "@/heplers/googleMap";

type Props = {};

const Places = ({
  currentLocationAddress,
  nearbyLocations = [],
  displayHotSpots,
  locationHandler,
  setDropOffLocationHandler,
  selectedPickUp,
  selectedDropOff,
  pickUpLocation,
  dropLocation,
  origin,
  destination,
  focused = null,
  predictions = null,
  setPredictions,
}: any) => {
  const map = useGoogleMaps();

  const searchParams = useSearchParams();
  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook
  const originParam = searchParams.get("origin");
  const destinationParam = searchParams.get("destination");

  const locationSearch = searchParams.get("location");

  const activeLocation =
    locationSearch && locationDetails.taxi_locations[locationSearch];

  const { hotSpots } = activeLocation;

  const viewHotspots =
    (!originParam && !destinationParam) || (originParam && !destinationParam);
  if (selectedPickUp && selectedDropOff) {
    return null;
  }
  const [service, setService] = useState(null);


  // Get user's current location
  const handleGetLocation = () => {
    updateUrl("pinpickup", "pinpickup")
  };

  // Function to get details of a selected prediction
  const handlePredictionClick = async (place_id: string) => {
    const locationData = await getPlaceDetails(place_id)
    if (!originParam) {
      updateUrl("origin", JSON.stringify(locationData));
      setPredictions([]);
    } else {
      updateUrl("destination", JSON.stringify(locationData));
      setPredictions([]);
    }
  };

  const hotSpotsList =
    hotSpots &&
    hotSpots.filter((spot: any) => spot.destination_name !== originParam);

  return (
    <List
      sx={{
        width: "100%",
        // maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {!originParam && !destinationParam &&
        <>
          <ListItem
            onClick={handleGetLocation}
            key="currentLocation"
          >
            <ListItemAvatar>
              <MyLocationOutlinedIcon />
            </ListItemAvatar>
            <ListItemText
              primary={currentLocationAddress}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Set locaton on map
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      }

      {currentLocationAddress && currentLocationAddress == "unknown" && (
        <>
          <ListItem alignItems="flex-start" key="currentLocations">
            <ListItemAvatar>
              <MyLocationOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary="Unknown address" />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      )}

      {nearbyLocations.length > 0 &&
        nearbyLocations.map((location: any, index: number) => (
          <>
            <ListItem
              alignItems="flex-start"
              onClick={() => setPickUpLocationHandler(location.name)}
              key={index}
            >
              <ListItemAvatar>
                <LocationOnRoundedIcon />
              </ListItemAvatar>
              <ListItemText primary={location.name} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}

      {/* Populate suggestions */}
      {predictions.length > 0 &&
        predictions.map((prediction: any) => (
          <PredictionListItem
            key={`${prediction.place_id}-${Math.floor(Math.random() * 1000)}`}
            description={prediction.description}
            prediction={prediction}
            locationHandler={() => {
              handlePredictionClick(prediction.place_id)
            }}
          />
        ))}
      {viewHotspots &&
        locationSearch &&
        hotSpots &&
        hotSpotsList.map((spot: any) => (
          <div
            className="cursor-pointer"
            onClick={() => {
              const place: Place = { lat: spot.lon, lng: spot.lat, name: spot.destination_name, address: spot.destination_name }

              if (!originParam) {
                updateUrl("origin", JSON.stringify(place));
                setPredictions([]);
              } else {
                updateUrl("destination", JSON.stringify(place));
                setPredictions([]);
              }
            }}
          >
            <HotSpot
              destination_name={spot.destination_name}
              type={spot.type}
              locationHandler={locationHandler}
            />
          </div>
        ))}
    </List>
  );
};

export default Places;

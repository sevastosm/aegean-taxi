import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import PredictionListItem from "../predictions-list";
import HotSpot from "./HotSpot";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import { locationDetails } from "@/utils/locationDetails";
import { Place } from "../../types/types";
import { getPlaceDetails } from "@/heplers/googleMap";
import { useStore } from "@/app/store/store";

const Places = ({
  currentLocationAddress,
  nearbyLocations = [],
  locationHandler,
  selectedPickUp,
  selectedDropOff,
  focused = null,
}: any) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const locationSearch = searchParams.get("location");

  const activeLocation =
    locationSearch && locationDetails.taxi_locations[locationSearch];

  const { hotSpots } = activeLocation;

  if (selectedPickUp && selectedDropOff) {
    return null;
  }
  // Get user's current location
  const handleGetLocation = () => {
    router.push(`pin-selection?location=${locationSearch}`);
  };

  const activeInput = useStore((state: any) => state.activeInput);
  const pickupLocation = useStore((state: any) => state.pickupLocation);
  const setPickupLocation = useStore((state: any) => state.setPickupLocation);
  const setDropOffocation = useStore((state: any) => state.setDropOffocation);
  const placeSuggestions = useStore((state: any) => state.placeSuggestions);
  const viewHotspots = useStore((state: any) => state.viewHotspots);

  // Function to get details of a selected prediction
  const handlePredictionClick = async (place_id: string) => {
    const locationData = await getPlaceDetails(place_id);

    activeInput === "pickUp"
      ? setPickupLocation(locationData)
      : setDropOffocation(locationData);
  };

  const handleHotspotClick = (data) => {
    activeInput === "pickUp"
      ? setPickupLocation(data)
      : setDropOffocation(data);
  };

  const hotSpotsList =
    hotSpots &&
    hotSpots.filter(
      (spot: any) => spot.destination_name !== pickupLocation?.name
    );

  console.log("focused", focused);

  return (
    <List
      sx={{
        width: "100%",
        // maxWidth: 360,
        bgcolor: "background.paper",
      }}>
      {activeInput === "pickUp" && (
        <>
          <ListItem onClick={handleGetLocation} key='currentLocation'>
            <ListItemAvatar>
              <MyLocationOutlinedIcon />
            </ListItemAvatar>
            <ListItemText
              primary={currentLocationAddress}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    Set locaton on map
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
        </>
      )}

      {currentLocationAddress && currentLocationAddress == "unknown" && (
        <>
          <ListItem alignItems='flex-start' key='currentLocations'>
            <ListItemAvatar>
              <MyLocationOutlinedIcon />
            </ListItemAvatar>
            <ListItemText primary='Unknown address' />
          </ListItem>
          <Divider variant='inset' component='li' />
        </>
      )}

      {/* {nearbyLocations.length > 0 &&
        nearbyLocations.map((location: any, index: number) => (
          <>
            <ListItem
              alignItems='flex-start'
              onClick={() => setPickUpLocationHandler(location.name)}
              key={index}>
              <ListItemAvatar>
                <LocationOnRoundedIcon />
              </ListItemAvatar>
              <ListItemText primary={location.name} />
            </ListItem>
            <Divider variant='inset' component='li' />
          </>
        ))} */}

      {/* Populate suggestions */}
      {placeSuggestions &&
        placeSuggestions.map((prediction: any) => (
          <PredictionListItem
            key={`${prediction.place_id}-${Math.floor(Math.random() * 1000)}`}
            description={prediction.description}
            prediction={prediction}
            locationHandler={() => {
              handlePredictionClick(prediction.place_id);
            }}
          />
        ))}
      {viewHotspots &&
        hotSpotsList.map((spot: any) => (
          <div
            className='cursor-pointer'
            onClick={() => {
              const place: Place = {
                lat: spot.lon,
                lng: spot.lat,
                name: spot.destination_name,
                address: spot.destination_name,
              };
              handleHotspotClick(place);

              // if (!originParam) {
              //   updateUrl("origin", JSON.stringify(place));
              //   setFocused("dropOff");
              // } else {
              //   updateUrl("destination", JSON.stringify(place));
              // }
            }}>
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

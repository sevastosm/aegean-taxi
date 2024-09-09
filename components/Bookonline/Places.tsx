import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { usePathname, useParams, useRouter, useSearchParams } from 'next/navigation'

import error from "next/error";
import React, { useEffect, useState } from "react";
import PredictionListItem from "../predictions-list";
import HotSpot from "./HotSpot";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import useUrl from "@/app/hooks/useUrl";

type Props = {};

const Places = ({
  currentLocationAddress,
  setPickUpLocationHandler,
  nearbyLocations = [],
  displayHotSpots,
  locationSearch,
  locationHandler,
  hotSpots,
  setDropOffLocationHandler,
  selectedPickUp,
  selectedDropOff,
  pickUpLocation,
  dropLocation,
  origin,
  destination,
  focused = null,
  predictions = null,
  setPredictions
}: any) => {
  const searchParams = useSearchParams()
  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook
  const originParam = searchParams.get('origin')
  const destinationParam = searchParams.get('destination')
  const viewHotspots = !originParam && !destinationParam || originParam && !destinationParam
  if (selectedPickUp && selectedDropOff) {
    return null;
  }

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
      {currentLocationAddress && currentLocationAddress != "unknown" && (
        <>
          <ListItem
            alignItems="flex-start"
            onClick={() => setPickUpLocationHandler(currentLocationAddress)}
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
                    Your current location
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      )}

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
            locationHandler={(value) => {
              focused === "pickup"
                ? updateUrl("origin", value)
                : updateUrl("destination", value)
              setPredictions([])
            }
            }
          />
        ))}
      {viewHotspots &&
        locationSearch &&
        hotSpots &&
        hotSpotsList.map((spot: any) => (
          <div
            className="cursor-pointer"
            onClick={() => {
              if (!originParam) {
                updateUrl("origin", spot.destination_name)
              } else {
                updateUrl("destination", spot.destination_name)
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

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import error from "next/error";
import React from "react";
import PredictionListItem from "../predictions-list";
import HotSpot from "./HotSpot";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";

type Props = {};

const Places = ({
  currentLocationAddress,
  setPickUpLocationHandler,
  nearbyLocations,
  predictions,
  displayHotSpots,
  locationSearch,
  locationHandler,
  hotSpots,
  setDropOffLocationHandler,
  selectedPickUp,
  selectedDropOff,
  pickUpLocation,
  dropLocation,

}: any) => {

  console.log("pickUpLocation-p",pickUpLocation)
  console.log("pickUpLocation-d",dropLocation)

  if (selectedPickUp && selectedDropOff) {
    return null;
  }

  const hotSpotsList =
    hotSpots &&
    hotSpots.filter((spot: any) => spot.destination_name !== selectedPickUp);

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
            locationHandler={
              locationHandler === "pickUp"
                ? setPickUpLocationHandler
                : setDropOffLocationHandler
            }
          />
        ))}
      {displayHotSpots &&
        locationSearch &&
        hotSpots &&
        hotSpotsList.map((spot: any) => (
          <div
            className="cursor-pointer"
            onClick={() => {
              if (!selectedPickUp) {
                setPickUpLocationHandler(spot.destination_name);
              } else {
                setDropOffLocationHandler(spot.destination_name);
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

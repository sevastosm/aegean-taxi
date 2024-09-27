import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

export default function PredictionListItem(props: any) {
  let title: string | null = null;
  let description: string | null = null;

  if (props.description) {
    let descriptionString = props.description.split(",");
    title = descriptionString[0];
    descriptionString.shift();
    description = descriptionString.join(",");
  }



  return (
    <>
      {title && (
        <>
          <ListItem
            key={`${Math.floor(Math.random() * 1000)}`}
            alignItems="flex-start"
            onClick={props.locationHandler}
            sx={{
              cursor: "pointer",
            }}
          >
            <ListItemAvatar>
              <LocationOnRoundedIcon />
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {description}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      )}
    </>
  );
}

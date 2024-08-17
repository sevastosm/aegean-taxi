import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import {
  LocalizationProvider,
  DatePicker,
  DigitalClock,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";

type Props = {};

const Calendars = ({
  setOpenTimePicker,
  setOpenDayPicker,
  pickUpDate,
  openDayPicker,
  setPickUpDateHandler,
  pickUpTime,
  openTimePicker,
  setPickUpTimeHandler,
}: any) => {
  return (
    <Grid container spacing={1} sx={{ minHeight: 50 }}>
      <Grid item xs={6} md={6}>
        <Box sx={{ position: "relative" }}>
          <Button
            // startIcon={<EventSharpIcon />}
            variant="contained"
            size="large"
            fullWidth={true}
            onClick={() => {
              setOpenTimePicker(false);
              setOpenDayPicker(true);
            }}
            sx={{
              position: "absolute",
              zIndex: 999,
              background: "#fff !important",
              color: "#264388",
              fontWeight: "bold",
            }}
          >
            <Box sx={{ fontWeight: "bold" }}>{pickUpDate}</Box>
          </Button>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label=""
              open={openDayPicker}
              disablePast={true}
              sx={{
                position: "absolute",
                zIndex: 0,
                fontWeight: "bold",
              }}
              onClose={() => setOpenDayPicker(false)}
              slotProps={{ textField: { size: "small" } }}
              onChange={(value: any) => setPickUpDateHandler(value)}
            />
          </LocalizationProvider>
        </Box>
      </Grid>
      <Grid item xs={6} md={6}>
        <Box sx={{ position: "relative" }}>
          <Button
            variant="contained"
            // endIcon={<AccessTimeIcon />}
            size="large"
            fullWidth={true}
            onClick={() => {
              setOpenTimePicker(true);
            }}
            sx={{
              position: "absolute",
              zIndex: 999,
              background: "#fff !important",
              color: "#264388",
              fontWeight: "bold",
            }}
          >
            <Box sx={{ fontWeight: "bold" }}>{pickUpTime}</Box>
          </Button>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DesktopTimePicker
                            defaultValue={dayjs()}
                            label=""
                            open={openTimePicker}
                            disablePast={true}
                            sx={{
                              position: "absolute",
                              zIndex: 0,
                            }}
                            onClose={() => setOpenTimePicker(false)}
                            slotProps={{ textField: { size: "small" } }}
                            onChange={(value: any) =>
                              setPickUpTimeHandler(value)
                            }
                          /> */}
            {openTimePicker && (
              <DigitalClock
                defaultValue={dayjs()}
                // label=""
                // open={openTimePicker}
                timeStep={5}
                disablePast={pickUpDate === "TODAY" ? true : false}
                skipDisabled={true}
                sx={{
                  position: "absolute",
                  zIndex: 99999,
                  top: 45,
                  background: "#fafafa",
                }}
                // onClose={() => setOpenTimePicker(false)}

                onChange={(value: any) => setPickUpTimeHandler(value)}
              />
            )}
          </LocalizationProvider>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Calendars;

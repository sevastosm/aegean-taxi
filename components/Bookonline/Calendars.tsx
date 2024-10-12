import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import {
  LocalizationProvider,
  DatePicker,
  DigitalClock,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import useUrl from "@/app/hooks/useUrl";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useStore } from "@/app/store/store";

const Calendars = () => {
  const pickUpDate = useStore((state: any) => state.pickUpDate);
  const setPickUpDate = useStore((state: any) => state.setPickUpDate);
  const pickUpTime = useStore((state: any) => state.pickUpTime);
  const setPickUpTime = useStore((state: any) => state.setPickUpTime);

  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Europe/Athens");

  const [openDayPicker, setOpenDayPicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);

  const setPickUpDateHandler = (value: any) => {
    const dateString = dayjs(value).format("YYYY-MM-DD");
    setPickUpDate(dateString);
  };

  const setPickUpTimeHandler = (value: any) => {
    setOpenTimePicker(false);
    const timeString = dayjs(value).format("HH:mm");
    setPickUpTime(timeString);
  };

  return (
    <Grid container spacing={1} sx={{ minHeight: 50 }}>
      <Grid item xs={6} md={6}>
        <Box sx={{ position: "relative" }}>
          <Button
            // startIcon={<EventSharpIcon />}
            variant='contained'
            size='large'
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
            }}>
            <Box sx={{ fontWeight: "bold" }}>{pickUpDate}</Box>
          </Button>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label=''
              open={openDayPicker}
              disablePast={true}
              sx={{
                position: "absolute",
                zIndex: 0,
                fontWeight: "bold",
              }}
              onClose={() => setOpenDayPicker(false)}
              slotProps={{ textField: { size: "small" } }}
              onChange={setPickUpDateHandler}
            />
          </LocalizationProvider>
        </Box>
      </Grid>
      <Grid item xs={6} md={6}>
        <Box sx={{ position: "relative" }}>
          <Button
            variant='contained'
            // endIcon={<AccessTimeIcon />}
            size='large'
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
            }}>
            <Box sx={{ fontWeight: "bold" }}>{pickUpTime}</Box>
          </Button>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {openTimePicker && (
              <DigitalClock
                defaultValue={dayjs()}
                // label=""
                // open={openTimePicker}
                timeStep={5}
                disablePast={pickUpDate === "DATE" ? true : false}
                skipDisabled={true}
                sx={{
                  maxHeight: "350px",
                  position: "absolute",
                  zIndex: 0,
                  top: { xs: "-360px", md: 45 },
                  background: "#fafafa",
                }}
                // onClose={() => setOpenTimePicker(false)}

                onChange={setPickUpTimeHandler}
              />
            )}
          </LocalizationProvider>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Calendars;

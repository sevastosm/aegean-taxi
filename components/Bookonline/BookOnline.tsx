"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { AppContext } from "@/context/appState";

import useStorage from "@/hooks/useStorage";

import TaxiLocations from "../TaxiLocations";
import { locationDetails } from "@/utils/locationDetails";
import LocationSearch from "./LocationSearch";
import BookActions from "./BookActions";
import CarList from "./CarList";
import Calendars from "./Calendars";
import ToolBar from "./ToolBar";
import classNames from "classnames";
import MapComponent from "./MapComponent";
import { useGoogleMaps } from "./GoogleMapsProvider";
import useUrl from "@/app/hooks/useUrl";

export default function BookOnline() {
  const searchParams = useSearchParams();
  const locationSearch = searchParams.get("location");
  const [open, setOpen] = useState<boolean>(true);

  const [displayHotSpots, setDisplayHotSpots] = useState<boolean>(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  let apiTimeout: any;

  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook

  const nextButtonHandler = async () => {
    // setNextButton(false);
    // setSelectCarStep(true);
    // setOpen(true);
    updateUrl("selectcar", "selectcar");
  };

  const handleBack = () => {
    setOpen(true);
  };

  const origin = searchParams.get("origin");

  const destination = searchParams.get("destination");
  const selectcar = searchParams.get("selectcar");

  const wrapperStyle = classNames(
    "flex relative md:gap-20 flex-col md:flex-row min-h-[200px] max-w-[1200px] md:pt-4  md:h-auto mx-auto",
    open ? "h-[calc(100vh-70px)]" : "h-[calc(100vh-125px)]"
  );

  const activeLocation =
    locationSearch && locationDetails.taxi_locations[locationSearch];

  useEffect(() => {
    if (origin && destination) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [origin, destination]);

  useEffect(() => {
    if (!locationSearch) {
      localStorage.removeItem("bookinginfo");
    }
  }, [locationSearch]);

  return !locationSearch ? (
    <div className="flex flex-col h-[calc(100vh-70px)]">
      <TaxiLocations />
    </div>
  ) : (
    <div className={wrapperStyle}>
      <div className="absolute top-0 pt-3 left-0 z-10 w-full">
        <ToolBar
          toggleDrawer={toggleDrawer}
          handleClick={handleBack}
          isMapOpen={open}
        />
      </div>
      <div
        className={classNames(
          "w-full md:h-[700px] md:ml-4",
          "relative",
          !open ? "flex flex-grow h-[280px] min-h-[280px]" : "hidden md:block"
        )}
      >
        <MapComponent activeLocation={activeLocation} />
      </div>

      <div
        className={classNames(
          "flex flex-col gap-4 p-4 md:px-4 pb-4 min-w-auto md:pt-0 md:min-w-[400px] ",
          open && "mt-12  md:mt-0 grow md:grow-0"
        )}
      >
        <LocationSearch />

        {origin && destination && (
          <div className="flex-grow flex flex-col justify-end">
            <BookActions
              nextButtonHandler={nextButtonHandler}
              calendars={<Calendars />}
            />
          </div>
        )}
      </div>
    </div>
  );
}

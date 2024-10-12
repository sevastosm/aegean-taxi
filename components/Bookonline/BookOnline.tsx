"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import TaxiLocations from "../TaxiLocations";
import { locationDetails } from "@/utils/locationDetails";
import LocationSearch from "./LocationSearch";
import BookActions from "./BookActions";
import Calendars from "./Calendars";
import ToolBar from "./ToolBar";
import classNames from "classnames";
import MapComponent from "./MapComponent";
import useUrl from "@/app/hooks/useUrl";
import PinSearch from "./PinSearch";
import { useStore } from "@/app/store/store";

export default function BookOnline() {
  const searchParams = useSearchParams();
  const locationSearch = searchParams.get("location");
  const mapOpen = useStore((state) => state.mapOpen);
  const pickupLocation = useStore((state: any) => state.pickupLocation);
  const dropOffLocation = useStore((state: any) => state.dropOffLocation);

  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook

  const nextButtonHandler = async () => {
    updateUrl("selectcar", "selectcar");
  };

  const handleBack = () => {
    setOpen(true);
  };

  const wrapperStyle = classNames(
    "flex relative md:gap-2 flex-col md:flex-row min-h-[200px] max-w-[1200px] md:pt-4  md:h-auto mx-auto",
    // open ? "h-[calc(100vh-70px)]" : "h-[calc(100vh-125px)]"
    "h-[calc(100dvh-70px)]"
  );

  useEffect(() => {
    if (!locationSearch) {
      localStorage.removeItem("bookinginfo");
      useStore.persist.clearStorage();
    }
  }, [locationSearch]);

  return !locationSearch ? (
    <div className='flex flex-col h-[calc(100dvh-70px)]'>
      <TaxiLocations />
    </div>
  ) : (
    <div className={wrapperStyle}>
      <div className='absolute top-0 pt-3 left-0 z-10 w-full'>
        <ToolBar
          toggleDrawer={toggleDrawer}
          handleClick={handleBack}
          isMapOpen={mapOpen}
        />
      </div>
      <div
        className={classNames(
          "w-full md:h-[700px] md:ml-4",
          "relative",
          !mapOpen ? "flex flex-grow min-h-[300px] h-[60%]" : "hidden md:block"
        )}>
        <MapComponent />
      </div>

      <div
        className={classNames(
          "flex flex-col gap-4 p-4 md:px-4 pb-4 min-w-auto md:pt-0 md:min-w-[400px] justify-between",
          mapOpen
            ? "mt-[56px] md:mt-0 flex-grow md:flex-grow-0"
            : "flex-grow md:flex-grow-0"
        )}>
        <div className='flex-grow'>
          <LocationSearch />
        </div>

        {pickupLocation && dropOffLocation && (
          <div className='flex flex-col'>
            <div className='w-full'>
              <BookActions
                nextButtonHandler={nextButtonHandler}
                calendars={<Calendars />}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

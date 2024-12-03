"use client";
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import TaxiLocations from "../TaxiLocations";
import { locationDetails } from "@/utils/locationDetails";
import LocationSearch from "./LocationSearch";
import BookActions from "./BookActions";
import Calendars from "./Calendars";
import ToolBar from "./ToolBar";
import classNames from "classnames";
import MapComponent from "./MapComponent";
import useUrl from "@/app/(taxi)/hooks/useUrl";
import PinSearch from "./PinSearch";
import { useStore } from "@/app/(taxi)/store/store";
import { getLocationDetailsFromSlug } from "@/heplers/location";

export default function BookOnline() {
  const searchParams = useSearchParams();
  const params = useParams();

  const mapOpen = useStore((state) => state.mapOpen);
  const setActiveLocation = useStore((state: any) => state.setActiveLocation);
  const pickupLocation = useStore((state: any) => state.pickupLocation);
  const activeLocation = useStore((state: any) => state.activeLocation);
  const pinLocation = useStore((state: any) => state.pinLocation);

  const dropOffLocation = useStore((state: any) => state.dropOffLocation);
  const reset = useStore((state: any) => state.reset);
  const setViewHotspots = useStore((state: any) => state.setViewHotspots);
  const setActiveInput = useStore((state: any) => state.setActiveInput);

  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook

  const handleBack = () => {
    setOpen(true);
  };

  const wrapperStyle = classNames(
    "flex relative md:gap-2 flex-col md:flex-row min-h-[200px] max-w-[1200px] md:pt-4  md:h-auto mx-auto",
    // open ? "h-[calc(100vh-70px)]" : "h-[calc(100vh-125px)]"
    "h-[calc(100dvh-70px)]"
  );

  useEffect(() => {
    if (activeLocation) {
      setViewHotspots(true);
    }
  }, [activeLocation]);
  useEffect(() => {
    if (!pinLocation) setActiveInput("pickUp");
  }, [pinLocation]);

  useEffect(() => {
    if (params.location) {
      const locationDetails = getLocationDetailsFromSlug(params.location);
      console.log("locationDetails", locationDetails);
      setActiveLocation(locationDetails);
    }
  }, [params.location]);

  return (
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
          "flex flex-grow min-h-[200px] h-[60%]"
          // !mapOpen ? "flex flex-grow min-h-[300px] h-[60%]" : "hidden md:block"
        )}>
        <MapComponent />
      </div>

      <div
        className={classNames(
          "flex flex-col gap-4 p-4 md:px-4 pb-4 min-w-auto md:pt-0 md:min-w-[400px] justify-between",
          "flex-grow md:flex-grow-0"
          // mapOpen
          //   ? "mt-[56px] md:mt-0 flex-grow md:flex-grow-0"
          //   : "flex-grow md:flex-grow-0"
        )}>
        <div className='flex-grow'>
          <LocationSearch />
        </div>

        {pickupLocation && dropOffLocation && (
          <div className='flex flex-col'>
            <div className='w-full'>
              <BookActions calendars={<Calendars />} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

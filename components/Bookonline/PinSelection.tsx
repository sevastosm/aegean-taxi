"use client";

import { useStore } from "@/app/store/store";
import React from "react";
import PinSearch from "./PinSearch";
import ToolBar from "./ToolBar";
import classNames from "classnames";
import MapComponent from "./MapComponent";
import MapWithPin from "./MapWithPin";

type Props = {};

const PinSelection = () => {
  const mapOpen = useStore((state) => state.mapOpen);

  const wrapperStyle = classNames(
    "flex relative md:gap-2 flex-col md:flex-row min-h-[200px] max-w-[1200px] md:pt-4  md:h-auto mx-auto",
    // open ? "h-[calc(100vh-70px)]" : "h-[calc(100vh-125px)]"
    "h-[calc(100dvh-70px)]"
  );

  return (
    <div className={wrapperStyle}>
      <div className='absolute top-0 pt-3 left-0 z-10 w-full'>
        <ToolBar isMapOpen={mapOpen} />
      </div>
      <div
        className={classNames(
          "w-full md:h-[700px] md:ml-4",
          "relative",
          !mapOpen ? "flex flex-grow min-h-[300px] h-[60%]" : "hidden md:block"
        )}>
        <MapWithPin />
      </div>

      <div
        className={classNames(
          "flex flex-col gap-4 p-4 md:px-4 pb-4 min-w-auto md:pt-0 md:min-w-[400px] justify-between",
          mapOpen
            ? "mt-[56px] md:mt-0 flex-grow md:flex-grow-0"
            : "flex-grow md:flex-grow-0"
        )}>
        <div className='flex-grow'>
          <PinSearch />
        </div>
      </div>
    </div>
  );
};

export default PinSelection;

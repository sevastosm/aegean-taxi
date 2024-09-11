"use client";
import React, { useState } from "react";

import CarList from "./CarList";
import ToolBar from "./ToolBar";
import classNames from "classnames";
import MapComponent from "./MapComponent";
export default function Drivers() {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="flex relative md:gap-20 flex-col md:flex-row min-h-[200px] max-w-[1200px] h-[calc(100vh-50px)] mx-auto">
      <div className="absolute top-3 left-0 z-10 w-full">
        <ToolBar toggleDrawer={toggleDrawer} isMapOpen={open} />
      </div>

      <div
        className={classNames(
          "w-full md:h-[700px] md:ml-4",
          "relative",
          !open ? "flex flex-grow h-[200px] min-h-[200px]" : "hidden md:block"
        )}
      >
        <MapComponent />,
      </div>
      <div
        className={classNames(
          "flex flex-col gap-4 px-4 pb-4 min-w-auto md:min-w-[400px] md:h-[700px]",
          "grow md:grow-0"
        )}
      >
        <CarList />
      </div>
    </div>
  );
}

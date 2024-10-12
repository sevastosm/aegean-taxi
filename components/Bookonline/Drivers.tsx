"use client";
import React, { useState } from "react";

import CarList from "./CarList";
import ToolBar from "./ToolBar";
import classNames from "classnames";
import MapComponent from "./MapComponent";
import { useStore } from "@/app/store/store";
export default function Drivers() {
  const mapOpen = useStore((state: any) => state.mapOpen);

  return (
    <div className='flex relative md:gap-2 flex-col md:flex-row min-h-[200px] max-w-[1200px] h-[calc(100dvh-70px)] md:pt-4  mx-auto'>
      <div className='absolute top-0 pt-3  left-0 z-10 w-full'>
        <ToolBar colapsed={false} />
      </div>

      <div
        className={classNames(
          "w-full md:h-[700px] md:ml-4",
          "relative",
          !mapOpen ? "flex h-[200px] min-h-[200px]" : "hidden md:block"
        )}>
        <MapComponent colapsed={false} page={"trasporation"} />,
      </div>
      <div
        className={classNames(
          "flex flex-col flex-grow gap-4 px-4 pb-4 min-w-auto md:min-w-[400px] md:h-[700px] md:flex-grow-0",
          mapOpen && "mt-12  md:mt-0 grow md:grow-0"
        )}>
        <CarList />
      </div>
    </div>
  );
}

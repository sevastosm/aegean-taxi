import React from "react";
import Image from "next/image";

type Props = {
  destination_name: string;
  type: any;
  locationHandler: string;
};

const icon: any = {
  port: "/assets/port.svg",
  airport: "/assets/airport.svg",
  town: "/assets/city-centre.svg",
};

const HotSpot = ({ destination_name, type, locationHandler }: Props) => {
  return (
    <div className="flex flex-row justify-start items-center my-2">
      <Image
        width={50}
        height={50}
        src={icon[type]}
        alt={icon[type]}
        className="w-[50px] h-[50px] me-5 bg-gray-200 rounded-full p-2"
      />
      <p className="font-semibold text-lg">{destination_name}</p>
      {/* {locationHandler === "pickUp" ? " - pick up " : " - drop off"} */}
    </div>
  );
};

export default HotSpot;

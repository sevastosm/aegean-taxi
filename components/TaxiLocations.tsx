import React from "react";
import Image from "next/image";

const car = "/assets/booking-flow/car.svg";
import { locationDetails } from "@/utils/locationDetails";
import Link from "next/link";

type Props = {
  locationName: string;
  imageUrl: string;
  riders: number;
  imageOptions: {
    width: number;
    height: number;
  };
};

const availableLocations = [
  "mykonos-taxi-app",
  "santorini-taxi-app",
  "rhodes-taxi-app",
  "corfu-taxi-app",
  "kos-taxi-app",
  "milos-taxi-app",
  "paros-taxi-app",
  "naxos-taxi-app",
  "kea-taxi-app",
  "heraklion-taxi-app",
  "athens-taxi-app",
];
const imageOptions = [
  { width: 55, height: 46 },
  { width: 40, height: 36 },
  { width: 35, height: 16 },
  { width: 35, height: 16 },
  { width: 45, height: 26 },
  { width: 45, height: 26 },
  { width: 35, height: 16 },
  { width: 35, height: 16 },
  { width: 35, height: 16 },
  { width: 85, height: 66 },
  { width: 35, height: 16 },
];

const Location = ({ locationName, riders, imageUrl, imageOptions }: Props) => (
  <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
    <img
      src={imageUrl}
      alt={locationName}
      width={imageOptions.width}
      height={imageOptions.height}
      className="absolute inset-0 mx-auto my-auto"
    />
    <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
      {locationName}
    </p>

    <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
      <div className="flex items-center justify-around px-2">
        <img
          src={car}
          alt="Car Icon"
          width={12}
          height={12}
          className="-mb-[2px] hidden"
        />
        <p className="text-center text-[12px] font-semibold">{riders} online</p>
      </div>
    </div>
  </div>
);

const { taxi_locations } = locationDetails;
const mykonosOptions = taxi_locations[availableLocations[0]];
const santoriniOptions = taxi_locations[availableLocations[1]];

function TaxiLocations() {
  return (
    <div className="flex flex-col gap-0 md:gap-6 max-w-[700px] m-auto">
      <div className="text-center">
        <h1 className="font-bold text-2xl leading-[28px] md:leading-[56px]">
          Book a Taxi online 24/7
        </h1>

        <p className="font-normal text-xl">Select a location to begin</p>
      </div>
      <div className="mt-4 md:mt-0">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="col-span-1">
            <Link href={`/book-online?location=${mykonosOptions.location}`}>
              <Location
                locationName={mykonosOptions.slide.name}
                riders={60}
                imageUrl={mykonosOptions.mapUrl}
                imageOptions={imageOptions[0]}
              />
            </Link>
          </div>
          <div className="col-span-1">
            <Link href={`/book-online?location=${santoriniOptions.location}`}>
              <Location
                locationName={santoriniOptions.slide.name}
                riders={60}
                imageUrl={santoriniOptions.mapUrl}
                imageOptions={imageOptions[1]}
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {availableLocations.map((location, i) => {
            if (i > 1) {
              const locationTaxi = taxi_locations[location];

              return (
                <div key={i} className="col-span-1 mb-2">
                  <Link href={`/book-online?location=${locationTaxi.location}`}>
                    <Location
                      locationName={locationTaxi.slide.name}
                      riders={60}
                      imageUrl={locationTaxi.mapUrl}
                      imageOptions={imageOptions[i]}
                    />
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <div className="flex w-full items-center bg-[#E8E8E8] rounded-xl px-4 py-3">
          <a href="tel:+302152154000">
            <Image
              src="../assets/phoneIcon.svg"
              className=" bg-white rounded-full p-1.5"
              width={30}
              height={30}
              alt="whatsapp icon"
            />
          </a>
          <a href="tel:+302152154000">
            <p className="text-black font-semibold ms-2">Call us</p>
          </a>
        </div>

        <div className="flex w-full items-center bg-[#E8E8E8] rounded-xl px-4 py-3">
          <a href="https://wa.me/+306943829494">
            <Image
              src="../assets/whatsapp.svg"
              className="text-white"
              width={30}
              height={30}
              alt="whatsapp icon"
            />
          </a>
          <a href="https://wa.me/+306943829494">
            <p className="text-black font-semibold ms-2">WhatsApp</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TaxiLocations;

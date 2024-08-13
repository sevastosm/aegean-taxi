import React from "react";

const athens = "/assets/booking-flow/athens.svg";
const mykonos = "/assets/booking-flow/mykonos.svg";
const santorini = "/assets/booking-flow/santorini.svg";
const rhodes = "/assets/booking-flow/rhodes.svg";
const crete = "/assets/booking-flow/crete.svg";
const corfu = "/assets/booking-flow/corfu.svg";
const kea = "/assets/booking-flow/kea.svg";
const kos = "/assets/booking-flow/kos.svg";
const milos = "/assets/booking-flow/milos.svg";
const paros = "/assets/booking-flow/paros.svg";
const naxos = "/assets/booking-flow/naxos.svg";
const menuBtn = "/assets/booking-flow/menu-btn.svg";
const logo = "/assets/booking-flow/logo.svg";
const phoneIcon = "/assets/booking-flow/phoneIcon.svg";
const car = "/assets/booking-flow/car.svg";
import { locationDetails } from "@/utils/locationDetails";
import Link from "next/link";

type Props = {
  locationName: string;
  imageUrl: string;
  riders: number;
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

const locations: Props[] = [];

const Location = ({ locationName, riders, imageUrl }: Props) => (
  <div className="w-full min-w-[140px]">
    <div className="col-span-1">
      <div className="h-[90px]  flex relative bg-[#E8E8E8] rounded-xl justify-end">
        <p className="text-[#121824] absolute bottom-0 left-0 font-bold ps-3 pb-2 text-sm">
          {locationName}
        </p>
        <img
          src={imageUrl}
          alt={locationName}
          width={85}
          height={66}
          className="px-3 flex items-center"
        />
        <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-3 py-1">
          <div className="flex items-center justify-around px-2">
            <img
              src={car}
              alt="Car Icon"
              width={12}
              height={12}
              className="-mb-[2px] hidden md:block"
            />
            <p className="text-center text-[13px] md:text-xxs font-semibold">
              {riders} online
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const { taxi_locations } = locationDetails;

console.log("taxi_locations", taxi_locations);

function TaxiLocations() {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h1 className="font-bold text-2xl leading-[56px]">
          Book a Taxi online 24/7
        </h1>
        <p className="font-normal text-xl">Select a location to begin</p>
      </div>

      <div className="mt-12">
        <ul className="flex flex-wrap px-4 gap-4">
          {availableLocations.map((location, i) => {
            const locationTaxi = taxi_locations[location];
            console.log("locationTaxi", locationTaxi);
            return (
              <li key={i} className={` ${i < 2 ? "min-w-[49%]" : "test"}`}>
                <Link href={`/book-online?location=${locationTaxi.location}`}>
                  <Location
                    locationName={locationTaxi.slide.name}
                    riders={60}
                    imageUrl={locationTaxi.mapUrl}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TaxiLocations;

import React, { useState, useEffect } from "react";
import CardPayment from "./CardPayment";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
const uberCar = "/assets/booking-flow/uberCar.svg";
const uberVan = "/assets/booking-flow/uberVan.svg";
const personIcon = "/assets/booking-flow/personIcon.svg";
const walletIcon = "/assets/booking-flow/walletIcon.svg";

const SelectTaxi = ({
  cars,
  handleChange,
  authorizeUser,
  carSelectHandler,
}: any) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelect = (item: any) => {
    setSelectedItem(item);
    carSelectHandler(item);
    // handleChange();
  };

  const carImages: any = {
    Van: uberVan,
    MiniBus: uberVan,
    Economy: uberCar,
    Taxi: uberCar,
    Luxury: uberCar,
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <p className="text-xl font-semibold  text-[#264388]">Choose a trip</p>
      </div>
      <div className="w-full mx-auto bg-white  rounded-2xl">
        <div className="space-y-2">
          {cars.map((car: any, i: number) => {
            return (
              <div
                key={i}
                className={`my-1 px-2 border-[3px] rounded-2xl cursor-pointer flex items-center justify-between ${
                  selectedItem === car.name
                    ? "border-[#264388]"
                    : "border-transparent"
                }`}
                onClick={() => handleSelect(car.name)}
              >
                <div className="flex flex-row items-center justify-start">
                  <img
                    src={carImages[car.name]}
                    alt="Taxi Icon"
                    className="w-[50px] h-[50px] mr-2"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-start">
                      <p className="text-[#264388] font-bold text-lg mx-1">
                        {car.name ? car.name : car.vehicleType}
                      </p>
                      <img
                        src={personIcon}
                        alt="Person Icon"
                        className="w-[15px] h-[15px] mr-1"
                      />
                      <span className="text-base font-normal">
                        1 - {car.numberOfSeats}
                      </span>
                    </div>
                    {/* <div className="flex flex-row items-center justify-between">
                      <p className="text-sm mx-1 font-semibold">
                        <span>15:25</span>
                      </p>
                      <p className="text-sm mx-1 font-semibold">
                        <span>3 mins away</span>
                      </p>
                    </div> */}
                  </div>
                </div>
                <p className="font-bold text-[#264388] text-2xl">
                  €{Math.ceil(car.cost)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <CardPayment />
      <div className="flex items-end justify-center my-4">
        <button
          disabled={!selectedItem}
          onClick={authorizeUser}
          className="w-full bg-[#264388] text-white font-semibold text-xl py-4 rounded-md"
        >
          {selectedItem
            ? "Confirm" + " " + selectedItem
            : "Select transportation"}
        </button>
      </div>
    </div>
  );
};

export default SelectTaxi;

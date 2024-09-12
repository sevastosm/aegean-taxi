import useUrl from "@/app/hooks/useUrl";
import { updateStorage } from "@/heplers/updateStorage";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import CardPayment from "./CardPayment";
const uberCar = "/assets/booking-flow/uberCar.svg";
const uberVan = "/assets/booking-flow/uberVan.svg";
const personIcon = "/assets/booking-flow/personIcon.svg";

const SelectTaxi = ({ cars }: any) => {
  const searchParams = useSearchParams();
  const tarif = searchParams.get("tarif");

  const router = useRouter();

  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelect = useCallback(
    (item: any) => {
      updateStorage("traspontation", item);
      setSelectedItem(item.name);
      updateUrl("tarif", item.tariffId);
    },
    [tarif]
  );

  const carImages: any = {
    Economy: uberCar,
    Van: uberVan,
    MiniBus: uberVan,
    Taxi: uberCar,
    Luxury: uberCar,
  };

  const handleClick = () => {
    router.push("/book-online/verification");
  };

  const shortedCars = cars.sort((a, b) => a.cost - b.cost);

  useEffect(() => {
    if (tarif && !selectedItem) {
      const car = shortedCars.find((car: any) => car.tariffId === tarif);
      handleSelect(car);
    }
  }, [cars, tarif]);

  useEffect(() => {
    if (!tarif && !selectedItem) {
      handleSelect(shortedCars[0]);
    }
  }, [cars]);

  return (
    <div className="flex flex-col flex-grow md:flex-grow-0">
      <div className="w-full mx-auto bg-white flex-grow rounded-2xl pt-4 md:pt-0">
        <div className="">
          {shortedCars.map((car: any, i: number) => {
            return (
              <div
                key={i}
                className={`my-2.5 px-3 py-1 border-[3px] rounded-2xl cursor-pointer flex items-center justify-between ${
                  selectedItem === car.name
                    ? "border-[#264388]"
                    : "border-transparent"
                }`}
                onClick={() => handleSelect(car)}
              >
                <div className="flex flex-row gap-2 items-center justify-start">
                  <img
                    src={carImages[car.name]}
                    alt="Taxi Icon"
                    className="w-[50px] h-[50px] mr-2"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col justify-start">
                      <div className="text-[#264388] font-bold text-lg mx-1">
                        {car.name ? car.name : car.vehicleType}
                      </div>
                      <div className="flex gap-2 items-center ">
                        <img
                          src={personIcon}
                          alt="Person Icon"
                          className="w-[15px] h-[15px] mr-1"
                        />
                        <span className="text-base font-normal italic">
                          1 - {car.numberOfSeats}
                        </span>
                      </div>
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
      <div className="px-4">
        <CardPayment />
      </div>
      <div className="flex items-end justify-center pb-4">
        <button
          onClick={handleClick}
          disabled={!selectedItem}
          className="w-full bg-[#264388] text-white font-semibold text-xl py-4 rounded-md"
        >
          {selectedItem ? "Book" + " " + selectedItem : "Select transportation"}
        </button>
      </div>
    </div>
  );
};

export default SelectTaxi;

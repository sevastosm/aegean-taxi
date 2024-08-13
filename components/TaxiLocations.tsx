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

type Props = {};

function TaxiLocations({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-center">
        <h1 className="font-bold text-2xl leading-[56px]">
          Book a Taxi online 24/7
        </h1>
        <p className="font-normal text-xl">Select a location to begin</p>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-2 gap-4 px-4">
          <div className="col-span-1">
            <div className="h-[90px] w-full flex relative bg-[#E8E8E8] rounded-xl justify-end">
              <p className="text-[#121824] absolute bottom-0 left-0 font-bold ps-3 pb-2 text-sm">
                Mykonos
              </p>
              <img
                src={mykonos}
                alt="Mykonos"
                width={85}
                height={66}
                className="px-3 flex items-center"
              />
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  {/* <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  /> */}
                  <p className="text-center text-[14px] md:text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[90px] w-full flex relative bg-[#E8E8E8] rounded-xl justify-end">
              <p className="text-[#121824] absolute bottom-0 left-0 font-bold ps-3 pb-2 text-sm">
                Santorini
              </p>
              <img
                src={santorini}
                alt="Santorini"
                width={75}
                height={56}
                className="px-3 flex items-center"
              />
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-1/2 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    33 online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-4 mt-6">
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={rhodes}
                alt="Rhodes"
                width={35}
                height={16}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Rhodes
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={corfu}
                alt="Corfu"
                width={35}
                height={16}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Corfu
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={kos}
                alt="Kos"
                width={45}
                height={26}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Kos
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-4 mt-6">
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={milos}
                alt="Milos"
                width={45}
                height={26}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Milos
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={paros}
                alt="Paros"
                width={35}
                height={16}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Paros
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={naxos}
                alt="Naxos"
                width={35}
                height={16}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Naxos
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-4 mt-6">
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={kea}
                alt="Kea"
                width={35}
                height={16}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Kea
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={crete}
                alt="Crete"
                width={65}
                height={46}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Crete
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[90px] w-full flex flex-col relative bg-[#E8E8E8] rounded-xl">
              <img
                src={athens}
                alt="Athens"
                width={35}
                height={16}
                className="absolute inset-0 mx-auto my-auto"
              />
              <p className="text-[#121824] text-center font-bold text-sm absolute inset-x-0 bottom-0 pb-1">
                Athens
              </p>
              <div className="bg-[#108246] text-white absolute inset-x-0 top-0 w-3/4 rounded-full mx-auto -mt-3 py-1">
                <div className="flex items-center justify-around px-2">
                  <img
                    src={car}
                    alt="Car Icon"
                    width={12}
                    height={12}
                    className="-mb-[2px]"
                  />
                  <p className="text-center text-xxs font-semibold">
                    63 online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiLocations;

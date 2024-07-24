import React from "react";
const personIcon = "/assets/booking-flow/personIcon.svg";
const uberIcon = "/assets/booking-flow/uberIcon.svg";
const phoneiOS = "/assets/booking-flow/phoneiOS.svg";
const whatsappiOS = "/assets/booking-flow/whatsappiOS.svg";

type Props = {
  details: any;
};

function DriverDetails({ details }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center flex-grow mt-4 mx-4">
        <div className="flex items-center justify-center">
          <img src={uberIcon} alt="Taxi Icon" className="w-[80px] h-[50px]" />
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="text-lg font-bold uppercase border-2 border-gray-300 px-2 py-1">
            {details.car.plateNumber}
          </p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="text-lg font-semibold"> {details.car.model}</p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="text-xl font-bold text-blue-800">{details.driver.name}</p>
        </div>

        <div className="flex items-start justify-between w-full mt-3">
          <div className="flex flex-col items-center justify-center px-3">
            <img
              src={phoneiOS}
              alt=" Device Icon"
              className="w-[40px] h-[40px]"
            />
            <p className="text-xs text-black font-semibold">Phone</p>
          </div>
          <p className="text-xl font-bold text-blue-800">{details.driver.phone}</p>
          <div className="flex flex-col items-center justify-center">
            <img
              src={whatsappiOS}
              alt="Whatsapp Icon"
              className="w-[40px] h-[40px]"
            />
            <p className="text-xs text-black font-semibold">WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverDetails;

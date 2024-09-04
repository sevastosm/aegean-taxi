import { OrderData } from "@/types/bookingFlow";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { json } from "stream/consumers";
import CancelButton from "../CancelButton";
import DriverDetails from "./DriverDetails";
import { screen } from "./Order";
const personIcon = "/assets/booking-flow/personIcon.svg";
const calendarIcon = "/assets/booking-flow/calendarIcon.svg";
const arrow = "/assets/booking-flow/arrow.svg";

type Props = {
  screen: string | null;
  orderData: OrderData;
  orderDetails: any;
  orderId: string | null;
};

const screens: any = {
  "reservation-received": "Reservation received",
  "reservation-confirmed": "Reservation confirmed",
  "reservation-on-the-way": "Reservation on the way",
  "reservation-cancelled": "Reservation cancelled",
};
const titleColor: any = {
  "reservation-received": "#FF001F",
  "reservation-confirmed": "#47C69C",
  "reservation-on-the-way": "#47C69C",
  "reservation-cancelled": "#FF001F",
};

function OrderDetails({ screen, orderData, orderDetails, orderId }: Props) {
  console.log("screen", titleColor[screen]);

  const color = () => `text-[${titleColor[screen]}]`;

  if (orderData?.noOrder) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl text-[#FF001F]">No order found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center">
        <h1 className={`font-bold text-2xl ${color()}`}>{screens[screen]}</h1>
      </div>
      {orderData && (
        <div>
          <div className="flex items-center justify-between mx-4 pt-8 pb-6 relative border-b-4 border-[#1218241a]">
            <div className="border-l-4 border-[#47C69C] min-h-[70px] ps-2 flex flex-col justify-between">
              <p className="text-black text-[16px] font-bold">Pick up</p>
              <p className="text-black font-normal text-[15px]">
                {orderData.waypoints[0].street}
              </p>
            </div>
            <div>
              <img src={arrow} alt="Arrow" className="w-[100px] h-[15px]" />
            </div>
            <div className="border-l-4 border-black min-h-[70px] ps-2 flex flex-col justify-between">
              <p className="text-black text-[16px] font-bold">Drop off</p>
              <p className="text-black font-normal text-[15px]">
                {orderData.waypoints[1].street}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center">
              <img
                src={calendarIcon}
                alt="Calendar Icon"
                className="w-[25px] h-[25px] me-2"
              />
              <p className="text-base font-semibold">
                {moment(orderData.pickupTime).format("ddd Do MMM [@] h:mm")}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mx-4 mt-6 pb-4 border-b-4 border-[#1218241a]">
            <div className="flex items-center">
              <img
                src={personIcon}
                alt="Person Icon"
                className="w-[15px] h-[15px] me-4"
              />
              <p className="text-base font-semibold">{orderData.client.name}</p>
            </div>
          </div>
        </div>
      )}
      {screen === "reservation-received" && (
        <div className="flex flex-col gap-2 items-center mx-4 my-4">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-xl text-center text-[#FF001F]">
              This is NOT a booking confirmation!
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-semibold text-[17px] text-center">
              Once a driver accepts your ride, <br></br>this section will be
              updated <br></br>with driver details.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-semibold text-[18px] text-center">
              Please check again using the link<br></br> provided on the SMS
            </p>
          </div>
        </div>
      )}
      {orderData.car && <DriverDetails details={orderDetails} />}
      {screen !== "reservation-cancelled" ? (
        <div className="flex items-end justify-center px-2">
          <CancelButton orderId={orderId} />
        </div>
      ) : (
        <Link href="/">
          <div className="flex flex-col flex-grow items-center my-4 px-4">
            <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-blue-700 w-full mx-2">
              New Ride
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}

export default OrderDetails;

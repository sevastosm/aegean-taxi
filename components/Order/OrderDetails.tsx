import { OrderData } from "@/types/bookingFlow";
import classNames from "classnames";
import dayjs from "dayjs";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { json } from "stream/consumers";
import CancelButton from "../CancelButton";
import DriverDetails from "./DriverDetails";
import MapTracking from "./MapTracking";
const personIcon = "/assets/booking-flow/personIcon.svg";
const calendarIcon = "/assets/booking-flow/calendarIcon.svg";
const arrow = "/assets/booking-flow/arrow.svg";
const uberIcon = "/assets/booking-flow/uberIcon.svg";
const phoneiOS = "/assets/booking-flow/phoneiOS.svg";
const whatsappiOS = "/assets/booking-flow/whatsappiOS.svg";

type Props = {
  screen: string | null;
  orderData: OrderData;
  orderDetails: any;
  orderId: string | null;
};


function OrderDetails({
  screen,
  orderData,
  orderDetails,
  orderId,
  trackingData,
}: Props) {

  if (orderData?.noOrder) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-[#FF001F]">No order found</h1>
        <Link href="/">
          <div className="flex flex-col flex-grow items-center my-4 px-4">
            <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-blue-700 w-full mx-2">
              New Ride
            </button>
          </div>
        </Link>
      </div>
    );
  }



  // const remaing = dayjs(trackingData.driverLocation.time).from(a);

  const style = classNames(
    "font-bold text-2xl",
    screen === "reservation-received" && "text-[#FF001F]",
    screen === "reservation-confirmed" && "text-[#00CA82]",
    screen === "reservation-on-the-way" && "text-[#00000]",
    screen === "reservation-cancelled" && "text-[#00CA82]"
  );

  const screens: any = {
    "reservation-received": "Reservation received !",
    "reservation-confirmed": "Reservation confirmed",
    "reservation-on-the-way": "Driver is on the way",
    "reservation-cancelled": "Reservation cancelled",
    "ride-started": "Driver is on the way",
    "reservation-completed": "Ride completed",
    "ride-transfering": "Transfering",
  };

  const showDriverDetails = screen === "reservation-confirmed" ||
    screen === "reservation-on-the-way";

  const showOrderData = screen === "reservation-confirmed" ||
    screen === "reservation-received";

  const showCancel =
    screen === "reservation-received" ||
    screen === "reservation-confirmed" ||
    screen === "reservation-on-the-way";

  const showNew =
    screen === "reservation-cancelled" || screen === "reservation-completed";

  console.log(screen)
  return (
    <div className="flex flex-col min-h-[87vh]">
      {/* {(trackingData && trackingData?.status === "TRANSFERRING") ||
        (trackingData?.status === "STARTED" && ( */}

      {trackingData?.status === "STARTED" &&
        <div className="h-[200px] md-h-[400px] w-full -mt-3">
          <MapTracking orderDetails={orderData} tracking={trackingData} />
        </div>}

      <div className="max-w-[500px] flex-1 flex flex-col w-full mx-auto">
        <div className="flex gap-2 items-center mt-3 justify-center">
          <h1 className={style}>{screens[screen]}</h1>
          {screen === "reservation-confirmed" &&
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 52 52"
              fill="none"
            >
              <path
                d="M22.36 30.68L16.705 25.025C16.2283 24.5483 15.6329 24.3213 14.9188 24.3438C14.2029 24.3646 13.6067 24.6133 13.13 25.09C12.6533 25.5667 12.415 26.1733 12.415 26.91C12.415 27.6467 12.6533 28.2533 13.13 28.73L20.54 36.14C21.0167 36.6167 21.6233 36.855 22.36 36.855C23.0967 36.855 23.7033 36.6167 24.18 36.14L38.935 21.385C39.4117 20.9083 39.6396 20.3121 39.6188 19.5962C39.5963 18.8821 39.3467 18.2867 38.87 17.81C38.3933 17.3333 37.7867 17.095 37.05 17.095C36.3133 17.095 35.7067 17.3333 35.23 17.81L22.36 30.68ZM26 52C22.4033 52 19.0233 51.3171 15.86 49.9512C12.6967 48.5871 9.945 46.735 7.605 44.395C5.265 42.055 3.41293 39.3033 2.0488 36.14C0.682934 32.9767 0 29.5967 0 26C0 22.4033 0.682934 19.0233 2.0488 15.86C3.41293 12.6967 5.265 9.945 7.605 7.605C9.945 5.265 12.6967 3.41207 15.86 2.0462C19.0233 0.682067 22.4033 0 26 0C29.5967 0 32.9767 0.682067 36.14 2.0462C39.3033 3.41207 42.055 5.265 44.395 7.605C46.735 9.945 48.5871 12.6967 49.9512 15.86C51.3171 19.0233 52 22.4033 52 26C52 29.5967 51.3171 32.9767 49.9512 36.14C48.5871 39.3033 46.735 42.055 44.395 44.395C42.055 46.735 39.3033 48.5871 36.14 49.9512C32.9767 51.3171 29.5967 52 26 52ZM26 46.8C31.7633 46.8 36.6713 44.7746 40.7238 40.7238C44.7746 36.6713 46.8 31.7633 46.8 26C46.8 20.2367 44.7746 15.3287 40.7238 11.2762C36.6713 7.2254 31.7633 5.2 26 5.2C20.2367 5.2 15.3296 7.2254 11.2788 11.2762C7.22627 15.3287 5.2 20.2367 5.2 26C5.2 31.7633 7.22627 36.6713 11.2788 40.7238C15.3296 44.7746 20.2367 46.8 26 46.8Z"
                fill="#00CA82"
              />
            </svg>}
        </div>
        {showOrderData && orderData && (
          <div>
            <div className="flex  items-center justify-evenly mx-4 pt-3 pb-6 relative ">
              <div className="flex  max-w-[40%] border-l-4 border-[#47C69C] min-h-[70px] ps-2">
                <div className="flex flex-col">
                  <p className="text-black text-[16px] font-bold">Pick up</p>
                  <p className="text-black font-normal line-clamp-2 text-[15px]">
                    {orderData.waypoints[0].street}
                  </p>
                </div>

              </div>
              <div className="flex w-[100px]   items-center">
                <img src={arrow} alt="Arrow" className="w-[100px] h-[15px] " />
              </div>
              <div className="border-l-4   ml-3 border-black min-h-[70px] h-auto ps-2 flex flex-col justify-between">
                <p className="text-black text-[16px] font-bold ">Drop off</p>
                <p className="text-black font-normal line-clamp-2 text-[15px]">
                  {orderData.waypoints[1].street}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 py-4 border-t-4 border-b-4 border-[#1218241a]">
              <div className="flex items-center justify-center">
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
              <div className="flex items-center justify-center mx-4 ">
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
          </div>
        )}
        {showDriverDetails && orderDetails && <DriverOnTheWay orderDetails={orderDetails} screen={screen} />}
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
        {/* {orderData.car && <DriverDetails details={orderDetails} />} */}
        {showCancel && (
          <div className="flex flex-grow items-end justify-center px-2">
            <CancelButton orderId={orderId} />
          </div>
        )}
        {showNew && (
          <div className="flex items-end justify-center px-2">
            <Link href="/">
              <div className="flex flex-col flex-grow items-center my-4 px-4">
                <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-blue-700 w-full mx-2">
                  New Ride
                </button>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetails;



const DriverOnTheWay = ({ orderDetails, screen }) => {

  // Set future time (target date and time)
  const futureDate = dayjs(orderDetails?.eta);

  // Get the current time
  const now = dayjs();

  const showTime = screen === "reservation-on-the-way"

  // Calculate the difference in milliseconds
  const diffInMilliseconds = futureDate.diff(now);

  // Convert the difference to days, hours, minutes, and seconds
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));


  return <div className="mt-3"
  ><div className="flex items-center justify-center">
      {showTime && <p className="text-xl font-semibold text-gray-500">
        (Pick up in {minutes} min)
      </p>}
    </div><div className="flex flex-col items-center justify-center flex-grow mx-4">
      <div className="flex items-center justify-center">
        <img src={uberIcon} alt="Taxi Icon" className="w-[80px] h-[50px]" />
      </div>
      <div className="flex items-center justify-center mt-3">
        <p className="text-lg font-bold uppercase border-2 border-gray-300 px-2 py-1">
          {orderDetails.car.plateNumber}
        </p>
      </div>
      <div className="flex items-center justify-center mt-3">
        <p className="text-lg "> {orderDetails.car.color}      {orderDetails.car.model}</p>
      </div>
      <div className="flex items-center justify-center mt-3">
        <p className="text-md font-semibold text-blue-800">{orderDetails.driver.name} </p>
      </div>

      <div className="flex  items-center justify-between w-full mt-3 max-w-[300px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 47 47" fill="none">
            <path d="M9.45222 20.3406C13.2122 27.73 19.27 33.7878 26.6594 37.5478L32.4039 31.8033C33.135 31.0722 34.1533 30.8633 35.0672 31.1506C37.9917 32.1167 41.125 32.6389 44.3889 32.6389C45.0814 32.6389 45.7455 32.914 46.2352 33.4037C46.7249 33.8933 47 34.5575 47 35.25V44.3889C47 45.0814 46.7249 45.7455 46.2352 46.2352C45.7455 46.7249 45.0814 47 44.3889 47C32.6162 47 21.3257 42.3233 13.0012 33.9988C4.67667 25.6743 0 14.3838 0 2.61111C0 1.9186 0.275098 1.25445 0.764777 0.764777C1.25445 0.275098 1.9186 0 2.61111 0H11.75C12.4425 0 13.1067 0.275098 13.5963 0.764777C14.086 1.25445 14.3611 1.9186 14.3611 2.61111C14.3611 5.875 14.8833 9.00833 15.8494 11.9328C16.1367 12.8467 15.9278 13.865 15.1967 14.5961L9.45222 20.3406Z" fill="#05C342" />
          </svg>
        </div>
        <p className="text-xl font-semibold text-blue-800 tracking-wide">{orderDetails.driver.phone}</p>
        <div className="flex flex-col items-center justify-center">
          <img
            src={whatsappiOS}
            alt="Whatsapp Icon"
            className="w-[40px] h-[40px] rounded-sm blob green" />
          {/* <p className="text-xs text-black font-semibold">WhatsApp</p> */}
        </div>
      </div>
    </div>
    {/* <div className="flex items-end justify-between mt-16 mb-4 px-2">
      <button className="bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-1/2 mx-2">
        Cancel Ride
      </button>
      <button className="bg-black rounded-lg py-3 font-semibold text-lg text-white w-1/2 mx-2">
        Track live
      </button>
    </div> */}
  </div>
}
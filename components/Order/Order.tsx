"use client";
import { BookingStatus } from "@/types/bookingFlow";
import { getOrderData, getOrderDetails, getOrderUpdate } from "@/utils/fetchers";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CancelButton from "../CancelButton";
import OrderDetails from "./OrderDetails";

type Props = {};

export type screen =
  | "reservation-received"
  | "reservation-confirmed"
  | "reservation-on-the-way"
  | "reservation-cancelled"
  | null;

export interface orderData {}

let apiTimeout: any;
const Order = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderid");
  const [orderData, setOrderData] = useState<any>(null);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const [screen, setScreen] = useState<screen>(null);

  const result = {
    driverId: "35b43e0b-162a-4eda-b061-cfab3db25f0c",
    driverLocation: {
      accuracy: 7.864,
      bearing: 198.84123,
      speed: 5.356617,
      time: "2024-07-24T23:43:32.297Z",
      lat: 37.4413335,
      lng: 25.334939,
    },
    status: "STARTED",
  };

  const handleGetOrderData = async () => {
    if (orderId) {
      const data = await getOrderData(orderId);
      setOrderData(data);
      if (data) {
        handleOrderUpdate(orderId);
      }
      console.log("ORDER DATA", data);
    }
  };

  const handleOrderUpdate = (orderId: string) => {
    getOrderUpdate(orderId).then((result: { status: BookingStatus }) => {
      if (result.status === "SEARCH" || result.status === "STARTED") {
        clearTimeout(apiTimeout);
        apiTimeout = setTimeout(() => {
          handleOrderUpdate(orderId);
        }, 10000);
      }
      if (result.status === "ASSIGNED") {
        setScreen("reservation-confirmed");
      }
      if (result.status === "STARTED") {
        setScreen("reservation-on-the-way");
        getOrderDetails(orderId).then(setOrderDetails);
      }
      if (result.status.includes("CANCELLED")) {
        setScreen("reservation-cancelled");
        clearTimeout(apiTimeout);
      }
      if (result.status === "CANCELLED_BY_DISPATCH") {
        setScreen("reservation-cancelled");
        clearTimeout(apiTimeout);
      }
    });
  };

  useEffect(() => {
    handleGetOrderData();
  }, [orderId]);

  useEffect(() => {
    if (orderData && orderData?.pickupTime) {
      orderData && setScreen("reservation-received");
    } else {
      setScreen(screen);
    }
  }, [orderData]);

  if (orderData) {
    console.log("ORER DATA ", orderData);
    return (
      <>
        <OrderDetails
          orderDetails={orderDetails}
          screen={screen}
          orderData={{ ...orderData, orderId: orderId }}
        />
        {/* <CancelButton orderId={orderId} /> */}
      </>
    );
  }
};
export default Order;
const mocRequest = {
  waypoints: [
    {
      street: "Nikaia, Greece",
      poiName: "Nikaia, Greece",
      placeLatLng: { lat: 37.9701342, lng: 23.6424349 },
    },
    {
      street: "Pireas, Greece",
      poiName: "Pireas, Greece",
      placeLatLng: { lat: 37.9429876, lng: 23.647016 },
    },
  ],
  extraOptions: [],
  client: {
    clientId: "32d10170-809a-4020-a2e8-260b452caabf",
    name: "Sevastos Matzouranis",
    phone: "+306945498067",
  },
  notes: "From Aegean Taxi Web App",
  unitOfLength: "METER",
  orderSource: "DISPATCH_API",
  pickupTime: "2024-09-27T00:15:00.000+03:00",
  numberOfSeats: 7,
  vehicleType: "MERCEDES_V_CLASS",
  paymentMethods: ["CASH"],
  prepaid: false,
  tariffId: "8f6b6fe0-d353-4e3a-8fe7-92b8827ef139",
};


const mocDetails = {
  "eta": "2024-07-25T02:05:12.228+03:00",
  "driver": {
      "driverId": "0e8b2133-2d23-4805-9c0b-03fe1575062f",
      "name": "KRIS GKOUNIS",
      "email": "kristiangkounis@gmail.com",
      "imageUrl": "https://onde-images.s3.amazonaws.com/driver_profile/2024-06-05/0e8b2133-2d23-4805-9c0b-03fe1575062f-2e8d0bbf-f4ae-45c5-abba-4d85e9882103.png",
      "phone": "+306976613318"
  },
  "car": {
      "model": "Mercedes GLA",
      "color": "Black",
      "year": 2019,
      "plateNumber": "XHN 7284",
      "numberOfSeats": 4,
      "options": [
          "AIR_CONDITION",
          "NON_SMOKING"
      ],
      "vehicleType": "BUSINESS"
  },
  "tariff": {
      "tariffId": " 01460183-e7f9-4333-8e7e-954e641d036d",
      "name": "Economy",
      "companyName": "South Aegean",
      "vehicleType": "BUSINESS",
      "tariffType": "PRECISE",
      "numberOfSeats": 4,
      "paymentMethods": [
          "CASH"
      ],
      "currency": "EUR",
      "unitOfLength": "KILOMETER",
      "minimumCharge": 36.0,
      "flagDownFee": 20.0,
      "perDistanceUnitFee": 0.0,
      "perHourFee": 72.0,
      "taximeterMode": "TIME_AND_MILEAGE",
      "tariffMode": "DISABLED",
      "driverCanSetCost": true,
      "fixedFaresAvailable": false,
      "cost": 36.0,
      "fixedCost": false,
      "prepaidSupported": false,
      "asapBooking": true,
      "minimumPreBookingDelay": 900000,
      "preBooking": true
  }
}
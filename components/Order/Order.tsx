"use client";
import { BookingStatus } from "@/types/bookingFlow";
import {
  getOrderData,
  getOrderDetails,
  getOrderUpdate,
} from "@/utils/fetchers";
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
  | "ride-started"
  | "reservation-completed"
  | "ride-transfering"
  | null;

export interface orderData {}

let apiTimeout: any;
const Order = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderid");
  const [orderData, setOrderData] = useState<any>(null);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [trackingData, setTrackingData] = useState<any>(null);

  const [screen, setScreen] = useState<screen | null>(null);

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
      if (data) {
        setOrderData(data);
        handleOrderUpdate(orderId);
      }
    }
  };

  const handleOrderUpdate = (orderId: string) => {
    getOrderUpdate(orderId).then((result: { status: BookingStatus }) => {
      if (result.status === "SEARCH") {
        setScreen("reservation-received");
        clearTimeout(apiTimeout);
        apiTimeout = setTimeout(() => {
          handleOrderUpdate(orderId);
        }, 10000);
      }
      if (result.status === "STARTED") {
        setTrackingData(result);
        setScreen("reservation-on-the-way");
        getOrderDetails(orderId).then(setOrderDetails);
        clearTimeout(apiTimeout);
        apiTimeout = setTimeout(() => {
          handleOrderUpdate(orderId);
        }, 10000);
      }
      // addd has arived status
      if (result.status === "TRANSFERRING") {
        setTrackingData(result);
        setScreen("ride-transfering");
        getOrderDetails(orderId).then(setOrderDetails);
        clearTimeout(apiTimeout);
        apiTimeout = setTimeout(() => {
          handleOrderUpdate(orderId);
        }, 10000);
      }
      if (result.status === "ASSIGNED") {
        setScreen("reservation-confirmed");
        getOrderDetails(orderId).then(setOrderDetails);
      }

      if (result.status?.includes("CANCELLED")) {
        setScreen("reservation-cancelled");
        clearTimeout(apiTimeout);
      }

      if (result.status === "FINISHED_PAID") {
        setScreen("reservation-completed");
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
    return (
      <>
        <OrderDetails
          orderDetails={orderDetails}
          screen={screen}
          orderData={orderData}
          orderId={orderId}
          trackingData={trackingData}
        />

        {/* <CancelButton orderId={orderId} /> */}
      </>
    );
  }
};
export default Order;

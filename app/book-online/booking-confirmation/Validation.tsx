"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingFlow from "@/components/BookingFlow";
import ValidationContent from "./ValidationContent";
import { sendSms } from "@/utils/fetchers";

export default function Validation() {
  const [viewBookingFlow, setViewBookingFlow] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const router = useRouter();

  const handleCreateOrder = (orderId: string, phone) => {
    // setOrderId(orderId);
    // setViewBookingFlow(true);
    handleSwipeFinished(phone, orderId);
  };

  const handleSwipeFinished = (phone, orderId) => {
    sendSms(
      `00${phone.replace("+", "")}`,
      `Your taxi booking request has been received.Please check the below link to see the status of your reservation and your driver details once assigned. https://aegeantaxi.com/reservation-confirmed/order?orderid=${orderId}`
    );
    router.push(`/reservation-confirmed/order?orderid=${orderId}`);
  };

  return (
    <div className="flex felx-col p-4 max-w-[500px] m-auto h-[calc(100dvh-70px)]">
      <ValidationContent handleCreateOrder={handleCreateOrder} />
      {/* {viewBookingFlow ? (
        <BookingFlow orderId={orderId} />
      ) : (
      )} */}
    </div>
  );
}

"use client";
import { useState } from "react";
import BookingFlow from "@/components/BookingFlow";
import ValidationContent from "./ValidationContent";

export default function Validation() {
  const [viewBookingFlow, setViewBookingFlow] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleCreateOrder = (orderId: string, phone) => {
    setOrderId(orderId);
    setPhone(phone);
    setViewBookingFlow(true);
  };

  return viewBookingFlow ? (
    <BookingFlow orderId={orderId} phone={phone} />
  ) : (
    <div className="flex felx-col p-4 max-w-[500px] m-auto h-[calc(100dvh-70px)]">
      <ValidationContent handleCreateOrder={handleCreateOrder} />
    </div>
  );
}

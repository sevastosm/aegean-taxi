"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import BookingFlow from "@/components/BookingFlow";
import ValidationContent from "./ValidationContent";
import { sendSms } from "@/utils/fetchers";
import { AppContext } from "@/context/appState";
import { Tune } from "@mui/icons-material";

export default function Validation() {
  const appState = useContext(AppContext);

  const [viewBookingFlow, setViewBookingFlow] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const router = useRouter();

  const handleCreateOrder = (orderId: string) => {
    setOrderId(orderId);
    setViewBookingFlow(true);
  };

  const handleSwipeFinished = () => {
    sendSms(
      `00${appState.state.phoneNumber.replace("+", "")}`,
      `Your taxi booking request has been received.Please check the below link to see the status of your reservation and your driver details once assigned.https://aegeantaxi.com/orders?orderid=${orderId}`
    );
    router.push(`/order?orderid=${orderId}`);
  };

  return (
    <div className="flex felx-col p-4 max-w-[500px] m-auto h-[calc(100vh-70px)]">
      {viewBookingFlow ? (
        <BookingFlow
          orderId={orderId}
          handleSwipeFinished={handleSwipeFinished}
        />
      ) : (
        <ValidationContent handleCreateOrder={handleCreateOrder} />
      )}
    </div>
  );
}

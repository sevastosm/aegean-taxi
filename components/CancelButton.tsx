import { cancelOrder } from "@/utils/fetchers";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { orderId: string; onCancel?: () => void };

const CancelButton = ({ orderId }: Props) => {
  const router = useRouter();

  const handleClick = async () => {
    await cancelOrder(orderId);
    localStorage.removeItem("aegean");
    router.push(`/`);
  };
  return (
    <div className="flex flex-col items-center px-4">
      <button
        id="cancelButton"
        onClick={handleClick}
        className="cancel-ride bg-[#E8E8E8] rounded-lg py-3 font-bold text-lg text-red-500 w-full mx-2"
      >
        Cancel Ride
      </button>
    </div>
  );
};

export default CancelButton;

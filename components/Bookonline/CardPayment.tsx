import React from "react";
const walletIcon = "/assets/booking-flow/walletIcon.svg";

type Props = {};

const CardPayment = () => {
  return (
    <div className="flex mt-1 gap-4 items-center justify-center">
      <img
        src={walletIcon}
        alt="Wallet Icon"
        className="w-[30px] h-[30px] my-2"
      />
      <p className="text-black text-md font-semibold">
        Card payment available with driver
      </p>
    </div>
  );
};

export default CardPayment;

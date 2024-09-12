import React from "react";
const walletIcon = "/assets/booking-flow/walletIcon.svg";

type Props = {};

const CardPayment = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <img
        src={walletIcon}
        alt="Wallet Icon"
        className="w-[30px] h-[30px] my-2"
      />
      <p className="text-[#264388] text-[15px] font-normal">
        Card payment available with driver
      </p>
    </div>
  );
};

export default CardPayment;

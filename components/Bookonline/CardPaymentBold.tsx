import React from "react";
const walletIcon = "/assets/booking-flow/walletIcon.svg";

type Props = {};

const CardPaymentBold = () => {
  return (
    <div className="flex gap-4 mt-5 justify-center items-center">
      <img
        src={walletIcon}
        alt="Wallet Icon"
        className="w-[30px] h-[30px] my-2"
      />
      <p className="text-[#000] text-[16px] font-semibold">
        Card payment available with driver
      </p>
    </div>
  );
};

export default CardPaymentBold;

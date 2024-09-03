import Link from "next/link";
import React from "react";
const backArrowBlack = "/assets/booking-flow/backArrowBlack.svg";

type Props = { handleClick?: () => void };

const NavBack = ({ handleClick }: Props) => {
  return (
    <div onClick={handleClick}>
      <Link href={"/book-online"}>
        <img
          src={backArrowBlack}
          alt="Back Arrow"
          className="bg-white border border-#3b82f6 p-3.5 w-[50px] h-[50px] rounded-full"
        />
      </Link>
    </div>
  );
};

export default NavBack;

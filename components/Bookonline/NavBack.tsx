import Link from "next/link";
import React from "react";
const backArrowBlack = "/assets/booking-flow/backArrowBlack.svg";

type Props = {};

const NavBack = (props: Props) => {
  return (
    <Link href={"/book-online"}>
      <img
        src={backArrowBlack}
        alt="Back Arrow"
        className="bg-white border border-#3b82f6 p-4 w-[50px] h-[50px] rounded-full ms-4"
      />
    </Link>
  );
};

export default NavBack;

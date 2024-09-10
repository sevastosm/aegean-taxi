import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
const backArrowBlack = "/assets/booking-flow/backArrowBlack.svg";

type Props = { handleClick?: () => void };

const NavBack = ({ handleClick }: Props) => {
  const router = useRouter();

  const handleGoBack = () => {
    // Navigate to the previous page in the history stack
    router.back();
  };
  return (
    <div onClick={handleGoBack}>
      {/* <Link href={"/book-online"}> */}
      <img
        src={backArrowBlack}
        alt="Back Arrow"
        className="bg-white border border-#3b82f6 p-3.5 w-[50px] h-[50px] rounded-full"
      />
      {/* </Link> */}
    </div>
  );
};

export default NavBack;

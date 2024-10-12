import React from "react";
import Aegeanbutton from "../ui/Aegeanbutton";
import { useRouter, useSearchParams } from "next/navigation";

import { useStore } from "@/app/store/store";

type Props = {};

const PinSearch = (props: Props) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const locationSearch = searchParams.get("location");

  const pinLocation = useStore((state: any) => state.pinLocation);
  const setPickupLocation = useStore((state: any) => state.setPickupLocation);

  const handleClick = () => {
    setPickupLocation(pinLocation);
    router.push(`/book-online/?location=${locationSearch}`);
  };

  const handleCancel = () => {
    router.push(`/book-online/?location=${locationSearch}`);
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='font-bold text-lg'>Choose your pick-up spot</div>
      <input
        id='pinAddress'
        value={pinLocation?.address}
        className='text-lg w-full'
      />
      <Aegeanbutton onClick={handleClick} label={"Confirm pickup"} />
      <Aegeanbutton onClick={handleCancel} label={"Cancel"} />
    </div>
  );
};

export default PinSearch;

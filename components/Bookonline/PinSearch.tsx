import React from "react";
import Aegeanbutton from "../ui/Aegeanbutton";
import { useRouter, useSearchParams } from "next/navigation";

import { useStore } from "@/app/store/store";

type Props = {};

const PinSearch = (props: Props) => {
  const router = useRouter();
  const activeLocation = useStore((state: any) => state.activeLocation);

  const searchParams = useSearchParams();

  const locationSearch = searchParams.get("location");

  const pinLocation = useStore((state: any) => state.pinLocation);
  const setPickupLocation = useStore((state: any) => state.setPickupLocation);
  const setActiveInput = useStore((state: any) => state.setActiveInput);

  const handleClick = () => {
    setPickupLocation(pinLocation);
    setActiveInput("dropOff");
    router.push(`/book-online/${activeLocation.slug}`);
  };

  const handleCancel = () => {
    router.push(`/book-online/${activeLocation.slug}`);
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

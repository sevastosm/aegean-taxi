"use client"; // Mark as client component

import useUrl from "@/app/hooks/useUrl";
import { updateStorage } from "@/heplers/updateStorage";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Aegeanbutton from "../ui/Aegeanbutton";
import { useStore } from "@/app/store/store";
type Props = {};

const calendarInput = "/assets/booking-flow/calendarInput.svg";
const BookActions = ({ calendars }: any) => {
  const pickUpDate = useStore((state: any) => state.pickUpDate);
  const pickUpTime = useStore((state: any) => state.pickUpTime);

  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Europe/Athens");
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const { updateUrl } = useUrl(); // Get the updateUrl function from the hook

  const [msg, setMsg] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    const currentParams = Object.fromEntries(searchParams.entries());
    if (pickUpDate && pickUpTime) {
      // Get current query parameters as an object

      // Define new parameters to be added or updated
      const newParams = {
        ...currentParams, // Keep the existing params
      };
      updateUrl("now", null);
      // Create a query string manually
      const queryString = new URLSearchParams(newParams).toString();

      // Use router.push with a string for the full URL
      router.push(`/book-online/trasportation?${queryString}`);
    } else {
      setMsg(true);
    }
  };

  useEffect(() => {
    if (pickUpDate && pickUpTime) {
      setMsg(false);
    }
  }, [pickUpDate, pickUpTime]);

  const handleBookNow = () => {
    const currentParams = Object.fromEntries(searchParams.entries());

    // Define new parameters to be added or updated
    const newParams = {
      ...currentParams, // Keep the existing params
    };

    const params = new URLSearchParams(newParams);

    const dateString = dayjs().format("YYYY-MM-DD");
    const timeString = dayjs().format("HH:mm");

    // updateUrl("now", [dateString, timeString]);
    updateStorage("pickupdate", dateString);
    updateStorage("pickuptime", timeString);
    params.set("pickupdate", dateString);
    params.set("pickuptime", timeString);
    params.set("now", "now");
    // Use router.push with a string for the full URL
    router.push(`/book-online/trasportation?${params.toString()}`);
  };

  return (
    <div>
      <div className='flex flex-grow gap-2 justify-between'>
        {!open && (
          <Aegeanbutton onClick={handleBookNow} label={"Book for now"} />
        )}

        <div className={`flex flex-col gap-4 ${open && "w-full"}`}>
          <div className='flex items-center'>
            <button
              onClick={() => {
                setOpen(!open);
                setMsg(false);
              }}
              className='bg-white w-[60px] flex items-center justify-center  border-2 border-[#264388] rounded-lg py-2 font-semibold text-lg text-white'>
              <img
                src={calendarInput}
                alt='Calendar Input Icon'
                className='w-[33px] h-[33px]'
              />
            </button>
            {open && <div className='ml-2 w-full'>{calendars}</div>}
          </div>
          {msg && <div>Plase choose date and time</div>}
          {open && <Aegeanbutton onClick={handleClick} label={" Book Later"} />}
        </div>
      </div>
    </div>
  );
};

export default BookActions;

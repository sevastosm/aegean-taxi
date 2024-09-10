import React, { useState } from "react";
import Calendars from "./Calendars";
const calendarInput = "/assets/booking-flow/calendarInput.svg";

type Props = {};

const BookActions = ({ nextButtonHandler, calendars }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-grow justify-between">
        {!open && (
          <button
            onClick={nextButtonHandler}
            className="bg-[#264388] mr-4 flex  items-center justify-center w-[80%] rounded-lg py-3 font-bold text-lg text-white "
          >
            Book for now
          </button>
        )}

        <div className={`flex flex-col gap-4 ${open && "w-full"}`}>
          <div className="flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="bg-white w-[60px] flex items-center justify-center  border-2 border-[#264388] rounded-lg py-2 font-semibold text-lg text-white"
            >
              <img
                src={calendarInput}
                alt="Calendar Input Icon"
                className="w-[33px] h-[33px]"
              />
            </button>
            {open && <div className="ml-2 w-full">{calendars}</div>}
          </div>
          {open && (
            <button
              onClick={nextButtonHandler}
              className="bg-[#264388]  flex items-center justify-center w-full rounded-lg py-3 font-bold text-lg text-white "
            >
              Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookActions;

import React from "react";
const calendarInput = "/assets/booking-flow/calendarInput.svg";

type Props = {};

const BookActions = ({ nextButtonHandler }: any) => {
  return (
    <div className="flex flex-grow items-end justify-between">
      <button
        onClick={nextButtonHandler}
        className="bg-[#264388] flex items-center justify-center w-4/5 rounded-lg py-3 font-bold text-lg text-white "
      >
        Book for now
      </button>
      <button
        onClick={nextButtonHandler}
        className="bg-white flex items-center justify-center w-1/5 border-2 border-[#264388] rounded-lg py-2 font-semibold text-lg text-white ml-4"
      >
        <img
          src={calendarInput}
          alt="Calendar Input Icon"
          className="w-[33px] h-[33px]"
        />
      </button>
    </div>
  );
};

export default BookActions;

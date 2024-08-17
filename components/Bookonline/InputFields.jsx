import React, { useState, useEffect } from "react";
import menuBtn from "/menu-btn.svg";
import phoneIcon from "/phoneIcon.svg";
import logo from "/logo.svg";
import calendarInput from "/calendarInput.svg";
import backArrowBlack from "/backArrowBlack.svg";

import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

const InputFields = () => {
  // Google maps conf
  const [markerRef, marker] = useMarkerRef();
  useEffect(() => {
    if (!marker) {
      return;
    }
    // do something with marker instance here
  }, [marker]);
  // Google maps conf end

  const [fields, setFields] = useState(["", ""]);

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index] = event.target.value;
    setFields(newFields);
  };

  const handleClear = (index) => {
    const newFields = [...fields];
    newFields[index] = "";
    setFields(newFields);
  };

  return (
    <div className="flex flex-col min-h-screen">

      <div className="w-full h-[350px] relative">
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map
            zoom={12}
            center={{ lat: 53.54992, lng: 10.00678 }}
            disableDefaultUI={true}
          >
            <Marker
              ref={markerRef}
              position={{ lat: 53.54992, lng: 10.00678 }}
            />
          </Map>
        </APIProvider>
        <div className="absolute my-4 left-0 top-0">
          <img
            src={backArrowBlack}
            alt="Back Arrow"
            className="bg-white p-4 w-[50px] h-[50px] rounded-full ms-4"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 relative m-4">
        <hr className="border-1 border-black absolute left-[-19px] bottom-[66px] w-[70px] z-10 rotate-90"></hr>
        {fields.map((field, index) => (
          <div key={index} className="relative flex items-center">
            {/* Image placeholder */}
            <div className="absolute left-0 flex items-center justify-center h-full w-6">
              {index === 0 ? (
                <div className="w-[14px] h-[14px] bg-black rounded-full ms-2"></div>
              ) : (
                <div className="w-[14px] h-[14px] bg-black ms-2"></div>
              )}
            </div>
            {/* Input field */}
            <input
              type="text"
              value={field}
              onChange={(event) => handleChange(index, event)}
              className="pl-8 pr-8 py-3 border bg-[#EEEEEE] text-blue-900 font-bold text-lg w-full rounded"
              placeholder={index === 0 ? "Departure" : "Arrival"}
            />
            {/* Clear button */}
            <button
              onClick={() => handleClear(index)}
              className="absolute right-0 top-1/2 me-2 transform -translate-y-1/2 mr-2 bg-[#244284] text-white rounded-full w-[25px] h-[25px]"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-grow items-end justify-center mt-16 mb-4 px-2">
        <button className="bg-[#264388] flex items-center justify-center w-4/5 rounded-lg py-3 font-bold text-lg text-white mx-2">
          Book for now
        </button>
        <button className="bg-white flex items-center justify-center w-1/5 border-2 border-[#264388] rounded-lg py-2 font-semibold text-lg text-white mx-2">
          <img
            src={calendarInput}
            alt="Calendar Input Icon"
            className="w-[33px] h-[33px]"
          />
        </button>
      </div>
    </div>
  );
};

export default InputFields;

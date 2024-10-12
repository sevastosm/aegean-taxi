import React, { useEffect, useState } from "react";

type Props = {};

const LocationInput = ({
  direction,
  param,
  onClear,
  setFocused,
  placeholder,
  originParam,
  destinationParam,
  onChange,
  onFocus,
  value,
}) => {
  //   const [value, setValue] = useState(undefined);

  const handleChange = (e) => {
    //   setValue(e.target.value);
    onChange(e.target.value);
    //   onClear();
  };

  const handleClear = () => {
    //   document.getElementById("input=" + direction).value = "";
    //   setValue("");
    onClear();
  };

  //   useEffect(() => {
  //     param && setValue(param.address);
  //   }, [param]);

  return (
    <div className='relative flex items-center'>
      {/* Square placeholder */}
      {param === "origin" && (
        <div className='absolute left-[0px] flex items-center justify-center h-full w-6'>
          <div className='w-3 h-3 bg-[#244284] ml-2 rounded-full'></div>
        </div>
      )}
      {/* Input field */}
      <input
        id={"input=" + direction}
        onFocus={() => {
          setFocused(direction), onFocus();
        }}
        // onBlur={toggleBlurLocation()}
        type='text'
        // value={pickupValue}
        onChange={handleChange}
        value={value}
        // onChange={(e) => {
        //   setPickUpLocation(e.target.value);
        //   getSuggestions(e, "pickUp");
        // }}
        className={`pl-8 pr-8 py-3 border-2 rounded font-semibold focus:outline-none ${
          originParam ? "bg-gray-300" : "bg-white border-[#244284]"
        } w-full`}
        placeholder={placeholder}
        autoComplete='off'
      />

      {/* Clear button */}
      <button
        // onClick={() => handleClear(setPickupValue)}
        onClick={handleClear}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#244284] text-white rounded-full w-[25px] h-[25px] flex items-center justify-center mr-2'>
        X
      </button>
    </div>
  );
};

export default LocationInput;

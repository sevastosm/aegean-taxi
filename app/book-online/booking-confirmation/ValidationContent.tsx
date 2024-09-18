// @ts-nocheck
"use client";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";

// hooks
import useStorage from "@/hooks/useStorage";

// models
import { BookingState } from "@/types/bookingState";

// crypto
import AES from "crypto-js/aes";
import { createOrder } from "@/utils/fetchers";
import OtpInput from "react-otp-input";
import Aegeanbutton from "@/components/ui/Aegeanbutton";

// context

var CryptoJS = require("crypto-js");

export default function ValidationContent({ handleCreateOrder }) {
  const router = useRouter();
  const [secCode, setSecCode] = useState<any>(null);
  const [bookingState, setBookingState] = useState<BookingState>();
  const [invalidCode, setInvalidCode] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (value) => {
    setDisabled(false);
    setInvalidCode(false);
    setSecCode(value);
  };
  useEffect(() => {
    const cookieState = localStorage.getItem("bookinginfo");
    if (cookieState) {
      setBookingState(JSON.parse(cookieState));
      setDisabled(false);
    }
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();

    onSubmit(e);
  };

  async function onSubmit(e) {
    e.preventDefault();
    let securityCode = AES.decrypt(
      `${bookingState.securityCode}`,
      `${process.env.NEXT_PUBLIC_CRYPTO_KEY}`
    );

    const mobileNumber = `+${bookingState.countryCode}${bookingState.phoneNumber}`;

    if (securityCode.toString(CryptoJS.enc.Utf8) === secCode) {
      // Create order
      await createOrder(bookingState).then((data) => {
        if (data.orderId) {
          handleCreateOrder(data.orderId, mobileNumber);
        }
        setDisabled(false);
      });
    } else {
      setInvalidCode(true);
    }
  }

  const handleGoBack = () => {
    // Navigate to the previous page in the history stack
    router.back();
  };

  console.log("bookingState", bookingState);

  return (
    <div className="flex flex-col flex-grow gap-4">
      <div className="flex items-start md:flex-grow-0  md:hidden">
        <div className="block md:hidden ">
          <div className="flex items-start">
            <button
              onClick={handleGoBack}
              className="bg-[#264388]  focus:ring focus:ring p-2 w-[50px] h-[50px] rounded-full text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 105 105"
                fill="none"
              >
                <circle cx="52.5" cy="52.5" r="52.5" fill="#264388" />
                <path
                  d="M22.8787 49.8787C21.7071 51.0503 21.7071 52.9497 22.8787 54.1213L41.9706 73.2132C43.1421 74.3848 45.0416 74.3848 46.2132 73.2132C47.3848 72.0416 47.3848 70.1421 46.2132 68.9706L29.2426 52L46.2132 35.0294C47.3848 33.8579 47.3848 31.9584 46.2132 30.7868C45.0416 29.6152 43.1421 29.6152 41.9706 30.7868L22.8787 49.8787ZM86 49L25 49V55L86 55V49Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-[18px] text-[#244284] text-center md:mt-[20px] pb-4">
        Enter the 5-digit code sent to you at <br />
      </h1>

      <div className="flex flex-col flex-grow items-center gap-2 px-4">
        <div className="flex gap-4 w-full max-w-md px-3">
          <div className="flex-shrink-0">
            <input
              disabled
              value={bookingState?.countryCode}
              className="max-w-[60px] w-[60px] font-bold text-2xl text-center bg-[#F6F6F6] placeholder:text-[#626262] py-3 border-0 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex-shrink-0">
            <input
              disabled
              value={bookingState?.phoneNumber}
              className="w-full font-bold text-2xl text-center bg-[#F6F6F6] placeholder:text-[#626262] p-2 py-3 border-0 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="font-semibold text-xl text-[#244284] text-center mb-2 py-4 px-6">
          Make sure you entered the correct country code!
        </div>

        <div className="flex w-full items-center justify-center mb-6 max-w-md">
          <OtpInput
            value={secCode}
            onChange={handleChange}
            numInputs={5}
            inputStyle={{
              color: "black",
              fontSize: "16px",
              width: "50px",
              height: "50px",
              background: "#F6F6F6",
              margin: "0 4px",
              fontWeight: "bold",
              fontSize: "24px",
            }}
            inputType="number"
            renderInput={(props) => <input {...props} />}
          />
        </div>

        {invalidCode && (
          <div className="font-semibold text-[14px] text-red-700 text-center mb-2 px-6">
            <span className="text-red-700">Invalid code</span>
          </div>
        )}
      </div>

      <div className="flex  md:flex-grow-0 flex-col items-center justify-center">
        <div className="flex  mb-2 items-end gap-x-4">
          <img
            src="/assets/whatsAppNew.svg"
            alt="Wallet Icon"
            className="my-2"
            width="50"
            height="50"
          />
          <a href="https://wa.me/+306943829494">
            <p className="font-semibold text-[17px] text-black text-start my-2">
              Message us on whatsapp 24/7 customer support
            </p>
          </a>
        </div>
        <button
          id="bookButton"
          disabled={!secCode || secCode?.length < 5 || disabled}
          onClick={handleSubmit}
          className="book-ride w-full focus:ring focus:ring !bg-[#264388] text-white font-semibold text-xl h-[52px] rounded-md disabled:opacity-50"
        >
          <div className="flex relative items-center">
            <div className="w-full text-center">Book ride</div>
            <div className="w-[50px]  absolute rotate-180 right-0 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 105 105"
                fill="none"
              >
                <path
                  d="M22.8787 49.8787C21.7071 51.0503 21.7071 52.9497 22.8787 54.1213L41.9706 73.2132C43.1421 74.3848 45.0416 74.3848 46.2132 73.2132C47.3848 72.0416 47.3848 70.1421 46.2132 68.9706L29.2426 52L46.2132 35.0294C47.3848 33.8579 47.3848 31.9584 46.2132 30.7868C45.0416 29.6152 43.1421 29.6152 41.9706 30.7868L22.8787 49.8787ZM86 49L25 49V55L86 55V49Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

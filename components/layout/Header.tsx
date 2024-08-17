import React, { useState, useEffect } from "react";
import menuBtn from "/assets/booking-flow/menu-btn.svg";
import phoneIcon from "/assets/booking-flow/phoneIcon.svg";
import logo from "/assets/booking-flow/logo.svg";

const Header = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <div className="flex items-center justify-between py-5 px-4">
          <div className="flex items-center">
            <img src={menuBtn} alt="Menu Button" className="me-4" />
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center">
            <img src={phoneIcon} alt="Phone Icon" />
            <div className="font-semibold text-sm ms-2">+30 215 215 4000</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

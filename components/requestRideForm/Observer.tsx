"use client";

import React, { useRef, useEffect, useState } from "react";
import "./style.css"; // Import CSS file for styling
import Image from "next/image";
import whatsApp from "public/assets/whatsapp_btn.svg";

import { Box, display } from "@mui/system";

const Observer = () => {
  const buttonRef = useRef(null);
  let observed = false;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on intersection status
        // setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !observed) {
          document.body.classList.remove("inserted");
          observed = true;
        } else {
          document.body.classList.add("inserted");
          observed = false;
        }
      },
      {
        // Optional: You can customize the threshold as per your requirement
        threshold: 1, //
        rootMargin: "200px",
      }
    );

    // Start observing the button element
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    // Cleanup function to stop observing
    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []); // Only run once on mount
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <a
        href="https://wa.me/+306943829494"
        target="_blank"
        className="watchAppTop watchApp"
        ref={buttonRef}
      >
        <Image
          ref={buttonRef}
          src={whatsApp}
          height="45"
          alt="Message us on WhatsApp"
        />
      </a>
    </Box>
  );
};

export default Observer;

"use client";
import React from "react";
import { Box } from "@mui/system";

type Props = {};

const HeaderWrapper = ({ children, ...props }: any) => {
  return (
    <Box
      sx={{
        height: { xs: "calc(100vh - 250px)", md: "auto", width: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default HeaderWrapper;

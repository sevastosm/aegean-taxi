"use client";
import React from "react";
import { Box } from "@mui/system";

type Props = {};

const HeaderWrapper = ({ children, ...props }: any) => {
  return (
    <Box
      sx={{ height: { xs: "calc(100vh - 300px)", md: "auto", width: "100%" } }}
    >
      {children}
    </Box>
  );
};

export default HeaderWrapper;

"use client";
// MUI
import Box from "@mui/material/Box";

export default function SectionSpace({
  xst = 0,
  xsb = 0,
  mdt = 0,
  mdb = 0,
  children,
}: {
  xst?: number;
  xsb?: number;
  mdt?: number;
  mdb?: number;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ mt: { xs: xst, md: mdt }, mb: { xs: xsb, md: mdb } }}>
      {children}
    </Box>
  );
}

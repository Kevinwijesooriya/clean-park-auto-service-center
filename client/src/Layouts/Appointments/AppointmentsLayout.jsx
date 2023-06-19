import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "../../Common/Footers/MainFooter";
import MainHeader from "../../Common/Headers/MainHeader";

const AppointmentsLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MainHeader />
      <Box sx={{ height: "90px" }} />
      <Box sx={{ flex: "1 0 auto" }}>
        <Outlet />
      </Box>
      <MainFooter />
    </Box>
  );
};

export default AppointmentsLayout;

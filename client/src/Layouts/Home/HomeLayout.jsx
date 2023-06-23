import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../../Common/Headers/MainHeader";
// import { Toolbar } from "@mui/material";
import MainFooter from "../../Common/Footers/MainFooter";
import { Box } from "@mui/material";

const HomeLayout = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <MainHeader />
        <Box sx={{ flex: "1 0 auto" }}>
          <Outlet />
        </Box>
        <MainFooter />
      </Box>
    </>
  );
};

export default HomeLayout;

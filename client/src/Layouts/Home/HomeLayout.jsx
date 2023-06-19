import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../../Common/Headers/MainHeader";
import { Toolbar } from "@mui/material";
import MainFooter from "../../Common/Footers/MainFooter";

const HomeLayout = () => {
  return (
    <>
      <MainHeader />
      <Toolbar />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default HomeLayout;

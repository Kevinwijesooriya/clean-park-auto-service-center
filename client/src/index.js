import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material";
import CPTheme from "./theme/CPTheme";

import Router from "./Routes/routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "typeface-raleway";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider theme={CPTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import AuthLayout from "../Layouts/Auth/AuthLayout";
import Login from "../Screens/Auth/Login";

import HomeLayout from "../Layouts/Home/HomeLayout";
import HomePage from "../Screens/Home/HomePage";

import AppointmentsLayout from "../Layouts/Appointments/AppointmentsLayout";
import MakeAppointment from "../Screens/Appointments/MakeAppointment";
import SignUp from "../Screens/Auth/SignUp";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/manageUsers";
import AccountLayout from "../Layouts/Account/AccountLayout";
import MyAppointments from "../Screens/Appointments/MyAppointments";

const authRouter = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/",
    element: <Navigate to="/auth" />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/",
        element: <Login />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
const privateRouter = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/home/",
        element: <HomePage />,
      },
      {
        path: "/auth/",
        element: <Login />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/appointment",
    element: <AppointmentsLayout />,
    children: [
      {
        path: "/appointment/",
        element: <MakeAppointment />,
      },
      {
        path: "/appointment/list",
        element: <MyAppointments />,
      },
    ],
  },
  {
    path: "/accounts",
    element: <AccountLayout />,
    children: [
      {
        path: "/accounts/settings",
        element: <MakeAppointment />,
      },
    ],
  },
]);
const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged ~ user:", user);
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(true);
      }
    });
  }, []);

  return isLoggedIn ? (
    <RouterProvider router={privateRouter} />
  ) : (
    <RouterProvider router={authRouter} />
  );
};

export default Router;

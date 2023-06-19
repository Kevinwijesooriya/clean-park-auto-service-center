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
        element: <MakeAppointment />,
      },
    ],
  },
]);
const Router = () => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <RouterProvider router={privateRouter} />
  ) : (
    <RouterProvider router={authRouter} />
  );
};

export default Router;

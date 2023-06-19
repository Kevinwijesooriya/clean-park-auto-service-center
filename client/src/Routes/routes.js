import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

import AuthLayout from "../Layouts/Auth/AuthLayout";
import Login from "../Screens/Auth/Login";

import HomeLayout from "../Layouts/Home/HomeLayout";
import HomePage from "../Screens/Home/HomePage";

import AppointmentsLayout from "../Layouts/Appointments/AppointmentsLayout";
import MakeAppointment from "../Screens/Appointments/MakeAppointment";

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
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "/home/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/appointments",
    element: <AppointmentsLayout />,
    children: [
      {
        path: "/appointments/",
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

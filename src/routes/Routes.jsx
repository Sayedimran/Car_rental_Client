import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PropularCars from "../components/PropularCars";
import AddCars from "../components/AddCars";
import Error404page from "../pages/Error404page";
import MyCars from "../components/MyCars";
import UpdatedCars from "../components/UpdatedCars";
import CarsDetails from "../pages/CarsDetails";
import MyBooking from "../components/MyBooking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error404page />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/myCars",
        element: <MyCars />,
      },

      {
        path: "/allCars",
        element: <PropularCars />,
      },
      {
        path: "/addCars",
        element: (
          <PrivateRoute>
            <AddCars />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatedCars />
          </PrivateRoute>
        ),
      },
      {
        path: "/CarDetail/:id",
        element: (
          <PrivateRoute>
            <CarsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myBooking",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

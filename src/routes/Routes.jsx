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
        element: <AddCars />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update/:id",
        element: <UpdatedCars />,
      },
      {
        path: "/CarDetail/:id",
        element: <CarsDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PropularCars from "../components/PropularCars";
import AddCars from "../components/AddCars";
import Error404page from "../pages/Error404page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<Error404page/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allCars",
        element: <PropularCars />,
      },
      {
        path: "/addCars",
        element: <AddCars />,
      },
    ],
  },
]);

export default router;

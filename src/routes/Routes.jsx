import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Default from "../layouts/Default";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Default />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;

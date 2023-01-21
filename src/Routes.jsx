import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";

import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;

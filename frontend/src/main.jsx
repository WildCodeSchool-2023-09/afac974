import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/page404/ErrorPage";

import Accueil from "./pages/accueil/Accueil";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

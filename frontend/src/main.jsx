import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Accueil from "./pages/accueil/Accueil";
import Apropos from "./pages/A_propos/Apropos";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/apropos",
        element: <Apropos />,
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

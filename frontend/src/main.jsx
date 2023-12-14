import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/page404/ErrorPage";
import Accueil from "./pages/accueil/Accueil";
import Galerie from "./pages/Galerie/Galerie";
import Apropos from "./pages/A_propos/Apropos";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/galerie",
        element: <Galerie />,
      },
      {
        path: "/apropos",
        element: <Apropos />,
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

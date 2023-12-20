import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Page404/ErrorPage";
import Accueil from "./pages/Accueil/Accueil";
import Galerie from "./pages/Galerie/Galerie";
import Apropos from "./pages/A_propos/Apropos";
import Artiste from "./pages/Artiste/Artiste";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "/artiste",
        element: <Artiste />,
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

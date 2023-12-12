import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./components/accueil/Accueil";
import Apropos from "./pages/A_propos/Apropos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "accueil/",
    element: <Accueil />,
  },
  {
    path: "apropos/",
    element: <Apropos />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

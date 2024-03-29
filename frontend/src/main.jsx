import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { UserProvider } from "./Contexts/ContextUser";
import ErrorPage from "./pages/Page404/ErrorPage";
import Accueil from "./pages/Accueil/Accueil";
import Galerie from "./pages/Galerie/Galerie";
import Apropos from "./pages/A_propos/Apropos";
import Mentions from "./pages/Mentions_legales/Mentions";
import Rgpd from "./pages/Rgpd/Rgpd";
import Artiste from "./pages/Artiste/Artiste";
import MyAccount from "./pages/MyAccount/MyAccount";
import ModifyUser from "./components/Admin/ModifyUser";
import ModifyArtwork from "./components/Admin/ModifyArtwork";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";

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
      {
        path: "/mentionslegales",
        element: <Mentions />,
      },
      {
        path: "/politiquedeconfidentialite",
        element: <Rgpd />,
      },
      {
        path: "/moncompte",
        element: <MyAccount />,
      },
      {
        path: "/admin/users/update/:id",
        element: <ModifyUser />,
      },
      {
        path: "/admin/artwork/update/:id",
        element: <ModifyArtwork />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>
);

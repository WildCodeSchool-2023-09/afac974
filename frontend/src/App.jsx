import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Granim from "granim";
import instance from "./services/axios";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    instance
      .get("/users")
      .then((res) => console.info(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function initGranim() {
  return new Granim({
    element: "#canvas-image-blending",
    direction: "radial",
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ["#3d3d3d", "#F4F1D6"],
          ["#020202", "#F4F1D6"],
          ["#3d3d3d", "#4f4f4f"],
          ["#3d3d3d", "#F4F1D6"],
          ["#020202", "#F4F1D6"],
          ["#faf8ec", "#3d3d3d"],
        ],
        transitionSpeed: 6000,
      },
    },
  });
}

initGranim();

export default App;

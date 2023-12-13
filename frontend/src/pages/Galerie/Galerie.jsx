import React from "react";
import Carousel from "./Carousel";

function Galerie() {
  const imagesCarousel1 = [
    "/public/tableaux/tableau1.jpeg",
    "/public/tableaux/tableau2.jpeg",
    "/public/tableaux/tableau3.jpeg",
    "/public/tableaux/tableau4.jpeg",
    "/public/tableaux/tableau5.jpeg",
    "/public/tableaux/tableau6.jpeg",
    "/public/tableaux/tableau7.jpeg",
    "/public/tableaux/tableau8.jpeg",
    "/public/tableaux/tableau9.jpeg",
    "/public/tableaux/tableau10.jpeg",
    "/public/tableaux/tableau11.jpeg",
  ];

  const imagesCarousel2 = [
    "/public/tableaux/tableau12.jpeg",
    "/public/tableaux/tableau13.jpeg",
    "/public/tableaux/tableau14.jpeg",
    "/public/tableaux/tableau15.jpeg",
    "/public/tableaux/tableau16.jpeg",
    "/public/tableaux/tableau17.jpeg",
    "/public/tableaux/tableau18.jpeg",
    "/public/tableaux/tableau19.jpeg",
    "/public/tableaux/tableau20.jpeg",
    "/public/tableaux/tableau21.jpeg",
    "/public/tableaux/tableau22.jpeg",
  ];

  const imagesCarousel3 = [
    "/public/tableaux/tableau23.jpeg",
    "/public/tableaux/tableau24.jpeg",
    "/public/tableaux/tableau25.jpeg",
    "/public/tableaux/tableau26.jpeg",
    "/public/tableaux/tableau27.jpeg",
    "/public/tableaux/tableau28.jpeg",
    "/public/tableaux/tableau29.jpeg",
    "/public/tableaux/tableau30.jpeg",
    "/public/tableaux/tableau31.jpeg",
    "/public/tableaux/tableau32.jpeg",
    "/public/tableaux/tableau33.jpeg",
  ];
  return (
    <div>
      <div className="section-carousel1">
        <Carousel images={imagesCarousel1} />
      </div>

      <div className="section-carousel2">
        <Carousel images={imagesCarousel2} />
      </div>

      <div className="section-carousel3">
        <Carousel images={imagesCarousel3} />
      </div>
    </div>
  );
}

export default Galerie;

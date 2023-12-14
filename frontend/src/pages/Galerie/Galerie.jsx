import React from "react";
import Carousel from "./Carousel";
import "./Carousel.scss";

function Galerie() {
  const imagesCarousel1 = [
    {
      src: "/public/tableaux/tableau1.jpeg",
      title: "Titre du Tableau 1",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau2.jpeg",
      title: "Titre du Tableau 2",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau3.jpeg",
      title: "Titre du Tableau 3",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau4.jpeg",
      title: "Titre du Tableau 5",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau6.jpeg",
      title: "Titre du Tableau 6",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau7.jpeg",
      title: "Titre du Tableau 7",
      price: "1099€",
      artiste: "dall-e",
    },
    "/public/tableaux/tableau8.jpeg",
    "/public/tableaux/tableau9.jpeg",
    "/public/tableaux/tableau10.jpeg",
    "/public/tableaux/tableau11.jpeg",
  ];

  const imagesCarousel2 = [
    {
      src: "/public/tableaux/tableau12.jpeg",
      title: "Titre du Tableau 12",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau13.jpeg",
      title: "Titre du Tableau 13",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau14.jpeg",
      title: "Titre du Tableau 14",
      price: "1099€",
    },
    {
      src: "/public/tableaux/tableau15.jpeg",
      title: "Titre du Tableau 15",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau16.jpeg",
      title: "Titre du Tableau 16",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau17.jpeg",
      title: "Titre du Tableau 17",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau18.jpeg",
      title: "Titre du Tableau 18",
      price: "1099€",
      artiste: "dall-e",
    },
    "/public/tableaux/tableau19.jpeg",
    "/public/tableaux/tableau20.jpeg",
    "/public/tableaux/tableau21.jpeg",
    "/public/tableaux/tableau22.jpeg",
  ];

  const imagesCarousel3 = [
    {
      src: "/public/tableaux/tableau23.jpeg",
      title: "Titre du Tableau 23",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau24.jpeg",
      title: "Titre du Tableau 24",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau25.jpeg",
      title: "Titre du Tableau 25",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau26.jpeg",
      title: "Titre du Tableau 26",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau27.jpeg",
      title: "Titre du Tableau 27",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau28.jpeg",
      title: "Titre du Tableau 28",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/public/tableaux/tableau29.jpeg",
      title: "Titre du Tableau 29",
      price: "1099€",
      artiste: "dall-e",
    },
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

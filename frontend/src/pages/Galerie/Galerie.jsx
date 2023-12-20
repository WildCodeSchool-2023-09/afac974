import React from "react";
import Carousel from "./Carousel";
import "./Carousel.scss";

function Galerie() {
  const imagesCarousel1 = [
    {
      src: "/tableaux/tableau1.jpeg",
      title: "Titre du Tableau 1",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau2.jpeg",
      title: "Titre du Tableau 2",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau3.jpeg",
      title: "Titre du Tableau 3",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau4.jpeg",
      title: "Titre du Tableau 5",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau6.jpeg",
      title: "Titre du Tableau 6",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau7.jpeg",
      title: "Titre du Tableau 7",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau8.jpeg",
      title: "Titre du Tableau 8",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau9.jpeg",
      title: "Titre du Tableau 9",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau10.jpeg",
      title: "Titre du Tableau 10",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau11.jpeg",
      title: "Titre du Tableau 11",
      price: "1099€",
      artiste: "dall-e",
    },
  ];

  const imagesCarousel2 = [
    {
      src: "/tableaux/tableau12.jpeg",
      title: "Titre du Tableau 12",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau13.jpeg",
      title: "Titre du Tableau 13",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau14.jpeg",
      title: "Titre du Tableau 14",
      price: "1099€",
    },
    {
      src: "/tableaux/tableau15.jpeg",
      title: "Titre du Tableau 15",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau16.jpeg",
      title: "Titre du Tableau 16",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau17.jpeg",
      title: "Titre du Tableau 17",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau18.jpeg",
      title: "Titre du Tableau 18",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau19.jpeg",
      title: "Titre du Tableau 19",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau20.jpeg",
      title: "Titre du Tableau 20",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau21.jpeg",
      title: "Titre du Tableau 21",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau22.jpeg",
      title: "Titre du Tableau 22",
      price: "1099€",
      artiste: "dall-e",
    },
  ];

  const imagesCarousel3 = [
    {
      src: "/tableaux/tableau23.jpeg",
      title: "Titre du Tableau 23",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau24.jpeg",
      title: "Titre du Tableau 24",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau25.jpeg",
      title: "Titre du Tableau 25",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau26.jpeg",
      title: "Titre du Tableau 26",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau27.jpeg",
      title: "Titre du Tableau 27",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau28.jpeg",
      title: "Titre du Tableau 28",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau29.jpeg",
      title: "Titre du Tableau 29",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau30.jpeg",
      title: "Titre du Tableau 30",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau31.jpeg",
      title: "Titre du Tableau 31",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau32.jpeg",
      title: "Titre du Tableau 32",
      price: "1099€",
      artiste: "dall-e",
    },
    {
      src: "/tableaux/tableau33.jpeg",
      title: "Titre du Tableau 33",
      price: "1099€",
      artiste: "dall-e",
    },
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

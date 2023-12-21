import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Accueil.scss";
import { Link } from "react-router-dom";

const images = [
  "/tableaux/tableau1.jpeg",
  "/tableaux/tableau2.jpeg",
  "/tableaux/tableau3.jpeg",
  "/tableaux/tableau4.jpeg",
  "/tableaux/tableau5.jpeg",
  "/tableaux/tableau6.jpeg",
  "/tableaux/tableau7.jpeg",
  "/tableaux/tableau8.jpeg",
  "/tableaux/tableau9.jpeg",
  "/tableaux/tableau10.jpeg",
  "/tableaux/tableau11.jpeg",
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: false,
};

function Carousel1() {
  return (
    <div className="carousel-container">
      <Slider
        dots={sliderSettings.dots}
        infinite={sliderSettings.infinite}
        speed={sliderSettings.speed}
        slidesToShow={sliderSettings.slidesToShow}
        slidesToScroll={sliderSettings.slidesToScroll}
        autoplay={sliderSettings.autoplay}
        autoplaySpeed={sliderSettings.autoplaySpeed}
        pauseOnHover={sliderSettings.pauseOnHover}
      >
        {images.map((image, index) => (
          <div key={image} className="backgroundFull">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <Link to="/galerie">
        <button type="button" className="visite">
          Commencer la visite
        </button>
      </Link>
      <p className="paragraphe">
        L'Association des Familles Amies de Capeline 974 développe une galerie
        virtuelle pour les Journées Européennes du Patrimoine 2023, mettant en
        valeur le patrimoine artistique de l'Océan Indien à travers une
        sélection d'aquarelles et de dessins.
      </p>
    </div>
  );
}
function Accueil() {
  return (
    <div>
      <Carousel1 />
    </div>
  );
}

export default Accueil;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Accueil.scss";
import { Link } from "react-router-dom";

import tableau55 from "../../assets/tableaux/tableau55.jpeg";
import tableau1 from "../../assets/tableaux/tableau1.jpeg";
import tableau78 from "../../assets/tableaux/tableau78.jpeg";
import tableau2 from "../../assets/tableaux/tableau2.jpeg";
import tableau67 from "../../assets/tableaux/tableau67.jpeg";
import tableau3 from "../../assets/tableaux/tableau3.jpeg";
import tableau45 from "../../assets/tableaux/tableau45.jpeg";
import tableau4 from "../../assets/tableaux/tableau4.jpeg";
import tableau85 from "../../assets/tableaux/tableau85.jpeg";
import tableau5 from "../../assets/tableaux/tableau5.jpeg";
import tableau56 from "../../assets/tableaux/tableau56.jpeg";
import tableau6 from "../../assets/tableaux/tableau6.jpeg";
import tableau68 from "../../assets/tableaux/tableau68.jpeg";
import tableau7 from "../../assets/tableaux/tableau7.jpeg";
import tableau80 from "../../assets/tableaux/tableau80.jpeg";
import tableau9 from "../../assets/tableaux/tableau9.jpeg";
import tableau83 from "../../assets/tableaux/tableau83.jpeg";
import tableau84 from "../../assets/tableaux/tableau84.jpeg";
import tableau10 from "../../assets/tableaux/tableau10.jpeg";
import tableau11 from "../../assets/tableaux/tableau11.jpeg";

const images = [
  tableau55,
  tableau1,
  tableau78,
  tableau2,
  tableau67,
  tableau3,
  tableau45,
  tableau4,
  tableau85,
  tableau5,
  tableau56,
  tableau6,
  tableau68,
  tableau7,
  tableau80,
  tableau9,
  tableau83,
  tableau84,
  tableau10,
  tableau11,
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

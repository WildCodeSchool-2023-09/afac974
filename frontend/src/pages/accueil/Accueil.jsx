import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Accueil.scss";
import { Link } from "react-router-dom";

const images = [
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
          <div key={image} className="backgroungFull">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta
        commodi rem molestias! Aperiam eaque velit consequuntur, voluptatibus
        quasi assumenda architecto deleniti nihil in laborum itaque repudiandae
        eius debitis aut.
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

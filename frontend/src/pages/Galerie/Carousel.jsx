import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";
import Granim from "granim";

function HoverCarousel(elm) {
  this.DOM = {
    scope: elm,
    wrap: elm.querySelector("ul").parentNode,
  };

  this.containerWidth = 0;
  this.scrollWidth = 0;
  this.posFromLeft = 0;
  this.stripePos = 0;
  this.animated = null;
  this.callbacks = {};

  this.init();
}

HoverCarousel.prototype = {
  init() {
    this.bind();
  },

  destroy() {
    this.DOM.scope.removeEventListener(
      "mouseenter",
      this.callbacks.onMouseEnter
    );
    this.DOM.scope.removeEventListener("mousemove", this.callbacks.onMouseMove);
  },

  bind() {
    this.callbacks.onMouseEnter = this.onMouseEnter.bind(this);
    this.callbacks.onMouseMove = (e) => {
      if (this.mouseMoveRAF) cancelAnimationFrame(this.mouseMoveRAF);

      this.mouseMoveRAF = requestAnimationFrame(this.onMouseMove.bind(this, e));
    };

    this.DOM.scope.addEventListener("mouseenter", this.callbacks.onMouseEnter);
    this.DOM.scope.addEventListener("mousemove", this.callbacks.onMouseMove);
  },

  onMouseEnter(e) {
    this.nextMore = false;
    this.prevMore = false;

    this.containerWidth = this.DOM.wrap.clientWidth;
    this.scrollWidth = this.DOM.wrap.scrollWidth;
    this.padding = 0.2 * this.containerWidth;
    this.posFromLeft = this.DOM.wrap.getBoundingClientRect().left;
    const stripePos = e.pageX - this.padding - this.posFromLeft;
    this.pos = stripePos / (this.containerWidth - this.padding * 2);
    this.scrollPos = (this.scrollWidth - this.containerWidth) * this.pos;

    this.DOM.wrap.style.scrollBehavior = "smooth";

    if (this.scrollPos < 0) this.scrollPos = 0;

    if (this.scrollPos > this.scrollWidth - this.containerWidth)
      this.scrollPos = this.scrollWidth - this.containerWidth;

    this.DOM.wrap.scrollLeft = this.scrollPos;
    this.DOM.scope.style.setProperty(
      "--scrollWidth",
      `${(this.containerWidth / this.scrollWidth) * 100}%`
    );
    this.DOM.scope.style.setProperty(
      "--scrollLleft",
      `${(this.scrollPos / this.scrollWidth) * 100}%`
    );

    clearTimeout(this.animated);
    this.animated = setTimeout(() => {
      this.animated = null;
      this.DOM.wrap.style.scrollBehavior = "auto";
    }, 200);

    return this;
  },

  onMouseMove(e) {
    if (this.animated) return;

    this.ratio = this.scrollWidth / this.containerWidth;
    let stripePos = e.pageX - this.padding - this.posFromLeft;

    if (stripePos < 0) stripePos = 0;

    this.pos = stripePos / (this.containerWidth - this.padding * 2);
    this.scrollPos = (this.scrollWidth - this.containerWidth) * this.pos;

    this.DOM.wrap.scrollLeft = this.scrollPos;

    if (this.scrollPos < this.scrollWidth - this.containerWidth)
      this.DOM.scope.style.setProperty(
        "--scrollLleft",
        `${(this.scrollPos / this.scrollWidth) * 100}%`
      );

    this.prevMore = this.DOM.wrap.scrollLeft > 0;
    this.nextMore =
      this.scrollWidth - this.containerWidth - this.DOM.wrap.scrollLeft > 5;

    this.DOM.scope.setAttribute(
      "data-at",
      (this.prevMore ? "left " : " ") + (this.nextMore ? "right" : "")
    );
  },
};

function Carousel({ images }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselElm = carouselRef.current;
    if (!carouselElm) return undefined;

    const hoverCarousel = new HoverCarousel(carouselElm);

    return () => {
      hoverCarousel.destroy();
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="wrap">
        <ul>
          {images.map((image) => (
            <li key={image.id} className="carousel-item">
              <img
                src={image.src}
                alt={image.title || `Œuvre de ${image.artiste}`}
              />
              <div className="overlay">
                <div className="items head">
                  <p>{image.title}</p>
                  <hr />
                </div>
                <div className="items artiste">
                  <p className="artiste">{image.artiste}</p>
                </div>
                <div className="items price">
                  <p className="new">{image.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      artiste: PropTypes.string,
      price: PropTypes.string,
    })
  ).isRequired,
};

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

export default Carousel;

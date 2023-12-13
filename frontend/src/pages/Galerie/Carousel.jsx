/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-multi-assign */
import React, { useEffect, useRef } from "react";
import "./Carousel.scss";

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
    this.nextMore = this.prevMore = false;

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
    if (!carouselElm) return;

    const hoverCarousel = new HoverCarousel(carouselElm);

    return () => hoverCarousel.destroy();
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="wrap">
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`Image ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;

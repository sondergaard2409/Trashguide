import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.scss'

// Array for the slideshow
const Items = [
    <img
      src={require("./Slideshow/affald-skov-1.jpg")}
      alt="woman-picking-trash-in-a-forest"
    />,
    <img
      src={require("./Slideshow/affald-strand-2.jpg")}
      alt="man-and-child-picking-up-trash-on-a-beach"
    />,
    <img
      src={require("./Slideshow/malerspande.jpg")}
      alt="buckets-of-paint"
    />,
  ];

  const Carousel = () => {
    return (
      <AliceCarousel
        renderPrevButton={() => {
          return (
            <img
              className="leftarrow"
              src={require("./arrowleft.png")}
              alt="button_prev"
            />
          );
        }}
        renderNextButton={() => {
          return (
            <img
              className="rightarrow"
              src={require("./arrowright.png")}
              alt="button_next"
            />
          );
        }}
        mouseTracking
        autoHeight="true"
        autoPlay="true"
        animationDuration="4000"
        autoPlayInterval="500"
        disableDotsControls="true"
        infinite="true"
        // Passes the array of items to the carousel
        items={Items}
      />
    );
  };
  
  // Export the Carousel component as the default export
  export default Carousel;

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/homePage.scss";

import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaGitAlt, FaBootstrap, FaNode, FaDatabase } from "react-icons/fa";

export default function CarouselComponent() {
     const responsive = {
          0: { items: 1 },
          600: { items: 3 },
          1024: { items: 5 },
     };

     const items = [
          <div className="items">
               <FaReact />
          </div>,
          <div className="items">
               <FaCss3Alt />
          </div>,
          <div className="items">
               <FaHtml5 />
          </div>,
          <div className="items">
               <FaJs />
          </div>,
          <div className="items">
               <FaGitAlt />
          </div>,
          <div className="items">
               <FaBootstrap />
          </div>,
          <div className="items">
               <FaNode />
          </div>,
          <div className="items">
               <FaDatabase />
          </div>,
     ];
     return (
          <div className="carouselContainer">
               <AliceCarousel
                    mouseTracking
                    autoPlay
                    infinite
                    animationEasingFunction={"ease-in-out"}
                    autoPlayInterval={1000}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    autoWidth
                    autoHeight
                    activeIndex={4}
                    animationDuration={700}
                    ssrSilentMode
                    items={items}
               />
          </div>
     );
}

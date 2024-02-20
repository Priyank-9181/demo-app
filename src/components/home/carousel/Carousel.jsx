import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselList from "./CarouselList";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        position: "absolute",
        top: "50%",
        right: "3.5%",
        backgroundColor: "Transparent",
        border: "none",
        zIndex: 100,
        height: "35px",
        width: "35px",
        color: "white",
        transform: "translate(-3.5%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-right" style={{ fontSize: "1.2rem" }}></i>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        position: "absolute",
        top: "50%",
        left: "2.5%",
        backgroundColor: "Transparent",
        border: "none",
        zIndex: 100,
        height: "35px",
        width: "35px",
        color: "white",
        transform: "translate(-2.5%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-left" style={{ fontSize: "1.2rem" }}></i>
    </button>
  );
}

function Carousel() {
  const settings = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const carousel = [
    { src: "/image/01.jpg", alt: "01" },
    { src: "/image/02.jpg", alt: "02" },
    { src: "/image/03.jpg", alt: "03" },
    { src: "/image/04.jpg", alt: "04" },
  ];

  return (
    <Slider {...settings}>
      {carousel.map((value, index) => {
        return <CarouselList src={value.src} alt={value.alt} key={index} />;
      })}
    </Slider>
  );
}

export default Carousel;

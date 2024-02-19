import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselList from "./CarouselList";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        position: "absolute",
        top: "50%",
        right: "2.5%",
        backgroundColor: "white",
        zIndex: 100,
        height: "35px",
        width: "35px",
        color: "black",
        transform: "translate(-2.5%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i style={{ fontSize: "1.2rem" }} className="fa-solid fa-arrow-right"></i>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

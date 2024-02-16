import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselList from "./CarouselList";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
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

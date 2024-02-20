import React from "react";
import Carousel from "../components/home/carousel/Carousel";
import CounterRow from "../components/home/counterList/CounterRow";
import InfoList from "../components/home/infoList/InfoList";
import ProductRow from "../components/home/productRow/ProductRow";
import Faqs from "../components/home/faqs/Faqs";

function Home() {
  return (
    <>
      <Carousel />
      <InfoList />
      <CounterRow />
      <ProductRow />
      <Faqs />
    </>
  );
}

export default Home;

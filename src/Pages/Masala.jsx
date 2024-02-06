import React from "react";
import MasalaCard from "../Card/MasalaCard";

function Masala() {
  const Masala = [
    {
      title: "Mirchi",
      imgURL:
        "https://static.wikia.nocookie.net/crayonshinchan/images/6/6c/Dshin2.jpg",
      price: "200 rupees per kg",
    },
    {
      title: "Haldi",
      imgURL:
        "https://dhanipurespices.com/wp-content/uploads/2022/10/Turmeric-Powder-and-Whole.jpeg",
      price: "200 rupees per kg",
    },
    {
      title: "Jeera",
      imgURL:
        "https://www.shutterstock.com/image-photo/cumin-powder-seeds-selective-focus-600nw-1772821013.jpg",
      price: "200 rupees per kg",
    },
    {
      title: "daal chini",
      imgURL:
        "https://www.shutterstock.com/image-photo/cumin-powder-seeds-selective-focus-600nw-1772821013.jpg",
      price: "200 rupees per kg",
    },
    {
      title: "Sarson Ka beej",
      imgURL:
        "https://5.imimg.com/data5/SH/AG/MY-13512250/black-mustard-kala-ryada-brassica-nigra-500x500.jpg",
      price: "200 reupees per kg",
    },
    {
      title: "Garam Masala",
      imgURL: "https://5.imimg.com/data5/BM/SH/MY-40035975/garam-masala.png",
      price: "250 rupees per kg",
    },
    {
      title: "Shincha",
      imgURL: "https://static.wikia.nocookie.net/crayonshinchan/images/b/bc/DK-15.jpg",
    }
  ];

  const jsx = Masala.map(function (value, index, array) {
    return (
      <div>
        <MasalaCard
          // key={index}
          title={value.title}
          imgURL={value.imgURL}
          price={value.price}
        />
      </div>
    );
  });

  // console.log(jsx);

  return (
    <div style={{overflow: "hidden"}}>
      <nav
        style={{
          width: "100%",
          backgroundColor: "lightGray",
          border: "1px solid black",
          height: "40px",
        }}
      ></nav>
      <div
        style={{
          width: "95%",
          marginTop: "20px",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          placeItems: "center",
          padding: "20px",
          gap: "30px",
          overflow: "hidden",
        }}
      >
        {jsx}
      </div>
    </div>
  );
}

export default Masala;

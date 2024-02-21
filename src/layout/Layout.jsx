import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />

      <a
        id="whatsapp"
        aria-label="Chat on WhatsApp"
        href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`}
        target="_blank"
      >
        <img
          id="whatsappImg"
          alt="Chat on WhatsApp"
          src="/image/whatsapp.svg"
        />
      </a>

      <Footer />
    </>
  );
}

export default Layout;

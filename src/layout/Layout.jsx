import React from "react";
import NavbarPokemon from "./NavbarPokemon";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavbarPokemon />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

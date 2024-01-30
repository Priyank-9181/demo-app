import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
// import ShinchanFnadom from "../Pages/ShinchanFnadom";

function Layout(props) {
  // console.log("props.children", props.children);

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      {/* {props.children} */}
      {/* <ShinchanFnadom /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

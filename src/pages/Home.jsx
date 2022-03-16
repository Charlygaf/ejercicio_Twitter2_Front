import React from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="col-lg-3">
        <LeftSidebar />
      </div>
      <div className="col-lg-3"></div>
      <div className="col-lg-3"></div>
    </div>
  );
}

export default Home;

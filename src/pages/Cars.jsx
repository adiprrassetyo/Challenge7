import React from "react";

import Footer from "../components/Footer";
import SearchCar from "../components/SearchCar";
import Header from "../components/Header";
import "../css/searchbox.css";

function Cars() {
  return (
    <>
      <Header />
      <SearchCar />
      <Footer />
    </>
  );
}

export default Cars;

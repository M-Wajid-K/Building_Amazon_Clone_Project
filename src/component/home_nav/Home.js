import React from "react";
import Product from "../products/Products__card";
import '../home_nav/Home.css'
import home__banner from "../../assets/nav_images/home__Image.jpg";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={home__banner} alt="HomeBanner" />

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;

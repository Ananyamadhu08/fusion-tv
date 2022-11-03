import React from "react";
import { FeaturedCategories, HeroBanner } from "../components";

const Home = () => {
  return (
    <div className="homePage__container">
      <div className="spacer-3rem"></div>
      <HeroBanner />
      <FeaturedCategories />
    </div>
  );
};

export default Home;

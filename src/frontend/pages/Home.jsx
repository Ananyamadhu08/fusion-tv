import React from "react";
import { FeaturedCategories, HeroBanner } from "../components";

const Home = () => {
  return (
    <div className="homePage__container">
      <HeroBanner />
      <FeaturedCategories />
    </div>
  );
};

export default Home;

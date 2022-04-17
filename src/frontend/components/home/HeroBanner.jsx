import React from "react";

const HeroBanner = () => {
  return (
    <div className="p-5">
      <img
        src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1650153155/fusionTv/images/login-background_wbwky1.jpg"
        alt="hero banner"
        style={{ width: "100%", height: "500px", border: "2px solid grey" }}
        className="shadow-3xl"
      />

      <span
        style={{ bottom: "25rem", left: "1rem", fontSize: "8rem" }}
        className="relative font-semibold text-white text-italic opacity-70"
      >
        One stop shop for the movie fanatic in you.
      </span>
    </div>
  );
};

export default HeroBanner;

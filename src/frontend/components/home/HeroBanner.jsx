import React from "react";

const HeroBanner = () => {
  return (
    <div className="p-5" style={{ height: "21.5rem" }}>
      <img
        src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1650153155/fusionTv/images/login-background_wbwky1.jpg"
        alt="hero banner"
        style={{ height: "300px" }}
        className="shadow-3xl rounded w-full"
      />

      <span
        style={{
          bottom: "12rem",
          left: "9rem",
          fontSize: "4rem",
          width: "rem",
        }}
        className="relative font-semibold text-white text-italic opacity-70"
      >
        FusionTV for the movie fanatic in you
      </span>
    </div>
  );
};

export default HeroBanner;

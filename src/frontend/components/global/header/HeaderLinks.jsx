import React from "react";
import { Link } from "react-router-dom";

function HeaderLinks() {
  return (
    <div className="flex gap-2">
      <Link
        to="/"
        className="flex justify-center align-items-center text-white text-hover-rose-500 gap-2"
      >
        <i className="fa-solid fa-house"></i>
        <h6 className="mr-6 cursor-pointer h6 ">Home</h6>
      </Link>

      <Link
        to="/explore"
        className="flex justify-center align-items-center text-white text-hover-rose-500 gap-2"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <h6 className="mr-6 cursor-pointer h6 ">Explore</h6>
      </Link>

      <Link
        to="/playlist"
        className="flex justify-center align-items-center text-white text-hover-rose-500 gap-2"
      >
        <i className="fa-solid fa-plus"></i>
        <h6 className="mr-6 cursor-pointer h6 ">Playlist</h6>
      </Link>

      <Link
        to="/likedvideos"
        className="flex justify-center align-items-center text-white text-hover-rose-500 gap-2"
      >
        <i className="fa-solid fa-heart"></i>
        <h6 className="mr-6 cursor-pointer h6 ">Liked Videos</h6>
      </Link>

      <Link
        to="/watchlater"
        className="flex justify-center align-items-center text-white text-hover-rose-500 gap-2"
      >
        <i className="fa-solid fa-tv"></i>
        <h6 className="mr-6 cursor-pointer h6 ">Watch Later</h6>
      </Link>

      <Link
        to="/history"
        className="flex justify-center align-items-center text-white text-hover-rose-500 gap-2"
      >
        <i className="fa-solid fa-clock-rotate-left"></i>
        <h6 className="mr-6 cursor-pointer h6 ">History</h6>
      </Link>
    </div>
  );
}

export default HeaderLinks;

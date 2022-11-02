import React from "react";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import HeaderRight from "./HeaderRight";

function Header() {
  return (
    <div>
      <header className="w-full h-24 shadow bg-slate-900 fixed z-50">
        <div className="flex justify-between align-items-center h-full w-full ml-7">
          <div className="flex justify-center align-items-center">
            <Link
              to="/"
              className="flex align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <i class="fa-solid fa-video text-3xl text-white"></i>
              <h5 className=" cursor-pointer mr-16 text-white  text-xl text-italic">
                <span className="text-rose-500 text-4xl">Fusion</span>Tv
              </h5>
            </Link>

            <HeaderLinks />
          </div>

          <HeaderRight />
        </div>
      </header>
    </div>
  );
}

export default Header;

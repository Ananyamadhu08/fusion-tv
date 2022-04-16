import React from "react";
import { Link } from "react-router-dom";

function HeaderRight() {
  return (
    <div className="flex" style={{ gap: "1rem" }}>
      {/* <!-- searchbar --> */}
      <form action="" class="search__bar__wrapper">
        <input type="text" class="search__bar" placeholder="Search" />
        <Link to="#">
          <i class="fas fa-search search__icon text-rose-500"></i>
        </Link>
      </form>
      {/* <!-- searchbar --> */}

      <Link
        className="flex justify-items-center btn-square-solid px-3 font-bold text-xl align-items-center text-white bg-rose-600 btn-bg-hover-rose-600 mr-12"
        to="/login"
      >
        LOGIN
      </Link>
    </div>
  );
}

export default HeaderRight;

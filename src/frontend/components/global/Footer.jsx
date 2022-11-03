import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="relative flex flex-col h-18 justify-center align-items-center w-full p-5 z-50 bg-slate-900"
      style={{ bottom: "0" }}
    >
      <div className="text-white flex">
        Made with
        <span className="text-rose-800 font-bold ml-1 mr-1">&lt;/&gt;</span> by
        <div className="ml-1 text-hover-rose-600">Ananya</div>
      </div>
      <div className="flex mt-3 gap-5 align-items-center justify-center text-2xl">
        <Link to="https://github.com/Ananyamadhu08" target="_blank">
          <i className="fab fa-github text-rose-800"></i>
        </Link>
        <Link to="https://twitter.com/AnanyaMadhu27" target="_blank">
          <i className="fab fa-twitter text-rose-800"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/ananya-madhu-74479b206/"
          target="_blank"
        >
          <i className="fab fa-linkedin text-rose-800"></i>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

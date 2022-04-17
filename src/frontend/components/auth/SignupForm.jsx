import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/providers";
import { signupUser } from "../../utils";

const intUserData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function SignupForm() {
  const [userData, setUserData] = useState(intUserData);
  const { authState, authDispatch } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  console.log(userData);
  return (
    <form
      className="relative w-full"
      style={{ bottom: "4.2rem", minHeight: "100vh" }}
    >
      <div className="h-screen flex justify-center">
        <div
          style={{ margin: "auto" }}
          className="h=96 w-96 p-7 shadow-2xl rounded-2xl bg-slate-900"
        >
          <h3 className="text-3xl font-normal text-center text-white mb-12">
            Sign Up
          </h3>

          <div className="input-container mb-7 text-rose-200">
            <input
              name="firstName"
              type="text"
              id="firstName"
              className="input input-white-hover input-rose-focus"
              autoComplete="off"
              placeholder=" "
              onChange={handleChange}
              value={userData.firstName}
            />
            <label
              htmlFor="firstName"
              className="input-label text-white bg-slate-900"
            >
              First Name
            </label>
          </div>

          <div className="input-container mb-7 text-rose-200">
            <input
              name="lastName"
              type="text"
              id="lastName"
              className="input input-white-hover input-rose-focus"
              autoComplete="off"
              placeholder=" "
              onChange={handleChange}
              value={userData.lastName}
            />
            <label
              htmlFor="lastName"
              className="input-label text-white bg-slate-900"
            >
              Last Name
            </label>
          </div>

          <div className="input-container mb-7 text-rose-200">
            <input
              name="email"
              type="text"
              id="email"
              className="input input-white-hover input-rose-focus"
              autoComplete="off"
              placeholder=" "
              onChange={handleChange}
              value={userData.email}
            />
            <label
              htmlFor="lastName"
              className="input-label text-white bg-slate-900"
            >
              Email
            </label>
          </div>

          <div className="input-container mb-7 text-rose-200">
            <input
              name="password"
              type="text"
              id="password"
              className="input input-white-hover input-rose-focus"
              autoComplete="off"
              placeholder=" "
              onChange={handleChange}
              value={userData.password}
            />
            <label
              htmlFor="password"
              className="input-label  text-white bg-slate-900"
            >
              Password
            </label>
          </div>

          <div className="flex justify-between mb-10">
            <Link
              to=""
              className="btn btn-text-underline text-lg text-white text-hover-rose-800"
            >
              Forgot Password
            </Link>
            <Link
              to="/login"
              className="btn btn-text-underline text-lg text-white text-hover-rose-800"
            >
              Login
            </Link>
          </div>

          <div className="flex">
            <div className="m-auto flex flex-col" style={{ gap: "1.5rem" }}>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  signupUser(userData, authDispatch);
                }}
                className="px-4 py-1 text-lg bg-slate-700 rounded text-white w-full bg-hover-rose-800 text-hover-rose-200"
              >
                sign up
              </button>
              <button className="px-4 w-full py-1 text-lg bg-slate-700 rounded text-white bg-hover-rose-800 text-hover-rose-200">
                sign up with test credentials
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;

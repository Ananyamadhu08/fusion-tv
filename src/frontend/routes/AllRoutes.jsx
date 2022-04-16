import React from "react";
import { Route, Routes } from "react-router-dom";

import Mockman from "mockman-js";
import {
  Explore,
  History,
  Home,
  Login,
  Playlist,
  Signup,
  WatchLater,
} from "../pages";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/history" element={<History />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
}

export default AllRoutes;

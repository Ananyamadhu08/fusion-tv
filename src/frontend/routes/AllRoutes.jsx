import React from "react";
import { Route, Routes } from "react-router-dom";

import Mockman from "mockman-js";
import {
  Explore,
  History,
  Home,
  LikedVideos,
  Login,
  Playlists,
  Signup,
  VideoPage,
  WatchLater,
} from "../pages";
import PrivateRoutes from "./PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore/:id" element={<VideoPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<Mockman />} />

      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/playlist" element={<Playlists />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes;

import React from "react";
import { LikedVideoCard } from "../components";
import { useLikedVideos } from "../context/providers";

const LikedVideos = () => {
  const {
    likedVideosState: { likedVideos },
  } = useLikedVideos();

  return (
    <div className="likedVideoscontainer">
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="likedVideosmain">
        {likedVideos &&
          likedVideos.map((video) => (
            <LikedVideoCard video={video} key={video._id} />
          ))}
      </div>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </div>
  );
};

export default LikedVideos;

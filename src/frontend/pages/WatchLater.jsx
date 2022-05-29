import React from "react";
import LikedVideoCard from "../components/likedVideos/LikedVideoCard";
import { useWatchLater } from "../context/providers";

const WatchLater = () => {
  const {
    watchLaterState: { watchLater },
  } = useWatchLater();

  return (
    <div className="likedVideos__container">
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      {/* <div className="spacer-3rem"></div> */}

      <div className="flex justify-center">
        <div className="likedVideos__main">
          {watchLater &&
            watchLater.map((video) => (
              <LikedVideoCard video={video} key={video._id} />
            ))}
        </div>
      </div>

      {watchLater.length === 0 && (
        <div className="flex flex-col align-items-center gap-10">
          <h2 className="text-white text-center">no watch later</h2>
          <img
            src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1653799091/fusionTv/fusionTv_oyjpu4.gif"
            alt="computer"
            className="loader-img"
          />
        </div>
      )}

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </div>
  );
};

export default WatchLater;

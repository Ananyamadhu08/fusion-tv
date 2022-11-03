import React from "react";
import LikedVideoCard from "../components/likedVideos/LikedVideoCard";
import { useWatchLater } from "../context/providers";

const WatchLater = () => {
  const {
    watchLaterState: { watchLater },
  } = useWatchLater();

  return (
    <div className="likedVideos__container">
      {watchLater.length === 0 ? (
        <div>
          <div className="spacer-3rem"></div>
          <div className="flex flex-col align-items-center gap-10">
            <h2 className="text-white text-center">No Watch Later Videos</h2>
            <img
              src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1667436026/fusionTv/fusiontv-800_hpysfl.gif"
              alt="computer"
              className="loader-img"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            <div
              className="bg-rose-700 text-white font-bold w-fit px-4 py-2 text-xl m-10 rounded-lg"
              style={{ textAlign: "center" }}
            >
              Watch Later
            </div>
          </div>

          <div className="flex justify-center">
            <div className="likedVideos__main">
              {watchLater &&
                watchLater.map((video) => (
                  <LikedVideoCard video={video} key={video._id} />
                ))}
            </div>
          </div>
        </div>
      )}

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </div>
  );
};

export default WatchLater;

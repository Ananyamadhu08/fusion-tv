import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, useCategory, useWatchLater } from "../../context/providers";
import { getCategoryImg } from "../../helpers";
import { addVideoToWatchLater, removeVideoToWatchLater } from "../../utils";
import Modal from "../global/Modal";
import AddToPlaylist from "./AddToPlaylist";

const VideoDisplayCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    categoryState: { categories },
  } = useCategory();

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  let isInWatchlater = watchLater.find((item) => item._id === video._id);

  const categoryImage = getCategoryImg(video.category, categories);

  return (
    <>
      <div className="videoCard bg-slate-900">
        <Link to={`/explore/${video._id}`} className="videoCard__hero__img">
          <i className="absolute text-6xl text-rose-500 cursor-pointer fa-solid fa-play"></i>
          <img src={video.img} alt="" />
        </Link>
        <div className="videoCard__body">
          <h3 className="mb-2 text-white">{video.title}</h3>
          <div className="flex align-items-center mb-2">
            <img
              className="rounded-full h-10 w-10"
              src={categoryImage ? categoryImage : ""}
              alt="category-img"
            />
            <h4 className="text-rose-500"> {video.category} </h4>
          </div>
          <p className="text-white"> {video.desc} </p>

          <div className="videoCard__actions flex justify-between mt-4">
            <i
              onClick={() => setShowModal(true)}
              className="text-2xl text-hover-rose-300 text-white cursor-pointer fa-solid fa-circle-plus"
            ></i>
            <div>
              {isInWatchlater ? (
                <i
                  onClick={() =>
                    removeVideoToWatchLater(
                      encodedToken,
                      video._id,
                      watchLaterDispatch
                    )
                  }
                  className="text-2xl text-rose-500  cursor-pointer  mr-3 fa-solid fa-clock"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    addVideoToWatchLater(
                      encodedToken,
                      video,
                      watchLaterDispatch
                    )
                  }
                  className="text-2xl text-white text-hover-rose-500 cursor-pointer   mr-3 fa-solid fa-clock"
                ></i>
              )}

              {/* {isInLikedVideos ? (
                <i
                  onClick={() =>
                    removeVideoFromLikedVideos(
                      encodedToken,
                      video._id,
                      likedVideosDispatch
                    )
                  }
                  className="text-2xl text-amber-500  cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    addVideoToLikedVideos(
                      encodedToken,
                      video,
                      likedVideosDispatch
                    )
                  }
                  className="text-2xl text-hover-amber-500 cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
                ></i>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalBody={<AddToPlaylist video={video} />}
        modalTitle={"Add to Playlist"}
      />
    </>
  );
};
export default VideoDisplayCard;

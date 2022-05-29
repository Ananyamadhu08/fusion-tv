import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAuth,
  useCategory,
  useHistory,
  useLikedVideos,
  useWatchLater,
} from "../../context/providers";
import { getCategoryImg } from "../../helpers";
import { useToast } from "../../hooks";
import {
  addVideoToLikedVideos,
  addVideoToWatchLater,
  removeVideoFromHistory,
  removeVideoFromLikedVideos,
  removeVideoToWatchLater,
} from "../../utils";
import AddToPlaylist from "../explore/AddToPlaylist";
import Modal from "../global/Modal";

const HistoryPageCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    categoryState: { categories },
  } = useCategory();

  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  const {
    likedVideosState: { likedVideos },
    likedVideosDispatch,
  } = useLikedVideos();

  const { historyDispatch } = useHistory();

  const { showToast } = useToast();

  const categoryImage = getCategoryImg(video.category, categories);

  const isInWatchLater = watchLater.find((item) => item._id === video._id);
  const isInLikedVideos = likedVideos.find((item) => item._id === video._id);
  return (
    <>
      <div className="videoCard bg-slate-900 text-white">
        <Link to={`/explore/${video._id}`} className="videoCard__hero__img">
          <i className="absolute text-6xl text-rose-500 cursor-pointer fa-solid fa-play"></i>
          <img src={video.img} alt="" />
        </Link>

        <div className="videoCard__body">
          <h3 className="mb-2">{video.title}</h3>

          <div className="flex align-items-center mb-2">
            <img
              className="rounded-full h-10 w-10"
              src={categoryImage ? categoryImage : ""}
              alt="category-img"
            />

            <h4 className="text-rose-500"> {video.category} </h4>
          </div>

          <p> {video.desc} </p>

          <div className="videoCard__actions flex justify-between align-items-center mt-3">
            <button
              onClick={() =>
                encodedToken
                  ? removeVideoFromHistory(
                      encodedToken,
                      video._id,
                      historyDispatch,
                      showToast
                    )
                  : showToast("Please login first!", "error")
              }
              style={{ border: 0 }}
              className=" p-2 px-5 bg-rose-500 rounded-sm"
            >
              {" "}
              remove from history
            </button>
            {/* <button className="btn btn-solid-amber shadow-lg text-white">
              {" "}
              remove watch later
            </button> */}

            <div>
              {isInWatchLater ? (
                <i
                  onClick={() =>
                    encodedToken
                      ? removeVideoToWatchLater(
                          encodedToken,
                          video._id,
                          watchLaterDispatch,
                          showToast
                        )
                      : showToast("Please login first!", "error")
                  }
                  className="text-2xl text-hover-rose-500  cursor-pointer  mr-3 fa-solid fa-clock"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    encodedToken
                      ? addVideoToWatchLater(
                          encodedToken,
                          video,
                          watchLaterDispatch,
                          showToast
                        )
                      : showToast("Please login first!", "error")
                  }
                  className="text-2xl text-hover-rose-500 cursor-pointer  mr-3 fa-solid fa-clock"
                ></i>
              )}
              {isInLikedVideos ? (
                <i
                  onClick={() =>
                    encodedToken
                      ? removeVideoFromLikedVideos(
                          encodedToken,
                          video._id,
                          likedVideosDispatch,
                          showToast
                        )
                      : showToast("Please login first!", "error")
                  }
                  className="text-2xl text-hover-rose-500  cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    encodedToken
                      ? addVideoToLikedVideos(
                          encodedToken,
                          video,
                          likedVideosDispatch,
                          showToast
                        )
                      : showToast("Please login first!", "error")
                  }
                  className="text-2xl text-hover-rose-500 cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
                ></i>
              )}
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

export default HistoryPageCard;

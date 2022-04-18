import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAuth,
  useCategory,
  useLikedVideos,
  useWatchLater,
} from "../../context/providers";
import { getCategoryImg } from "../../helpers";
import { useToast } from "../../hooks";
import {
  addVideoToLikedVideos,
  addVideoToWatchLater,
  removeVideoFromLikedVideos,
  removeVideoToWatchLater,
} from "../../utils";
import AddToPlaylist from "../explore/AddToPlaylist";
import Modal from "../global/Modal";

const LikedVideoCard = ({ video }) => {
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

  const categoryImage = getCategoryImg(video.category, categories);

  const { showToast } = useToast();

  const isInWatchLater = watchLater.find((item) => item._id === video._id);
  const isInLikedVideos = likedVideos.find((item) => item._id === video._id);
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
              className="text-2xl text-hover-rose-500 text-white cursor-pointer fa-solid fa-circle-plus"
            ></i>
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
                  className="text-2xl text-rose-500 text-rose  cursor-pointer  mr-3 fa-solid fa-clock"
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
                  className="text-2xl text-white text-hover-rose-500 text-white cursor-pointer  mr-3 fa-solid fa-clock"
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
                  className="text-2xl text-rose-500 text-white  cursor-pointer  mr-3 fas fa-heart"
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
                  className="text-2xl text-white text-hover-rose-500 cursor-pointer  mr-3 fa-solid fa-heart"
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

export default LikedVideoCard;

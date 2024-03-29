import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import {
  useAuth,
  useCategory,
  useHistory,
  useLikedVideos,
  useVideos,
  useWatchLater,
} from "../context/providers";
import { getCategoryImg } from "../helpers";
import {
  addVideoToHistory,
  addVideoToLikedVideos,
  addVideoToWatchLater,
  removeVideoFromLikedVideos,
  removeVideoToWatchLater,
} from "../utils";
import { AddToPlaylist, Modal } from "../components";
import { useToast } from "../hooks";

const VideoPage = () => {
  const params = useParams();

  const videoId = params.id;

  const {
    videosState: { videos },
  } = useVideos();

  const currentVideoDetails = videos.find((item) => item._id === videoId);

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

  const categoryImage = getCategoryImg(
    currentVideoDetails.category,
    categories
  );

  const isInWatchLater = watchLater.find(
    (item) => item._id === currentVideoDetails._id
  );
  const isInLikedVideos = likedVideos.find(
    (item) => item._id === currentVideoDetails._id
  );

  const { showToast } = useToast();

  return (
    <>
      <section className="videoPage__container bg-slate-800">
        <div className="row h-full my-5">
          <div className="col-9-lg col-12-sm  p-2 text-white">
            <div className="videoPage__video">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                playing={false}
                url={`https://www.youtube-nocookie.com/embed/${videoId}`}
                onStart={() =>
                  addVideoToHistory(
                    encodedToken,
                    currentVideoDetails,
                    historyDispatch,
                    showToast
                  )
                }
              />
            </div>
            <div className="videoPage__details">
              <h3> {currentVideoDetails.title} </h3>
              <p> {currentVideoDetails.desc} </p>

              <div className="flex align-items-center mb-2">
                <img
                  className="rounded-full h-10 w-10"
                  src={categoryImage ? categoryImage : ""}
                  alt="category-img"
                />

                <h4 className="text-rose-500">
                  {" "}
                  {currentVideoDetails.category}{" "}
                </h4>
              </div>

              <div className="videoPage__actions">
                <i
                  onClick={() => setShowModal(true)}
                  className="text-2xl text-hover-rose-500 cursor-pointer fa-solid fa-circle-plus"
                ></i>
                {isInWatchLater ? (
                  <i
                    onClick={() =>
                      removeVideoToWatchLater(
                        encodedToken,
                        currentVideoDetails._id,
                        watchLaterDispatch,
                        showToast
                      )
                    }
                    className="text-2xl text-rose-500  cursor-pointer fa-solid fa-clock"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      addVideoToWatchLater(
                        encodedToken,
                        currentVideoDetails,
                        watchLaterDispatch,
                        showToast
                      )
                    }
                    className="text-2xl text-hover-rose-500 cursor-pointer  fa-solid fa-clock"
                  ></i>
                )}
                {isInLikedVideos ? (
                  <i
                    onClick={() =>
                      removeVideoFromLikedVideos(
                        encodedToken,
                        currentVideoDetails._id,
                        likedVideosDispatch,
                        showToast
                      )
                    }
                    className="text-2xl text-rose-500  cursor-pointer  mr-3 fa-solid fa-heart"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      addVideoToLikedVideos(
                        encodedToken,
                        currentVideoDetails,
                        likedVideosDispatch,
                        showToast
                      )
                    }
                    className="text-2xl text-hover-rose-500 cursor-pointer  mr-3 fa-solid fa-heart"
                  ></i>
                )}
              </div>
            </div>
          </div>
          <div className="col-3-lg col-12-sm   p-2 text-white">
            {/* notes */}
          </div>
        </div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
      </section>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalBody={<AddToPlaylist video={currentVideoDetails} />}
        modalTitle={"Add to Playlist"}
      />
    </>
  );
};

export default VideoPage;

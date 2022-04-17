import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, useCategory } from "../../context/providers";
import { getCategoryImg } from "../../helpers";

import Modal from "../Modal";
import AddToPlaylist from "./AddToPlaylist";

const VideoDisplayCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    categoryState: { categories },
  } = useCategory();

  const categoryImage = getCategoryImg(video.category, categories);

  return (
    <>
      <div className="videoCard">
        <Link to={`/explore/${video._id}`} className="videoCard__hero__img">
          <i className="absolute text-6xl text-amber-500 cursor-pointer fa-solid fa-play"></i>
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
            <h4 className="text-amber-500"> {video.category} </h4>
          </div>
          <p> {video.desc} </p>

          <div className="videoCard__actions flex justify-between mt-4">
            <i
              onClick={() => setShowModal(true)}
              className="text-2xl text-hover-amber-500 cursor-pointer fa-solid fa-circle-plus"
            ></i>
            <div>
              {/* {isInWatchLater ? (
                <i
                  //   onClick={() =>
                  //     removeVideoToWatchLater(
                  //       encodedToken,
                  //       video._id,
                  //       watchLaterDispatch
                  //     )
                  //   }
                  className="text-2xl text-amber-500  cursor-pointer  mr-3 fa-solid fa-clock"
                ></i>
              ) : (
                <i
                  //   onClick={() =>
                  //     addVideoToWatchLater(
                  //       encodedToken,
                  //       video,
                  //       watchLaterDispatch
                  //     )
                  //   }
                  className="text-2xl text-hover-amber-500 cursor-pointer  mr-3 fa-solid fa-clock"
                ></i>
              )} */}
              <i
                //   onClick={() =>
                //     addVideoToWatchLater(
                //       encodedToken,
                //       video,
                //       watchLaterDispatch
                //     )
                //   }
                className="text-2xl text-hover-amber-500 cursor-pointer  mr-3 fa-solid fa-clock"
              ></i>
              {/* {isInLikedVideos ? (
                <i
                  //   onClick={() =>
                  //     removeVideoFromLikedVideos(
                  //       encodedToken,
                  //       video._id,
                  //       likedVideosDispatch
                  //     )
                  //   }
                  className="text-2xl text-amber-500  cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
                ></i>
              ) : (
                <i
                  //   onClick={() =>
                  //     addVideoToLikedVideos(
                  //       encodedToken,
                  //       video,
                  //       likedVideosDispatch
                  //     )
                  //   }
                  className="text-2xl text-hover-amber-500 cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
                ></i>
              )} */}
              <i
                //   onClick={() =>
                //     addVideoToLikedVideos(
                //       encodedToken,
                //       video,
                //       likedVideosDispatch
                //     )
                //   }
                className="text-2xl text-hover-amber-500 cursor-pointer  mr-3 fa-solid fa-heart-circle-bolt"
              ></i>
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

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAuth, usePlaylist } from "../../context/providers";
import { useToast } from "../../hooks";
import { addToPlaylist, deletePlaylist } from "../../utils";

const PlaylistPageListItem = ({
  playlistName,
  playlistId,
  video,
  selectedPlaylist,
  setSelectedPlaylist,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [addedToPlaylist, setAddedToPlaylist] = useState(false);

  const {
    authState: { encodedToken },
  } = useAuth();

  const { playlistDispatch } = usePlaylist();

  const { showToast } = useToast();

  useEffect(() => {
    if (addedToPlaylist && encodedToken) {
      addToPlaylist(
        encodedToken,
        playlistId,
        video,
        playlistDispatch,
        showToast
      );
    }

    if (!encodedToken) {
      showToast("Please login first", "error");
    }
  }, [addedToPlaylist, encodedToken, playlistDispatch, playlistId, video]);

  return (
    <li
      className="pb-3 bg-slate-900 px-6 py-4 mb-5 rounded-lg flex align-items-center justify-between cursor-pointer"
      style={{ minWidth: "10rem" }}
    >
      <div onClick={() => setSelectedPlaylist(playlistName)} className="w-full">
        <label
          className={`${
            selectedPlaylist === playlistName ? "text-rose-500" : "text-white"
          } text-lg cursor-pointer`}
        >
          {playlistName}
        </label>
      </div>

      <i
        onClick={() =>
          encodedToken
            ? deletePlaylist(
                encodedToken,
                playlistId,
                playlistDispatch,
                showToast
              )
            : showToast("Please Login", "error")
        }
        className="fa-solid fa-trash-can text-xl text-white ml-3 text-hover-rose-500"
      ></i>
    </li>
  );
};

export default PlaylistPageListItem;

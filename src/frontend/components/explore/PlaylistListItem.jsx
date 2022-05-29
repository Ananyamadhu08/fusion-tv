import React, { useState, useEffect } from "react";
import { useAuth, usePlaylist } from "../../context/providers";
import { useToast } from "../../hooks";
import {
  addToPlaylist,
  deletePlaylist,
  removeVideoFromPlaylist,
} from "../../utils";

function PlaylistListItem({ playlistName, playlistId, video }) {
  const [addedToPlaylist, setAddedToPlaylist] = useState(false);

  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();

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
      showToast("Please Login", "error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addedToPlaylist, encodedToken, playlistId, video, playlistDispatch]);

  let isInPlaylist = playlists.find((item) => item._id === playlistId);

  let isVideoInPlaylist = isInPlaylist.videos.find(
    (item) => item._id === video._id
  );

  return (
    <li className="pb-3">
      <label className="text-black text-lg">
        <input
          type="checkbox"
          value={addedToPlaylist}
          onChange={(e) => {
            if (isVideoInPlaylist && encodedToken) {
              removeVideoFromPlaylist(
                encodedToken,
                playlistId,
                video._id,
                playlistDispatch
              );
            }

            if (!encodedToken) {
              showToast("Please Login", "error");
            }

            setAddedToPlaylist(e.target.checked);
          }}
          className="mr-3"
        />
        {playlistName}
      </label>

      <i
        onClick={() =>
          encodedToken
            ? deletePlaylist(
                encodedToken,
                playlistId,
                playlistDispatch,
                showToast
              )
            : showToast("Please login first!", "error")
        }
        className="fa-solid fa-trash-can text-rose-800 ml-3 text-hover-slate-500 cursor-pointer"
      ></i>
    </li>
  );
}

export default PlaylistListItem;

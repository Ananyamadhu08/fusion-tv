import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/providers";

function PlaylistListItem({ playlistName, playlistId, video }) {
  const [addedToPlaylist, setAddedToPlaylist] = useState(false);

  const {
    authState: { encodedToken },
  } = useAuth();

  return (
    <li className="pb-3">
      <label className="text-black text-lg">
        <input
          type="checkbox"
          value={addedToPlaylist}
          onChange={(e) => setAddedToPlaylist(e.target.checked)}
          className="mr-3"
        />
        {playlistName}
      </label>

      <i className="fa-solid fa-trash-can text-rose-800 ml-3 text-hover-slate-500 cursor-pointer"></i>
    </li>
  );
}

export default PlaylistListItem;

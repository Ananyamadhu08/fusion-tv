import React, { useState } from "react";
import { useAuth, usePlaylist } from "../../context/providers";
import { createPlaylist } from "../../utils";
import Input from "../global/Input";
import TextArea from "../global/TextArea";

const initPlaylistState = {
  title: "",
  description: "",
};

const AddToPlaylistForm = () => {
  const [playlistDetails, setPlaylistDetails] = useState(initPlaylistState);

  const { playlistDispatch } = usePlaylist();

  const {
    authState: { encodedToken },
  } = useAuth();

  return (
    <div>
      <Input
        value={playlistDetails.title}
        name="title"
        onChange={(e) => {
          const { name, value } = e.target;

          setPlaylistDetails({ ...playlistDetails, [name]: value });
        }}
        label={"Playlist Title"}
      />

      <div className="spacer-1rem"></div>

      <TextArea
        value={playlistDetails.description}
        name="description"
        onChange={(e) => {
          const { name, value } = e.target;

          setPlaylistDetails({ ...playlistDetails, [name]: value });
        }}
        label={"Playlist Description"}
        style={{ height: "100px" }}
      />

      <div className="spacer-3rem"></div>
      <div className="spacer-1rem"></div>

      <button
        onClick={() => {
          createPlaylist(encodedToken, playlistDetails, playlistDispatch);
          setPlaylistDetails(initPlaylistState);
        }}
        className="btn bg-rose-600 shadow-lg text-white"
      >
        create playlist
      </button>
    </div>
  );
};

export default AddToPlaylistForm;

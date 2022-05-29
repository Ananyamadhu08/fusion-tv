import React from "react";
import AddToPlaylistForm from "../explore/AddToPlaylistForm";

const CreatePlaylist = ({ setShowModal }) => {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full p-4">
        <AddToPlaylistForm setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default CreatePlaylist;

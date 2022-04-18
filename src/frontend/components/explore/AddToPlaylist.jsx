import React from "react";
import AddToPlaylistForm from "./AddToPlaylistForm";
import PlaylistList from "./PlaylistList";

const AddToPlaylist = ({ video }) => {
  return (
    <div className="flex w-full h-full">
      <div
        className="w-50-percent p-4"
        style={{ borderRight: "1px dotted #040714" }}
      >
        <AddToPlaylistForm />
      </div>

      <div className="w-50-percent pl-4">
        <PlaylistList video={video} />
      </div>
    </div>
  );
};

export default AddToPlaylist;

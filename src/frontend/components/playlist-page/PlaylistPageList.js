import React, { useState } from "react";
import { usePlaylist } from "../../context/providers";
import Modal from "../global/Modal";
import CreatePlaylist from "./CreatePlaylist";
import PlaylistPageListItem from "./PlaylistPageListItem";

const PlaylistPageList = ({ selectedPlaylist, setSelectedPlaylist }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    playlistState: { playlists },
  } = usePlaylist();

  return (
    <>
      <ul className="flex flex-col">
        <li className="text-white px-3 rounded-lg font-semibold text-2xl flex align-items-center justify-between mb-8 mt-5">
          <span>Playlists</span>
          <button
            onClick={() => setShowModal(true)}
            className="border-transparent bg-slate-800"
          >
            <i className="fa-solid fa-circle-plus text-2xl text-hover-rose-500 cursor-pointer" />
          </button>
        </li>

        <div>
          {playlists &&
            playlists.map((playlist) => (
              <PlaylistPageListItem
                key={playlist._id}
                playlistName={playlist.title}
                selectedPlaylist={selectedPlaylist}
                setSelectedPlaylist={setSelectedPlaylist}
                playlistId={playlist._id}
              />
            ))}

          {playlists.length === 0 && (
            <div className="flex flex-col align-items-center gap-10">
              <h2 className="text-white text-center">No Playlists</h2>
              <img
                src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1667436026/fusionTv/fusiontv-800_hpysfl.gif"
                alt="computer"
                className="loader-img"
              />
            </div>
          )}
        </div>
      </ul>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalBody={<CreatePlaylist setShowModal={setShowModal} />}
        modalTitle={"Add to Playlist"}
      />
    </>
  );
};

export default PlaylistPageList;

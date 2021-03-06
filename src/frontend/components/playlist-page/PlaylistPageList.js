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
        <li className="text-white pt-3 pb-3 font-semibold text-2xl flex align-items-center justify-between mb-8">
          <span className="text-underline">Playlists</span>
          <button
            onClick={() => setShowModal(true)}
            className="ml-5 mt-3  bg-rose-500 shadow-lg text-white px-3 py-1 text-lg rounded-xl cursor-pointer"
            style={{ border: 0 }}
          >
            create playlist
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

          {/* {playlists.length === 0 && (
            <h4 className="text-md text-white">
              {" "}
              No playlists, create one please
            </h4>
          )} */}

          {playlists.length === 0 && (
            <div className="flex flex-col align-items-center gap-10">
              <h2 className="text-white text-center">no playlists</h2>
              <img
                src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1653799091/fusionTv/fusionTv_oyjpu4.gif"
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

import React from "react";
import { HistoryPageCard } from "../components";
import { useAuth, useHistory } from "../context/providers";
import { useToast } from "../hooks";
import { deleteAllHistory } from "../utils";

const History = () => {
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();

  const {
    authState: { encodedToken },
  } = useAuth();

  const { showToast } = useToast();

  return (
    <div className="historyPage_container">
      <div className="flex justify-center">
        {history.length > 0 && (
          <div
            onClick={() =>
              deleteAllHistory(encodedToken, historyDispatch, showToast)
            }
            className="bg-rose-700 bg-hover-rose-900 text-white font-bold w-fit px-4 py-2 text-xl m-10 rounded-lg cursor-pointer border-transparent"
          >
            Clear History
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}
          className="grid"
        >
          {history &&
            history.map((video, i) => (
              <HistoryPageCard video={video} key={i} />
            ))}
        </div>
      </div>

      {history.length === 0 && (
        <div>
          <div className="p-1"></div>
          <div className="flex flex-col align-items-center gap-10">
            <div></div>
            <h2 className="text-white text-center">No History</h2>
            <img
              src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1667436026/fusionTv/fusiontv-800_hpysfl.gif"
              alt="computer"
              className="loader-img"
            />
          </div>
        </div>
      )}

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="p-4"></div>
    </div>
  );
};

export default History;

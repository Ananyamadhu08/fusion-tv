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
          <button
            onClick={() =>
              deleteAllHistory(encodedToken, historyDispatch, showToast)
            }
            className="bg-rose-500 shadow-lg text-white mt-7 text-xl px-5 py-2 rounded-lg mb-10 cursor-pointer"
            style={{ border: 0 }}
          >
            clear history
          </button>
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
        <div className="flex flex-col align-items-center gap-10">
          <div className="p-4"></div>
          <h2 className="text-white text-center">no history</h2>
          <img
            src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1653799091/fusionTv/fusionTv_oyjpu4.gif"
            alt="computer"
            className="loader-img"
          />
        </div>
      )}

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </div>
  );
};

export default History;

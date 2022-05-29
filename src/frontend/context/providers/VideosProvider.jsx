import { useContext, createContext, useReducer, useEffect } from "react";
import { useToast } from "../../hooks";
import { getVideos } from "../../utils";
import { videosReducer } from "../reducers";

const VideosContext = createContext();

const initVideoState = {
  videos: [],
  loading: false,
  error: null,
};

export const VideosProvider = ({ children }) => {
  const [videosState, videosDispatch] = useReducer(
    videosReducer,
    initVideoState
  );

  const { showToast } = useToast();

  useEffect(() => {
    getVideos(videosDispatch, showToast);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VideosContext.Provider value={{ videosState, videosDispatch }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);

import { useReducer, useContext, createContext, useEffect } from "react";
import { useToast } from "../../hooks";
import { getAllLikedVideos } from "../../utils";
import { likedVideosReducer } from "../reducers";

const LikedVideosContext = createContext();

const initLikedVideosState = {
  likedVideos: [],
  loading: false,
  error: null,
};

export const LikedVideosProvider = ({ children }) => {
  const [likedVideosState, likedVideosDispatch] = useReducer(
    likedVideosReducer,
    initLikedVideosState
  );

  const { showToast } = useToast();

  useEffect(() => {
    let encodedToken = localStorage.getItem("fusionTV_JWT_Token");

    if (encodedToken) {
      getAllLikedVideos(encodedToken, likedVideosDispatch, showToast);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LikedVideosContext.Provider
      value={{ likedVideosState, likedVideosDispatch }}
    >
      {children}
    </LikedVideosContext.Provider>
  );
};

export const useLikedVideos = () => useContext(LikedVideosContext);

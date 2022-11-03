import { useReducer, useContext, createContext, useEffect } from "react";
import { useToast } from "../../hooks";
import { getAllWatchLaterVideos } from "../../utils/watchLaterUtils";
import { watchLaterReducer } from "../reducers";

const WatchLaterContext = createContext();

const initWatchLaterState = {
  watchLater: [],
  loading: false,
  error: null,
};

export const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(
    watchLaterReducer,
    initWatchLaterState
  );

  const { showToast } = useToast();

  useEffect(() => {
    let encodedToken = localStorage.getItem("fusionTV_JWT_Token");

    if (encodedToken) {
      getAllWatchLaterVideos(encodedToken, watchLaterDispatch, showToast);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);

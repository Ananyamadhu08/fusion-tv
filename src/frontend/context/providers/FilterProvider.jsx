import { useContext, createContext, useReducer } from "react";
import { filterVideosByCategory } from "../../helpers";
import { filterReducer } from "../reducers";
import { useVideos } from "./VideosProvider";

const FiltersContext = createContext();

const filtersInitialState = {
  filterBy: "All",
};

export const FiltersProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filterReducer,
    filtersInitialState
  );

  const {
    videosState: { videos },
  } = useVideos();

  const filteredVideos = filterVideosByCategory(videos, filtersState.filterBy);

  return (
    <FiltersContext.Provider
      value={{ filtersState, filtersDispatch, filteredVideos }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);

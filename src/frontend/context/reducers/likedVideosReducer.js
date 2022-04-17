import { likedVideosActions } from "../constants";

export const likedVideosReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case likedVideosActions.LOADING:
      return { ...state, loading: true };

    case likedVideosActions.ERROR:
      return { ...state, error: payload, loading: false };

    case likedVideosActions.GET_ALL_LIKED_VIDEOS:
      return { ...state, likedVideos: payload, loading: false };

    case likedVideosActions.ADD_VIDEO_TO_LIKED_VIDEOS:
      return { ...state, likedVideos: payload, loading: false };

    case likedVideosActions.REMOVE_VIDEO_FROM_LIKED_VIDEOS:
      return { ...state, likedVideos: payload, loading: false };

    default:
      return state;
  }
};

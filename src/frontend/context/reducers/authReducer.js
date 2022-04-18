import { authActions } from "../constants";

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case authActions.LOADING:
      return { ...state, loading: true };

    case authActions.ERROR:
      return { ...state, error: payload, loading: false };

    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload.createdUser,
        encodedToken: payload.encodedToken,
        loading: false,
      };
    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.foundUser,
        encodedToken: payload.encodedToken,
        loading: false,
      };
    case authActions.LOGOUT_SUCCESS:
      window.localStorage.removeItem("fusionTV_JWT_token");

      return { ...state, loading: false, user: {}, encodedToken: null };

    default:
      return state;
  }
};

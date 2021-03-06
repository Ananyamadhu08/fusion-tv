import { authActions } from "../context/constants";
import { loginUserService, signupUserService } from "../services";

export const signupUser = async (
  userData,
  authDispatch,
  navigateCallback,
  showToast
) => {
  try {
    authDispatch({ type: authActions.LOADING });

    const {
      data: { createdUser, encodedToken },
      status,
    } = await signupUserService(userData);

    if (status >= 200 && status < 300) {
      localStorage.setItem("itsy_JWT_token", encodedToken);

      authDispatch({
        type: authActions.SIGNUP_SUCCESS,
        payload: { createdUser, encodedToken },
      });

      navigateCallback("/");

      showToast("Signup successful", "success");
    }
  } catch (error) {
    authDispatch({
      type: authActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

export const loginUser = async (
  userData,
  authDispatch,
  navigateCallback,
  showToast
) => {
  try {
    authDispatch({ type: authActions.LOADING });

    const {
      data: { foundUser, encodedToken },
      status,
    } = await loginUserService(userData);

    if (status >= 200 && status < 300) {
      localStorage.setItem("fusionTV_JWT_token", encodedToken);

      authDispatch({
        type: authActions.LOGIN_SUCCESS,
        payload: { foundUser, encodedToken },
      });

      navigateCallback("/");

      showToast("Login successful", "success");
    }
  } catch (error) {
    authDispatch({
      type: authActions.ERROR,
      payload: error,
    });

    showToast(`${error}`, "error");
  }
};

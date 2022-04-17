import axios from "axios";

export const signupUserService = (userData) => {
  return axios.post("api/auth/signup", userData);
};

export const loginUserService = (userData) => {
  return axios.post("api/auth/login", userData);
};

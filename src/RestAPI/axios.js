import axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({
  withCredentials: true,
  headers: {
    "Api-Key": "1d5b0757-0438-452b-9b1b-50fd86ff1dbb",
  },
});

export const auth_me = instance(`${baseURL}auth/me`)
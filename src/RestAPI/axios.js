import axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({
  withCredentials: true,
  headers: {
    "Api-Key": "e811390c-3dfa-4cdc-b8f9-fba476829b23",
  },
});

export const auth_me = instance(`${baseURL}auth/me`)

export const profileHTTP = {
  get_profile: (userID) => instance(`${baseURL}/profile/${userID}`)
}

export const statusHTTP = {
  get_status: (userID) => instance(`${baseURL}/profile/status/${userID}`),
  set_status: (status) => instance.put(`${baseURL}/profile/status`, { status }),
}

export const usersHTTP = {
  get_users: () => instance(`${baseURL}/users?count=10&page=1`),
}


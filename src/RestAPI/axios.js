import axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({
  withCredentials: true,
  headers: {
    "Api-Key": "3291f849-da91-4ce9-9921-6650bf28d2d0",
  },
});

export const auth_me = instance(`${baseURL}auth/me`);
export const registrationHTTP = {
  sign_in: ({email, password, rememberMe, captcha}) => instance.post(`${baseURL}auth/login`, { email, password, rememberMe, captcha }),
  logout: () => instance.delete(`${baseURL}auth/login`),
}

export const profileHTTP = {
  get_profile: (userID) => instance(`${baseURL}profile/${userID}`),
  set_profile: (data) => instance.put(`${baseURL}profile`, data),
}

export const statusHTTP = {
  get_status: (userID) => instance(`${baseURL}profile/status/${userID}`),
  set_status: (status) => instance.put(`${baseURL}profile/status`, { status }),
}

export const usersHTTP = {
  get_users: (page, count) => instance(`${baseURL}users?count=${count}&page=${page}`),
  set_avatar: (image) => instance.put(`${baseURL}profile/photo`, image)
}


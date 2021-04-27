import { SET_AUTHORIZE, SET_CAPTCHA, SET_USER } from "./reducers/current_user_";
import { IS_LOAD } from "./reducers/loading_";
import { SET_ERROR } from "./reducers/error_"
import { SET_PROFILE, SET_AVATAR, RESET_PROFILE } from "./reducers/profile_";
import { SET_STATUS } from "./reducers/status_";
import { ENABLE_PROGRESS_SUBSCRIBE, SET_FOLLOW, DISABLE_PROGRESS_SUBSCRIBE, SET_PAGE_INFO, SET_UNFOLLOW, SET_USERS } from "./reducers/users_";

const SetUserType = typeof SET_USER;
export const set_user = (payload: any) => {
  debugger
  return  {
  type: SetUserType,
  payload
}}

export const set_load = (payload: any) => ({
  type: IS_LOAD,
  payload,
});

export const set_error = (payload: any) => ({
  type: SET_ERROR,
  payload
})

export const set_profile = (payload: any) => ({
  type: SET_PROFILE,
  payload
})

export const set_status = (payload: any) => ({
  type: SET_STATUS,
  payload
})

export const set_users = (payload: any) => ({
  type: SET_USERS,
  payload
})

export const set_page_info = (payload: any) => ({
  type: SET_PAGE_INFO,
  payload
})

export const set_avatar = (payload: any) => ({
  type: SET_AVATAR,
  payload
})

export const set_authorize = (payload: any) => ({
  type: SET_AUTHORIZE,
  payload
})

export const set_follow = (payload: any) => ({
  type: SET_FOLLOW,
  payload
})

export const set_unfollow = (payload: any) => ({
  type: SET_UNFOLLOW,
  payload,
})

export const enable_progress_subscribe = (payload: any) => ({
  type: ENABLE_PROGRESS_SUBSCRIBE,
  payload,
})

export const disable_progress_subscribe = (payload: any) => ({
  type: DISABLE_PROGRESS_SUBSCRIBE,
  payload,
})

export const reset_profile = (payload: any) => ({
  type: RESET_PROFILE,
  payload,
})

export const set_captcha = (payload: any) => ({
  type: SET_CAPTCHA,
  payload
})
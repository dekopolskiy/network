import { SET_AUTHORIZE, SET_CAPTCHA, SET_USER } from "./reducers/current_user_";
import { IS_LOAD } from "./reducers/loading_";
import { SET_ERROR } from "./reducers/error_"
import { SET_PROFILE, SET_AVATAR, RESET_PROFILE } from "./reducers/profile_";
import { SET_STATUS } from "./reducers/status_";
import { ENABLE_PROGRESS_SUBSCRIBE, SET_FOLLOW, DISABLE_PROGRESS_SUBSCRIBE, SET_PAGE_INFO, SET_UNFOLLOW, SET_USERS } from "./reducers/users_";

export const set_user = (payload) => ({
  type: SET_USER,
  payload
})

export const set_load = (payload) => ({
  type: IS_LOAD,
  payload,
});

export const set_error = (payload) => ({
  type: SET_ERROR,
  payload
})


export const set_profile = (payload) => ({
  type: SET_PROFILE,
  payload
})

export const set_status = (payload) => ({
  type: SET_STATUS,
  payload
})

export const set_users = (payload) => ({
  type: SET_USERS,
  payload
})

export const set_page_info = (payload) => ({
  type: SET_PAGE_INFO,
  payload
})

export const set_avatar = (payload) => ({
  type: SET_AVATAR,
  payload
})

export const set_authorize = (payload) => ({
  type: SET_AUTHORIZE,
  payload
})

export const set_follow = (payload) => ({
  type: SET_FOLLOW,
  payload
})

export const set_unfollow = (payload) => ({
  type: SET_UNFOLLOW,
  payload,
})

export const enable_progress_subscribe = (payload) => ({
  type: ENABLE_PROGRESS_SUBSCRIBE,
  payload,
})

export const disable_progress_subscribe = (payload) => ({
  type: DISABLE_PROGRESS_SUBSCRIBE,
  payload,
})

export const reset_profile = ( payload ) => ({
  type: RESET_PROFILE,
  payload,
})

export const set_captcha = ( payload ) => ({
  type: SET_CAPTCHA,
  payload
})
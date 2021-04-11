import { SET_AUTHORIZE, SET_USER } from "./reducers/current_user_";
import { IS_LOAD } from "./reducers/loading_";
import { SET_ERROR } from "./reducers/error_"
import { SET_PROFILE, SET_AVATAR } from "./reducers/profile_";
import { SET_STATUS } from "./reducers/status_";
import { SET_PAGE_INFO, SET_USERS } from "./reducers/users_";

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
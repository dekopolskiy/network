import { SET_USER } from "./reducers/current_user_";
import { IS_LOAD } from "./reducers/app_";
import { SET_ERROR } from "./reducers/error_"
import { SET_PROFILE } from "./reducers/profile_";
import { SET_STATUS } from "./reducers/status_";
import { SET_USERS } from "./reducers/users_";

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
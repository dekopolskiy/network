import { SET_USER } from "./reducers/current_user_";
import { IS_LOAD } from "./reducers/app_";
import { SET_ERROR } from "./reducers/error_"

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

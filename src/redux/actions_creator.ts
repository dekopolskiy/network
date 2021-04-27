import { SET_AUTHORIZE, SET_CAPTCHA, SET_USER } from "./reducers/current_user_";
import { IS_LOAD } from "./reducers/loading_";
import { SET_ERROR } from "./reducers/error_"
import { SET_PROFILE, SET_AVATAR, RESET_PROFILE, ProfileType } from "./reducers/profile_";
import { SET_STATUS } from "./reducers/status_";
import { ENABLE_PROGRESS_SUBSCRIBE, SET_FOLLOW, DISABLE_PROGRESS_SUBSCRIBE, SET_PAGE_INFO, SET_UNFOLLOW, SET_USERS } from "./reducers/users_";

type SetUserType = {
  type: typeof SET_USER,
  payload: any,
};
export const set_user = (payload: any): SetUserType => ({
  type: SET_USER,
  payload
})

type SetLoadType = {
  type: typeof IS_LOAD,
  payload: boolean, 
}
export const set_load = (payload: boolean): SetLoadType => ({
  type: IS_LOAD,
  payload,
});

type SetErrorType = {
  type: typeof SET_ERROR,
  payload: string
}
export const set_error = (payload: string): SetErrorType => ({
  type: SET_ERROR,
  payload
})

type SetProfileType = {
  type: typeof SET_PROFILE,
  payload: ProfileType,
}
export const set_profile = (payload: ProfileType): SetProfileType => ({
  type: SET_PROFILE,
  payload
})

type SetStatusType = {
  type: typeof SET_STATUS,
  payload: string
}
export const set_status = (payload: string):SetStatusType => ({
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
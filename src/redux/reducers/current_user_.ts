export const SET_USER = "network/users/SET_USER";
export const SET_AUTHORIZE = "network/users/SET_AUTHORIZE";
export const SET_CAPTCHA = "network/users/SET_CAPTCHA";

export type CurrentUserType = {
  current_user: CurrentUserInfoType,
  authorize: boolean,
  captcha: string,
}
export type CurrentUserInfoType = {
  login: null | string,
  email: null | string,
  id: null | number,
}
const initialState: CurrentUserType = {
  current_user: {
    login: null,
    email: null,
    id: null,
  },
  authorize: false,
  captcha: '',
};

export const current_user_ = (state: CurrentUserType = initialState, { type, payload }: { type: string, payload: any }): CurrentUserType => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        current_user: { ...payload }
      }
    case SET_AUTHORIZE:
      return {
        ...state,
        authorize: payload.authorize,
      }
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: payload
      }
    default:
      return state;
  }
};

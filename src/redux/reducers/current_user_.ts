export const SET_USER = "network/users/SET_USER";
export const SET_AUTHORIZE = "network/users/SET_AUTHORIZE";
export const SET_CAPTCHA = "network/users/SET_CAPTCHA";

const initialState = {
  current_user: {
    login: null,
    email: null,
    id: null,
  },
  authorize: false,
  captcha: '',
};

export const current_user_ = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        current_user: { ...payload }
      };
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

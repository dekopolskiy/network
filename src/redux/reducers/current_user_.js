export const SET_USER = "network/users/SET_USER";
export const SET_AUTHORIZE = "network/users/SET_AUTHORIZE";

const initialState = {
  current_user: {
    login: null,
    email: null,
    id: null,
  },
  authorize: false,
};

export const current_user_ = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { 
         ...state,
         current_user: { ...payload } };
      case SET_AUTHORIZE: 
        return {
          ...state,
          authorize: payload.authorize,
        }
    default:
      return state;
  }
};

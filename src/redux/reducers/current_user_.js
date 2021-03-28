export const SET_USER = "network/users/SET_USER";
const initialState = {
  current_user: {
    login: null,
    email: null,
    id: null,
  },
};

export const current_user_ = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { 
         ...state,
         current_user: { ...payload } };
    default:
      return state;
  }
};

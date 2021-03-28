export const IS_LOAD = "network/app/IS_LOAD";

const initialState = {
  isLoad: false,
};

export const app_ = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOAD:
      return { isLoad: payload };
    default:
      return state;
  }
};

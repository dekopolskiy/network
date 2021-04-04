export const IS_LOAD = "network/loading/IS_LOAD";

const initialState = {
  isLoad: false,
};

export const loading_ = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOAD:
      return { isLoad: payload };
    default:
      return state;
  }
};

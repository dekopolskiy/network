export const IS_LOAD = "network/loading/IS_LOAD";

export type initialStateType = {
  isLoad: boolean,
}
const initialState: initialStateType = {
  isLoad: false,
};

export const loading_ = (state: initialStateType = initialState, { type, payload }: { type: string, payload: any }): initialStateType => {
  switch (type) {
    case IS_LOAD:
      return { isLoad: payload };
    default:
      return state;
  }
};

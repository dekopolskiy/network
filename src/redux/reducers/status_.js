export const SET_STATUS = "/network/status/SET_STATUS";

const initialState = {
    status: '',
}

export const status_ = (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_STATUS:
        return { status: payload }

    default:
        return state
    }
}

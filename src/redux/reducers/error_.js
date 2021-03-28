export const SET_ERROR = 'network/error/SET_ERROR'
const initialState = {
    message: ''
}

export const error_ = (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_ERROR:
        return { message: payload }

    default:
        return state
    }
}

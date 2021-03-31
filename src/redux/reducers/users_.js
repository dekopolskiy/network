export const SET_USERS = "network/users/SET_USERS";
const initialState = {
    users: [],
    totalCount: null,
}

export const users_ = (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_USERS:
        return {
            ...state,
            users: [ ...payload ]
        }

    default:
        return state
    }
}

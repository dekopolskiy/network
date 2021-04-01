export const SET_USERS = "network/users/SET_USERS";
const initialState = {
    users: [],
    totalCount: null,
    usersOnPage: 50,
}

export const users_ = (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_USERS:
        return {
            ...state,
            users: [ ...payload.items ],
            totalCount: payload.totalCount,
        }

    default:
        return state
    }
}

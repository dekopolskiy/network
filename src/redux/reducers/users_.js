export const SET_USERS = "network/users/SET_USERS";
const initialState = {
    users: [],
    pageInfo: {
        totalCount: null,
        usersOnPage: 50,
        currentPage: 1,
    }
}

export const users_ = (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_USERS:
        return {
            ...state,
            users: [ ...payload.items ],
            pageInfo: { 
                totalCount: payload.totalCount,
                currentPage: payload.currentPage,
            }
        }

    default:
        return state
    }
}

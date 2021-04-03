export const SET_USERS = "network/users/SET_USERS";
const initialState = {
    users: [],
    pageInfo: {
        totalCount: null,
        usersOnPage: 25,
        currentPage: 1,
    }
}
//payload.users, payload.page
export const users_ = (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_USERS:
        return {
            users: [ ...payload.data.items ],
            pageInfo: { 
                totalCount: payload.data.totalCount,
                currentPage: payload.page,
                usersOnPage: payload.usersOnPage,
            }
        }

    default:
        return state
    }
}

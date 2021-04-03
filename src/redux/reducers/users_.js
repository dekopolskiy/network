export const SET_USERS = "network/users/SET_USERS";
export const SET_PAGE_INFO = "network/users/SET_PAGE_INFO";
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
            }
        }
    case SET_PAGE_INFO:
        return {
            ...state,
            pageInfo: {
                ...state.pageInfo,
                currentPage: payload.page,
                usersOnPage: payload.usersOnPage,            }
        }

    default:
        return state
    }
}

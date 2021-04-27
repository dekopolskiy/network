import { PhotosType } from "./profile_";
export const SET_USERS = "network/users/SET_USERS";
export const SET_PAGE_INFO = "network/users/SET_PAGE_INFO";
export const SET_FOLLOW = "network/users/SET_FOLLOW";
export const SET_UNFOLLOW = "network/users/SET_UNFOLLOW";
export const ENABLE_PROGRESS_SUBSCRIBE = "network/users/ENABLE_PROGRESS_SUBSCRIBE";
export const DISABLE_PROGRESS_SUBSCRIBE = "network/users/DISABLE_PROGRESS_SUBSCRIBE";
type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
}
type PageInfoType = {
    totalCount: null|number,
    usersOnPage: number,
    currentPage: number,
}
type followUsers = {
    ids: Array<number>
}
type UsersType = {
    users: Array<UserType>,
    pageInfo: PageInfoType,
    followUsers: followUsers,
}

const initialState = {
    users: [],
    pageInfo: {
        totalCount: null,
        usersOnPage: 25,
        currentPage: 1,
    },
    followUsers: { ids: [] },
}

export const users_ = (state: UsersType = initialState, { type, payload }: { type: string, payload: any }): UsersType => {
    switch (type) {
        case SET_USERS:
            return {
                ...state,
                users: [...payload.data.items],
                pageInfo: {
                    ...state.pageInfo,
                    totalCount: payload.data.totalCount,
                }
            }
        case SET_PAGE_INFO:
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    currentPage: payload.page,
                    usersOnPage: payload.usersOnPage,
                }
            }
        case SET_FOLLOW:
            return {
                ...state,
                users: state.users.map((i) => {
                    if (i.id === payload) {
                        return {
                            ...i,
                            followed: true,
                        }
                    }
                    return i
                })
            }
        case SET_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((i) => {
                    if (i.id === payload) {
                        return {
                            ...i,
                            followed: false,
                        }
                    }
                    return i
                })
            }
        case ENABLE_PROGRESS_SUBSCRIBE:
            return {
                ...state,
                followUsers: { ids: [...state.followUsers.ids, payload.id], }
            }
        case DISABLE_PROGRESS_SUBSCRIBE:
            return {
                ...state,
                followUsers: { ids: state.followUsers.ids.filter((i) => i !== payload.id), }
            }

        default:
            return state
    }
}

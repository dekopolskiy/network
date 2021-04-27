export const SET_ERROR = 'network/error/SET_ERROR'
export type InitialStateType = {
    message: string
}

const initialState: InitialStateType = {
    message: ''
}

export const error_ = (state:InitialStateType = initialState, { type, payload }: {type: string,payload: any}):InitialStateType => {
    switch (type) {
    case SET_ERROR:
        return { message: payload }

    default:
        return state
    }
}


export const SET_STATUS = "/network/status/SET_STATUS";
export type initialStateType = {
    status: string,
}

const initialState: initialStateType = {
    status: '',
}

export const status_ = (state: initialStateType = initialState, { type, payload }: { type: string, payload: any }): initialStateType => {
    switch (type) {

        case SET_STATUS:
            return { status: payload }

        default:
            return state
    }
}

const initialState = {
    follow: false,
}

export const subscribe = (state = initialState, { type, payload }) => {
    
    switch (type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return state
    }
}

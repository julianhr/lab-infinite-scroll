const INITIAL_STATE = {
    hydrationMethod: 'intersectionObserver',
}

export default function(state=INITIAL_STATE, { type, payload }) {
    switch (type) {
        case 'SET_HYDRATION_METHOD':
            return { ...state, hydrationMethod: payload }
        default:
            return state
    }
}

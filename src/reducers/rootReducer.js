import { createReducer } from 'redux-starter-kit'


const INITIAL_STATE = {
    // static
    recordsPerFetch: 8,
    sentinelPosition: 6,
    // editable
    visibilityMethod: 'intersectionObserver',
}

export default createReducer(INITIAL_STATE, {
    'SET_VISIBILITY_METHOD': (state, { payload }) => {
        return { ...state, visibilityMethod: payload }
    },
})

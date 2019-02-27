import { createReducer } from 'redux-starter-kit'


const INITIAL_STATE = {
    // static
    recordsPerFetch: 8,
    sentinelPosition: 6,
    // editable
    scrollerType: 'intersectionObserver',
}

export default createReducer(INITIAL_STATE, {
    'SET_SCROLLER_TYPE': (state, { payload }) => {
        return { ...state, scrollerType: payload }
    },
})

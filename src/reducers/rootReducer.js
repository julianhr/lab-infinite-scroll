import { createReducer } from 'redux-starter-kit'

import { clamp } from '../utils'


const INITIAL_STATE = {
    // static
    recordsPerFetchMin: 4,
    recordsPerFetchMax: 10,
    // editable
    visibilityMethod: 'sentinelClientRect',
    recordsPerFetch: 8,
    sentinelPosition: 7,
}

export default createReducer(INITIAL_STATE, {
    'SET_VISIBILITY_METHOD': (state, { payload }) => {
        return { ...state, visibilityMethod: payload }
    },
    'SET_RECORDS_PER_FETCH': (state, { payload }) => {
        return { ...state, recordsPerFetch: payload }
    },
    'SET_SENTINEL_POSITION': (state, { payload }) => {
        const { recordsPerFetchMin: min, recordsPerFetch } = state
        const position = clamp(payload, min, recordsPerFetch)
        return { ...state, sentinelPosition: position }
    }
})

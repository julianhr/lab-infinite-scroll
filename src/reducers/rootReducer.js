import { createReducer } from 'redux-starter-kit'


const INITIAL_STATE = {
    hydrationMethod: 'intersectionObserver',
}

export default createReducer(INITIAL_STATE, {
    'SET_HYDRATION_METHOD': (state, { payload }) => {
        return { ...state, hydrationMethod: payload }
    }
})

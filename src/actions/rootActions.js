import { createAction } from 'redux-starter-kit'

import { clamp } from '~/utils'


export const setVisibilityMethod = createAction('SET_VISIBILITY_METHOD')
export const setSentinelPosition = createAction('SET_SENTINEL_POSITION')

export function setRecordsPerFetch(amount) {
  return (dispatch, getState) => {
    const { recordsPerFetchMin, recordsPerFetchMax, sentinelPosition } = getState()
    const quantity = clamp(amount, recordsPerFetchMin, recordsPerFetchMax)

    dispatch({
      type: 'SET_RECORDS_PER_FETCH',
      payload: quantity
    })

    if (sentinelPosition > quantity) {
      dispatch(setSentinelPosition(quantity))
    }
  }
}

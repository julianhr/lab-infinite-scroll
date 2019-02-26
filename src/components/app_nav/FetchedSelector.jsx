import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { getRangeArray } from '~/utils'
import { setRecordsPerFetch } from '~/actions/rootActions'
import Selector from './Selector'


function FetchedSelector({ minFetch, maxFetch, recordsPerFetch, setRecordsPerFetch }) {
  return (
    <Selector
      label='Records Per Fetch:'
      keys={getRangeArray(minFetch, maxFetch)}
      values={getRangeArray(minFetch, maxFetch, true)}
      selected={recordsPerFetch}
      onChange={setRecordsPerFetch}
    />
  )
}

FetchedSelector.propTypes = {
  maxFetch: PropTypes.number,
  minFetch: PropTypes.number,
  recordsPerFetch: PropTypes.number,
  setRecordsPerFetch: PropTypes.func,
}

function mapStateToProps({
  recordsPerFetchMin: minFetch,
  recordsPerFetchMax: maxFetch,
  recordsPerFetch,
}) {
  return { minFetch, maxFetch, recordsPerFetch }
}

const mapDispatchToProps = {
  setRecordsPerFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchedSelector)

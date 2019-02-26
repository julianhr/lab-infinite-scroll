import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { setSentinelPosition } from '~/actions/rootActions'
import Selector from './Selector'
import { getRangeArray } from '~/utils'


function SentinelSelector({ minFetch, recordsPerFetch, setSentinelPosition, sentinelPosition }) {
  return (
    <Selector
      label='Sentinel Position:'
      keys={getRangeArray(minFetch, recordsPerFetch)}
      values={getRangeArray(minFetch, recordsPerFetch, true)}
      selected={sentinelPosition}
      onChange={setSentinelPosition}
    />
  )
}

SentinelSelector.propTypes = {
  recordsPerFetch: PropTypes.number,
  minFetch: PropTypes.number,
  setSentinelPosition: PropTypes.func,
  sentinelPosition: PropTypes.number,
}

function mapStateToProps({
  recordsPerFetch,
  recordsPerFetchMin: minFetch,
  sentinelPosition,
}) {
  return { recordsPerFetch, minFetch, sentinelPosition }
}

const mapDispatchToProps = {
  setSentinelPosition
}

export default connect(mapStateToProps, mapDispatchToProps)(SentinelSelector)

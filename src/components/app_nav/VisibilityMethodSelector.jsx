import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { setVisibilityMethod } from '~/actions/rootActions'
import Selector from './Selector'


function VisibilityMethodSelector({ visibilityMethod, setVisibilityMethod }) {
  return (
    <Selector
      label='Visibility Method:'
      keys={[
        'intersectionObserver',
        'containerScrollHeights',
        'sentinelClientRect',
      ]}
      values={[
        'Intersection Observer with Sentinel',
        'Container scroll and client heights',
        'Sentinel bounding client rectangle',
      ]}
      selected={visibilityMethod}
      onChange={setVisibilityMethod}
    />
  )
}

VisibilityMethodSelector.propTypes = {
  setVisibilityMethod: PropTypes.func,
  visibilityMethod: PropTypes.string,
}

const mapStateToProps = ({ visibilityMethod }) => (
  { visibilityMethod }
)

const mapDispatchToProps = {
  setVisibilityMethod
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityMethodSelector)

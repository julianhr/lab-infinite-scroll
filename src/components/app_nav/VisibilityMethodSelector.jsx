import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { setVisibilityMethod } from '~/actions/rootActions'
import Selector from './Selector'


function VisibilityMethodSelector({ setVisibilityMethod }) {
  return (
    <Selector
      label='Visibility Method:'
      keys={['intersectionObserver', 'boundRect']}
      values={['Intersection Observer', 'Bound Rectangle']}
      selected='intersectionObserver'
      onChange={setVisibilityMethod}
    />
  )
}

VisibilityMethodSelector.propTypes = {
  setVisibilityMethod: PropTypes.func,
}

const mapDispatchToProps = {
  setVisibilityMethod
}

export default connect(null, mapDispatchToProps)(VisibilityMethodSelector)

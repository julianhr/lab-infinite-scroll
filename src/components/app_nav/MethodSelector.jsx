import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { setHydrationMethod } from '~/actions/rootActions'


const Root = styled.div`
  padding: 20px 0 40px;
  display: flex;
  flex-direction: column;
  align-content: center;

  label {
    display: block;
    padding-bottom: 5px;
  }

  select {
    background-color: ${({ theme }) => theme.colors.field.background};
  }
`

function MethodSelector(props) {
  return (
    <Root>
      <label htmlFor="method">Hydration method:</label>
      <select
        name='method'
        id='method'
        onChange={(event) => props.setHydrationMethod(event.target.value)}
      >
        <option value="intersectionObserver">Intersection Observer</option>
        <option value="boundRect">Sentinel</option>
      </select>
    </Root>
  )
}

MethodSelector.propTypes = {
  setHydrationMethod: PropTypes.func,
}

const mapDispatchToProps = {
  setHydrationMethod
}

export default connect(null, mapDispatchToProps)(MethodSelector)

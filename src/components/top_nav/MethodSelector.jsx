import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


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
const noOp = () => {}

function Method() {
  return (
    <Root>
      <label htmlFor="method">Hydration method:</label>
      <select name="method" id="method" onChange={noOp}>
        <option value="sentiner">Sentinel</option>
        <option value="intersection">Intersection Observer</option>
      </select>
    </Root>
  )
}

export default Method

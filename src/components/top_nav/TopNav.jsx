import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import MethodSelector from './MethodSelector'


const Root = styled.nav`
  grid-area: "a1";
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.queries.from('md')} {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }
`

class TopNav extends React.PureComponent {
  render() {
    return (
      <Root>
        <MethodSelector />
      </Root>
    )
  }
}

export default TopNav

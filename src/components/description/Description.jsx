import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


const Root = styled.div`
  grid-area: "b1";
  display: flex;
  width: 100%;

  ${props => props.theme.queries.from('md')} {
    grid-row: 2 / span 1;
    grid-column: 1 / span 1
  }
`

class Description extends React.PureComponent {
  render() {
    return (
      <Root>
        Testing Description
      </Root>
    )
  }
}

export default Description

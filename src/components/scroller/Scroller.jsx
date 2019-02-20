import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


const Root = styled.section`
  grid-area: "b1";
  display: flex;
  width: 100%;
  overflow-y: scroll;
  background: plum;

  ${props => props.theme.queries.from('md')} {
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;
  }
`


class Scroller extends React.PureComponent {
  render() {
    return (
      <Root>
        This is the scroller
      </Root>
    )
  }
}

export default Scroller

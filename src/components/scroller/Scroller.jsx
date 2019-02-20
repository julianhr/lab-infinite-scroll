import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Card from './Card'


const Root = styled.section`
  grid-area: "b1";
  display: flex;
  width: 100%;
  overflow-y: scroll;

  ${props => props.theme.queries.from('md')} {
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;
  }
`


class Scroller extends React.PureComponent {
  state = {
    cards: [],
  }

  renderCards() {
    return this.state.cards.map((data, i) =>
      <Card
        key={i}
        title={data.title}
        imgUrl={data.imgUrl}
        description={data.description}
      />
    )
  }

  render() {
    return (
      <Root>
        {this.renderCards()}
      </Root>
    )
  }
}

export default Scroller

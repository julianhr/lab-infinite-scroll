import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Card from './Card'
import { buildUrl } from '~/utils'


const Root = styled.section`
  grid-area: b1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  padding: 10px 10px 0;
  overflow-y: scroll;
  background: #e8e8e8;

  ${props => props.theme.queries.from('md')} {
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;
  }
`


class Scroller extends React.PureComponent {
  state = {
    cards: [],
  }

  componentDidMount() {
    const baseUrl = 'http://localhost:5000/infinite-scroller/'
    const query = { paragraphs: 3, entries: 10 }
    const url = buildUrl(baseUrl, query)

    fetch(url)
      .then(res => {
        if (res.ok) return res.json()
        else {
          throw Error('Fetch error')
        }
      })
      .then(json => {
        const { cards } = this.state
        this.setState({ cards: [...cards, ...json] })
      })
      .catch(error => {
        console.error('Fetch error:', error)
      })
  }

  renderCards() {
    return this.state.cards.map((data, i) =>
      <Card
        key={i}
        title={data.title}
        imgUrl={data.image_url}
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

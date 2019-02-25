import React from 'react'
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
  refSentinel = React.createRef()
  observer = new IntersectionObserver(this.handleIntObs())

  state = {
    cards: [],
    isFetching: false,
  }

  componentDidMount() {
    this.fetchCards()
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isFetching && this.state.isFetching) {
      this.fetchCards()
    }

    if (this.state.cards.length > prevState.cards.length) {
      this.observer.observe(this.refSentinel.current)
    }
  }

  fetchCards() {
    const baseUrl = 'http://localhost:5000/infinite-scroller/'
    const query = { paragraphs: 3, entries: 10 }
    const url = buildUrl(baseUrl, query)

    return fetch(url)
      .then(res => {
        if (res.ok) return res.json()
        else { throw Error('Fetch error') }
      })
      .then(data => {
        const { cards: currCards } = this.state

        if (this.refSentinel.current) {
          this.observer.unobserve(this.refSentinel.current)
        }

        const cards = [...currCards]
        this.appendNewCards(cards, data, currCards.length)
        this.setState({ isFetching: false, cards })
      })
      .catch(error => {
        console.error('Fetch error:', error)
      })
  }

  appendNewCards(cards, data, lastKey) {
    data.forEach(({ title, image_url: imgUrl, description }, i) => {
      const props = { imgUrl, title, description }
      let CardComponent = Card

      if (i === 8) {
        CardComponent = React.forwardRef((props, ref) => <Card forwardedRef={ref} {...props} />)
        props.forwardedRef = this.refSentinel
      }

      cards.push( <CardComponent key={lastKey + i} {...props} /> )
    })
  }

  handleIntObs() {
    const parent = this

    return (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !parent.state.isFetching) {
          parent.setState({ isFetching: true })
        }
      })
    }
  }

  render() {
    return <Root>{this.state.cards}</Root>
  }
}

export default Scroller

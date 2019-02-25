import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'


class ScrollerIntObs extends React.PureComponent {
  static propTypes = {
    cardFetcher: PropTypes.func,
  }

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
    const { cardFetcher } = this.props

    cardFetcher()
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
    return (
      <>
        {this.state.cards}
      </>
    )
  }
}

export default ScrollerIntObs

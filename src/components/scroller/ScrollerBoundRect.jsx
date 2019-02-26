import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import Card from './Card'


const Root = styled.div`
  width: 100%;
  height: 80vh;
  padding: 10px 10px 0;
  background: #e8e8e8;
  overflow-y: scroll;
`

class ScrollerBoundRect extends React.PureComponent {
  static propTypes = {
    cardFetcher: PropTypes.func,
    sentinelPosition: PropTypes.number,
  }

  state = {
    cards: [],
    isFetching: false,
  }

  componentDidMount() {
    this.fetchCards()
  }

  handleOnScroll = (event) => {
    if (!this.state.isFetching && this.canFetchCards(event.target)) {
      this.setState({ isFetching: true })
      this.fetchCards()
    }
  }
  
  canFetchCards(containerElement) {
    const { scrollHeight, scrollTop, clientHeight } = containerElement
    const buffer = 500
    return scrollHeight - scrollTop < clientHeight + buffer
  }

  fetchCards() {
    this.props.cardFetcher()
      .then(data => {
        const { cards: currCards } = this.state
        const cards = [...currCards]

        this.appendNewCards(cards, data, currCards.length)
        this.setState({ isFetching: false, cards })
      })
      .catch(error => {
        this.setState({ isFetching: false })
        console.error('Fetch error:', error)
      })
  }

  appendNewCards(cards, data, lastKey) {
    data.forEach(({ title, image_url: imgUrl, description }, i) => {
      const position = lastKey + i + 1
      const props = { imgUrl, title, description, position }
      cards.push(<Card key={lastKey+i} {...props} /> )
    })
  }

  render() {
    return (
      <Root
        onScroll={this.handleOnScroll}
      >
        {this.state.cards}
      </Root>
    )
  }
}

const mapStateToProps = ({ sentinelPosition }) => (
  { sentinelPosition }
)

export default connect(mapStateToProps)(ScrollerBoundRect)

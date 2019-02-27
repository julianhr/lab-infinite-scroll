import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import Card from './Card'


const Root = styled.div`
  height: 80vh;
  padding: 10px 10px 0;
  background: #e8e8e8;
  overflow-y: scroll;
`

class ScrollerSentinelClientRect extends React.PureComponent {
  static propTypes = {
    cardFetcher: PropTypes.func,
    sentinelPosition: PropTypes.number,
  }

  state = {
    cards: [],
    isFetching: false,
  }

  refRoot = React.createRef()
  refSentinel = React.createRef()

  componentDidMount() {
    this.fetchCards()
  }

  fetchCards() {
    const { cardFetcher } = this.props

    cardFetcher()
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
    const { sentinelPosition } = this.props

    data.forEach(({ title, image_url: imgUrl, description }, i) => {
      const position = lastKey + i + 1
      const props = { imgUrl, title, description, position }
      let CardComponent = Card

      if (i+1 === sentinelPosition) {
        CardComponent = React.forwardRef((props, ref) => <Card forwardedRef={ref} {...props} />)
        props.forwardedRef = this.refSentinel
      }

      cards.push( <CardComponent key={lastKey+i} {...props} /> )
    })
  }

  handleOnScroll = (event) => {
    const { top: sentinelTop } = this.refSentinel.current.getBoundingClientRect()
    const { clientHeight: rootClientHeight } = this.refRoot.current
    const isSentinelVisible = sentinelTop <= rootClientHeight

    if (!this.state.isFetching && isSentinelVisible) {
      this.setState({ isFetching: true })
      this.fetchCards()
    }
  }

  render() {
    return (
      <Root
        ref={this.refRoot}
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

export default connect(mapStateToProps)(ScrollerSentinelClientRect)

import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { buildUrl } from '~/utils'
import ScrollerIntObs from './ScrollerIntObs'


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

function Scroller(props) {
  const fetchCards = () => {
    const baseUrl = 'http://localhost:5000/infinite-scroller/'
    const query = { paragraphs: 3, entries: 10 }
    const url = buildUrl(baseUrl, query)

    return fetch(url)
      .then(res => {
        if (res.ok) { return res.json() }
        else { throw Error('Fetch error') }
      })
      .catch(error => {
        console.error('Fetch error:', error)
      })
  }

  const renderScroller = () => {
    switch (props.hydrationMethod) {
      case 'intersectionObserver':
        return <ScrollerIntObs cardFetcher={fetchCards} />
      default:
        return <ScrollerIntObs cardFetcher={fetchCards} />
    }
  }

  return (
    <Root>
      {renderScroller()}
    </Root>
  )
}

Scroller.propTypes = {
  hydrationMethod: PropTypes.string,
}

function mapStateToProps({ hydrationMethod }) {
  return { hydrationMethod }
}

export default connect(mapStateToProps)(Scroller)

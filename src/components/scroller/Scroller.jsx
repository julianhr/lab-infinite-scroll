import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { buildUrl } from '~/utils'
import ScrollerIntObs from './ScrollerIntObs'
import ScrollerBoundRect from './ScrollerBoundRect'


const Root = styled.section`
  grid-area: b1;
  width: 100%;

  ${props => props.theme.queries.from('md')} {
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;
  }
`

function Scroller({ visibilityMethod, recordsPerFetch }) {
  const fetchCards = () => {
    const baseUrl = 'http://localhost:5000/infinite-scroller/'
    const query = { paragraphs: 3, entries: recordsPerFetch }
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
    switch (visibilityMethod) {
      case 'intersectionObserver':
        return <ScrollerIntObs cardFetcher={fetchCards} />
      case 'clientRectContainer':
        return <ScrollerBoundRect cardFetcher={fetchCards} />
    }
  }

  return (
    <Root>
      {renderScroller()}
    </Root>
  )
}

Scroller.propTypes = {
  visibilityMethod: PropTypes.string,
  recordsPerFetch: PropTypes.number,
}

const mapStateToProps = ({ recordsPerFetch, visibilityMethod }) => (
  { visibilityMethod, recordsPerFetch }
)

export default connect(mapStateToProps)(Scroller)

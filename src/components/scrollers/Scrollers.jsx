import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { buildUrl } from '~/utils'
import ScrollerStatus from './ScrollerStatus'
import ScrollerSentinelIntObs from './ScrollerSentinelIntObs'
import ScrollerContainerHeights from './ScrollerContainerHeights'
import ScrollerSentinelClientRect from './ScrollerSentinelClientRect'


const Root = styled.section`
  grid-area: c1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px 20px;
  align-items: center;

  ${props => props.theme.queries.from('md')} {
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;
  }
`

const Contour = styled.div`
  max-width: 600px;
  border: 2px solid #dcdcdc;
`

function Scrollers({ scrollerType, recordsPerFetch }) {
  const fetchCards = () => {
    const baseUrl = 'http://localhost:5000/infinite-scroller/'
    const query = { paragraphs: 2, entries: recordsPerFetch }
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
    switch (scrollerType) {
      case 'intersectionObserver':
        return <ScrollerSentinelIntObs cardFetcher={fetchCards} />
      case 'containerScrollHeights':
        return <ScrollerContainerHeights cardFetcher={fetchCards} />
      case 'sentinelClientRect':
        return <ScrollerSentinelClientRect cardFetcher={fetchCards} />
    }
  }

  return (
    <Root>
      <ScrollerStatus />
      <Contour>
        {renderScroller()}
      </Contour>
    </Root>
  )
}

Scrollers.propTypes = {
  scrollerType: PropTypes.string,
  recordsPerFetch: PropTypes.number,
}

const mapStateToProps = ({ recordsPerFetch, scrollerType }) => (
  { scrollerType, recordsPerFetch }
)

export default connect(mapStateToProps)(Scrollers)

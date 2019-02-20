import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import TopNav from './components/top_nav/TopNav'
import Scroller from './components/scroller/Scroller'
import Description from './components/description/Description'


const Main = styled.main`
  /* grid */
  display: grid;
  grid:
    "a1" auto
    "b1" auto
    "c1" auto
    / auto;
  /* else */
  width: 100%;
  max-width: ${props => props.theme.breaks.lg}px;

  ${props => props.theme.queries.from('md')} {
    grid: repeat(2, auto auto) / 40% 60%;
  }
`

function App() {
  return (
    <Main>
      <TopNav />
      <Scroller />
      <Description />
    </Main>
  )
}

export default App

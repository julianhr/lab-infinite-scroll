import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import AppNav from './components/app_nav/AppNav'
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
  padding: 10px;

  ${props => props.theme.queries.from('md')} {
    grid: repeat(2, auto auto) / 40% 60%;
  }
`

function App() {
  return (
    <Main>
      <AppNav />
      <Scroller />
      <Description />
    </Main>
  )
}

export default App

import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'sanitize.css'

import globalStyles from './global-styles'

const Root = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

function About() {
  return (<div>About component</div>)
}

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Global styles={globalStyles} />
          Hello World
          <Link to='/about'>go to About</Link>
          <Route exact path='/about' component={About} />
        </Root>
      </BrowserRouter>
    )
  }
}

export default App

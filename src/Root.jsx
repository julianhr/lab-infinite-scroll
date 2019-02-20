import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'sanitize.css'

import globalStyles from './global-styles'
import theme from './styles/theme'
import App from './App'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

class Root extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Container>
            <Global styles={globalStyles} />
            <App />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default Root

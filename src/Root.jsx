import React from 'react'
import { Provider } from 'react-redux'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter } from 'react-router-dom'
import 'sanitize.css'

import appStore from './reducers/'
import globalStyles from './styles/globalStyles'
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
      <Provider store={appStore}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Container>
              <Global styles={globalStyles} />
              <App />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default Root

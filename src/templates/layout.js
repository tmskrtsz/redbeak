import React from 'react'
import { ThemeProvider } from 'styled-components'

import Store, { Consumer } from '../store'
import Header from '../components/ui/Header'
import GlobalStyle from '../theme/global'

const Layout = ({ children, location }) => (
  <Store>
    <Consumer>
      {({ theme, douche, menuActive }) => (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle
              douche={douche}
              menuActive={menuActive}
            />
            <Header location={location} />
            {children}
          </>
        </ThemeProvider>
      )}
    </Consumer>
  </Store>
)

export default Layout

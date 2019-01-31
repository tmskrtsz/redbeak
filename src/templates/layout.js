import React from 'react'
import { ThemeProvider } from 'styled-components'

import Store from '../store'
import Header from '../components/ui/Header'
import GlobalStyle from '../theme/global'
import theme from '../theme'

const Layout = ({ children, location }) => (
	<Store>
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				<Header />
				{children}
			</>
		</ThemeProvider>
	</Store>
)

export default Layout

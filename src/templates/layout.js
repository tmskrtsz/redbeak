import React from 'react'
import { ThemeProvider } from 'styled-components'

import Store, { Consumer } from '../store'
import Header from '../components/ui/Header'
import GlobalStyle from '../theme/global'

const Layout = ({ children }) => (
	<Store>
		<Consumer>
			{({ theme }) => (
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyle />
						<Header />
						{children}
					</>
				</ThemeProvider>
			)}
		</Consumer>
	</Store>
)

export default Layout

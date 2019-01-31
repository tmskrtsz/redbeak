import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Consumer } from '../../store'
import theme from '../../theme'
import { Container, Row, Column, Inner } from './Grid'
import logo from '../../images/logo.svg'

const Header = styled.header`
	background-color: ${ props => props.theme.color.bg };
`

const Home = styled(Link)`
	background-image: url(${ logo });
	background-repeat: no-repeat;
	width: 72px;
	height: 54px;
	display: inline-block;
	text-indent: -9999px;
	overflow: hidden;
`

const Navbar = styled.nav`
	background-color: ${ props => props.theme.color.bg };

	a {
		margin-left: 3em;
		color: #000;
		font-size: 1.4rem;
		text-transform: uppercase;
		letter-spacing: 1.5px;
	}
`

const active = {
	color: theme.color.primary
}

export default () => (
	<Header>
		<Container>
			<Row align="center">
				<Column>
					<Inner>
						<Home to="/">Home</Home>
					</Inner>
				</Column>
				<Column style={{ marginLeft: 'auto' }}>
					<Inner>
						<Navbar>
							<Link
								activeStyle={active}
								to="/#work"
							>
								Work
							</Link>
							<Link
								activeStyle={active}
								to="/about"
							>
								<Consumer>{({ douche }) => (douche ? 'About Him' : 'About')}</Consumer>
							</Link>
							<Link
								activeStyle={active}
								to="/acontact"
							>
								Contact
							</Link>
						</Navbar>
					</Inner>
				</Column>
			</Row>
		</Container>
	</Header>
)

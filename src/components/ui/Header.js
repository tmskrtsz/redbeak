import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rgba } from 'polished'

import { Consumer } from '../../store'
import Switch from './Switch'
import theme from '../../theme/light'
import { Container, Row, Column } from './Grid'
import logo from '../../images/logo.svg'

import _throttle from 'lodash.throttle'

const Header = styled.header`
	background-color: ${ props => (props.active ? rgba(props.theme.color.bg, 0.97) : 'transparent') };
	border-top: 2px solid ${ props => props.theme.color.primary };
	padding: ${ props => (props.active ? '0.4em' : '1.2em') } 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	box-shadow: 0 4px 30px ${ props => (props.active ? rgba(props.theme.color.dark, 0.12) : 'transparent') };
	transition: all 0.2s ease-in-out;

	${ Row } {
		margin-left: 0;
		margin-right: 0;
	}
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
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		color: ${ props => props.theme.color.text };
		font-size: 1.4rem;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		padding: 0 1.8em;
	}
`

const active = {
	color: theme.color.primary
}

export default class extends Component {
	state = {
		scrolling: false
	}

	isScrolling = () => {
		if (window.pageYOffset > 0) {
			this.setState({ scrolling: true })
		} else {
			this.setState({ scrolling: false })
		}
	}

	componentDidMount () {
		window.addEventListener('scroll', _throttle(this.isScrolling, 250))
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.isScrolling)
	}

	render () {
		const { scrolling } = this.state
		return (
			<Header active={scrolling}>
				<Container>
					<Row
						align="center"
						grid={1 / 3}
					>
						<Column>
							<Home to="/">Home</Home>
						</Column>
						<Column>
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
						</Column>
						<Column style={{ marginLeft: 'auto' }}>
							<Consumer>{({ actions, douche }) => <Switch
								onClick={actions.switchTone}
								status={douche}
							/>}</Consumer>
						</Column>
					</Row>
				</Container>
			</Header>
		)
	}
}

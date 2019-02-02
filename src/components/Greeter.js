import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Consumer } from '../store'
import { FlyUp } from './ui/Animations'

const Greeter = styled.div`
	max-width: 60%;
	padding: 5em 0;
	${ props => props.anim };
`

const Title = styled.h1`
	color: ${ props => props.theme.color.primary };
`

const Subtitle = styled.h2`
	color: ${ props => props.theme.color.text };
	font-size: 2.6rem;
	font-weight: 400;
	line-height: 1.7;
`

export default () => (
	<Greeter anim={FlyUp}>
		<Title>redbeak</Title>
		<Consumer>
			{({ douche }) => {
				return (
					<>
						{douche ? (
							<Subtitle>
								A creative thinker, artist and thought provoker. Tamás Kertész spends his days crafting artisan web
								experiences that bring people together on a broad scale.
							</Subtitle>
						) : (
							<Subtitle>
								I break a few eggs to design for the web. My name is Tamás Kertész and I'm a student of great design,
								check out my work or read more about me.
							</Subtitle>
						)}
					</>
				)
			}}
		</Consumer>
	</Greeter>
)

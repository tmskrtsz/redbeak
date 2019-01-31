import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { Consumer } from '../store'

import Switch from './ui/Switch'

const Greeter = styled.div`
	max-width: 70%;
	padding: 5em 0;
`

const Title = styled.h1`
	color: ${ props => props.theme.color.primary };
`

const Subtitle = styled.h2`
	font-size: 2.6rem;
	font-weight: 400;
	line-height: 1.7;
`

export default () => (
	<Greeter>
		<Title>redbeak</Title>
		<Consumer>
			{({ actions, douche }) => {
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
						<Switch
							onClick={actions.switchTone}
							status={douche}
						/>
					</>
				)
			}}
		</Consumer>
	</Greeter>
)

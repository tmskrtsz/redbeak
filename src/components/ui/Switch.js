import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

const SwitchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	label {
		height: 30px;
	}

	input[type='checkbox'] {
		-webkit-appearance: none;
		position: relative;
		background-color: ${ props => rgba(props.theme.color.text, 0.08) };
		border-radius: 50px;
		width: 70px;
		height: 100%;
		margin: 0 1.2em;
		padding: 3px;
		display: inline-block;
		transition: all ease 0.2s;
		outline: 0;
		cursor: pointer;

		:focus {
			box-shadow: 0 0 0 3px ${ props => rgba(props.theme.color.primary, 0.8) };
		}

		&::before {
			content: '';
			width: 20px;
			height: 20px;
			background-color: ${ props => rgba(props.theme.color.text, 0.5) };
			border-radius: 50px;
			position: absolute;
			left: 0;
			top: 50%;
			margin-left: 5px;
			transform: translateY(-50%);
			transition: all ease 0.2s;
		}

		&:checked {
			transition: all ease 0.2s;

			&::before {
				background-color: ${ props => props.theme.color.primary };
				left: 100%;
				margin-left: -5px;
				transform: translate(-100%, -50%);
				transition: all ease 0.2s;
			}
		}
	}
`

const Label = styled.span`
	text-transform: uppercase;
	font-size: 1.2rem;
	font-weight: 700;
	letter-spacing: 1px;
	color: ${ props => (!props.active ? rgba(props.theme.color.text, 0.4) : props => props.theme.color.primary) };
	cursor: default;
`

export default ({ onClick, status }) => (
	<SwitchContainer onChange={onClick}>
		<Label active={!status}>Normal</Label>
		<label htmlFor="doucheSwitch">
			<input
				type="checkbox"
				name="doucheSwitch"
				defaultChecked={status}
			/>
		</label>
		<Label active={status}>Douche</Label>
	</SwitchContainer>
)

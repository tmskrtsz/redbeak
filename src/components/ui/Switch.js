import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

const SwitchContainer = styled.div`
	display: flex;
	align-items: center;

	label {
		height: 32px;
	}

	input[type='checkbox'] {
		-webkit-appearance: none;
		position: relative;
		background-color: #eee;
		border-radius: 50px;
		width: 70px;
		height: 100%;
		margin: 0 1.2em;
		display: inline-block;
		transition: all ease 0.2s;
		outline: 0;
		cursor: pointer;

		&::before {
			content: '';
			width: 28px;
			height: 28px;
			background-color: grey;
			border-radius: 50px;
			position: absolute;
			left: 0;
			margin-top: 2px;
			margin-right: 2px;
			margin-left: 2px;
			transition: all ease 0.2s;
		}

		&:checked {
			transition: all ease 0.2s;

			&::before {
				background-color: ${ props => props.theme.color.primary };
				left: 54%;
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
	color: ${ props => (!props.active ? rgba(props.theme.color.text, 0.4) : '#000') };
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

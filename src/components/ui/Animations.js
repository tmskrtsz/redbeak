import { keyframes, css } from 'styled-components'
import { timingFunctions } from 'polished'

const Fade = keyframes`
	100% {
		opacity: 1;
	}
`

const FlyUpKey = keyframes`
	0% {
		opacity: 0;
		transform: translateY(10%);
	}

	30% {
		opacity: 0;
	}

	70% {
		transform: translateY(0);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
`

const FlyDownKey = keyframes`
		0% {
		transform: translateY(-20%);
	}

	30% {
	}

	70% {
		transform: translateY(0);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
`

const FlyUp = props => css`
	opacity: 0;
	animation: ${ FlyUpKey } ${ props.animTime || `1s` } ${ props.animDelay } ${ timingFunctions('easeOutQuad') } forwards;
`

const FlyDown = props => css`
	opacity: 0;
	animation: ${ FlyDownKey } ${ props.animTime || `1s` } ${ props.animDelay } ${ timingFunctions('easeOutQuad') } forwards;
`

const FadeIn = props => css`
	opacity: 0;
	animation: ${ Fade } ${ props.animTime || `1s` } ${ props.animDelay } ${ timingFunctions('easeOutQuad') } forwards;
`
export { FlyUp, FlyDown, FadeIn }

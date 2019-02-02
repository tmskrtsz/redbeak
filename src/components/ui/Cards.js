import styled from 'styled-components'
import { timingFunctions, rgba, darken, adjustHue } from 'polished'

const Cover = styled.div`
	width: 338px;
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 25%);
	transition: transform 0.25s ${ timingFunctions('easeInOutQuad') };
`

const Title = styled.h2`
	color: ${ props => props.theme.color.dark };
	margin: 0;
`

const Card = styled.div`
	background-image: linear-gradient(-150deg, ${ props => props.bg }, ${ props => adjustHue(50, props.bg) });
	border-radius: 4px;
	overflow: hidden;
	position: relative;
	padding: 2em;
	display: flex;
	flex-direction: column;
	min-height: 40rem;
	transition: all 0.25s ${ timingFunctions('easeInOutQuad') };

	:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 30px ${ props => rgba(darken(0.4, props.bg), 0.2) };

		${ Cover } {
			transform: translate(-50%, 0%);
		}
	}
`

export { Card, Title, Cover }

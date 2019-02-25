import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

import bgLight from '../images/bg_light.png'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

	html {
		font-size: 62.5%;
	}

	body {
		background-color: ${ props => props.theme.color.bg };
    background-image: ${ props => (!props.douche ? `url(${ bgLight })` : null) };
		font-family: ${ props => props.theme.text.fontFamily };
		font-size: ${ props => props.theme.text.baseFontSize };
		line-height: 1.6;
		padding-top: 10rem;
		color: ${ props => props.theme.color.text };
		transition: all 0.15s ease-in;
    overflow-x: hidden;
    /* overflow-y: ${ props => (props.menuActive ? 'hidden' : null) }; */ // Temporarily disabled
	}

	a {
		text-decoration: none;
    color: ${ props => props.theme.color.primary };
	}

	img {
		max-width: 100%;
		height: auto;
	}
`
export default GlobalStyle

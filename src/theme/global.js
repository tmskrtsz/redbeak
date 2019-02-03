import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 62.5%;
	}

	body {
		background-color: ${ props => props.theme.color.bg };
		font-family: ${ props => props.theme.text.fontFamily };
		font-size: ${ props => props.theme.text.baseFontSize };
		line-height: 1.6;
		padding-top: 10rem;
		color: ${ props => props.theme.color.text };
		transition: all 0.15s ease-in;
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

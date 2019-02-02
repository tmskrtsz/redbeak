import React from 'react'
// import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import theme from '../../theme/light'

export const Link = ({ children, color, ...other }) => (
	<AniLink
		{...other}
		cover
		direction="up"
		duration={1}
		bg={color || theme.color.primary}
	>
		{children}
	</AniLink>
)

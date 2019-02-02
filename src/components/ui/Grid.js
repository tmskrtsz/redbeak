import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
	max-width: ${ props => props.theme.breakpoints.lg };
	margin: 0 auto;
	${ props => props.anim };
`

const Column = styled.div`
	flex-direction: ${ props => props.direction };
	align-items: ${ props => props.align };
	justify-content: ${ props => props.justify };
	flex-direction: column;
	padding: ${ props => props.padding };
`

const Row = styled.div`
	display: flex;
	flex: 1;
	align-items: ${ props => props.align };
	justify-content: ${ props => props.justify };
	flex-wrap: wrap;
	flex-basis: ${ props => (props.grid ? props.grid * 100 + '%' : null) };
	margin-left: ${ props => -props.theme.space.gutter }em;
	margin-right: ${ props => -props.theme.space.gutter }em;

	${ Column } {
		flex-basis: ${ props => (props.grid ? props.grid * 100 + '%' : null) };
	}
`

const Inner = styled.div`
	margin: ${ props => props.theme.space.gutter }em;
`

Row.propTypes = {
	align: PropTypes.oneOf(['center', 'flex-end', 'flex-start']),
	justify: PropTypes.oneOf(['center', 'flex-end', 'flex-start']),
	grid: PropTypes.number
}

Column.propTypes = {
	direction: PropTypes.oneOf(['column', 'row']),
	align: PropTypes.oneOf(['center', 'flex-end', 'flex-start']),
	justify: PropTypes.oneOf(['center', 'flex-end', 'flex-start'])
}

export { Container, Row, Column, Inner }

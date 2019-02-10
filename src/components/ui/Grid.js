import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../theme/constant'

const Container = styled.div`
  max-width: ${ props => props.theme.breakpoints[props.size] || props.theme.breakpoints.lg };
  margin: 0 auto;
  ${ props => props.anim };

  @media (max-width: ${ props => props.theme.breakpoints.lg }) {
    padding: 0 2em;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: ${ props => props.dir || 'column' };
  align-items: ${ props => props.align };
  justify-content: ${ props => props.justify };
  padding: ${ props => props.padding };
  flex: 1;
  flex-shrink: 1;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: ${ props => `repeat(${ props.grid || '1' }, 1fr)` };
  grid-row-gap: ${ props => props.theme.space.gutter };
  grid-column-gap: ${ props => props.theme.space.gutter };

  ${ props =>
    props.columns &&
    css`
      grid-template-columns: ${ props.columns.map(col => `${ col }fr `) };
    ` }



  @media (max-width: ${ props => props.theme.breakpoints.sm }) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Wrapper = styled.div`
  width: 100%;
  background-color: ${ props => props.bg || props.theme.color.bannerBg };
  padding: 2em 0;
  ${ props => props.anim };
`

const Inner = styled.div`
  /* margin-left: ${ props => props.theme.space.gutter }em;
  margin-right: ${ props => props.theme.space.gutter }em; */
`
Container.propTypes = {
  size: PropTypes.oneOf(Object.keys(theme.breakpoints))
}

Row.propTypes = {
  align: PropTypes.oneOf(['center', 'flex-end', 'flex-start']),
  justify: PropTypes.oneOf(['center', 'flex-end', 'flex-start']),
  grid: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.number)
}

Column.propTypes = {
  dir: PropTypes.oneOf(['column', 'row']),
  align: PropTypes.oneOf(['center', 'flex-end', 'flex-start']),
  justify: PropTypes.oneOf(['center', 'flex-end', 'flex-start'])
}

export { Container, Row, Column, Inner, Wrapper }

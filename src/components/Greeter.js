import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

import { Consumer } from '../store'
import { Link } from './ui/TransitionLink'
import { Title, Subtitle } from './ui/Heading'
import { Button } from './ui/Buttons'
import { FlyUp } from './ui/Animations'

const Greeter = styled.div`
  max-width: 60%;
  padding: 5em 0;
  ${ props => props.anim };

  ${ Button } {
    margin-top: 1em;
  }

  small {
    color: ${ props => rgba(props.theme.color.text, 0.7) };
    font-size: 1.5rem;
    margin-left: 2em;
  }
`

export default () => (
  <Greeter anim={FlyUp}>
    <Title>redbeak</Title>
    <Consumer>
      {({ douche }) => {
        return (
          <>
            {douche ? (
              <Subtitle>
                A creative thinker, artist, and thought provoker. Tamás Kertész spends his days crafting artisan web
                experiences that bring people together on a broad scale. {` `}
                <Link
                  to="/about"
                  anchor={true}
                >
                  See his talents.
                </Link>
              </Subtitle>
            ) : (
              <Subtitle>
                I break a few eggs to design for the web. My name is Tamás Kertész and I'm a student of great design,
                check out my work or read more {` `}
                <Link
                  anchor={true}
                  to="/about"
                >
                  about me
                </Link>
                .
              </Subtitle>
            )}
          </>
        )
      }}
    </Consumer>
    <Button
      as="a"
      href="#"
    >
      Drop me a Line
    </Button>
    <small>
      or take a look at{' '}
      <Link
        anchor={true}
        to="#work"
      >
        my stuff
      </Link>
      .
    </small>
  </Greeter>
)

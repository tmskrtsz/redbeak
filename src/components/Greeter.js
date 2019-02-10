import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

import { Consumer } from '../store'
import { Link } from './ui/TransitionLink'
import { Title, Subtitle } from './ui/Heading'
import { Button } from './ui/Buttons'
import { FlyUp } from './ui/Animations'
import { Link as ScrollLink } from 'react-scroll'

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
    margin-left: 1.5em;
  }

  @media (max-width: 980px) {
    max-width: 80%;
  }

  @media (max-width: ${ props => props.theme.breakpoints.sm }) {
    max-width: 100%;
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
            <Button
              as={ScrollLink}
              to="contact"
              href="#contact"
              smooth={true}
              duration={700}
              spy={true}
              hashSpy={true}
            >
              {!douche ? 'Drop Me a Line' : 'Submit Your Inquiry'}
            </Button>
            <small>
              or {!douche ? 'take a look at ' : 'marvel '}
              <ScrollLink
                to="work"
                anchor={true}
                smooth={true}
                spy={true}
                duration={700}
                href="#work"
                offset={50}
                hashSpy={true}
              >
                {!douche ? 'my stuff' : 'his art'}
              </ScrollLink>
              .
            </small>
          </>
        )
      }}
    </Consumer>
  </Greeter>
)

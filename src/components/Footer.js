import React from 'react'
import styled from 'styled-components'
import { Consumer } from '../store'

import { Wrapper, Container, Row, Column } from './ui/Grid'

const FooterStyle = styled(Wrapper)``

const Footer = () => (
  <FooterStyle as="footer">
    <Container>
      <Row>
        <Consumer>
          {({ douche }) =>
            douche ? (
              <Column align="center">Artisanally handcrafted with lots and lots of ❤️ and ☕</Column>
            ) : (
              <Column align="center">Developed in sunny Finland</Column>
            )
          }
        </Consumer>
      </Row>
      <Row>
        <Column align="center">
          <p>
            Made with{' '}
            <a
              href="https://github.com/tmskrtsz/redbeak"
              target="_blank"
              rel="nofollow"
            >
              Gatsby
            </a>
          </p>
        </Column>
      </Row>
    </Container>
  </FooterStyle>
)

export default Footer

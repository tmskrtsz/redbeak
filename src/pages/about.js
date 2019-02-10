import React from 'react'
import { css } from 'styled-components'

import Seo from '../components/seo'
import { Consumer } from '../store'
import { Wrapper, Container, Row, Column, Inner } from '../components/ui/Grid'
import { SectionHeading } from '../components/ui/Heading'
import ContactAlt from '../components/ContactAlt'
import Footer from '../components/Footer'

const Bio = css`
  line-height: 1.9;
  font-size: 2.1rem;
`

export default () => (
  <>
    <Seo
      title="About"
      keywords={['front-end', 'react', 'gatsby', 'css-in-js']}
    />
    <Wrapper>
      <Container>
        <Consumer>
          {({ douche }) =>
            douche ? <SectionHeading>About Him</SectionHeading> : <SectionHeading>About Me</SectionHeading>
          }
        </Consumer>
        <Row
          grid={2}
          columns={[1, 2]}
        >
          <Column>
            <h2>Profile</h2>
          </Column>
          <Column>
            <Consumer>
              {({ douche }) =>
                douche ? (
                  <>
                    <p css={Bio}>
                      Tamás Kertész is a visionary storyteller in the medium of web design and web development. His
                      creative passion for pixel perfect design is only surpassed by a strong will to bring those to
                      life. As a result, he enjoys working in JavaScript land and can often be found bouncing between
                      Sketch and Visual Studio Code, that is, if not pondering the true meaning of life.
                    </p>
                    <p css={Bio}>
                      As of late, he is busy crafting{' '}
                      <a
                        href="https://www.merriam-webster.com/dictionary/artisan"
                        target="_blank"
                      >
                        artisan
                      </a>{' '}
                      web experiences for{' '}
                      <a
                        href="http://www.investabit.com"
                        target="_blank"
                      >
                        Investabit
                      </a>{' '}
                      and{' '}
                      <a
                        href="http://www.ctr.com"
                        target="_blank"
                      >
                        CTR Capital
                      </a>
                      . He is also fortunate to work alongside the fine people at{' '}
                      <a
                        href="http://www.anders.fi"
                        target="_blank"
                      >
                        Anders Innovations
                      </a>
                      .
                    </p>
                  </>
                ) : (
                  <>
                    <p css={Bio}>
                      Hey 👋 how's it going? I'm a Front-End developer & designer and I enjoy taking great ideas from
                      concept to reality. To that effect, I've been crushing it at{' '}
                      <a
                        href="http://www.tamk.fi"
                        target="_blank"
                      >
                        TAMK
                      </a>
                      , majoring in Interactive Media and graduating roundabout in Summer 2019. Lately, I've had a blast
                      writing React applications and creating static websites with{' '}
                      <a
                        href="http://www.gatsbyjs.org"
                        target="_blank"
                      >
                        Gatsby
                      </a>
                      . JS and CSS-in-JS is my jam and I'm always one to keeping up with development trends.
                    </p>

                    <p css={Bio}>
                      I'm currently working on visual design and React apps @{' '}
                      <a
                        href="http://www.investabit.com"
                        target="_blank"
                      >
                        Investabit
                      </a>{' '}
                      and{' '}
                      <a
                        href="http://www.ctr.com"
                        target="_blank"
                      >
                        CTR Capital
                      </a>
                      . Other times I'm doing front-end development at{' '}
                      <a
                        href="http://www.anders.fi"
                        target="_blank"
                      >
                        Anders Innovations
                      </a>
                      .
                    </p>
                  </>
                )
              }
            </Consumer>
            <p>
              Check out my{' '}
              <a
                href="https://dribbble.com/redbeak"
                target="_blank"
              >
                Dribbble
              </a>{' '}
              and{' '}
              <a
                href="https://www.linkedin.com/in/tam%C3%A1s-kert%C3%A9sz/"
                target="_blank"
              >
                Linkedin
              </a>
              .
            </p>
          </Column>
        </Row>
      </Container>
    </Wrapper>
    <Container>
      <SectionHeading>Skills</SectionHeading>
      <Row
        grid={2}
        columns={[1, 1.3]}
      >
        <Column>
          <h2>Development</h2>
        </Column>
        <Column>
          <p css={Bio}>
            HTML, CSS, Sass, JavaScript, React, Styled Components, Webpack, docker-compose, Node.js (some), Python
            (some), Bootstrap, Responsive Design
          </p>
        </Column>
      </Row>
      <Row
        grid={2}
        columns={[1, 1.3]}
      >
        <Column>
          <h2>Design</h2>
        </Column>
        <Column>
          <p css={Bio}>Affinity Designer, Sketch, Adobe Xd, InvisionApp, Illustrator, Photoshop, Figma, Framer</p>
        </Column>
      </Row>
      <Row
        grid={2}
        columns={[1, 1.3]}
      >
        <Column>
          <h2>Other Tools</h2>
        </Column>
        <Column>
          <p css={Bio}>Git, Netlify, Webpack, Create-React-App, Kirby CMS, WordPress, Headless CMS, GraphQL</p>
        </Column>
      </Row>
      <ContactAlt />
    </Container>
    <Footer />
  </>
)

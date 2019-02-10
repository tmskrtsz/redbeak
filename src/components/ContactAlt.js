import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import { Consumer } from '../store'
import { Container, Row, Column } from './ui/Grid'
import { Input, InputGroup, TextArea } from './ui/Input'
import { Button } from './ui/Buttons'
import { SectionHeading } from './ui/Heading'

// Netlify forms is not working because of the site not
// loading with javascript disabled 💩
// Formspree is a workaround

const Contact = styled.div`
  margin-bottom: 5em;

  p {
    background-color: ${ props => rgba(props.theme.color.text, 0.06) };
    padding: 1.2em;
    text-align: center;
    box-shadow: 0 0 0 10px ${ props => rgba(props.theme.color.text, 0.025) };
  }

  span {
    font-size: 1.5rem;
    margin-left: 0.5em;
    color: ${ props => rgba(props.theme.color.text, 0.7) };
  }
`

export default () => (
  <Container size="md">
    <Consumer>
      {({ douche }) =>
        douche ? (
          <SectionHeading name="contact">Inquiries</SectionHeading>
        ) : (
          <SectionHeading name="contact">Contact</SectionHeading>
        )
      }
    </Consumer>
    <Contact>
      <p>
        I'm on the lookout for any kind of meaningful work. If you have something in mind just want to say hi, drop me a
        line.
      </p>
      <form
        name="contact"
        method="POST"
        action="https://formspree.io/lll@tuta.io"
      >
        {/* <input type="hidden" name="_next" value="https://mysite.com/thanks.html"/> */}
        <InputGroup grid={2}>
          <Column>
            <label htmlFor="email">Email Address</label>
            <Input
              required={true}
              type="email"
              name="email"
              placeholder="john@doe.com"
            />
          </Column>
          <Column>
            <label htmlFor="name">Name</label>
            <Input
              required={true}
              type="text"
              name="name"
              placeholder="Your name"
            />
          </Column>
        </InputGroup>
        <InputGroup grid={1}>
          <Column>
            <label htmlFor="message">Message</label>
            <TextArea
              required={true}
              col="20"
              name="message"
              placeholder="Your deepest secrets"
            />
          </Column>
        </InputGroup>
        <Row grid={2}>
          <Column align="flex-start">
            <Button type="submit">Send</Button>
          </Column>
          <Column
            align="flex-end"
            justify="center"
          >
            <span>
              Or <a href="mailto:tamas@tuta.io">email</a> me. (mailto)
            </span>
          </Column>
        </Row>
      </form>
    </Contact>
  </Container>
)

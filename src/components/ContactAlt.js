import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import { Consumer } from '../store'
import { Container, Column } from './ui/Grid'
import { Input, InputGroup, TextArea } from './ui/Input'
import { Button } from './ui/Buttons'
import { SectionHeading } from './ui/Heading'

// Netlify forms is not working because of the site not
// loading with javascript disabled 💩
// Formspree is a workaround

const Contact = styled.div`
  p {
    background-color: ${ props => rgba(props.theme.color.text, 0.05) };
    padding: 1.2em;
    text-align: center;
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
        <InputGroup>
          <Column>
            <label htmlFor="email">Email Address</label>
            <Input
              type="email"
              name="email"
              placeholder="john@doe.com"
            />
          </Column>
          <Column>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              name="name"
              placeholder="Your name"
            />
          </Column>
        </InputGroup>
        <InputGroup>
          <Column>
            <label htmlFor="message">Message</label>
            <TextArea
              col="20"
              name="message"
              placeholder="Your deepest secrets"
            />
          </Column>
        </InputGroup>
        <InputGroup>
          <Button type="submit">Send</Button>
        </InputGroup>
      </form>
    </Contact>
  </Container>
)

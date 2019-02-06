import React from 'react'
import { Container, Row, Column, Inner } from './ui/Grid'
import { SectionHeading } from './ui/Heading'

export default () => (
  <Container>
    <SectionHeading name="contact">Contact</SectionHeading>
    <Row>
      <Column>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p>
            <label>
              Name <input
                type="text"
                name="name"
                placeholder="optional"
              />
            </label>
          </p>
          <p>
            <label>
              Email <input
                type="email"
                name="email"
              />
            </label>
          </p>
          <p>
            <label>Message</label>
            <textarea col="20" />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Column>
    </Row>
  </Container>
)

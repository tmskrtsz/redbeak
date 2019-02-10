import React, { Component } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import { Consumer } from '../store'
import { Container, Column } from './ui/Grid'
import { Input, InputGroup, TextArea } from './ui/Input'
import { Button } from './ui/Buttons'
import { SectionHeading } from './ui/Heading'
import Toast from './ui/Toast'

const Contact = styled.div`
  p {
    background-color: ${ props => rgba(props.theme.color.text, 0.05) };
    padding: 1.2em;
    text-align: center;
  }
`

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      content: {
        name: '',
        email: '',
        message: ''
      },
      status: ''
    }
  }

  handleChange = e => {
    this.setState({
      content: {
        ...this.state.content,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    if (Object.values(this.state.content).includes('')) {
      this.setState({ status: 'empty' })
      return
    }
    window
      .fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state
        })
      })
      .then(() => this.setState({ status: 'submitted' }))
      .catch(() => this.setState({ status: 'error' }))
  }
  render () {
    const { status } = this.state
    return (
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
            I'm on the lookout for any kind of meaningful work. If you have something in mind just want to say hi, drop
            me a line.
          </p>
          {status === 'empty' && <Toast
            msg="💩 Please fill out the from"
            type="danger"
          />}
          {status === 'submitted' && <Toast
            msg="🙌 Thanks, will be in touch shortly!"
            type="success"
          />}
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <InputGroup>
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />
              <div hidden>
                <input
                  name="bot-field"
                  onChange={this.handleChange}
                />
              </div>
              <Column>
                <label htmlFor="email">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  onChange={this.handleChange}
                />
              </Column>
              <Column>
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
  }
}

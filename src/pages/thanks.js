import React from 'react'
import styled from 'styled-components'

import { Container, Row, Column } from '../components/ui/Grid'
import { Link } from '../components/ui/TransitionLink'
import { Button } from '../components/ui/Buttons'

const ContactRow = styled(Row)`
  min-height: 60vh;
`

const Thank = () => (
  <Container>
    <ContactRow>
      <Column
        justify="center"
        align="center"
      >
        <p>🙌 Thanks, will be in touch shortly!</p>
        <Link to="/">Back Home</Link>
      </Column>
    </ContactRow>
  </Container>
)

// Netlify forms is not working because of the site not
// loading with javascript disabled 💩
// Formspree is a workaround

export default Thank

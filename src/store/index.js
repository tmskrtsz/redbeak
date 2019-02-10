import React, { Component } from 'react'
import lightTheme from '../theme/light'
import darkTheme from '../theme/dark'

const { Consumer, Provider } = React.createContext()

class Store extends Component {
  constructor (props) {
    super(props)

    this.state = {
      douche: false,
      theme: null,
      actions: {
        switchTone: this.switchTone
      }
    }
  }

  switchTone = async () => {
    await this.setState({
      douche: !this.state.douche
    })

    if (!this.state.douche) {
      await this.setState({ theme: lightTheme })
    } else {
      await this.setState({ theme: darkTheme })
    }
  }

  componentDidMount () {
    if (!this.state.theme) {
      this.setState({ theme: lightTheme })
    }
  }

  render () {
    const { children } = this.props
    if (!this.state.theme) return null
    return <Provider value={this.state}>{children}</Provider>
  }
}

export { Store as default, Consumer }

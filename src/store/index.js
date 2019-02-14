import React, { Component } from 'react'
import lightTheme from '../theme/light'
import darkTheme from '../theme/dark'

const { Consumer, Provider } = React.createContext()

class Store extends Component {
  constructor (props) {
    super(props)

    this.state = {
      douche: false,
      menuActive: false,
      theme: null,
      actions: {
        switchTone: this.switchTone,
        handleMenuClick: this.handleMenuClick
      }
    }
  }

  switchTone = async () => {
    await this.setState({
      douche: !this.state.douche
    })

    if (!this.state.douche) {
      await this.setState({ theme: lightTheme })
      window.localStorage.setItem('douche', 'false')
    } else {
      await this.setState({ theme: darkTheme })
      window.localStorage.setItem('douche', 'true')
    }
  }

  handleMenuClick = () => this.setState({ menuActive: !this.state.menuActive })

  async componentDidMount () {
    const currentState = JSON.parse(window.localStorage.getItem('douche'))

    if (currentState === null) {
      window.localStorage.setItem('douche', 'false')
      await this.setState({ theme: lightTheme })
    } else {
      await this.setState({
        douche: currentState,
        theme: currentState ? darkTheme : lightTheme
      })
    }
  }

  render () {
    const { children } = this.props
    if (!this.state.theme) return null
    return <Provider value={this.state}>{children}</Provider>
  }
}

export { Store as default, Consumer }

import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext()

class Store extends Component {
	constructor (props) {
		super(props)

		this.state = {
			douche: false,
			actions: {
				switchTone: this.switchTone
			}
		}
	}

	switchTone = () => {
		this.setState({ douche: !this.state.douche })
	}

	render () {
		const { children } = this.props
		return <Provider value={this.state}>{children}</Provider>
	}
}

export { Store as default, Consumer }

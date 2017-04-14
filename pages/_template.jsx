import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hook from '../components/Hook'
import Top from '../components/Top'
import '../stylus/style.styl'


module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <main>
        <Header />
        <div className="wrapper" className="fade-in">
          {this.props.children}
        </div>
        <Hook />
        <Top />
        <Footer />
      </main>
    )
  },
})

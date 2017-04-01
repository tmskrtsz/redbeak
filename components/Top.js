import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  render () {
    return (
     	<section className="top">
             <a className="button" href="#top">Back Top</a>
        </section>
    )
  }
});
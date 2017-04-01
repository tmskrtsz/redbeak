import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  render () {
    return (
     	<section id="hook" className="hook">
            <div className="vertical-text-left">Vertical Text</div>
            <div className="hook-inner">
                <h2>Seriously, get in touch.</h2>
                <p>I'm on the lookout for any kind of meaningful work. If you have something in mind or just want to say hi, drop me a line at: <a href="mailto:tamas.kertesz@cult.tamk.fi">tamas.kertesz@cult.tamk.fi</a></p>
            </div>
        </section>
    )
  }
});
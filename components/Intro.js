import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  render () {
    return (
        <section className="intro ">
            <div className="vertical-text" style={{right: '-30%', top: '40%'}}>Trendy Intro</div>
            <div className="flying-balls">
                <span className="ball-1"></span>
                <span className="ball-2"></span>
                <span className="ball-3"></span>
                <span className="ball-4"></span>
                <span className="ball-5"></span>
            </div>
            <div className="copy-logo">
                <h1>redbeak</h1>
            </div>
            <p className="copy">I break a few eggs to design for the web. My name is Tamás Kertész and I'm a student of great design, check out my work or read more <Link to={prefixLink('/about/')}>about me</Link>.</p>
            <div className="copy-footer">
                <a className="button button-cta" href="#hook" alt="A man's gotta eat">Drop me a Line</a><span>or take a look at <a href="#stuff">my stuff</a>.</span>
            </div>
        </section>
    )
  }
});
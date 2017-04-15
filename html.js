import React from 'react'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'


const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/style.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <script src="https://use.typekit.net/lvy7pso.js"></script>
          <script>{'try{Typekit.load({ async: true });}catch(e){}'}</script>
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} ></div>
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})

import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Intro from '../components/Intro'
import Title from '../components/Title'
import GalleryItem from '../components/GalleryItem'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle + 'I break a few eggs to design for the web'}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Intro />
        <Title 
          titleId="stuff"
          titleName="works"
        />
        <section className="gallery">
          <GalleryItem slug="jobfairy" />
          <GalleryItem slug="dions" />
          <GalleryItem slug="campus-compass" />
          <GalleryItem slug="hiilinielu-design" />
          <GalleryItem slug="iocoin-2" />
          <GalleryItem slug="iocoin-1" />
        </section>
      </div>
    )
  }
}

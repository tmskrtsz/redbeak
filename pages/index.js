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
    let pages = [
      'iocoin-1',
      'iocoin-2',
      'hiilinielu-design',
      'campus-compass',
      'dions',
      'jobfairy'
    ]
    .reverse()

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
          {
            pages.map(function(slug, index){
              return <GalleryItem key={index} slug={slug} />
            })
          }
        </section>
      </div>
    )
  }
}

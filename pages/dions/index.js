import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Dions extends React.Component{
    render(){
        return (
        <article>
          <Helmet
            title={config.siteTitle + 'DIONs Infographic'}
            meta={[
                {"name": "description", "content": "I/O Digital Foundation's DIONs technology infographic"},
                {"name": "keywords", "content": "i/o digital, i/o coin, infographic, illustration, dions"},
            ]}
          />
          <section className="work">
            <div className="work__title">
              <h1>DIONs Infographic</h1><span className="work__meta--date">November - December 2016</span>
            </div>
            <div className="work__intro">
              <div className="work__desc">
                <h6>Description</h6>
                <p>I took up the challenge to illustrate and design the layout of I/O Digital's latest announcement with regards to their roadmap and plans. The complexity of the technology had to be translated into a friendly eye catching piece that can be shared online. I relied on metaphors and abstract images to guide the reader and help make sense of each block of information. View the entire image (it's big) by clicking on the banner.</p>
              </div>
              <div className="work__meta">
                <div className="work__meta--item">
                  <h6>Client</h6><span>I/O Digital Foundation</span>
                </div>
                <div className="work__meta--item">
                  <h6>Roles</h6><span>Illustration, Information Architecture, Branding</span>
                </div>
              </div>
            </div>
            <div className="work__full"><a href="dions.jpg" target="_blank"><img src="banner.jpg" alt="DIONs Infographic banner" /></a>
              <div className="work__tags"><span>Illustrator</span></div>
            </div>
            <div className="work__full">
              <p>You can learn more about <a href="http://www.iodigital.io/" target="_blank">I/O Digital</a> and <a href="http://www.iocoin.io/" target="_blank">I/O Coin</a> as well as read the bitcointalk thread <a href="https://bitcointalk.org/index.php?topic=695855.0" target="_blank">here</a>.</p>
            </div>
          </section>
          <div className="work__nav">
            <Link 
              className="work__nav--prev" 
              to={prefixLink("/campus-compass/")}>
              <h6>Previous Case</h6>
              <span>Campus Compass</span>
            </Link>
            <Link 
              className="work__nav--next" 
              to={prefixLink("/jobfairy/")}>
              <h6>Next Case</h6>
              <span>jobfairy</span>
            </Link>
          </div>
        </article>
     )
  }
}
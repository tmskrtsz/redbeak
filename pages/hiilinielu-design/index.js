import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Hiilinielu extends React.Component{
    render(){
        return (
        <article>
          <Helmet
            title={config.siteTitle + 'Hiilinielu Design'}
            meta={[
                {"name": "description", "content": "Web design, development and illustration for the project"},
                {"name": "keywords", "content": "carbon sink, tamk, lamk, design forum finland, illustration, wordpress development, web design"},
            ]}
          />
          <section className="work">
            <div className="work__title">
              <h1>Hiilinielu Design Studio</h1><span className="work__meta--date">February - April 2016</span>
            </div>
            <div className="work__intro">
              <div className="work__desc">
                <h6>Description</h6>
                <p>A joint project venture between a handful of public and private institutions and companies needed a website redesign and branding. TAMK, LAMK, Design Forum Finland and other forestry companies launched the project backed with EU funds to search for new uses for products made from wood. The results are hoped to spur the number of jobs in the research and manufacturing sector. It is also a very good opportunity for students of TAMK and LAMK to sink their teeth into real world problem solving and engineering. </p>
              </div>
              <div className="work__meta">
                <div className="work__meta--item">
                  <h6>Client</h6><span>Hiilinielu Design Studio</span>
                </div>
                <div className="work__meta--item">
                  <h6>Roles</h6><span>Web Design, Prototyping, WordPress Development, Illustration</span>
                </div>
              </div>
            </div>
            <div className="work__full"><img src="hiilinielu-design.jpg" alt="Hiilinielu Design Studio website" />
              <div className="work__tags"><span>HTML</span> <span>Stylus</span> <span>JavaScript</span> <span>WordPress</span> <span>Illustrator</span> <span>Photoshop</span></div>
            </div>
            <div className="work__full">
              <h6>Challenges</h6>
              <p>Immediately, the first large hurdle to tackle was the primary task of illustrating and explaining what carbon sink means in a practical way. Of course, to engineers and people with expertise in the field it is very clear what the concepts means. For the laymen, it is a mystery. As the site is aimed for the general public, I had to think of a way to capture the meaning into an illustration and at the same time construct a website around it. </p>
            </div>
            <hr />
            <div className="work__half">
              <div className="work--item">
                <video width="100%" autoPlay loop>
                  <source src="video1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="work--item">
                <video width="100%" autoPlay loop>
                  <source src="video2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="work__half">
              <div className="work--item">
                <h6>First Draft</h6>
                <p>I set about illustrating the concept of carbon sink, however, I was not satisfied with the results I was getting. I came up with a compromise that grabs the attention of the user while retaining a thematic sense to the overall picture. This draft was rejected due to the imagery of sunset. More precisely what it might mean metaphorically, an end or death. </p>
              </div>
              <div className="work--item">
                <h6>Approved Concept</h6>
                <p>The logical answer was to reverse the approach, emphasize the sunrise. This challenge forced me to iterate and improve. The difference is night and day between the first draft and the final result. Ultimately, a much better execution.</p>
              </div>
            </div>
            <hr />
            <div className="work__full">
              <h6>Development</h6>
              <p>I sketched out the structure and components using my pug/stylus boilerplate. Then I went ahead and developed the theme for WordPress and made heavy use of the Advanced Custom Fields plugin for creating the half screen layout on the fly from the admin panel. My humble initiative to move on with the times and use flexbox in lieu of floats was squished when browser support came into question. I had to rewrite all of the layout components so that browsers from 5 to 6 years ago would be able to render the website.</p>
            </div>
            <div className="work__full"><img src="shot.jpg" alt="Full screenshot of the website" /></div>
            <div className="work__half">
              <div className="work--item"><img src="shot2.jpg" alt="Various sections" /></div>
              <div className="work--item"><img src="shot3.jpg" alt="Website footer" /></div>
            </div>
            <div className="work__half">
              <div className="work--item"><img src="shot4.jpg" alt="Blog screenshot" /></div>
              <div className="work--item"><img src="shot5.jpg" alt="Rejected logo design" /></div>
            </div>
            <div className="work__full"><img src="shot6.jpg" alt="Forest" /></div>
          </section>
          <div className="work__nav">
            <Link 
              className="work__nav--prev" 
              to={prefixLink("/iocoin-2/")}>
              <h6>Previous Case</h6>
              <span>I/O Coin Wallet MK 2</span>
            </Link>
            <Link 
              className="work__nav--next" 
              to={prefixLink("/campus-compass/")}>
              <h6>Next Case</h6>
              <span>Campus Compass</span>
            </Link>
          </div>
        </article>
     )
  }
}
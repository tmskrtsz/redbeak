import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Iocoin2 extends React.Component{
    render(){
        return (
        <article>
          <Helmet
            title={config.siteTitle + 'I/O Coin Wallet MK2'}
            meta={[
                {"name": "description", "content": "Second iteration of the popular I/O Coin wallet"},
                {"name": "keywords", "content": "i/o coin, wallet, design"},
            ]}
          />
          <section className="work">
            <div className="work__title">
              <h1>I/O Coin Wallet MK2</h1><span className="work__meta--date">2015 - Present</span>
            </div>
            <div className="work__intro">
              <div className="work__desc">
                <h6>Description</h6>
                <p>The first iteration of the wallet was the testing ground and the proof of the concept. The second version builds on what worked in the previous one and it is growing into a mature product. As I/O Coin is developing its blockchain technology with a slew of new features, pace has to be kept on the wallet front. I learned a tremendous amount while working on the previous wallet, this clean slate offers the opportunity to expand my creativity and curiosity to experiment with the UI and UX.</p>
              </div>
              <div className="work__meta">
                <div className="work__meta--item">
                  <h6>Client</h6><span>I/O Digital Foundation</span>
                </div>
                <div className="work__meta--item">
                  <h6>Roles</h6><span>UI and UX design, Wireframing, Prototyping, Development</span>
                </div>
              </div>
            </div>
            <div className="work__full"><img src="iocoin-2.jpg" alt="Second version of the I/O Coin wallet" />
              <div className="work__tags"><span>HTML</span> <span>Stylus</span> <span>JavaScript</span> <span>Mithril.js</span> <span>Electron</span> <span>Gulp</span></div>
            </div>
            <div className="work__full">
              <h6>Overview</h6>
              <p>With lessons learned while developing the first wallet, I set off to sketch out a full picture of the new iteration before comitting the first line of code. I kept in mind a few guiding thoughts throughout the concept phase which my designs followed in order to deliver on the high expectations. Make it <em>modular</em> and <em>plan everything</em>.</p>
            </div>
            <hr />
            <div className="work__full"><img src="wireframes.png" alt="Wallet wireframes" /></div>
            <div className="work__half">
              <div className="work--item">
                <div className="work--item_icon"><img src="mega.svg" alt="Wallet wireframes" /></div>
                <h6>Feedback Research</h6>
                <p>I researched the community feedback given to the previous iteration, as well as what other projects were building. The redesign has to be be a modern answer to the competition while implementing new innovative features.</p>
              </div>
              <div className="work--item">
                <div className="work--item_icon"><img src="wireframes.svg" alt="Wallet wireframes" /></div>
                <h6>Wireframing</h6>
                <p>Challenging yet fun, wireframing can feel like a drag at times, however, an indispensable step. It ensures that the project doesn't stall during development and sets up specific and well defined goals.</p>
              </div>
            </div>
            <div className="work__half">
              <div className="work--item">
                <div className="work--item_icon"><img src="git.svg" alt="Wallet wireframes" /></div>
                <h6>Development</h6>
                <p>The first wallet relied on pure JavaScript that even in 2014 seemed like a dirty idea. To the surprise of no one, the code quickly became sprawling and unmaintainable. For one page web apps, reinventing the wheel is wasting time. In the spirit of upping our game we switched to a React-like framework called Mithril.js. On the CSS side, we went with Stylus for better code management. Finally, we ditched Node-Webkit in favour of GitHub's Electron.</p>
              </div>
              <div className="work--item">
                <div className="work--item_icon"><img src="result.svg" alt="Wallet wireframes" /></div>
                <h6>Results</h6>
                <p>A clear step up in terms of work quality. The structured approach we employed during each development cycle kept the eventual goal in view. That said, work continues to deliver on the promises made to the community with regards to the implementation of all the promised features and more.</p>
              </div>
            </div>
            <hr />
            <div className="work__full">
              <h6>At present</h6>
              <p>This is still a project in progress. A lot has been changed, rewritten and scrapped since I started the initial design drafts. And a lot will change until the first version is released. Furthermore, it is not feature complete and is in early beta stage. At the moment, it is being tested internally and eventually will be released for the community to give feedback and to test it further. </p>
            </div>
            <div className="work__full"><img src="shot1.jpg" alt="Choice shot of the app" /></div>
            <div className="work__half">
              <div className="work--item"><img src="shot2.png" alt="A second view of the app" /></div>
              <div className="work--item"><img src="shot3.png" alt="Here's a third view" /></div>
            </div>
          </section>
          <div className="work__nav">
            <Link 
              className="work__nav--prev" 
              to={prefixLink("/iocoin-1/")}>
              <h6>Previous Case</h6>
              <span>I/O Coin Wallet MK 1</span>
            </Link>
            <Link 
              className="work__nav--next" 
              to={prefixLink("/hiilinielu-design/")}>
              <h6>Next Case</h6>
              <span>Hiilinielu Design Studio</span>
            </Link>
          </div>
        </article>
    )
  }
}
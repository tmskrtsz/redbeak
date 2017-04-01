import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Iocoin1 extends React.Component{
    render(){
        return (
        <article>
           <Helmet
            title={config.siteTitle + 'I/O Coin Wallet MK1'}
            meta={[
                {"name": "description", "content": "An innovative, secure and user friendly cryptocurrency"},
                {"name": "keywords", "content": "i/o coin, wallet, design"},
            ]}
          />
          <section className="work">
            <div className="work__title">
              <h1>I/O Coin Wallet MK1</h1><span className="work__meta--date">2014 - 2015</span>
            </div>
            <div className="work__intro">
              <div className="work__desc">
                <h6>Description</h6>
                <p>I/O Coin is a digital currency much like Bitcoin. It is not Bitcoin, however, therefore it is known as an "alt coin". Unlike Bitcoin, it brings new features to the table by building on the solid foundation of Bitcoin and improving upon it. Features, such as aliases and many others existing and planned, try to bring cryptocurrencies into the public's eye and try to broaden the use for the blockchain technology.</p>
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
            <div className="vertical-text">Hipster Text</div>
            <div className="work__full"><img src="iocoin-1.jpg" alt="The first version of the I/O Coin Wallet" />
              <div className="work__tags"><span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Node-Webkit</span></div>
            </div>
            <div className="work__full">
              <h6>Overview</h6>
              <p>I/O Coin is an alt-coin and thereby inherited Bitcoin's Qt Wallet GUI. This project was about setting I/O Coin apart from hundreds of other alt-coins and one of the first steps was to bring personality and brand to the fore. We made use of the latest JavaScript technologies and re-imagined the wallet from the ground up.</p>
            </div>
            <hr />
            <div className="work__half">
              <div className="work--item">
                <h6>Lift Off</h6>
                <p>The end result of the new wallet has to mirror the functionality that is found in the regular Qt version. This includes sending and receiving coins, address book, transaction history, settings and an I/O Coin specific feature that integrates a semi-decentralised name server. The latter of which should allow for registering or binding a string to a 34 character I/O Coin addresses.</p>
              </div>
              <div className="work--item"><img src="bitcoin-qt.jpg" alt="Bitcoin Qt wallet" /></div>
            </div>
            <div className="work__half">
              <div className="work--item"><img src="app-flow.png" alt="Application flow" /></div>
              <div className="work--item">
                <h6>Approach</h6>
                <p>With frameworks such as React and Vue, it is counterproductive to write single page web apps in pure JavaScript. In 2014 we didn't think we needed it; in 2017 we can't do without it. Regardless, the process is straight forward, connect with the daemon's api and push the updates to the front-end. It couldn't have been any simpler and by going this route, we ensured cross-platform compatibility without any unnecessary extra fiddling. Writing desktop applications using plain HTML/CSS/JS removes a lot of traditional constraints. For instance, CSS allows for a higher level of app design to come to life.</p>
              </div>
            </div>
            <hr />
            <div className="work__full">
              <h6>Results</h6>
              <p>We went into this project with a chance to improve on the already existing solution. Apart from creating a sleeker interface, we managed to lay down the groundwork for the I/O Digital brand while upping the expectations for alt-coins as a whole. Development wise, it was a great foray into single page web apps on the desktop. Looking back, we could have made our lives easier by making use of frameworks, task runners and CSS preprocessors. </p>
            </div><img className="work__image" src="shot.jpg" alt="Choice shots of the app" />
          </section>
          <div className="work__nav">
            <Link 
              className="work__nav--next" 
              to={prefixLink("/iocoin-2/")}>
              <h6>Next Case</h6>
              <span>I/O Coin Wallet MK 2</span>
            </Link>
          </div>
        </article>
    )
  }
}
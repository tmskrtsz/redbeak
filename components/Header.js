import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: false,
      pageBody: ''
    }
  
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount(){
    this.pageBody = document.querySelector("body")
  }

  toggleMenu(e) {
    e.preventDefault();

    let navState = !this.state.active
    
    this.setState({ active: navState });

    (!this.state.active) ? this.pageBody.style.overflow = "hidden" : this.pageBody.style.overflow = "auto"
  }

  render () {
    /*let nav
    
    if (this.state.active) {
      nav = (
        <nav key={nav} onClick={this.toggleMenu} className="fullscreen-cause-why-not">
          <div className="menu--title" aria-label="Navigation Menu">
            <div className="fries">Fries with that order?</div>
            <div className="durger">Juicy cheese burger</div>
            <div className="drink">How bout a drink?</div>
          </div>
          <ul>
            <li>
              <Link to={prefixLink('/')}>Home</Link>
            </li>
            <li>
              <Link to={prefixLink('/about/')}>About</Link>
            </li>
          </ul>
          <a className="message" href="mailto:tamas.kertesz@cult.tamk.fi?subject=Your navigation sucks" alt="Fite me">Fullscreen navigation menu for two links, seriously?</a>
        </nav>
    )
    }   */
    return (
     	<header>
          <Link
            className="logo"
            to={prefixLink('/')}
            alt="redbeak.net"
          ></Link>
          <a 
            className={(this.state.active) ? 'menu menu--active' : 'menu'}
            href="#" 
            alt="It's a menu"
            onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </a>
           <nav onClick={this.toggleMenu} className={(!this.state.active) ? 'fullscreen-cause-why-not' : 'fullscreen-cause-why-not nav--expanded'}>
             { this.state.active && 
              
              <div className="nav--inner">
                <div className="menu--title" aria-label="Navigation Menu">
                  <div className="fries">Fries with that order?</div>
                  <div className="durger">Juicy cheese burger</div>
                  <div className="drink">How bout a drink?</div>
                </div>
                <ul>
                  <li>
                    <Link to={prefixLink('/')}>Home</Link>
                  </li>
                  <li>
                  < Link to={prefixLink('/about/')}>About</Link>
                  </li>
                </ul>
                <a className="message" href="mailto:tamas.kertesz@cult.tamk.fi?subject=Your navigation sucks" alt="Fite me">Fullscreen navigation menu for two links, seriously?</a>
              </div>
             }
           </nav>
        </header>
    )
  }
}
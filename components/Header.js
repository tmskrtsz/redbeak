import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: false,
      pageBody: ''
    }
  
    this.toggleMenu = this.toggleMenu.bind(this)
    this.clearMenu = this.clearMenu.bind(this)
  }

  componentDidMount(){
    this.pageBody = document.querySelector("body")
  }

  toggleMenu(e) {
    e.preventDefault();

    if(!this.state.active){
      this.setState({
        active: true
      });

      this.pageBody.style.overflow = "hidden"
    } else {
      this.setState({
        active: false
      });
      
      this.pageBody.style.overflow = "auto"
    }
  }

  clearMenu() {
    this.setState({
      active: false
    });
  }

  render () {
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
          <nav className="fullscreen-cause-why-not" style={(this.state.active) ? {display: 'flex'} : {display: 'none'}}>
            <div className="menu--title" aria-label="Navigation Menu">
              <div className="fries">Fries with that order?</div>
              <div className="durger">Juicy cheese burger</div>
              <div className="drink">How bout a drink?</div>
            </div>
            <ul>
              <li>
                <Link onClick={this.clearMenu} to={prefixLink('/')}>Home</Link>
              </li>
              <li>
                <Link onClick={this.clearMenu} to={prefixLink('/about/')}>About</Link>
              </li>
            </ul>
            <a className="message" href="mailto:tamas.kertesz@cult.tamk.fi?subject=Your navigation sucks" alt="Fite me">Fullscreen navigation menu for two links, seriously?</a>
          </nav>
        </header>
    )
  }
}
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import {connect} from 'react-redux'

class Menu extends Component {

  state = {
    showMenu: false
  }

  toggleMenu = (event) => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render () {
    return (
      <nav className="Menu">
        <div className="menuMobile" >
          <span className="icon-menu-options menu_trigger" onClick={this.toggleMenu} ></span>
        </div>
        <ul className={ (this.state.showMenu? 'show': 'hide') }>
          <div className="closeMenu" onClick={this.toggleMenu} ></div>
          <li onClick={this.toggleMenu}> <Link to="/about"> Acerca de </Link> </li>
          <li className="galleryItem">
          <span>Galería </span>
            <ul className={"galleryMenu" }>
              <li> <Link to="/gallery/portrait"> Retrato </Link> </li>
              <li>  <Link to="/gallery/food"> Alimentos  </Link> </li>
              <li>  <Link to="/gallery/travel"> Viaje  </Link> </li>
            </ul>
          </li>
          <li onClick={this.toggleMenu}> <Link to="/contact"> Contácto </Link> </li>
        </ul>
      </nav>
    )
  }
}

export default connect()(Menu)

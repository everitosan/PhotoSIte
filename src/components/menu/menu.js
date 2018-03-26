import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

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
          <li>  Galería  </li>
          <li onClick={this.toggleMenu}> <Link to="/contact"> Contácto </Link> </li>

        </ul>
      </nav>
    )
  }
}

export default Menu
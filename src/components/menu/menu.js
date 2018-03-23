import React, {Component} from 'react'
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
        <span className="icon-menu-options menu_trigger" onClick={this.toggleMenu} ></span>
        <ul className={ (this.state.showMenu? 'show': 'hide') }>
          <div className="closeMenu" onClick={this.toggleMenu} ></div>
          <li>Acerca de</li>
          <li>Galería</li>
          <li>Contácto</li>
        </ul>
      </nav>
    )
  }
}

export default Menu
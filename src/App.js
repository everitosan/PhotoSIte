import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Menu from './components/menu/menu'
import Social from './components/social/social'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

class App extends Component {
  state = {
    hideModalContact: true,
    hideModalAbout: true,
  }

  showContact = () => {
    this.setState({
      hideModalContact: false
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="logo" alt="logo" />
            <Menu
              contactClick = {this.showContact}
              />
          </header>
          <Gallery/>
          <Social/>

          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
        </div>
      </Router>
    );
  }
}

export default App;

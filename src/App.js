import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import UrlHandler from './containers/UrlHandler'
import Menu from './components/menu/menu'
import Social from './components/social/social'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

import {Provider} from 'react-redux'
import store from './store'

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
      <Provider store={store} >
        <Router>
          <UrlHandler>
            <div className="App">
              <header className="App-header">
                <Link to="/"> <div className="logo" alt="logo" /> </Link>
                <Menu
                  contactClick = {this.showContact}
                  />
              </header>

              <Gallery />
              <Route path="/about" component={ About } />
              <Route path="/contact" component={ Contact } />

              <Social/>
            </div>
          </UrlHandler>
        </Router>
      </Provider>

    );
  }
}

export default App;

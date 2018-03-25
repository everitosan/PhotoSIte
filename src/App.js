import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/menu'
import Social from './components/social/social'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'

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
      <div className="App">
        <Contact hide={this.state.hideModalContact} />
        <header className="App-header">
          <div className="logo" alt="logo" />
          <Menu
            contactClick = {this.showContact}
          />
        </header>
        <Gallery/>
        <Social/>
      </div>
    );
  }
}

export default App;

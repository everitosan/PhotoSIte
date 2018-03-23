import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/menu'
import Social from './components/social/social'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu/>
          <div className="logo" alt="logo" />
        </header>
        <Social/>
      </div>
    );
  }
}

export default App;

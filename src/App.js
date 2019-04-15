import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Menu from './components/Menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Welcome />
      <Menu />
      </div>
    );
  }
}

export default App;

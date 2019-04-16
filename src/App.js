import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Projects from './components/Projects'
import Arrow from './components/Arrow';
import AboutMe from './components/AboutMe';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  render() {
    return (
      <div className="App">
      <Welcome />
      <Menu toggleModal={this.toggleModal} />
      <Arrow />
      <div className="allProjects">
        <Projects />
      </div>
      <h1>Modal Demo</h1>
        <AboutMe
          closeModal={this.toggleModal}
          isOpen={this.state.modalOpen} />
      </div>
    );
  }
}

export default App;

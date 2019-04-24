import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Projects from './components/Projects'
import Arrow from './components/Arrow';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
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
      <Menu toggleModal={this.toggleModal} />
      <Welcome />
      <Technologies />
      <Arrow />
      <div className="allProjects">
        <Projects />
      </div>
        <AboutMe
          closeModal={this.toggleModal}
          isOpen={this.state.modalOpen} />
      </div>
    );
  }
}

export default App;

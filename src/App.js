import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Projects from './components/Projects'
import Arrow from './components/Arrow';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.projects = React.createRef();
    this.contact = React.createRef();

    this.state = {
      modalOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.goProjects = this.goProjects.bind(this);
    this.goContact = this.goContact.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  goProjects() {
    this.projects.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  goContact() {
    this.contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <div clacssName="App">
      <Menu goContact={this.goContact} goProjects={this.goProjects} toggleModal={this.toggleModal} />
      <Welcome />
      <Technologies />
      <Arrow />
      <div className="allProjects" ref={this.projects}>
        <Projects />
        <div id="contact-title" ref={this.contact}>
          <h2 id="contact-developer">Contact The Developer</h2>
        </div>
        <ContactMe />
        <hr />
        <Footer />
      </div>
        <AboutMe
          closeModal={this.toggleModal}
          isOpen={this.state.modalOpen} />
      </div>
    );
  }
}

export default App;

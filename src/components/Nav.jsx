import React from 'react';

function Nav(props){
  return(
    <div className="Nav">
    <button onClick="#allProjects" className="menu" id="projects">PROJECTS</button>
    <button className="menu" id="contact">CONTACT</button>
    <button onClick={props.toggleModal} className="menu" id="about">ABOUT THE DEVELOPER</button>
    </div>
  )
}
export default Nav;

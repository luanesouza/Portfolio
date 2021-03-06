import React from 'react';

function Menu(props){
  return(
    <div className="Menu">
      <button className="menu" onClick={props.goProjects} id="projects">PROJECTS</button>
      <button className="menu" onClick={props.goContact} id="contact">CONTACT</button>
      <button onClick={props.toggleModal} className="menu" id="about">ABOUT THE DEVELOPER</button>
    </div>
  )
}
export default Menu;

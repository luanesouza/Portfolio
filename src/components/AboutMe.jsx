import React from 'react';
import AboutMeImage from './AboutMeImage';

export default (props) => {
  if (props.isOpen === false) {
    return null;
  }

  return (
    <div class="modal">
      <h2>About The Developer
        <button id="close-modal" onClick={props.closeModal}>x</button>
      </h2>

      <div className="modal-above">
        <AboutMeImage />
        <p id="about-me">
          Full Stack Web Developer pursuing new opportunities.
          I have a passion for problem solving and lifelong learning.
          My background is in Education where I learned the impact of working in groups and learned how to communicate according to the public target.
           <br />
           As a result, I bring strong skills in communication, problem solving which helps companies increase productivity and efficiency, team-building, project and time management.
          <br />
          <br />
          <strong>Technical Skills:</strong>
          <br />
          VanillaJS, HTML, CSS, React.js, Express.js, Node.js, SQL, Sequelize, PostgreSQL,
          Ruby, Rails, Active Record, ES6, Bcrypt, JWT, Bootstrap, Git, Third Party API.
        </p>
      </div>
    </div>
  )
}

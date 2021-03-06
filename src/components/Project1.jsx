import React from 'react';

function Project1(){
  return(
    <div>
     <div className="project-img">
      <a target="_blank" href="https://luanesouza.github.io/Catching-Game/">
       <img id="project1" src="https://i.imgur.com/k5R7Xc8.jpg" />
      </a>
      <p id="project-paragraph"><strong>Catching Game</strong></p>
      <br />
      <p id="project-paragraph">
        Written in VanillaJS, the goal of the game is to catch all the mice that are
        running around in your kitchen floor.
      <br/>
        It's a race against time, like almost everything in life.
      </p>
      <br />
      <a id="link-repo" rel="noopener noreferrer" target="_blank" href="https://github.com/luanesouza/Catching-Game">Link To The Repo</a>
      <p id="techs"> VANILLA JAVASCRIPT / CSS / HTML</p>
     </div>
    </div>
  )
}
export default Project1;

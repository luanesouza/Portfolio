import React from 'react';
import Name from './Name';
import JobTitle from './JobTitle';
import WelcomeImage from './WelcomeImage';
import WelcomeText from './WelcomeText';

function Welcome(){
  return(
    <div className="Welcome">
      <div className="text-welcome-page">
        <WelcomeText />
      </div>
      <WelcomeImage />
      <div className="name-job-title text-welcome-page">
        <Name />
        <JobTitle />
      </div>

    </div>
  )
}
export default Welcome;

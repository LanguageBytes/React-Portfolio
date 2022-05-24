import React from 'react';
import '../styles/App.css';
import profilePicture from './assets/profile.jpg'


function  Profile() {
  return (
     <div className ="information">
      <section id="About" className="sub-sect"> 
        <p> Hi there! My name is Sarah and I'm learning programming languages at the University of Birmingham. <br></br>
          Software Knowledge: Javascript, React, Node.js, SQL, Express, Handlebars, HTML5, CSS3, Tailwind, Bootstrap.</p>
       <div className = "profile-container">
       <img className = "profile-pic" src={profilePicture}/>
       </div>
       </section>
     
  </div>
  );
}

export default Profile;

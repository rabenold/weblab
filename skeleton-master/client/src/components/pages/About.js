


import React, { Component } from 'react';
import "./Skeleton.css";

class About extends Component {
  render() {
    return (
      <div>
        
      <ul className="nav">
        <li className="nav"><a href="/">Home</a></li>
        <li className="nav"><a href="/About">About</a></li>
        <li className="nav"><a href ="/Weblab">Weblab</a></li>
        <li className="nav"><a href = "/Login">Login</a></li>
 
    </ul>

      <div className="placeholder">
        <h2>Hello</h2>
        <hr className="br"/>
        <h4>Welcome to the About section! Here we will share some things about our website:</h4>
        <hr className="br"/>
        <p> Created by Danny S. and Ellie R. for MIT's WebLab Class, 2021.</p>
      
      </div>
      </div>

    );
  }
}

export default About;
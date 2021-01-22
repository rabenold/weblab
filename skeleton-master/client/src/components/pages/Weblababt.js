
import React, { Component } from 'react';
import "./Skeleton.css";

class Weblababt extends Component {
  render() {
    return (
       
      //   <div className="bg">
      //     <img src ="client/src/components/pages/map.jpg" width = "500" height = "400" alt = "A Map!"/>
<div>
       <ul className="nav">
       <li className="nav"><a href="/">Home</a></li>
       <li className="nav"><a href="/About">About</a></li>
       <li className="nav"><a href ="/Weblab">Weblab</a></li>
       <li className="nav"><a href = "/Login">Login</a></li>

   </ul>
   

   <div className="placeholder">
        <h4>We built this website as part of MIT's WebLab class</h4>
        <hr className = "br"/>
        <p> WebLab occurs every year during IAP and runs for the duration of January.</p>
        <hr className = "br"/>
        <p> During WebLab, students are introduced to the ins and outs of web development. Then they split into teams and build a website that follows the year's prompt.
          This year, the prompt is "Tag Yourself". We hope that you enjoy our website!
        </p>
      
      </div>
      
</div>

   );
  }
}

export default Weblababt;

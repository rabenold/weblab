import get from "../../utilities.js";
import React, { Component } from "react";
import "itunes.css"
class Itunesplug extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {};
    }
  
    componentDidMount() {
      // remember -- api calls go here!
    }


render() {
  

var title = prompt("Enter a song title:");
var song = get("https://itunes.apple.com/search",{term:title,entity:song,limit:1});
  return (
<div className="note">
  <h3>{song}</h3>
</div>);}
}
 
  export default Itunesplug;


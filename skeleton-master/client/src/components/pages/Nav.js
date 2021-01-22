import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Route, Switch, Redirect } from "react-router-dom";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "850940219781-23s7pkc0mn3c9rto0cf3pthlse93bbaj.apps.googleusercontent.com";

class Navbar extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

class login extends Component{
    constructor(props) {
        super(props);
        // Initialize Default State
        this.state = {};
    {this.props.userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={this.props.handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.props.handleLogin}
          onFailure={(err) => console.log(err)}
        />
      )}
}

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return ( 
        



        <div>
        <ul class="nav">
            <li class="nav"><<Link to = "/">Home</Link></li>
            <li class="nav"><Link to ="/About">About</Link></li>
            <li class="nav"><Link to="/Weblab">Weblab</Link></li>
        </ul>
        



    );
  }
}

export default Navbar;

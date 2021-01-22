import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "850940219781-23s7pkc0mn3c9rto0cf3pthlse93bbaj.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
      
      
        

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
        <div class = "header">
           <h1 class="begin">MIT Weblab IAP 2021</h1>



        </div>
        <ul class="nav">
            <li class="nav"><a href="pages/Weblababt.js">Home</a></li>
            <li class="nav"><a href="pages/About.html">About</a></li>
            <li class="nav"><a href ="../Weblababt">Weblab</a></li>
            <li class="nav">Login</li>

        </ul>



      </>
    );
  }
}

export default Skeleton;

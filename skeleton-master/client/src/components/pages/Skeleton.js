import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

//Landing page

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
      
{/*         

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
        )} */}
        
        <ul className="nav">
            <li className="nav"><a href="/">Home</a></li>
            <li className="nav"><a href="/About">About</a></li>
            <li className="nav"><a href ="/Weblab">Weblab</a></li>
            <li className="nav"><a href = "/Login">Login</a></li>
        </ul>
        <div>
           <h1 className="begin">MIT Weblab IAP 2021</h1>
        </div>
        

        
          


      </>
    );
  }}

  export default Skeleton;

import React, { Component } from 'react';
import "./Skeleton.css";
// import { GoogleLogin } from 'react-google-login-component';
import GoogleLogin, { GoogleLogout } from "react-google-login";

const GOOGLE_CLIENT_ID = "850940219781-23s7pkc0mn3c9rto0cf3pthlse93bbaj.apps.googleusercontent.com";

 
class Login extends Component {
    
// constructor (props, context) {
//     super(props, context);
//   }
  
//   responseGoogle (googleUser) {
//     var id_token = googleUser.getAuthResponse().id_token;
//     var googleId = googleUser.getId();
    
//     console.log({ googleId });
//     console.log({accessToken: id_token});
//     //anything else you want to do(save to localStorage)...
//   }


  render() {
    return (
       
        <div>
       <ul className="nav">
       <li className="nav"><a href="/">Home</a></li>
       <li className="nav"><a href="/About">About</a></li>
       <li className="nav"><a href ="/Weblab">Weblab</a></li>
   </ul> 
   {/* <GoogleLogin socialId="yourClientID"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/> */}
   
                     <div className="log">
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
      </div>
</div>

   );
  }
}

export default Login;

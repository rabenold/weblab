import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import About from "./pages/About.js";
import Weblab from "./pages/Weblababt.js";

import Login from "./pages/Login.js";
import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

import { useGoogleLogin, useGoogleLogout } from 'react-google-login'




/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount()
   {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };
    responseSuccessGoogle = (response) => {
    console.log(response);
  }
  
 
  

  render() 
  {
    return (
      <>
        <Router>
          <Login
            path="/Login"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <Skeleton
            path="/"/>
          
          <About
            path="/About"/>
          <Weblab
            path="/Weblab"/>
          <NotFound default />
          
        </Router>
        
      </>
      
    );
  }

}
export default App;

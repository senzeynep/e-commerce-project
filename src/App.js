import Card from "./product/Product";
import Nav from "./Components/Nav";
import About from "./Components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./products/index"
import SignUp from "./Components/auth/SignUp";
import SignIn from "./Components/auth/SignIn";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {email:"not signed in"}
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          email: user.email
        })
      }
    });
  }

  render () {
    return (
      <div>
        <span>{this.state.email}</span>
      
        <Router>
          <Nav />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
  
        </Router>
        
        
    <div className="viewProducts"></div>
    <Card />
      </div>
    );
  } 
} 

export default App;



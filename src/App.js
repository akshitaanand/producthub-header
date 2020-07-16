import React, { Component } from "react";

import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

import logo from "./logo.png";

import "./styles.css";

import "./App.css";
//import Header from "./Header"

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div>
            <img className="logo" alt="logo" src={logo} />
          </div>
        </header>
        <Router basename="/react-auth-ui/">
          <div className="App">
            <div className="App__Aside" />
            <div className="App__Form">
              <div className="PageSwitcher">
                <NavLink
                  to="/sign-in"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign Up
                </NavLink>
              </div>
              <div className="FormTitle">
                <NavLink
                  to="/sign-in"
                  activeclassname="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign In /{" "}
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  activeclassname="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign Up
                </NavLink>
              </div>

              <Route exact path="/" component={SignUpForm} />
              <Route path="/sign-in" component={SignInForm} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;

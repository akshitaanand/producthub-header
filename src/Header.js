import React, { Component } from 'react';
import logo from "./logo.png";

class Header extends Component {
  render() {
    return (
    <header className="header">
      <div>
        <img className="logo" alt="logo" src={logo} />
      </div>
    </header>
    );
  }
}
export default Header;
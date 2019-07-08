import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">React Memory Game</li>
          <li className="itemCenter"></li>
          <li className="itemRight">Score: {this.props.score}</li>
          <li className="itemRight">High Score: {this.props.highscore}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
import React from "react";
import "./styles.scss";

class Header extends React.Component {
  render() {
    return (
      <span className="header">
        <span>Home</span>
        <span>Projects</span>
        <span>Music</span>
        <span>Beer Blog</span>
      </span>
    );
  }
}

export default Header;

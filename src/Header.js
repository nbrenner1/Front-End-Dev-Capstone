// Header.js
import React from "react";
import Nav from "./Nav";
import logo from './Assets/Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo"></img>
      <Nav />
    </header>
  );
}

export default Header;
// Header.js
import React from "react";
import Nav from "./Nav";
import logo from './Assets/Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" width={200} height={100}></img>
      <Nav />
    </header>
  );
}

export default Header;
// Footer.js
import React from "react";
import logo from './Assets/Logo .svg';

function Footer() {
  return (
    <footer>
      <img src={logo}></img>
      <ul>Page Navigation
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order_online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>

      <ul>Contact</ul>

      <ul>Social Media Links</ul>
    </footer>
  );
}

export default Footer;
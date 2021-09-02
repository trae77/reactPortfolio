
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import Nav from "react-bootstrap/Nav";
import "../styles/Nav.css";

function Navbar() {
  return (
 
        <Nav className="mr-auto">
   
  <Link className="navbar-brand" to="/">
        Traes Portfolio
      </Link>
      <a href="https://www.linkedin.com/in/william-pollak-7145bb200/">    Linkedin</a>
      <a href="/https://github.com/trae77">    Github</a>
      <a href="/https://docs.google.com/document/d/1AZtXyw-uYwl590VqNon4Hlas-eI5VjNN3p7eid7UCwY/edit?usp=sharing">    Resume</a>

      
        </Nav>
    
  );
}

export default Navbar;

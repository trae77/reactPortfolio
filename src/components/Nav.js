
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import {Button} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "../styles/Nav.css";

function Navbar() {
  return (
 
        <Nav className="mr-auto">
  
      Traes Portfolio 
      <Button>
      <a href="https://www.linkedin.com/in/william-pollak-7145bb200/" target="_blank">    Linkedin</a> 
              </Button>
             
      <Button>
      <a href="https://github.com/trae77" target="blank">    Github</a>
      </Button>
      <Button>
      <a href="https://docs.google.com/document/d/1AZtXyw-uYwl590VqNon4Hlas-eI5VjNN3p7eid7UCwY/edit?usp=sharing" target="blank">    Resume</a>
      </Button>
      
        </Nav>
    
  );
}

export default Navbar;


import React from "react";
import "../styles/Nav.css";
import {Button} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "../styles/Nav.css";

function Navbar() {
  return (
 
        <Nav className="mr-auto">
   {/* <Button bsPrefix="super-btn" variant="primary">
   Traes Portfolio 
  </Button> */}
   
      <Button class="button" >
      <a href="https://www.linkedin.com/in/william-pollak-7145bb200/" target="_blank">    Linkedin</a> 
              </Button>
             
      <Button class = "button" >
      <a href="https://github.com/trae77" target="blank">    Github</a>
      </Button>
      <Button class = "button" >
      <a href="https://docs.google.com/document/d/1AZtXyw-uYwl590VqNon4Hlas-eI5VjNN3p7eid7UCwY/edit?usp=sharing" target="blank">    Resume</a>
      </Button>
      
        </Nav>
    
  );
}

export default Navbar;

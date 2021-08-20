import React from "react";
import "../styles/Aboutme.css";

import ListGroup from 'react-bootstrap/ListGroup'
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row"

import github from "../picture/icons/github.jpg";
import css from "../picture/icons/css.png";
import html from "../picture/icons/html.png";
import handlebars from "../picture/icons/handlebars.png";
import javascript from "../picture/icons/javascript.png";
import jquery from "../picture/icons/jquery.png";
import mongodb from "../picture/icons/mongodb.png";
import mysql from "../picture/icons/mysql.png";
import node  from "../picture/icons/node.png";
import react from "../picture/icons/react.png";
import sass from "../picture/icons/sass.png";


function Aboutme() {
  return (
   

    
   
      <div className="container">
        <h3>Full-stack Web Developer</h3>

        <h3>
          I currently live in thornton colorado, but am originally from
          michigan. I enjoy playing sports and video games in my free time. Web
          Developer trained at the University of Denver Coding Bootcamp and
          earned a full Stack Web Development Certificate. Innovative
          problem-solver passionate about developing apps, focused on
          mobile-first design and development. Strengths in creativity,
          teamwork, and building projects from ideation to execution. To secure
          a position that will utilize my skills and experience to maximum
          potential, with the opportunity for advancement based on performance.
        </h3>
        <ListGroup  horizontal  >
        <ListGroup.Item  action variant="secondary" >
        <img alt = "css" src={github} />
        </ListGroup.Item>
        <ListGroup.Item action variant="success"fluid>
          <img alt="css" src={css} />
        </ListGroup.Item>
        <ListGroup.Item action variant="danger"fluid>
          <Image alt="css" src={html}  />
        </ListGroup.Item>
        <ListGroup.Item  action variant="info">
          <Image alt="css" src={handlebars}  />
        </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal>
        <ListGroup.Item action variant="light" >
          <Image alt="css" src={javascript}/>
        </ListGroup.Item>
        <ListGroup.Item  action variant="dark" >
          <Image alt="css" src={jquery}  />
        </ListGroup.Item> 
        <ListGroup.Item action variant="success" >
          <Image alt="css" src={mongodb}  />
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          <Image alt="css" src={mysql}  />
        </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal>
        <ListGroup.Item  action variant="info">
          <Image alt="css" src={node}  />
        </ListGroup.Item>
         <ListGroup.Item  action variant="dark">
          <Image alt="css" src={react} />
          </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Image alt="css" src={sass}  />
        </ListGroup.Item>
      </ListGroup>
      </div>
   
  );
}

export default Aboutme;

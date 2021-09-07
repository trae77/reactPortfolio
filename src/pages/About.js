import React from "react";
import "../styles/Aboutme.css";
import "../styles/Portfolio.css";
import "../styles/reset.css";
import "../styles/style.css";

import {
  Card,
  Col,
  Container,
  Button,
  ButtonGroup,
  Row,
} from "react-bootstrap";
import card from "../Projects.json";
// import pic from "../pictures/leaf.jpg";

import github from "../pictures/icons/github.png";
import css from "../pictures/icons/css.png";
import html from "../pictures/icons/html.png";
import handlebars from "../pictures/icons/handlebars.jpg";
import javascript from "../pictures/icons/javascript.png";
import jquery from "../pictures/icons/jquery.png";
import mongodb from "../pictures/icons/mongodb.png";
import mysql from "../pictures/icons/mysql.png";
import node from "../pictures/icons/node.png";
import react from "../pictures/icons/react.png";
import sass from "../pictures/icons/sass.png";
// import test from "../pictures/cool.jpg";
// import pics from "../pictures/wheather.png";

const About = () => {
  return (
    <Container fluid>
      <div className="background">
        <Row>
          <Col sm={2}>
            <ButtonGroup vertical className="custom-btn">
              <Button>
                <img alt="github" src={github} />
              </Button>
              <Button>
                <img src={css} alt="css" />
              </Button>
              <Button>
                <img src={html} alt="html" />
              </Button>
              <Button>
                <img src={handlebars} alt="handlebars" />
              </Button>
              <Button>
                {" "}
                <img src={javascript} alt="javascript" />
              </Button>
              <Button>
                <img src={jquery} alt="jquery" />
              </Button>
            </ButtonGroup>
          </Col>
          <Col sm={8}>
            <h1>Full-stack Software engineer</h1>

            <h3>
              I currently live in thornton colorado, but am originally from
              michigan. I enjoy playing sports and video games in my free time.
              Web Developer trained at the University of Denver Coding Bootcamp
              and earned a full Stack Web Development Certificate. Innovative
              problem-solver passionate about developing apps, focused on
              mobile-first design and development. Strengths in creativity,
              teamwork, and building projects from ideation to execution. To
              secure a position that will utilize my skills and experience to
              maximum potential, with the opportunity for advancement based on
              performance.
            </h3>

            <div className="card-container">
              <div className="row">
                {card.map((card) => (
                  <div class="card card-envo">
                    <div class="flip-box">
                      <div class="flip-box-inner">
                        <Card key={card.id}>
                          <Card.Img
                            class="pic"
                            variant="top"
                            src={card.image}
                          />
                          <Card.Body class="flip-box-back project-image">
                            <Card.Title class="mt-2">{card.name}</Card.Title>
                            <Card.Text class="mt-2">
                              description: {card.description}
                            </Card.Text>
                            <Card.Text class="mt-2">
                              Tools: {card.tools}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                    <Button variant="primary">
                      <a href={card.deployed}>Deployed</a>
                    </Button>
                    <Button variant="primary">
                      <a href={card.repo}>Repo</a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/*           
            <div className="card-container">
              <div className="row">
                {card.map((card) => (
                  <Card key={card.id} style={{ height: "475px", width: "325px" }}>
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                      <Card.Title>{card.name}</Card.Title>
                      <Card.Text>description: {card.description}</Card.Text>
                      <Card.Text>Tools: {card.tools}</Card.Text>
                      <Button variant="light">
                        <a href={card.deployed}>Deployed</a>
                      </Button>
                      <Button variant="light">
                        <a href={card.repo}>Repo</a>
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div> */}
          </Col>
          <Col sm={2}>
            <ButtonGroup vertical className="custom-btn">
              <Button>
                <img src={react} alt="react" />
              </Button>
              <Button>
                <img src={sass} alt="sass" />
              </Button>
              <Button>
                <img src={mongodb} alt="mongodb" />
              </Button>
              <Button>
                <img src={mysql} alt="mysql" />
              </Button>
              <Button>
                <img src={node} alt="node" />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;

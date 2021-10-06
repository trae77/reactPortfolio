 {/* <div className="card-container">
              <div className="row">
                {card.map((card) => (
                  <div class="card card-envo">
                    <div class="flip-box">
                      <div class="flip-box-inner">
                        <div class="flip-box-front">
                          <Card id="card" key={card.id}>
                            <Card.Img
                              class="pic"
                              variant="top"
                              alt="pic"
                              src={card.image}
                            />

                            <div class="flip-box-back project-image">
                              <Card.Title class="mt-2">{card.name}</Card.Title>
                              <Card.Text class="mt-2">
                                description: {card.description}
                              </Card.Text>
                              <Card.Text class="mt-2">
                                Tools: {card.tools}
                              </Card.Text>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div> */}

import {
  Card,
  Col,
  Container,
  Button,
  ButtonGroup,
  Row,
} from "react-bootstrap";
import "../styles/style.css";
import card from "../Projects.json";
const Help = () => {
  return (
        <div class="container">
            {card.map((card) => (
              <div class="card card-envo">
                <div class="flip-box">
                  <div class="flip-box-inner">
                    <div class="flip-box-front">
                    <Card id="card" key={card.id}>
                            <Card.Img
                              class="pic"
                              variant="top"
                              alt="pic"
                              src={card.image}
                            />
                  
                    </Card>
                    </div> 

                    <div class="flip-box-back project-image">
                      <h3 class="mt-2">{card.name}</h3>
                      <h6 class="mt-2 p-2">{card.description}</h6>
                      <div class="row pt-2">
                        <div class="col-6">
                          <h6>
                            Technologies Used:
                            {card.tools}
                          </h6>
                        </div>   
                </div>
              </div>
            </div>
          </div>  
        </div>    
  
  ))
  
  }
  </div>  
  )};
  export default Help;


  
        



                {/* <div className="card-container">
       <div className="row">
         {card.map((card) => ( 
          <div class="card card-envo">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <Card id="card" key={card.id}>
                    <Card.Img
                      class="pic"
                      variant="top"
                      alt="pic"
                      src={card.image}
                    />
                
                  <div class="flip-box-back project-image">
                    <Card.Title class="mt-2">{card.name}</Card.Title>
                    <Card.Text class="mt-2 p-2">
                      description: {card.description}
                    </Card.Text>
                    <Card.Text class="mt-2  pt-2">
                      Tools: {card.tools}
                    </Card.Text>
                  </div>
                  </Card>
                </div>
             
              </div>
            </div>
            <div>
              <Button variant="primary" class="button">
                <a href={card.deployed} target="_blank">
                  Deployed
                </a>
              </Button>
              <Button variant="primary" class="button">
                <a href={card.repo} target="_blank">
                  Repo
                </a>
              </Button>
            </div>
          </div> */}
       
           

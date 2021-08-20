import React from "react";
import "../styles/Aboutme.css";
import card from "../Projects.json";
import pic from "../picture/bright.jpg";

function Projects() {
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${pic})`,
        }}
      >
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-12 col-md-10">
            <hr />
            <div className="card-container">
              <div className="row">
                {card.map((card) => (
                  <div className="col-md-4">
                    <div className="card" key={card.id}>
                      <img
                        src={card.image}
                        className="card-img-top"
                        alt={card.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">{card.description}</p>
                        <p className="card-text">{card.tools}</p>
                        <div className="row">
                          <div className="col-6">
                            <a
                              href={card.deployed}
                              className="btn btn-primary"
                              id="btn-who-said-it"
                            >
                              See the app
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href={card.repo}
                              className="btn btn-primary"
                              id="btn-who-said-it"
                            >
                              View the repo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;

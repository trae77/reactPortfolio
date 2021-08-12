import React from "react";
import "../styles/Aboutme.css";
import projects from "../Projects.json";
import pic from "../picture/bright.jpg";

const styles = {
  card: {
    width: "400px",
    margin: 20,
  },
};

function Projects() {
  return (
    <div className="container" id="portfolio">
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
                {projects.map((project) => (
                  <div className="col-md-4">
                    <div className="card" style={styles.card} key={project.id}>
                      <img
                        src={project.image}
                        style={styles.img}
                        className="card-img-top"
                        alt={project.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <p className="card-text">{project.tools}</p>
                        <div className="row">
                          <div className="col-6">
                            <a
                              href={project.deployed}
                              className="btn btn-primary"
                              id="btn-who-said-it"
                            >
                              See the app
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href={project.repo}
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

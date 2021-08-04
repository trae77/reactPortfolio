import React from "react";
import Projects from "../components/Projects.js";
import project from "../Projects.json"

const Portfolio = () => (
  <div>
    <Projects projects ={project}
      />

  </div>
  
);

export default Portfolio;



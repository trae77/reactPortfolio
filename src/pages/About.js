import React from "react";
import Aboutme from "../components/Aboutme";

import Contacts from "../components/Contact";
import Projects from "../components/Projects";
import project from "../Projects.json";
import "../styles/Aboutme.css";

import Wrapper from "../components/Wrapper";

const About = () => (
  <div>
 
    <div className="background">
    
     <Wrapper> 
    <Aboutme>
    </Aboutme>

    <Projects projects ={project}
      />
   <Contacts></Contacts>
   </Wrapper> 
  </div>

  </div>
);

export default About;

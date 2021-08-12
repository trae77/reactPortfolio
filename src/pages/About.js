import React from "react";
import Aboutme from "../components/Aboutme";
import pic from "../picture/cool2.jpg";
import Contacts from "../components/Contact";
import Projects from "../components/Projects";
import project from "../Projects.json";
import "../styles/Aboutme.css";


const About = () => (
  <div>
 
    <div className="background">
    
      
    <Aboutme></Aboutme>
    <Projects projects ={project}
      />
   <Contacts></Contacts>
  </div>
  
  </div>
);

export default About;

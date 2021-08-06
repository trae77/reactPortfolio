import React from "react";
import "../styles/Aboutme.css";
import pic from "../picture/cool2.jpg";

function Aboutme() {
  return ( 

    <> 
   <div style={{ 
    
    backgroundImage: 
    `url(${pic})` 
   
  }}> 
    
       
        <h1 class="text-3xl uppercase">William Pollak</h1>
          <h3>Full-stack Web Developer</h3>
     <h3> I currently live in thornton colorado, but am originally from michigan. I enjoy playing sports and video games in my free time. Web Developer trained at the University of Denver Coding Bootcamp and earned a full Stack Web Development Certificate. Innovative problem-solver passionate about developing apps, focused on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution. To secure a position that will utilize my skills and experience to maximum potential, with the opportunity for advancement based on performance. 
          </h3>
     
          </div>  
      </>   
      
      
    );
    }

export default Aboutme;
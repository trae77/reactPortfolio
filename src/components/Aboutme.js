import React from "react";
import "../styles/Aboutme.css";




const styles = {
 
  card: {
    width: "500px",
    margin: 10
  },
 };


function Aboutme() {
  return (
    <>

      <div className ="container">
      {/* <div
        style={{
          backgroundImage: `url(${pic})`,
        }}
      > */}
        <h3>Full-stack Web Developer</h3>
        {/* <button onClick = "hi" >Take the Shot!</button> */}
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
 </div>

    </>
  );
}

export default Aboutme;

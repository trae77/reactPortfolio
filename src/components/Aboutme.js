import React from "react";
import "../styles/Aboutme.css";
import pic from "../picture/cool2.jpg";
import pic2 from "../picture/cert.png";


const styles = {
 
  card: {
    width: "500px",
    margin: 10
  },
 };

function Aboutme() {
  return (
    <>

      <div
        style={{
          backgroundImage: `url(${pic})`,
        }}
      >
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

  
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-12 col-md-10">
  
       <hr />
            <div className="card-container">
           
            

                <div className="col-lg-6">
                  <div className="card" style={styles.card} >
                    <img
                      src={pic2}
                      style={styles.img}
                      className="card-img-top"
                      alt={""}
                    />
                    
                    <div className="card-body">
                      <h5 className="card-title">{}</h5>
                      <p className="card-text">
                        {}
                      </p>
                      <p className="card-text">
                        {}
                      </p>
                     
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                   
                     
                  
                   
                   
                
   
    </>
  );
}

export default Aboutme;

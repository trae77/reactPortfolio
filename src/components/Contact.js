import React from "react";
import "../styles/Footer.css";

function Contacts() {
  return ( 
  
      <div className="card-container">
       <div className="row">
  
    <div class="form-group">
     
      <a href="https://docs.google.com/document/d/1AZtXyw-uYwl590VqNon4Hlas-eI5VjNN3p7eid7UCwY/edit?usp=sharing" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Resume</a>

      <a href="https://github.com/trae77" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Github</a>

       <a href="https://www.linkedin.com/in/william-pollak-7145bb200/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Linkedin</a>

    </div>
    </div>
    </div>  
  
 );
}

export default Contacts;
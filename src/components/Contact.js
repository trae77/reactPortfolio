import React from "react";
import "../styles/Aboutme.css";
import pic from "../picture/cert.png";
import pic2 from "../picture/anniversary.jpeg";


function Contacts() {
  return ( 
  
      <div className="container">
       <div className="row">
       <div style={{ 
    
    backgroundImage: 
    `url(${pic2})` 
   
  }}> 
  <div>
    <h1>Contact Page</h1>
    <h1>Email : Soccerreferee7@gmail.com</h1>
  
    <div class="form-group">
     
      <a href="https://docs.google.com/document/d/1AZtXyw-uYwl590VqNon4Hlas-eI5VjNN3p7eid7UCwY/edit?usp=sharing" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Resume</a>

      <a href="https://github.com/trae77" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Github</a>

       <a href="https://www.linkedin.com/in/william-pollak-7145bb200/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Linkedin</a>
  
     
</div>
</div>
<div>
  <h1>
    Example 
  </h1>
  <h2>
    Example
  </h2>
  <h3>
    Example 
  </h3>
  <h4>
    Example 
  </h4>
  <h5>
    Example  
  </h5>
  <h6>
    Example 
  </h6>
</div>
<div>
  <h1>
    Example 
  </h1>
  <h2>
    Example 
  </h2>
  <h3>
    Example 
  </h3>
  <h4>
    Example 
  </h4>
  <h5>
    Example 
  </h5>
  <h6>
    Example  
  </h6>
</div>


    </div>
    
 
    </div>
 
       
  
    
    
    </div>  
   
  
 );
}

export default Contacts;
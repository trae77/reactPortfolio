import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      Traes Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
        
          <li className="nav-item">
          {/* <Link
              to="/portfolio"
              className={window.location.pathname === "/good" ? "nav-link active" : "nav-link"}
            >
             Portfolio
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/good" ? "nav-link active" : "nav-link"}
            >
             Contact
            </Link>*/}
            </li>
        
       
        </ul> 
      </div>
    </nav>
  );
}

export default Navbar;

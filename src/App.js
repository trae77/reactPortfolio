import AboutPage from "./pages/About";

// import MyStack from "./pages/MyStackPage/MyStack";
import Footer from "./components/Footer";

import Navbar from "./components/Nav";
// import { useEffect, useState } from "react";

import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  // const [portfolioArray, setPortfolioArray] = useState([])

  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={AboutPage} />
        <Route exact path="/about" component={AboutPage} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;

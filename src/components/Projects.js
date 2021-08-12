import React from "react";
import "../styles/Aboutme.css";
import card from "../Projects.json";
import pic from "../picture/bright.jpg";


const styles = {
  cards: {
    maxwidth: "385px",
    margin: 20,
    padding: "20px",
  },
}
 



function Projects() {
//   var i;

// for (i = 0; i < card.length; i++) {
//   wiggle(card[i])
  
// };

// function wiggle (card){
//  card.addEventListener('mousemove', function (e) {
//     var wh = window.innerHeight / 2,
//     //ww = window.innerWidth / 2,
//     offX = this.offsetLeft,
//     //offY = this.offsetTop
//     offW = this.offsetWidth/2;
//     this.style.setProperty('--mouseX', (e.clientX - offX - offW) / 25);
//     this.style.setProperty('--mouseY', (e.clientY - wh) / 25);
  
//   });

// card.addEventListener('mouseleave', function (e) {

//   this.style.setProperty('--mouseX', 0);
//   this.style.setProperty('--mouseY', 0);

// });
// }
  return (
    <div className="container" >
      <div
        style={{
          backgroundImage: `url(${pic})`,
        }}
      >
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-12 col-md-10">
            <hr />
            <div className="card-container">
              <div className="row">
                {card.map((card) => (
                  <div className="col-md-4">
                    <div className="card" id="portfolio" style={styles.cards} key={card.id}>
                      <img
                        src={card.image}
                        style={styles.img}
                        className="card-img-top"
                        alt={card.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">{card.description}</p>
                        <p className="card-text">{card.tools}</p>
                        <div className="row">
                          <div className="col-6">
                            <a
                              href={card.deployed}
                              className="btn btn-primary"
                              id="btn-who-said-it"
                            >
                              See the app
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href={card.repo}
                              className="btn btn-primary"
                              id="btn-who-said-it"
                            >
                              View the repo
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;

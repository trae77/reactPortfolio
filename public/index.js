import project from "../Projects.json";

var i;

for (i = 0; i < project.length; i++) {
  wiggle(project[i])

};

function wiggle (card){
  card.addEventListener('mousemove', function (e) {
    var wh = window.innerHeight / 2,
    //ww = window.innerWidth / 2,
    offX = this.offsetLeft,
    //offY = this.offsetTop
    offW = this.offsetWidth/2;
    this.style.setProperty('--mouseX', (e.clientX - offX - offW) / 25);
    this.style.setProperty('--mouseY', (e.clientY - wh) / 25);
  
  });

card.addEventListener('mouseleave', function (e) {

  this.style.setProperty('--mouseX', 0);
  this.style.setProperty('--mouseY', 0);

});
}
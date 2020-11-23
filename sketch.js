var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];
var particle;
var score = 0;
var turn = 0;
var gameState = "start";

var divisionHeight = 300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }


}



function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);
  text("500", 25, 525)
  text("500", 105, 525)
  text("500", 185, 525)
  text("100", 265, 525)
  text("100", 345, 525)
  text("100", 425, 525)
  text("100", 505, 525)
  text("50", 585, 525)
  text("50", 665, 525)
  text("50", 745, 525)
  Engine.update(engine);

  if (particle != null) {
    particle.display();
    if (particle.body.position.y > 750) {
      if (particle.body.position.x < 225) {
        score = score + 500;
        particle = null;
        if (turn >= 5) gameState = "end"
      }
    }
  }
  if (particle != null) {
    particle.display();
    if (particle.body.position.y > 750) {
      if (particle.body.position.x < 545) {
        score = score + 100;
        particle = null;
        if (turn >= 5) gameState = "end"
      }
    }
  }
  if (particle != null) {
    particle.display();
    if (particle.body.position.y > 750) {
      if (particle.body.position.x < 785) {
        score = score + 50;
        particle = null;
        if (turn >= 5) gameState = "end"
      }
    }
  }

  if (gameState==="end"){
    textSize(75)
    text("GAME OVER",175,250)
  }

  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }

  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
}

function mousePressed() {
  if (gameState !== "end") {
    turn++
    particle = new Particle(mouseX, 10, 10, 10)
  }
}
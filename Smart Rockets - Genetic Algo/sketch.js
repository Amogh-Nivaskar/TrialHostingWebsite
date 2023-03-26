// import { Population } from './population';

var population;
var lifespan = 500;
var ageCount = 0;
var displayAge;
var displayReachedCount;
var reachedCount = 0;
var target;
var maxForce = 0.3;
var mutationRate = 0.01;
var obstacles= [];



// var rx = 100;
// var ry = 150;
// var rw = 200;
// var rh = 10;

function setup() {
  createCanvas(500, 500);
  population = new Population();
  displayAge = createP();
  displayReachedCount = createP()
  target = createVector(width/2, 30);
  var obstacle1 = new Obstacle(50, 340, 200, 10);
  obstacles.push(obstacle1);
  var obstacle2 = new Obstacle(230, 160, 200, 10);
  obstacles.push(obstacle2);
}

function draw() {
  background(0);
  ellipse(target.x, target.y, 16, 16);
  for (var i = 0; i < obstacles.length; i++){
    obstacles[i].show()
  }
  fill(255);
  
  reachedCount = 0;
  population.run();
  displayAge.html(ageCount);
  displayReachedCount.html(reachedCount)
  ageCount++;

  if (ageCount == lifespan){
    population.evalMatingPool();
    population.selection();
    ageCount = 0;
  } 

}




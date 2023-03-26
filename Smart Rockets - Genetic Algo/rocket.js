function Rocket(dna){
    this.pos = createVector(width/2, height);
    this.vel = createVector();
    this.acc = createVector();
    this.fitness = 0;
    this.crashed = false;
    this.reached = false;
    this.age = 0;
    if (dna){
      this.dna = dna;
    }else{
      this.dna = new DNA();
    }
    
    
    this.applyforce = function(force){
      this.acc.add(force);
    }
  
    this.update =  function(){
  
      var d = dist(this.pos.x, this.pos.y, target.x, target.y);
      if (d < 10){
        this.reached = true;
        reachedCount++;
        this.pos = target.copy();
      }

      for (var i = 0; i < obstacles.length; i++){
        if (this.pos.x > obstacles[i].rx && this.pos.x < obstacles[i].rx + obstacles[i].rw && this.pos.y > obstacles[i].ry && this.pos.y < obstacles[i].ry + obstacles[i].rh){
          this.crashed = true;
        }
      }
  
      if (this.pos.x > width || this.pos.x < 0){
        this.crashed = true;
      }
  
      if (this.pos.y > height || this.pos.y < 0){
        this.crashed = true;
      }
  
      this.applyforce(this.dna.genes[ageCount]);
  
      if (!this.reached && !this.crashed){
        this.age++;
        this.vel.add(this.acc);
        this.vel.limit(4);
        this.pos.add(this.vel);
        this.acc.mult(0); 
      } 
    }
  
    this.calcFitness = function(){
      var d = dist(this.pos.x, this.pos.y, target.x, target.y);
      this.fitness = map(d, 0, width, 1, 0);
      if (this.reached){
        this.fitness *= (1000*lifespan/this.age);
      }else if (this.crashed){
        this.fitness /= 10;
        this.fitness *= this.age/lifespan;
      }
  
    }
  
    this.show = function(){
      push();
      noStroke();
      fill(200, 100);
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      rectMode(CENTER);
      rect(0, 0, 20, 5);
      pop();
  
    }
  
  }
  
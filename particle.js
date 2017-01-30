 
function Particle(x, y,d1,d2) {
  this.x = x;
  this.y = y;
  this.d1 = d1;
  this.d2 = d2;

  this.history = [];

  this.update = function() {
    this.d1 = diam-150;
    this.d2 = this.d1
    this.x = x;
    this.y = y;

   
    this.history.push(this.d1,this.d2);

    if (this.history.length > 42) {
      this.history.splice(0,2);
    }

    this.historytrails = [] 
    var v = createVector(this.x, this.y);
    
    this.historytrails.push(v); 
    if (this.historytrails.length > 100) {
      this.historytrails.splice(0, 2);
    }


  } 

  this.show = function() {
    //stroke(0);
    //fill(255, 215, 0);
    ellipse(0,0,this.d1,this.d2);

  }

  this.ripples = function() {
    for (var i = 0; i < this.history.length; i++) {
      //noFill(255);
      //stroke(255, 215, 0)
      ellipse(0,0,this.history[i]+25,this.history[i]+25);
      
    }
  }

  this.trails = function() {
    stroke(255);
    fill(0, 150);
    ellipse(0, 0, 25, 25);
    
    //noFill();
    beginShape();
    for (var l = 0; l < this.historytrails.length; l++) {
      var pos = this.historytrails[l];
      fill(random(255));
      ellipse(pos.x, pos.y, l,l);
    }
    endShape();   

 }
  }

var song;
var amp;
var button;
var vol;
var diam;
var particle;
var angle = 0;
var speed = 0.005;



function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("charmer.mp3", loaded);
  amp = new p5.Amplitude();
  particle = new Particle(width/2,height/2,diam,diam);
  

}

function loaded() {
	button = createButton("Play");
	button.mousePressed(togglePlaying);
	song.loop();
}

function togglePlaying() {
	if (!song.isPlaying()) {
		song.play();
		button.html("Pause");
	} else {
		song.pause();
		button.html("Play");
	}
}


function draw() {
  background(51);

  vol = amp.getLevel();
  diam = map(vol, 0,1,100,600);
  
  
 /* particle.update();
  noStroke(0);
  //fill(0, 255, 127);
  fill(102, 255, 204);
  particle.show();
  //fill(255, 255, 255,3);
  fill(102, 255, 204,5)
  noStroke(255,0,0);
  particle.ripples();*/
   var l0 = map(mouseX,0,width,10,600);
    var l1 = map(mouseY,0,height,10,600);
    
    
    
    translate(width/2, height/2);
    rotate(angle);
    for ( var i=0; i<5; i++){
        push();
        rotate(i*TWO_PI/5);
        translate(0,l0);
        //fill(col1.r,col1.g,col1.b);
        //ellipse(0,0,diam,diam)
        particle.update();
        noStroke();
        fill(102, 255, 204,30)
        particle.show();
        fill(102, 255, 204,15)
        noStroke();
        particle.ripples();
        
        rotate(angle);
        for ( var j=0; j<5; j++){
            push();
            rotate(j*TWO_PI/5);
            translate(0,l1);
            //fill(col2.r,col2.g,col2.b);
            //noFill();
            //fill(255);
            //ellipse(0,0,25,25);
            particle.trails();    
            rotate(angle);
            for ( var k=0; k<5; k++){
                push();
                rotate(k*TWO_PI/5);
                translate(0,50);
                noFill(0,255,0);
                ellipse(0,0,25,25);
            
                pop();
            }
            pop();
        }
        
        pop();
    
   }
    angle += speed;

   /* if (mouseIsPressed){
        noFill();
      noStroke();
    }*/
    
}
  


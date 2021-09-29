function preload() {
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  background("red")
  frameRate(60)
}

function draw() {
  translate(width/2,height/2)
  rotate(frameCount) 
  noFill()
  stroke(lerpColor(color("blue"), color("red"), frameCount/700));
  strokeWeight(0.2)
  rectMode(CENTER)
  rect(0,0,frameCount,frameCount)
  strokeWeight(0.2)
  rect(0,0,1500-frameCount*2, 1500-frameCount*2)
}

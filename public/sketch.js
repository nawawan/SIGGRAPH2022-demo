let r = 50;
function setup(){
  createCanvas(200, 200);
  noStroke();
}
function draw(){
  background(0);
  if(keyIsPressed){
    fill('green');
  }else{
    fill('white');
  }
  ellipse(mouseX, mouseY, r, r);
}
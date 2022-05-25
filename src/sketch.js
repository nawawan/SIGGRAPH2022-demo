export const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
  }
  p.draw = () => {
    p.background('#0f2350');
    p.fill(255);
    if(p.keyIsPressed){
      p.fill('green');
    }else{
      p.fill('white');
    }
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  }
};
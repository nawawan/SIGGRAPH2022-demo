export const sketch = (p) => {
  let vid;
  p.setup = () => {
    vid = p.createVideo("asset/card.mov", vidLoad);
    vid.size(p.windowWidth / 3, p.windowHeight);
    vid.position(0, 0);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.background(0);
  }
  p.draw = () => {
    p.background(0);
    if(p.keyIsPressed){
      p.fill('green');
    }else{
      p.fill('white');
    }
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  }
  const vidLoad = () => {
    vid.loop();
    vid.volume(0);
  }
};
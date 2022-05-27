export const sketch = (p) => {
  let vid = [];
  let duration, duration2;
  p.setup = () => {
    let v = p.createVideo("asset/card.mov");
    vid.push(v);
    vid[0].size(p.windowWidth / 6, p.windowHeight / 3);
    vid[0].position(p.windowWidth / 3, 0);
    v = p.createVideo("asset/card.mov");
    vid.push(v);
    vid[1].size(p.windowWidth / 6, p.windowHeight / 3);
    vid[1].position(p.windowWidth / 2, 0);
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
};
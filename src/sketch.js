export const sketch = (p) => {
  let vid = [];
  let duration, duration2;
  p.setup = () => {
    let v = p.createVideo("asset/card.mov");
    vid.push(v);
    v = p.createVideo("asset/card.mov");
    vid.push(v);
    let ofs = p.windowWidth / 3;
    for(let i = 0; i < vid.length; ++i){
      vid[i].size(p.windowWidth / 6, p.windowHeight / 3);
      vid[i].position(p.windowWidth / 6 * i + ofs, 0);
    }
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
export const sketch = (p) => {
  let vid = [];
  let flipped = [];
  let duration;
  let v;
  p.setup = () => {
    v = p.createVideo("asset/card.mov", loadDuration);
    vid.push(v);
    flipped.push(false);
    v = p.createVideo("asset/card.mov");
    vid.push(v);
    flipped.push(false);
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
      p.keyTyped();
    }else{
      p.fill('white');
    }
    if(!flipped[0]){
      if(vid[0].time() > duration / 2) {
        flipped[0] = true;
        vid[0].pause();
      }
    }
    else{
      if(vid[0].time() <= duration / 2){
        flipped[0] = false;
        vid[0].pause();
      }
    }
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  }
  p.keyTyped = () => {
    if(p.key === 'a'){
      vid[0].play();
      vid[0].loop();
    }
    else if(p.key === 'b'){

    }
  }
  function loadDuration(){
    duration = v.duration();
  }
};
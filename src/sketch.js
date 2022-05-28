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
    Leap.loop(drawHand);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.background(0);
  }
  p.draw = () => {
    p.translate(p.windowWidth/2, 2 * p.windowHeight / 3); 
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
  function drawHand(frame){
    p.background(0);
    frame.hands.forEach(drawBrush);
  }
  function drawBrush(hand){
    p.fill(255, 255, 255);
    p.ellipse(hand.thumb.tipPosition[0], -hand.thumb.tipPosition[1], 10);
    p.ellipse(hand.thumb.dipPosition[0], -hand.thumb.dipPosition[1], 10);
    p.ellipse(hand.thumb.pipPosition[0], -hand.thumb.pipPosition[1], 10);
    p.ellipse(hand.thumb.tipPosition[0], -hand.thumb.tipPosition[1], 10);
    p.ellipse(hand.thumb.mcpPosition[0], -hand.thumb.mcpPosition[1], 10);
    p.ellipse(hand.thumb.carpPosition[0], -hand.thumb.carpPosition[1], 10);

    // 人差し指
    p.fill(255, 0, 0);
    p.ellipse(hand.indexFinger.tipPosition[0], -hand.indexFinger.tipPosition[1], 10);
    p.ellipse(hand.indexFinger.dipPosition[0], -hand.indexFinger.dipPosition[1], 10);
    p.ellipse(hand.indexFinger.pipPosition[0], -hand.indexFinger.pipPosition[1], 10);
    p.ellipse(hand.indexFinger.tipPosition[0], -hand.indexFinger.tipPosition[1], 10);
    p.ellipse(hand.indexFinger.mcpPosition[0], -hand.indexFinger.mcpPosition[1], 10);
    p.ellipse(hand.indexFinger.carpPosition[0], -hand.indexFinger.carpPosition[1], 10);

    // 中指
    p.fill(255, 255, 0);
    p.ellipse(hand.middleFinger.tipPosition[0], -hand.middleFinger.tipPosition[1], 10);
    p.ellipse(hand.middleFinger.dipPosition[0], -hand.middleFinger.dipPosition[1], 10);
    p.ellipse(hand.middleFinger.pipPosition[0], -hand.middleFinger.pipPosition[1], 10);
    p.ellipse(hand.middleFinger.tipPosition[0], -hand.middleFinger.tipPosition[1], 10);
    p.ellipse(hand.middleFinger.mcpPosition[0], -hand.middleFinger.mcpPosition[1], 10);
    p.ellipse(hand.middleFinger.carpPosition[0], -hand.middleFinger.carpPosition[1], 10);

    // 薬指
    p.fill(0, 255, 0);
    p.ellipse(hand.ringFinger.tipPosition[0], -hand.ringFinger.tipPosition[1], 10);
    p.ellipse(hand.ringFinger.dipPosition[0], -hand.ringFinger.dipPosition[1], 10);
    p.ellipse(hand.ringFinger.pipPosition[0], -hand.ringFinger.pipPosition[1], 10);
    p.ellipse(hand.ringFinger.tipPosition[0], -hand.ringFinger.tipPosition[1], 10);
    p.ellipse(hand.ringFinger.mcpPosition[0], -hand.ringFinger.mcpPosition[1], 10);
    p.ellipse(hand.ringFinger.carpPosition[0], -hand.ringFinger.carpPosition[1], 10);

    // 小指
    p.fill(0, 0, 255);
    p.ellipse(hand.pinky.tipPosition[0], -hand.pinky.tipPosition[1], 10);
    p.ellipse(hand.pinky.dipPosition[0], -hand.pinky.dipPosition[1], 10);
    p.ellipse(hand.pinky.pipPosition[0], -hand.pinky.pipPosition[1], 10);
    p.ellipse(hand.pinky.tipPosition[0], -hand.pinky.tipPosition[1], 10);
    p.ellipse(hand.pinky.mcpPosition[0], -hand.pinky.mcpPosition[1], 10);
    p.ellipse(hand.pinky.carpPosition[0], -hand.pinky.carpPosition[1], 10);
  }
};
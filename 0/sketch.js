// TODO: strings and text
//       iterate letters
//       iterate words

let mString =
  "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textSize(16);

  print(mString, mString.length, mString.toLowerCase());

  for (let idx = 0; idx < mString.length; idx++) {
    let mChar = mString[idx];
    //let x = random(width);
    //let y = random(height);
    let pos = map(idx,0,mString.length,0,height);
    if(mChar == "a"){
      textSize(64);
    }else{
      textSize(16);
    }
    text(mChar, pos, pos);
  }
  //textAlign(LEFT, TOP);
  //text(mString, 100, 100);
  //rect(100, 100, 200, 100);
}

function draw() {}

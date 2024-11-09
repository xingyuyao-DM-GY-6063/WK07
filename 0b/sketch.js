// TODO: strings and text
//       iterate letters
//       iterate words

let mString =
  "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textSize(16);

  let mWords = mString.split(" ");//空格
  //print(mString, mString.length, mString.toLowerCase());

  print(mWords);

  for (let idx = 0; idx < mWords.length; idx++) {
    let pos = map(idx, 0, mWords.length, 0, width);


    if (mWords[idx] == "are") {
      textSize(64);
    } else {
      textSize(16);
    }
    text(mWords[idx], pos, pos);
  }
}

function draw() {}

//sketch.js
//10print
/*
  * improvements
  * set border size to cover up gaps at edges
  * get a nice set of colours see hsp
  * make a maze and check with flood and save
  * combine with photos either bump pattern
    or use colours from photo to fill
  * try using vert and horrizontal lines
  * try different chars eg curves ( 
  * make mazes that have hidden words or
    pictures when coloured in.
*/
const CharLine = 40   //Number characters per line
let charSize, ln = 0

function setup(){
  createCanvas(800,600)
  background('black')
  stroke('red')
  strokeWeight(20) // nice thick border
  rect(0,0,width,height)
  noFill()
  stroke('red')
  strokeWeight(2) // thin lines
  charSize = floor(width/CharLine) // scale character
  for(let lineNum=0;lineNum<height/           charSize;lineNum++){
    drawPattern(lineNum*charSize) //calculate y pix
  }
}

function draw(){
  // left in to enable mouseClicked
  // for testing and filling
}
/*
function mouseClicked(){
  fill('red')
  noStroke()
  ellipse(mouseX,mouseY,charSize,charSize)
  console.log(mouseX,mouseY)
}
*/

function drawPattern(ln){
// draw a line of chars
  push()  // save current line position
  translate(0,ln) 
  push()
  for(let i=0;i<CharLine;i++){
    random()>0.5?left():right() // make a random choice
    translate(charSize,0) // move to next position
  }
  pop()
  pop()
}

function left(){ // draw line sloping left
  return line(0,0,charSize,charSize)
}

function right(){ // draw line sloping right
  return line(charSize,0,0,charSize)
}

    

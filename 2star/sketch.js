
function setup(){
    createCanvas(500,500)
}
function draw(){
    background(255)
     background(40,15,255);
     
beginShape();
noStroke()
for(let i = 0; i < 100; i++){
let x = cos(radians(i * 75)) * 250;
let y = sin(radians(i * 25)) * 250;
 vertex(x+250, y+255);
 }
endShape();
}
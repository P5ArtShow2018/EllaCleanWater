function preload (){
	Pond = loadImage('Assets/DirtyPond.jpg')
	bottle = loadImage('Assets/waterbottle.png')
	water = loadSound('Assets/waterSound.mp3')
}

var x = 0
var speed = 5

function setup() {
  createCanvas(1380,854);
  frameRate (20);
  
}

function draw() {
  background (Pond);
  fill(255);
  textSize(40);
  text ("Help Bring Clean Water to Kids in Africa", x,400 )
  image (bottle,-200,50);
  fill(255,53,53);
   text("https://generosity.org/",30,400)

if (x<-200){
	speed = 10;
}
if (x>700){
	speed = -10;
}
x = x + speed
}
function mouseClicked(){
water.play();
}
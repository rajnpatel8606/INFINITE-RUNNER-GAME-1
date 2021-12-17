var bow , arrow,  background,temp_arrow,red;
var bowImage, arrowImage, red_balloonImage, backgroundImage,score;

 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  gunImage = loadImage("gun.png");
  targetImage = loadImage("gun's target.png");
  bulletImage = loadImage("bullet.jpg")
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(gunImage); 
  bow.scale = 0.3;
  
  targetGroup = createGroup();
  bulletGroup = createGroup();
  
  score=0
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  text("Score: "+ score, 500,50);
  
  if(bulletGroup.isTouching(targetGroup)){
    bulletGroup.destroyEach();
    targetGroup.destroyEach();
    score=score+2;
  }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(bulletImage);
     temp_arrow.y = bow.y;
  }
  
  
  
  redBalloon()
  drawSprites();
}


function redBalloon() {
  if (frameCount % 60 === 0){
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(targetImage);
  red.velocityX = (3+(score/4));
  red.lifetime = 150;
  red.scale = 0.5
  targetGroup.add(red);
}
}


function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -8;
  arrow.scale = 0.3;
  bulletGroup.add(arrow);
  return arrow;
}
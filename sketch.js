 var PLAY = 1;
var END = 0;
var gameState = PLAY;

var tower, tower_img;
var ghost, ghost_standing, ghost_jumping;
var spookySound;
var climber, climber_img;
var door, door_img;

function preload() {
 tower_img = loadImage("tower.png");
  ghost_standing = loadImage("ghost-standing.png");
    ghost_jumping = loadImage("ghost-jumping.png");
  climber_img = loadImage("climber.png");
  door_img = loadImage("door.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(400,400);
  
  tower = createSprite(200,200,20,20);
  tower.addImage(tower_img);
  tower.scale = 0.7;
  tower.velocityY = 4;
  
  ghost = createSprite(150,150,20,20);
  ghost.addImage(ghost_standing);
  ghost.scale = 0.25;
  
}

function draw() {
   drawSprites(); 
  if(gameState === PLAY){
    
    spookySound.play();
    
    if (tower.y > 400){
     tower.y = 200;
   }
  
  if(keyDown("space")){
   ghost.velocityY = -7;
  }
  
  //gravity
  ghost.velocityY = ghost.velocityY + 0.8;
  
  if(keyDown("left")){
   ghost.x = ghost.x - 2; 
  }
  
  if(keyDown("right")){
   ghost.x = ghost.x + 2; 
  }
    
    if(ghost.y > 400){
      gameState = END;
    }
  }
  
  if(gameState === END){
   background("black"); 
    textSize(40);
    text("Game Over",100,200);
  }
  
}
  
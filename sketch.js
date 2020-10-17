var bananaImage
var obstacleImage , obstacleGroup , bananaGroup
var backgrounds
var score
var banana
var player
var rand

function preload() {
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")
}

function setup() {
  createCanvas(800, 800);
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  backgrounds = createSprite(400,400);
  backgrounds.addImage(backImage);
  backgrounds.x=backgrounds.width/2;
  backgrounds.velocityX = -4;
  
  player = createSprite(400,600);
  player.scale = 0.15
  player.addAnimation("run",player_running);
  
  stroke("white");
  textSize(20);
  fill("white");
  
}

function draw() {
  background(220);
  
  if (backgrounds.x < 0){
      backgrounds.x = backgrounds.width/2;
  }
  
  if(keyDown("space")) {
    player.velocityY = -10;
  
    }

  if(player.isTouching(bananaGroup)){
     player.scale = 1
     }
  
  if(player.isTouching(obstacleGroup)){
     player.scale = 0.15
     }
  
  Obstacle();
  Fruit();
  
  drawSprites();
  
  text("Score : "+ score, 500,50);
}

function Obstacle(){
  if (frameCount % 300 === 0) {
    var obstacles = createSprite(800,600,10,40);
    obstacles.setCollider("circle",0,0,150);
    obstacles.scale = 0.15;
    obstacles.velocityX = -4;
    obstacles.addAnimation("Stone",obstacleImage);
    obstacles.lifetime = 100;
    obstacleGroup.add(obstacles);
  }
}
function Fruit(){
  if (frameCount % 80 === 0) {
    var rand = random(120,400);
    var banana = createSprite(210,rand);
    banana.addAnimation("banana",bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 89;
    bananaGroup.add(banana);
  }
}
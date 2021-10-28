var space,spaceImg;
var asteroid,asteroidImg,asteroidGroup;
var asteroid1,asteroid1Img,asteroid1Group;
var spaceship,spaceshipImg;
var rock,rockImg,rockGroup;
var gameState="play"

function preload(){
  spaceImg=loadImage("space.jpg");
  asteroidImg=loadImage("asteroid.png");
  asteroid1Img=loadImage("asteroid1.png");
  spaceshipImg=loadImage("spaceship.png");
  rockImg=loadImage("rock.png");
}

function setup(){
  createCanvas(1000,1050)
  space= createSprite(400,500);
  space.addImage("space",spaceImg);
  space.velocityY =1;
  space.scale=0.5;

  spaceship= createSprite(450,250,25,25);
  spaceship.addImage("spaceship",spaceshipImg);
  spaceship.scale=0.3

  asteroidGroup= new Group();
  asteroid1Group= new Group();
  rockGroup=new Group();
}
  
  

function draw() {
  
  if(keyDown("left_arrow")){
    spaceship.x = spaceship.x - 3;
  }
  
  if(keyDown("right_arrow")){
    spaceship.x = spaceship.x + 3;
  }
  
  if(keyDown("Up_arrow")){
    spaceship.y = spaceship.y - 3;
  }

  if(keyDown("Down_arrow")){
    spaceship.y = spaceship.y + 3;
  }
  
  if(space.y > 200){
    space.y = 120
  }
  spawnAsteroids();
  
  if(asteroidGroup.isTouching(spaceship)){
    spaceship.destroy();
    gameState = "end"
  }
   drawSprites();
}

if (gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over", 230,250)
}



function spawnAsteroids()
{
  if (frameCount % 80 === 0)
  {
     var asteroid = createSprite(80,90);
     asteroid.x=Math.round(random(10,570));
     asteroid.addImage(asteroidImg);
     asteroid.scale=0.2
     asteroid.velocityY=3
     asteroid.velocityX=3

     var asteroid1 = createSprite(90,80);
     asteroid1.x=Math.round(random(570,10));
     asteroid1.addImage(asteroid1Img);
     asteroid1.scale=0.2
     asteroid1.velocityY=3
     asteroid1.velocityX=-3
     
     var rock = createSprite(100,100);
     rock.x=Math.round(random(670,30));
     rock.addImage(rockImg);
     rock.scale=0.2
     

     asteroid.lifetime=50;
     asteroid1.lifetime=50;
     rock.lifetime=100;

     asteroidGroup.add(asteroid);
     asteroid1Group.add(asteroid1);
     rockGroup.add(rock);
   }
   
}
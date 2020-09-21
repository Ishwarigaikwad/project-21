var bullet,wall
var bulletSpeed,bulletWieght,damage
var wallThickness

function setup() {
  createCanvas(1600,400);

   bulletSpeed = random(55,90)

   bullet = createSprite(50, 200, 50, 25);
   bullet.shapeColor = "white";
   bullet.velocityX = bulletSpeed;

   wall = createSprite(1500,200,60,height/2);
   wall.shapeColor=(80,80,80);
   
   bulletWieght = random(400,1500)

   
}

function draw() {
  background("black");  
  
  if (bullet.isTouching(wall)){
    bullet.velocityX=0;
    damage=0.5*bulletWieght*bulletSpeed*bulletSpeed/(wallThickness*wallThickness*wallThickness);

    if (damage>10){
      wall.shapeColor=(255,0,0)
    }

    if (damage<10){
      wall.shapeColor=(0,255,0)
    }
  }
  drawSprites();
}

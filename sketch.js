var bullet;
var wall;
var speed;
var thickness;
var weight;

function setup() {
  createCanvas(1600,400);
  speed =random(223,321);
  weight =random(30,52);
  thickness = random(22,83);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = ("80,80,80");
  car = createSprite(50,200,50,10);

}

function draw() {
  background("black");  
  car.velocityX = speed;
  
  if(hasCollided(wall,car)){
    car.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10){
      car.shapeColor = color(255,0,0);
    }
    if(damage<10){
      car.shapeColor = color(0,255,0);

    }
  }
  drawSprites();
}

function hasCollided(wall,car){
  carRightEdge =car.x+car.width;
  wallLeftEdge = wall.x;
  if(carRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}
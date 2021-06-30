var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50);
  wall = createSprite(1200, 200, 60, 100);

  car.velocityX = 5;

  speed=random(25,31);
  weight=random(400,1500);

}

function draw() {
    background("black");

    if (wall.x-car.x < (car.weight+wall.weight)/2) 
    {
     car.velocityX=0;
    var deformation=0.5  . weight . speed. speed/22500;
    if (deformation>180) 
    {
        car.shapeColor = color(255,0,0);
    }

    if (deformation<180 && deformation>100) 
    {
     car.shapeColor = color(230,230,0);
    }
    if(deformation<100) 
    {
    car.shapeColor = color(0,255,0);
    }
    }
    drawSprites();
}
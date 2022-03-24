
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var right_wall;
var left_wall;
var ground;

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var balls_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball =Bodies.circle(200,200,23,balls_option)
    World.add(world,ball)

	ground =new Ground(width/2,570,width,20);
	left_wall =new Ground(400,500,20,150);
	right_wall =new Ground(600,500,20,150);


}
function draw() {
  background(100);
  
  right_wall.show();
  left_wall.show();
  ground.show();
  
  drawSprites();
 
  ellipse(ball.position.x,ball.position.y,40,40)
  Engine.update(engine);
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position,{x:5,y:-65})
	}
}


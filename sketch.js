
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	//Create the Bodies Here.
	ball = Bodies.circle(260,100,20,balls_options);
	World.add(world,ball);

	ground = Bodies.rectangle(width/2,670,width,20);
	leftSide = Bodies.rectangle(1100,600,20,120);
	rightSide = Bodies.rectangle(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20,20);
  rect(ground.position.x,ground.position.y,width,20);
  rect(rightSide.position.x,rightSide.position.y,20,120);
  rect(leftSide.position.x,leftSide.position.y,20,120);
	
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


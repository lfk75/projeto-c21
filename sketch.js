
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



//variaveis
var terra;
var parede1;
var parede2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	terra = new Ground(300,600,600,10);
    parede1 = new Ground(400,560,10,70);
	parede2  = new Ground(500,560,10,70);
	ball = new Bola(100,200,20);
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  if(keyDown(RIGHT)) {
   xForce();
  }

  Engine.update(engine);

  terra.display();
  parede1.display();
  parede2.display();
  ball.display();

  drawSprites();
}


function xForce(){
	Body.applyForce(ball.body, {x:0,y:0},{x:0.03, y:0.04});
  }
  

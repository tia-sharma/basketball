
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var form, game, player;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	game=new Game();
	game.start();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
  
  drawSprites();
 
}

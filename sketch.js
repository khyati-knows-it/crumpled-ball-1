const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper,dbLine,dbLine2,dbLine3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
     background("black")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,50,50)

	ground = new Ground(300,590,1000,30);

	dbLine = new Dustbin(450,540,20,200);
    dbLine2 = new Dustbin(560,560,200,20);
	dbLine3 = new Dustbin(670,540,20,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  paper.display();

  dbLine.display()
  dbLine2.display()
  dbLine3.display();

  ground.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.positon,{x:500,y:-300})
	}
}


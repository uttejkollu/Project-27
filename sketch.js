
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(380,200,600,30);

	bob1 = new Bob(220,550,30);
	bob2 = new Bob(280,550,30);
	bob3 = new Bob(340,550,30);
	bob4 = new Bob(400,550,30);
	bob5 = new Bob(460,550,30);

	rope1 = new Rope(bob1.body, {x: 220, y: 215})
	rope2 = new Rope(bob2.body, {x: 280, y: 215})
	rope3 = new Rope(bob3.body, {x: 340, y: 215})
	rope4 = new Rope(bob4.body, {x: 400, y: 215})
	rope5 = new Rope(bob5.body, {x: 460, y: 215})
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x: mouseX, y: mouseY}) 
}



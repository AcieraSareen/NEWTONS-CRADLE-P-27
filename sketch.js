const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,roof,rope1;
var bob2,bob3,bob4,bob5;
var rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(400,550,70);
	//roof body 
	roof=new Roof (width/2,170,width,20);	

	//pes and bobs here
	rope1=new Rope (bob1.body,roof.body,0,0);
	bob2=new Bob (470,550,70);
	rope2=new Rope(bob2.body,roof.body,70,0);
	bob3=new Bob (540,550,70);
	rope3=new Rope(bob3.body,roof.body,140,0);
	bob4=new Bob (330,550,70);
	rope4=new Rope(bob4.body,roof.body,-70,0);
	bob5=new Bob (260,550,70);
	rope5=new Rope(bob5.body,roof.body,-140,0);
	

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bob1.display();
  roof.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();



  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-100});
	}
	}




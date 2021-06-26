
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var ball, b, c, d, e, f, contraint1;
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.


ball = new Ball(200, 320, 60)
b =  new Ground(100, 100, 100, 100)

c = new Ball(260, 320, 60);
d = new Ball(320, 320, 60);
e = new Ball(140, 320, 60);
f = new Ball(80 , 320, 60);

train = new Constraint1 (ball.body, {x:100, y:100})
Engine.run(engine)
	
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine)
  ball.display();
  b.display();
  c.display();
  d.display();
  e.display();
  f.display();

  train.display();
 
 
}




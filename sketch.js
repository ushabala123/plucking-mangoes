
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var mangoTree;
var ground
var stone
var mango,mango2,mango3,mango4,mango5
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mangoTree= new Tree(600,500,300,600);
	ground=new Ground(400,688,800,25);
	stone=new Stone(300,350,60,60);
	mango=new Mango(600,460,60,60);
	mango2=new Mango(610,290,60,60);
	mango3=new Mango(620,405,60,60);
	mango4=new Mango(630,260,60,60);
	mango5=new Mango(705,450,60,60);
	Engine.run(engine);
	
	
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  mangoTree.display();
  ground.display();
  stone.display();
  mango.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  drawSprites();
 
}




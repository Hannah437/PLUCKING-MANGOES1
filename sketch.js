const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


function preload(){
	treeImg= loadImage("sprites/tree.png");
	boyImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	ground= Bodies.rectangle(width/2,590,1000,10,{isStatic : true});
	
	var tree = createSprite(800,400);
	tree.addImage("tree", treeImg);
	tree.scale=0.3;

	var boy = createSprite(150,520);
	boy.addImage("boy", boyImg);
	boy.scale = 0.1;

	stone = new Stone();
	mango1 = new Mango(600,200);

	var x = Matter.Mouse.create(canvas.elt) 
    x.pixelRatio = pixelDensity()
    var options = {
        mouse : x,
    }
	var mconstraint =Matter.MouseConstraint.create(engine, options);
    World.add(world, mconstraint);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,200,200);

  rect(ground.position.x, ground.position.y,1000,10);

  drawSprites();
  stone.display();
  mango1.display();
}




var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,targetground,targetside1,targetside2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	targetground = Bodies.rectangle(width/2, 650, 200, 20,{isStatic:true});
	targetground.shapeColor = "red";
	World.add(world, targetground);
 
	targetside1 = Bodies.rectangle(300,610,20,100,{isStatic:true});
	targetside1.shapeColor = "red";
	World.add(world, targetside1);
 
	targetside2 = Bodies.rectangle(500,610,20,100,{isStatic:true});
	targetside2.shapeColor = "red";
	World.add(world, targetside2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rect(targetground.position.x,targetground.position.y,200,20);
  rect(targetside1.position.x,targetside1.position.y,20,100);
  rect(targetside2.position.x,targetside2.position.y,20,100); 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false)
  }
}




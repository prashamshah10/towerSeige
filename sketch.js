
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon,slingShot;

function preload()
{
	
}

function setup() {
    createCanvas(800, 700);
    
    block1= new Block(330,235,30,40);
    block2= new Block(360,235,30,40);
    block3= new Block(390,235,30,40);
    block4= new Block(420,235,30,40);
    block5= new Block(450,235,30,40);
    block6= new Block(360,195,30,40);
    block7= new Block(390,195,30,40);
    block8= new Block(420,195,30,40);
    block9=new Block(390,155,30,40);
    polygon=Bodies.circle(50,200,20);

    World.add(world,polygon);
    slingShot=new SlingShot(this.polygon,{x:100,y:200});
    


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

    
  
  background(0);
  
  drawSprites();
 
}

function mouseDragged(){
  
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}





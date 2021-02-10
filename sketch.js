const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ground1, ground2, ground3;
var block1, block2 , block3 , block4, block5 , block6,block7, block8, block9, block10, block11, block12,block13;
var block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var block28, block29, block30, block31;
var slingshot;
var hexagon;
function preload()
{

}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,350,1250,20);
    ground2 = new Ground(1000,200,200,10);
    ground3 = new Ground(600,270,310,10);

    block1 = new Box(940,150,30,40);
    block2 = new Box(970,150,30,40);
    block3 = new Box(1000,150,30,40);
    block4 = new Box(1030,150,30,40);
    block5 = new Box(1060,150,30,40);
    block6 = new Box(970,110,30,40);
    block7 = new Box(1000,110,30,40);
    block8 = new Box(1030,110,30,40);
    block9 = new Box(1000,70,30,40);

    block10 = new Box(490,220,30,40);
    block11 = new Box(520,220,30,40);
    block12 = new Box(550,220,30,40);
    block13 = new Box(580,220,30,40);
    block14 = new Box(610,220,30,40);
    block15 = new Box(640,220,30,40);
    block16 = new Box(670,220,30,40);
    
    
    block17 = new Box(520,180,30,40);
    block18 = new Box(550,180,30,40);
    block19 = new Box(580,180,30,40);
    block20 = new Box(610,180,30,40);
    block21 = new Box(640,180,30,40);
    

    block22= new Box(550,140,30,40);
    block23 = new Box(580,140,30,40);
    block24 = new Box(610,140,30,40);
    
    block25 = new Box(580,100,30,40);

    hexagon = new Hexagon(100,200,20);

    slingshot = new Slingshot(hexagon.body,{ x:100 , y:220});

}

function draw()
{
    background("black");
    Engine.update(engine);
   
    textSize(20)
    text("Drag the hexagonal stone and release it, to launch it towards the blocks", 50,30);
    
    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    hexagon.display();
    slingshot.display();
}

function mouseDragged()
{
Matter.Body.setPosition(hexagon.body,{x:mouseX, y:mouseY})

}

function mouseReleased()
{

slingshot.fly();

}

function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(hexagon.body);
    }
}


//name space for engine world and bodies
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//create all the variables
var engine, world;
var box1;
var box2;
var ground;
var pig1;
var pig2;



function setup()
{


    //create the canvas
    var canvas = createCanvas(1200,400);

    //creating our own engine
    engine = Engine.create();

    // reating the world
    world = engine.world;

        //create the boxes and ground
        //first layer
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2);
    
    //second layer
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);

    //third layer
    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    //create the bird
    bird = new Bird(100,100);
}

function draw()
{

    //clear the background
    background(0);

    //update the engine
    Engine.update(engine);

    //display all the objects
    //first layer
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    //second layer
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    //third layer
    box5.display();
    log3.display();
    log4.display();

    //for the bird
    bird.display();
   
}
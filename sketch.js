const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, plane, iron, stone, rubber;
var hammer;

function setup(){
    var canvas = createCanvas(1200,600)
    engine = Engine.create()
    world = engine.world
    stone = new Stone(600,250,200,100)
    rubber = new Rubber(400,200,50)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100)
    iron = new Iron(300,300)
}




function draw(){
    background("lightBlue")
    Engine.update(engine)
    stone.display()
    plane.display()
    rubber.display()
    hammer.display()
    iron.display()
 
}
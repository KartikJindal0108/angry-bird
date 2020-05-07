const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
const Constraint = Matter.Constraint ;
var engine , world , object ;
var box1, box2 , ground , bird ; 
var backgroundImage, platform ;
var log5 , chain ;

function preload() {
  backgroundImage = loadImage("sprites/bg.png")
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create() ;
  world = engine.world ;
  platform =  new Ground(150,305,300,170)	;
  log5 = new Log(230,180,80,PI/2)

  box1 = new Box(700,320,70,70) ;
  box2 = new Box(920,320,70,70) ;
  ground = new Ground(600,390,1200,20) ;
  pigs = new Pigs(810,350) ;
  log = new Log(810,260,300,PI/2) ;
  log2 = new Log(810,180,300,PI/2) ;
  pigs2 = new Pigs(810,220)
  box3 = new Box(700,240,70,70) ;
  box4 = new Box(920,240,70,70) ;
  box5 = new Box(810,160,70,70) ;
  log3 = new Log(760,120,150,PI/7) ;
  log4 = new Log(870,120,150,-PI/7) ;
  bird = new Bird(100,50,50,50) ;
  chain = new Chain(bird.body,log5.body) ;

 


}

function draw() {
  background(backgroundImage);  
Engine.update(engine) ;
box1.display() ;
box2.display() ;
ground.display() ;
pigs.display() ;
log.display() ;
log2.display() ;
box3.display() ;
box4.display() ;
pigs2.display() ;
log3.display() ;
log4.display() ;
box5.display() ;
bird.display() ;
platform.display();
log5.display() ;
chain.display() ;

}

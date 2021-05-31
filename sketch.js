const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var manImage;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var t1, t2, t3;
var umbrella;
var thunder, thunderCreatedFrame = 0;

function preload(){
   manImage = loadImage("walking_1.png");
  t1 = loadImage("thunder1.png");
  t2 = loadImage("thunder2.png");
  t3 = loadImage("thunder3.png");
}

function setup(){
  var canvas = createCanvas(500,500);

  engine = Engine.create();
  world  = engine.world;

  
  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
     }
    }

}

function draw(){
  background("black");
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(t1);
     break;
     case 2 : thunder.addImage(t2);
     break;
     case 3 : thunder.addImage(t3);
     break;
     default : break;
   }
  
  }
  
  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
  camera.position.x = mouseX;
  
  drawSprites();
}



var runner,runnerImage;
var path,pathImage;
var edges;
var invispath1,invispathImage,invispath2;

function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  runner_1 = loadImage("Runner-1.png")
  runner_2 = loadImage("Runner-2.png")
  runnerImage = loadAnimation (runner_1,runner_2)
  invispathImage = loadImage("path.png")
}

function setup(){
  createCanvas(800,800);
  //create sprites here
  path = createSprite(400,400)
  path.addImage(pathImage)
  path.velocityY=4
  path.scale=1.2

  invispath1 = createSprite (50,400)
  invispath1.addImage(invispathImage)
  invispath1.velocityY=4
  invispath1.scale=1.2
  invispath1.visible=false

  invispath2 = createSprite (750,400)
  invispath2.addImage(invispathImage)
  invispath2.velocityY=4
  invispath2.scale=1.2
  invispath2.visible=false

  edges = createEdgeSprites();

  runner = createSprite(400,700,30,30)
  runner.addAnimation("RUNNER",runnerImage)
  runner.scale=0.1
}

function draw() {
  background("green");
  console.log(path.y)
  runner.x=World.mouseX
  if(path.y>600){
    path.y=height/2
  }
  if(invispath1.y>600){
    invispath1.y=height/2
  }
  if(invispath2.y>600){
    invispath2.y=height/2
  }
  
  runner.bounceOff(invispath1)
  runner.bounceOff(invispath2)
  drawSprites();
}


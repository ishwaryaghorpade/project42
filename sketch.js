var bg,bgimg;
var iss,issimg;
var spacecraft,spacecraftimg,spaceup,spacedown,spaceleft,spaceright;
var hasDocked = false; 
var abc;

function preload(){
 bgimg = loadImage("spacebg.jpg");
 issimg = loadImage("iss.png");
 spacecraftimg = loadAnimation("spacecraft1.png");
 spaceup = loadAnimation("spacecraft2.png","spacecraft2.png");
 spaceleft = loadAnimation("spacecraft4.png","spacecraft4.png");
 spaceright = loadAnimation("spacecraft3.png","spacecraft3.png");
 spacedown = loadAnimation("spacecraft1.png");
}

function setup() {
  createCanvas(800,400);

  spacecraft=createSprite(700,200,50,50);
  spacecraft.addAnimation("space",spacecraftimg);
  spacecraft.scale=0.25;

  iss=createSprite(400, 200, 50, 50);
  iss.addImage("issimg",issimg);
  iss.scale=0.75;
  iss.depth+=1;

  abc=createSprite(350,210,10,10);
  abc.visible=false;
  abc.setCollider("rectangle",0,0,10,10);
  abc.debug=false;

}

function draw() {
  background(bgimg);  
  drawSprites();

  if(!hasDocked){  
    if(keyDown(UP_ARROW)){
      spacecraft.y -= 2;
      spacecraft.addAnimation("spaceup",spaceup);
      spacecraft.changeAnimation("spaceup");
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.y += 2;
      spacecraft.addAnimation("spacedwn",spacedown);
      spacecraft.changeAnimation("spacedwn");
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.x -= 2;
      spacecraft.addAnimation("spaceleft",spaceleft);
      spacecraft.changeAnimation("spaceleft");
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x += 2;
      spacecraft.addAnimation("spaceright",spaceright);
      spacecraft.changeAnimation("spaceright");
    }
  }

  if(spacecraft.isTouching(abc)){
    hasDocked=true;
    fill("white");
    textSize(30);
    text("Docking Successfull!",225,380);
    console.log("DOCKING SUCCESSFULL");
  }
}
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //fixedRect.velocityY=5;
  //movingRect.velocityY=-5;
  gameObj1=createSprite(200,200,100,100);
   gameObj2=createSprite(300,300,30,30);

}

function draw() {
  background(0,0,0);  
 movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
//bounceOff(movingRect, fixedRect);
if(isTouching(gameObj2,movingRect)){ 
  gameObj2.shapeColor = "yellow";
   movingRect.shapeColor = "yellow";
   } 
   else{ 
     gameObj2.shapeColor = "green"; 
     movingRect.shapeColor = "green"; }
  drawSprites();
}

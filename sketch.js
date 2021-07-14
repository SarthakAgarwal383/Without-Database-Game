var inputName, title1;
var bg,db,ok,okImg;
var Playerindex,playerEntry;
var playername;
var title2,nextImg, next;
var link, game1Img,game1;
var index=0;

function preload(){
bg=loadImage("bg1.jpg");
okImg=loadImage("okImg.png");
nextImg=loadImage("next.png");
game1Img=loadImage("Game1.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-100);
  
  inputName= createInput("Write you name here");
  title1= createElement("h1");
  title2= createElement("h2");

  ok=createSprite(670,490,10,10);
  ok.addImage(okImg);
  ok.scale=0.2;

next  =createSprite(790,500,10,10);
  next.addImage(nextImg);
  next.scale=0.5;
next.visible= false;

  game1= createSprite(200,100,10,10);
  game1.addImage(game1Img);
  game1.visible=false;
 
 

  


 
 link=createA('games.html','.');
 link.position(700,450);
 

}

function draw() {
  background(bg);

  playername=inputName.value();

  inputName.position(450,400);
  inputName.style('width', '400px');
  inputName.style('height', '50px');
  inputName.style('background', 'lavender');
 inputName.style('fontSize','30px');
 inputName.style('text-Align','center');

 link.style('width','200px');
 link.style('height','80px');
  

 /*
  title1.html("Sarthak's Game Lab");
 
  stroke("blue");
  strokeWeight("5");
  title1.position(350, 100);
  title1.style('font-size', '80px');
  title1.style('color', 'white');
  title1.style('strokeFill','skyblue');
  title1.style('border','20px');
*/

if(mousePressedOver(ok) || keyDown("enter")){
 // Playerindex=Playerindex+1;
  ok.destroy();
  next.visible=true;
  inputName.hide();

  title2.html("Welcome "+inputName.value()+"!!");
  title2.position(250, 300);
  title2.style('font-size', '60px');
  title2.style('color', 'aqua');
 


/*
  fill("pink");
  textSize("20");
  text("Welcome "+playername,300,400 );
  */



  
}

console.log(index);
  
  drawSprites();

  textSize(80);
  fill("white");
  stroke("blue");
  strokeWeight("5");
  text("Sarthak's Game Lab",300,180);


}



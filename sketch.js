//Game States
var gameState=1
var PLAY=1
var End=0
//for BackGround
var loaction, loactionImg;
// For making Fruits,Sword and Alien
var fruit,fruit1,fruit2,fruit3,fruit4,fruitsGroup
var monster,alien1,alien2,alienGroup;
var sword, swordImg;      
var gameover;

var score=0;

function preload(){
  
  swordImg=loadImage("sword.png")
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  alien1=loadImage("alien1.png");
  alien2=loadImage("alien2.png");
  loactionImg=loadImage("download (3).jpg");
  gameOverImg=loadImage("gameover.png");
  gameover=loadSound("gameover.mp3");
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3")

}


function setup(){
   createCanvas(400,400);
  
  loaction=createSprite(200,200,20,20)
  loaction.addImage(loactionImg)
  loaction.scale=2.5
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImg)
  sword.scale=0.7
  
  // Creating Group
  fruitsGroup = new Group();
  alienGroup =new Group();
  
}


function draw(){
   
  text("SCORE :"+score,320,20)
    fill("black");
    
  
if(gameState===PLAY){
  if (fruitsGroup.isTouching(sword)){
  fruitsGroup.destroyEach();  
  score=score+2
  knifeSwooshSound.play();  
 // knifeSwooshSound.play=false;
}

// Move sword wtih Mouse
   sword.x= World.mouseX;
   sword.y= World.mouseY;
  
   
  //Call Fruits And Enemy Function
  spawnFruits()
  spawnEnemy()
  
  
  
if (alienGroup.isTouching(sword)){
  alienGroup.destroyEach();  
  gameState=End;  
  } 
}else if (gameState===End){
  sword.addImage(gameOverImg);
  sword.x=200;
  sword.y=200;
  gameover.play();
  gameover.play=false;
}
  
  
  
 
 drawSprites() 
}


function spawnFruits(){
  if (World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
   // fruit.debug=true;
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }else if(r==2){
      fruit.addImage(fruit2);
    }else if(r==3){
      fruit.addImage(fruit3);
    }else if(r==4){
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitsGroup.add(fruit);
    
  }
  
  
  
  
  
}
function spawnEnemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.scale=1
   // monster.debug=true;
    v=Math.round(random(1,2));
    if (v===1){
      monster.addImage(alien1);
    }else if (v===2){
      monster.addImage(alien2);
    }
    
    monster.y=Math.round(random(50,340));
    
    monster.velocityX=-6;
    monster.setLifetime=100;
    
    alienGroup.add(monster);
    
  }
}
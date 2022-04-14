var MDT317,ball

function preload(){
   imo1= loadImage("mdt.png")
   imo2=loadImage("me.png")
   imo3=loadImage("arrow.png")
   imo4=loadImage("bow.png")
   imo5=loadImage("me1.png")
}
//alert('lol,lol,lol,lol,lol')



function setup(){
    createCanvas(1531,709)
MDT317= createSprite(100,200,100,100)
MDT317.addImage(imo1);
MDT317.scale=0.5
u=createSprite(100,500,40,40)
u.addImage(imo3)
u.scale=0.4
stand=createSprite(70,500,40,40)
stand.addImage(imo4)
stand.scale=0.7
tra=createSprite(600,500,40,40)
tra.addImage(imo5)
tra.scale=0.4

}



function draw(){

   background(220)

   
   textSize(30)
   fill("#012b6e")
   text("Hello👋😁",200,100)
   fill("#008fde")
   text("I'm MDT317",200,140)
   fill("red")
   text("Plz sub to my YouTube chanel 🤗",500,200)




  
   if(keyDown("d")){
    u.x+=5
}
if(keyDown("a")){
    u.x+=-5
}
   

u.collide



  




    drawSprites();
}




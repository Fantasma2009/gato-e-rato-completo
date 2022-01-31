 var bgImg;
 var cat;
 var rato;

function preload() {
   bgImg = loadImage("garden.png");
   catimg1=loadImage("images/cat1.png");
   ratoimg1=loadImage("images/mouse1.png");
   catimg2=loadImage("images/cat2.png","images/cat3.png");
   ratoimg2=loadImage("images/mouse2.png","images/mouse3.png");
   
 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("gatoSentado",catimg1);
    cat.scale=0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("ultimaImagemdoGato",catimg3);
        cat.changeAnimation("ultimaimagemdoGato");
        cat.x=300;
        cat.scale=0.2;

    }

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        rato.addAnimation("ratoprovocando",mouseimg2)
        rato.changeAnimation("ratoprovocando");
        rato.frameDelay=25;

        cat.addAnimation("gatocorrendo",catimg2);
        cat.changeAnimation("gatocorrendo");
        cat.velocityX=-5;

    }
  //For moving and changing animation write code here


}

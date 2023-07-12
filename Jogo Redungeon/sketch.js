var canvas;
var cavaleiro, cavaleiroImg;
var pote, poteImg;
var pedra, pedraImg;
var bau, bauImg;
var besta, bestaImg;
var cama, camaImg;
var Fundo, FundoImg;
var gameState;
var game, form;
var cavaleiro;

var gameState = "start";

function preload(){
FundoImg = loadImage("assets/Frame1.png");
camaImg = loadImage("assets/cama.png");
cavaleiro1Img = loadImage("assets/atras.png");
cavaleiro2Img = loadImage("assets/frente.png");
cavaleiro3Img = loadImage("assets/direita.png");
cavaleiro4Img = loadImage("assets/esquerda.png");
bauImg = loadImage("assets/baú.png");
poteImg = loadImage("assets/pote.png");
bestaImg = loadImage("assets/arco.png");
pedraImg = loadImage("assets/pedra(1).png");



}

function setup(){
canvas = createCanvas(600, 1400);
// database = firebase.database();
                                                          
// form = new forms(); 

// game = new Game();
// game.getState();
// game.start();
Fundo = createSprite(700,700);
Fundo.addImage("Fundo", FundoImg);
Fundo.velocityY= 1;

cavaleiro = createSprite (10,10);
cavaleiro.addImage("cavaleiro",cavaleiro1Img)
pedra = createSprite (40,40);
pedra.addImage("pedra", pedraImg )

besta = createSprite (50,50);
besta.addImage("arco", bestaImg)

cama = createSprite (10,30);
cama.addImage("cama", camaImg)

bau = createSprite(50,60);
bau.addImage("bau", bauImg);

pote = createSprite (40,50);
pote.addImage("pote", poteImg);








}

function draw() {

  background(FundoImg);

if (gameState === "play") {
        
if(keyDown("LEFT_ARROW")){
cavaleiro.x = cavaleiro.x - 1;
}
if(keyDown("RIGHT_ARROW")){
    
cavaleiro.x = cavaleiro.x + 1;
}

if(keyDown("UP_ARROW")){
cavaleiro.y = cavaleiro.y +1;

}
if(keyDown("DOWN_ARROW")){
cavaleiro.y = cavaleiro.y -1;
      
}
   drawSprites()   
//  game.play()
}
}
     
      // if (gameState === 2) {
      //   game.end();
      // }
       
        
      // }

//function windowResized() {
//resizeCanvas(windowWidth, windowHeight);
//}







var canvas;
var cavaleiro, cavaleiro1Img, cavaleiro2Img, cavaleiro3Img, cavaleiro4Img ;
var pote, poteImg;
var pedra, pedraImg;
var bau, bauImg;
var besta, bestaImg;
var cama, camaImg;
var Fundo, FundoImg;
var gameState;
var game, form;



var gameState = "play";


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
canvas = createCanvas(600, 1000);
// database = firebase.database();
                                                          
// form = new forms(); 

// game = new Game();
// game.getState();
// game.start();
Fundo = createSprite(300,50);
Fundo.addImage("Fundo", FundoImg);
Fundo.scale = 0.6;
Fundo.velocityY= 1;

cavaleiro = createSprite (200,200);  
cavaleiro.addImage("cavaleiro",cavaleiro1Img)
cavaleiro.scale=0.1

gerarpedra(100,300);
gerarpedra(300,300);

besta = createSprite (300,50);
besta.addImage("besta", bestaImg)
besta.scale=0.6

cama = createSprite (200,300);
cama.addImage("cama", camaImg)
cama.scale=0.5

bau = createSprite(200,60);
bau.addImage("bau", bauImg);
bau.scale=0.6

pote = createSprite (250,50);
pote.addImage("pote", poteImg);
pote.scale=0.6







}

function draw() {


background(255)
     
  

if(keyDown("LEFT_ARROW")){
cavaleiro.x = cavaleiro.x - 1;
}
if(keyDown("RIGHT_ARROW")){
    
cavaleiro.x = cavaleiro.x + 1;
}

if(keyDown("UP_ARROW")){
cavaleiro.y = cavaleiro.y -50;
Fundo.y =+ 50

console.log("cima")


}            
if(keyDown("DOWN_ARROW")){
cavaleiro.y = cavaleiro.y -1;
      
}
drawSprites();
//  game.play()

}
     
      // if (gameState === 2) {
      //   game.end();
      // }
       
        
      // }

//function windowResized() {
//resizeCanvas(windowWidth, windowHeight);
//}

function gerarpedra(x,y){
  pedra = createSprite (x,y);
  pedra.addImage("pedra", pedraImg )
  pedra.scale=0.6
}




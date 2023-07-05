var canvas;
var cavaleiro, cavaleiroImg;
var pote, poteImg;
var pedra, pedraImg;
var bau, bauImg;
var besta, bestaImg;
var cama, camaImg;
var backgroundImg;
var gameState;
var game;

function preload(){
backgroundImg = loadImage("assets/Frame1.png");
camaImg = loadImage("assets/cama.png");
cavaleiro1Img = loadImage("assets/atras.png");
cavaleiro2Img = loadImage("assets/frente.png");
cavaleiro3Img = loadImage("assets/direita.png");
cavaleiro4Img = loadImage("assets/esquerda.png");
bauImg = loadImage("assets/baú.png");
poteImg = loadImage("assets/pote.png");
bestaImg = loadImage("assets/arco.png");
pedraImg = loadImage("assets/pedra (1).png");



}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
database = firebase.database();
game = new Game();
game.getState();
game.start();



}

function draw() {

    background(backgroundImage);

      if (gameState === 1) {
      
        game.play()
      }
     
      if (gameState === 2) {
        game.end();
      }
       
        
      }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}







var canvas;
var cavaleiro, cavaleiroImg;
var pote, poteImg;
var pedra, pedraImg;
var bau, bauImg;
var besta, bestaImg;
var cama, camaImg;
var backgroundImg;

function preload(){
backgroundImg = loadImage("assets/Frame1.png");
camaImg = loadImage("assets/cama.png");
cavaleiroImg = loadImage("assets/atras.png");
cavaleiroImg = loadImage("assets/frente.png");
cavaleiroImg = loadImage("assets/direita.png");
cavaleiroImg = loadImage("assets/esquerda.png");
bauImg = loadImage("assets/baú.png");
poteImg = loadImage("assets/pote.png");
bestaImg = loadImage("asets/arco.png");
pedraImg = loadImage("assets/pedra.png");



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
    if (playerCount === 2) {
        game.update(1);
      }
    
      if (gameState === 1) {
        game.play();
      }
     
       
        
      }






